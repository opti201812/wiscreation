import React, { useState, useMemo } from 'react';
import { Select, Input, Button, Form, message, Radio } from 'antd';
import { API_BASE_URL } from '../../api';
import { Modal } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const valueOptions = [
    { value: 'json', label: 'JSON' },
];

const radioOptions = [
    { value: 'BER', label: 'BER', disabled: false },
    { value: 'CER', label: 'CER', disabled: true },
    { value: 'DER', label: 'DER', disabled: true },
    { value: 'PER', label: 'PER', disabled: true },
];


const helloWorldJson = JSON.stringify({
    name: {
        givenName: "John",
        initial: "P",
        familyName: "Smith"
    },
    title: "Director",
    number: 51,
    dateOfHire: "19710917",
    nameOfSpouse: {
        givenName: "Mary",
        initial: "T",
        familyName: "Smith"
    },
    children: [
        {
            name: {
                givenName: "Ralph",
                initial: "T",
                familyName: "Smith"
            },
            dateOfBirth: "19571111"
        },
        {
            name: {
                givenName: "Susan",
                initial: "B",
                familyName: "Jones"
            },
            dateOfBirth: "19590717"
        }
    ]
}, null, 2);

const EncodeTab = ({ onAddOutput, token, typeAssignments, selectedSchema }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [lastSchema, setLastSchema] = useState("helloWorld");
    const didInitRef = React.useRef(false);

    const typeAssignmentsPlaceholder = useMemo(() => {
        if (!typeAssignments || typeAssignments.length === 0) {
            return 'Please compile first...';
        }
        return 'Please choose a type assignment...';
    }, [typeAssignments]);

    // 记忆和自动恢复Type Assignment
    const lastTypeAssignmentRef = React.useRef(null);
    React.useEffect(() => {
        if (typeAssignments && typeAssignments.length > 0) {
            let toSet = lastTypeAssignmentRef.current;
            if (!toSet || !typeAssignments.includes(toSet)) {
                toSet = typeAssignments[0];
            }
            form.setFieldsValue({ type: toSet });
        }
    }, [typeAssignments, form]);
    const handleTypeChange = value => {
        lastTypeAssignmentRef.current = value;
        form.setFieldsValue({ type: value });
    };


    // 监听 selectedSchema 变化，处理 helloWorld 联动逻辑
    React.useEffect(() => {
        if (!didInitRef.current) {
            // 首次渲染
            if (selectedSchema === 'helloWorld') {
                const valueText = form.getFieldValue('valueText');
                if (!valueText) {
                    form.setFieldsValue({ valueText: helloWorldJson });
                }
            }
            setLastSchema(selectedSchema);
            didInitRef.current = true;
            return;
        }

        // 非首次渲染，才弹窗
        if (lastSchema !== selectedSchema) {
            const valueText = form.getFieldValue('valueText');
            if (selectedSchema === 'helloWorld') {
                if (!valueText) {
                    form.setFieldsValue({ valueText: helloWorldJson });
                } else {
                    const currentText = form.getFieldValue('valueText');
                    if (currentText === helloWorldJson) {
                        form.setFieldsValue({ valueText: helloWorldJson });
                        return;
                    }
                    Modal.confirm({
                        title: 'Replace content with Hello World JSON?',
                        content: 'Do you want to clear and replace the editor with the Hello World JSON example?',
                        onOk: () => {
                            form.setFieldsValue({ valueText: helloWorldJson });
                        }
                    });
                }
            } else {
                // 如果切换到非helloWorld，且内容等于helloWorldJson，则清空
                if (valueText === helloWorldJson) {
                    form.setFieldsValue({ valueText: '' });
                }
            }
            setLastSchema(selectedSchema);
        }
    }, [selectedSchema, form, lastSchema]);

    const handleReset = () => {
        if (selectedSchema === 'helloWorld') {
            Modal.confirm({
                title: 'Reset to Hello World JSON?',
                content: 'Do you want to restore the Hello World JSON example?',
                onOk: () => {
                    form.setFieldsValue({ valueText: helloWorldJson });
                }
            });
        } else {
            Modal.confirm({
                title: 'Clear editor?',
                content: 'Do you want to clear the editor content?',
                onOk: () => {
                    form.setFieldsValue({ valueText: '' });
                }
            });
        }
    };

    const onFinish = async (values) => {
        // encodingRule 来自 radio
        const encodingRule = values.radio || 'BER';
        if (!token) {
            // 没有token，直接输出错误
            if (onAddOutput) {
                onAddOutput({
                    label: 'Encode Error',
                    value: 'Please compile the Schema first, get the token, and then perform the encoding operation!'
                });
            }
            return;
        }
        setLoading(true);
        try {
            // Parse the JSON string into an object
            let parsedValue;
            try {
                parsedValue = JSON.parse(values.valueText);
            } catch (e) {
                throw new Error('Invalid JSON format in value field');
            }
            const trimmedType = values.type ? values.type.trim() : '';

            // 组装API参数
            const payload = {
                token,
                typeName: trimmedType,
                value: parsedValue,
                encodingRule // 来自 radio
            };
            const res = await fetch(`${API_BASE_URL}/encode`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            setLoading(false);
            if (!res.ok || data.error) {
                // 处理错误信息
                let msg = data.error || 'Encode Error', descriptions = "";
                if (Array.isArray(data.details)) {
                    const descs = data.details.map(d => d.description).filter(Boolean);
                    descriptions = descs.join('; ');
                }
                message.error(msg + ": " + descriptions);
                if (onAddOutput) {
                    onAddOutput({
                        label: msg,
                        value: descriptions || JSON.stringify(data)
                    });
                }
                return;
            }
            message.success('Encode Success');
            if (onAddOutput) {
                onAddOutput({
                    label: 'Encode Result',
                    value: data.data || JSON.stringify(data)
                });
            }
        } catch (e) {
            setLoading(false);
            message.error('Encode Error');
            console.error(e.message);
            if (onAddOutput) {
                onAddOutput({
                    label: 'Encode Error',
                    value: 'Encode Error'
                });
            }
        }
    };

    return (
        <div style={{ height: '400px' }}>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    valueType: 'json',
                    type: null,
                    valueText: '',
                    radio: 'BER',
                }}
            >
                <Form.Item label="Value:" name="valueType" style={{ marginBottom: 12, display: 'none' }}>
                    <Select>
                        {valueOptions.map(opt => (
                            <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Type Assignments:" name="type" style={{ marginBottom: 0 }} rules={[{ required: true, message: 'Please select a type' }]}>
                    <Select
                        placeholder={typeAssignmentsPlaceholder}
                        showSearch
                        optionFilterProp="children"
                        notFoundContent={typeAssignmentsPlaceholder}
                        onChange={handleTypeChange}
                    >
                        {typeAssignments?.map((item) => (
                            <Option key={item} value={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <div style={{ marginBottom: 8, color: '#888', fontSize: 13 }}>
                    Choose a Type Assignment above, then enter a valid JSON object matching the schema.  Click Encode to generate the binary ASN.1 output. Results will appear in righ side and downloadable.
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <Form.Item name="valueText" style={{ flex: 1, marginBottom: 0 }}
                        rules={[
                            {
                                validator: (_, value) => {
                                    try {
                                        if (value) {
                                            JSON.parse(value);
                                        }
                                        return Promise.resolve();
                                    } catch (e) {
                                        return Promise.reject('Invalid JSON format');
                                    }
                                }
                            }
                        ]}
                    >
                        <TextArea rows={16} placeholder="Please enter value in JER(JSON) format here ..." />
                    </Form.Item>
                    <Form.Item
                        name="radio"
                        style={{ marginBottom: 0, marginLeft: 8 }}
                    >
                        <Radio.Group
                            style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
                        >
                            {radioOptions.map(opt => (
                                <Radio
                                    key={opt.value}
                                    value={opt.value}
                                    disabled={opt.disabled}
                                    style={{ marginBottom: 4 }}
                                >
                                    {opt.label}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>
                </div>
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginTop: 16, float: 'right' }}
                    loading={loading}
                >
                    Encode
                </Button>
                <Button
                    type="dashed"
                    style={{ marginTop: 16, float: 'right', marginRight: 8 }}
                    onClick={handleReset}
                >
                    Reset
                </Button>
                <div style={{ clear: 'both' }} />
            </Form>
        </div>
    );
};

export default EncodeTab;

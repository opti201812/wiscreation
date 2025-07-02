import React, { useState, useMemo } from 'react';
import { Select, Input, Button, Form, message } from 'antd';
import { API_BASE_URL } from '../../api';

const { Option } = Select;
const { TextArea } = Input;

const dataOptions = [
    { value: 'hex', label: 'HEX' },
];


const DecodeTab = ({ onAddOutput, token, typeAssignments }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

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


    const onFinish = async (values) => {
        if (!token) {
            if (onAddOutput) {
                onAddOutput({
                    label: 'Decode Error',
                    value: 'Please compile the Schema first, get the token, and then perform the decoding operation!'
                });
            }
            return;
        }
        setLoading(true);
        try {
            const trimmedType = values.type ? values.type.trim() : '';
            // Remove all whitespace from the hex string
            const payload = {
                token,
                typeName: trimmedType,
                data: values.decodeText ? values.decodeText.replace(/\s+/g, '') : ''
            };
            const res = await fetch(`${API_BASE_URL}/decode`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            setLoading(false);
            if (!res.ok || data.error) {
                let msg = data.error || 'Decode Error', descriptions = "";
                if (Array.isArray(data.details)) {
                    const descs = data.details.map(d => d.description).filter(Boolean);
                    descriptions = descs.join('; ');
                }
                if (data.description) {
                    descriptions += (descriptions ? '; ' : ': ') + data.description;
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
            message.success('Decode Success');
            if (onAddOutput) {
                if (data && data.data && typeof data.data === 'object' && data.data.value !== undefined) {
                    onAddOutput({
                        label: 'Decode Result',
                        value: typeof data.data.value === 'object'
                            ? JSON.stringify(data.data.value, null, 2)
                            : data.data.value
                    });
                } else {
                    onAddOutput({
                        label: 'Decode Result',
                        value: data.data || JSON.stringify(data)
                    });
                }
            }
        } catch (e) {
            setLoading(false);
            message.error('Decode Error');
            if (onAddOutput) {
                onAddOutput({
                    label: 'Decode Error',
                    value: 'Decode Error'
                });
            }
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
                dataType: 'hex',
                type: null,
                decodeText: ''
            }}
        >
            <div style={{ display: 'flex', gap: 8, marginBottom: 0 }}>
                <Form.Item
                    label="Data:"
                    name="dataType"
                    style={{ flex: 1, marginBottom: 0, display: 'none' }}
                >
                    <Select>
                        {dataOptions.map(opt => (
                            <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Type Assignments:"
                    name="type"
                    style={{ flex: 1, marginBottom: 0 }}
                    rules={[{ required: true, message: 'Please select a type' }]}
                >
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
            </div>
            <div style={{ marginBottom: 8, color: '#888', fontSize: 13 }}>
                Paste the encoded ASN.1 hex string (e.g., copied from Results) and select the correct Type Assignment. Click Decode to convert it back to JSON.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
                <Form.Item
                    name="decodeText"
                    style={{ flex: 1, marginBottom: 0 }}
                    normalize={(value) => value ? value.replace(/\s+/g, '') : ''}
                >
                    <TextArea
                        rows={16}
                        placeholder="Please input HEX string data here ..."
                        style={{ resize: 'vertical' }}
                    />
                </Form.Item>
            </div>
            <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop: 16, float: 'right' }}
                loading={loading}
            >
                Decode
            </Button>
            <div style={{ clear: 'both' }} />
        </Form>
    );
};

export default DecodeTab;

import React, { useState, useMemo } from 'react';
import { Select, Input, Button, Form, message, Radio } from 'antd';
import { API_BASE_URL } from '../../api';

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

const EncodeTab = ({ onAddOutput, token, typeAssignments }) => {
    const [loading, setLoading] = useState(false);

    const typeAssignmentsPlaceholder = useMemo(() => {
        if (!typeAssignments || typeAssignments.length === 0) {
            return 'Please compile first...';
        }
        return 'Please choose a type assignment...';
    }, [typeAssignments]);

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
            if (!res.ok) {
                throw new Error(`API request failed with status ${res.status}`);
            }
            const data = await res.json();
            setLoading(false);
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
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    valueType: 'json',
                    type: null,
                    valueText: '',
                    radio: 'BER', // 新增，radio初始值
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
                <div style={{ clear: 'both' }} />
            </Form>
        </div>
    );
};

export default EncodeTab;

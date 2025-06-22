import React, { useState } from 'react';
import { Select, Input, Button, Form, message } from 'antd';
import { API_BASE_URL } from '../../api';

const { Option } = Select;
const { TextArea } = Input;

const valueOptions = [
    { value: 'json', label: 'JSON' },
];

const EncodeTab = ({ onAddOutput, token }) => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        if (!token) {
            // 没有token，直接输出错误
            if (onAddOutput) {
                onAddOutput({
                    label: 'Encode Error',
                    value: '请先编译Schema，获取token后再进行编码操作！'
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
                encodingRule: 'BER' // 可根据实际需求让用户选择
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
            message.success('编码成功');
            if (onAddOutput) {
                onAddOutput({
                    label: 'Encode Result',
                    value: data.data || JSON.stringify(data)
                });
            }
        } catch (e) {
            setLoading(false);
            message.error('编码失败');
            if (onAddOutput) {
                onAddOutput({
                    label: 'Encode Error',
                    value: '编码请求失败'
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
                    type: '',
                    valueText: ''
                }}
            >
                <Form.Item label="Value:" name="valueType" style={{ marginBottom: 12 }}>
                    <Select>
                        {valueOptions.map(opt => (
                            <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Type:" name="type" style={{ marginBottom: 16 }}>
                    <Input placeholder="please input type..." />
                </Form.Item>
                <div style={{ marginBottom: 8, color: '#888', fontSize: 13 }}>
                    Enter a Value (in the ASN.1 Value Notation format) for one of the Types defined in the Schema. Click Encode. Various encoded formats will be available as links for downloading.
                </div>
                <Form.Item name="valueText" style={{ marginBottom: 0 }}
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
                    <TextArea rows={13} placeholder="please input value in JER(JSON) format..." />
                </Form.Item>
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
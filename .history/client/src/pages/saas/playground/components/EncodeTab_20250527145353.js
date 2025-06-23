import React, { useState } from 'react';
import { Select, Input, Button, Form, message } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const valueOptions = [
    { value: 'json', label: 'JSON' },
];

const EncodeTab = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        // 这里是API调用的占位符
        // 你可以用fetch/axios等方式提交values
        // 例如：await fetch('/api/encode', { method: 'POST', body: JSON.stringify(values) })
        setTimeout(() => {
            setLoading(false);
            message.success('提交成功（API Placeholder）');
            // 这里可以处理返回结果
        }, 1000);
    };

    return (
        <div style={{ height: 500 }}>
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
                <Form.Item name="valueText" style={{ marginBottom: 0 }}>
                    <TextArea rows={6} placeholder="please input value..." />
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
import React, { useState } from 'react';
import { Select, Input, Button, Radio, Form, message } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const dataOptions = [
    { value: 'hex', label: 'HEX' },
];

const typeOptions = [
    { value: '', label: '-- PLEASE COMPILE --' },
    { value: 'rocket', label: 'Rocket' },
    { value: 'satellite', label: 'Satellite' },
    // 可根据需要添加更多
];

const radioOptions = [
    { value: 'BER', label: 'BER', disabled: false },
    { value: 'DER', label: 'DER', disabled: false },
    { value: 'PER', label: 'PER', disabled: false },
    { value: 'UPER', label: 'UPER', disabled: false },
    { value: 'OER', label: 'OER', disabled: false },
    { value: 'COER', label: 'COER', disabled: true },
    { value: 'CUPER', label: 'CUPER', disabled: true },
];

const DecodeTab = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        // 这里是API调用的占位符
        // 你可以用fetch/axios等方式提交values
        // 例如：await fetch('/api/decode', { method: 'POST', body: JSON.stringify(values) })
        setTimeout(() => {
            setLoading(false);
            message.success('提交成功（API Placeholder）');
            // 这里可以处理返回结果
        }, 1000);
    };

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
                dataType: 'hex',
                type: '',
                decodeText: '',
                radio: 'UPER'
            }}
        >
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <Form.Item
                    label="Data:"
                    name="dataType"
                    style={{ flex: 1, marginBottom: 0 }}
                >
                    <Select>
                        {dataOptions.map(opt => (
                            <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Type:"
                    name="type"
                    style={{ flex: 1, marginBottom: 0 }}
                >
                    <Input placeholder="please input type..." />
                </Form.Item>
            </div>
            <div style={{ marginBottom: 8, color: '#888', fontSize: 13 }}>
                Select the Type. Upload a message/PDU/record file. Click Decode. The decoded data can be downloaded as a text file in the ASN.1 Value Notation format.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
                <Form.Item
                    name="decodeText"
                    style={{ flex: 1, marginBottom: 0 }}
                >
                    <TextArea
                        rows={7}
                        placeholder="请输入HEX或Base64数据..."
                        style={{ resize: 'vertical' }}
                    />
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
                Decode
            </Button>
            <div style={{ clear: 'both' }} />
        </Form>
    );
};

export default DecodeTab; 
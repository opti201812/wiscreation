import React, { useState } from 'react';
import { Select, Input, Button, Radio, Form, message } from 'antd';
import { API_BASE_URL } from '../api';

const { Option } = Select;
const { TextArea } = Input;

const dataOptions = [
    { value: 'hex', label: 'HEX' },
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

const DecodeTab = ({ onAddOutput, token }) => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        if (!token) {
            if (onAddOutput) {
                onAddOutput({
                    label: 'Decode Error',
                    value: '请先编译Schema，获取token后再进行解码操作！'
                });
            }
            return;
        }
        setLoading(true);
        try {
            const payload = {
                token,
                typeName: values.type,
                data: values.decodeText,
                encodingRule: values.radio
            };
            const res = await fetch(`${API_BASE_URL}/decode`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            setLoading(false);
            message.success('解码成功');
            if (onAddOutput) {
                onAddOutput({
                    label: 'Decode Result',
                    value: data.data || JSON.stringify(data)
                });
            }
        } catch (e) {
            setLoading(false);
            message.error('解码失败');
            if (onAddOutput) {
                onAddOutput({
                    label: 'Decode Error',
                    value: '解码请求失败'
                });
            }
        }
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
import React, { useState } from 'react';
import { Select, Input, Button, Radio, Form, message } from 'antd';
import { API_BASE_URL } from '../../api';

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

const DecodeTab = ({ onAddOutput, token, typeAssignments }) => {
    const [loading, setLoading] = useState(false);

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
            const payload = {
                token,
                typeName: trimmedType,
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
            message.success('Decode Success');
            if (onAddOutput) {
                onAddOutput({
                    label: 'Decode Result',
                    value: data.data || JSON.stringify(data)
                });
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
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
                dataType: 'hex',
                type: '',
                decodeText: '',
                radio: 'BER'
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
                    <Select placeholder="please input type...">
                        {Array.isArray(typeAssignments) && typeAssignments.length > 0 ? (
                            typeAssignments.map((item) => (
                                <Option key={item} value={item}>{item}</Option>
                            ))
                        ) : (
                            <Option value="" disabled>
                                No available types
                            </Option>
                        )}
                    </Select>
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
                        rows={17}
                        placeholder="Please input HEX or Base64 data..."
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

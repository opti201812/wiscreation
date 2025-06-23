import React, { useState } from 'react';
import { Select, Input, Button, Checkbox, Divider } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const valueOptions = [
    { value: 'json', label: 'JSON' },
];

const EncodeTab = () => {
    const [type, setType] = useState('json');
    const [valueText, setValueText] = useState('');

    return (
        <div>
            <div style={{ marginBottom: 12, fontWeight: 500 }}>Value:</div>
            <Select
                value={type}
                onChange={setType}
                style={{ width: '100%', marginBottom: 16 }}
            >
                {valueOptions.map(opt => (
                    <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                ))}
            </Select>
            <div style={{ marginBottom: 8 }}>Type:</div>
            <Input style={{ marginBottom: 16 }} placeholder="please input type..." />
            <div style={{ marginBottom: 8 }}>Enter a Value (in the ASN.1 Value Notation format) for one of the Types defined in the Schema. Click Encode. Various encoded formats will be available as links for downloading.</div>
            <TextArea
                rows={6}
                value={valueText}
                onChange={e => setValueText(e.target.value)}
                placeholder="please input value..."
            />
            <Divider />
            <div style={{ clear: 'both' }} />
        </div>
    );
};

export default EncodeTab; 
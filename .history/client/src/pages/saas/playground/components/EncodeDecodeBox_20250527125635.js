import React, { useState } from 'react';
import { Select, Input, Button, Checkbox, Divider, Radio } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const valueOptions = [
    { value: 'rocket', label: 'Rocket' },
    { value: 'satellite', label: 'Satellite' },
    // 可继续添加更多选项
];

const EncodeDecodeBox = () => {
    const [type, setType] = useState('rocket');
    const [valueText, setValueText] = useState('');
    const [mode, setMode] = useState('encode');

    return (
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 24, marginBottom: 24, background: '#fafbfc' }}>
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
            <div style={{ marginBottom: 8 }}>ASN.1 Value Notation</div>
            <TextArea
                rows={6}
                value={valueText}
                onChange={e => setValueText(e.target.value)}
                placeholder="输入或粘贴ASN.1值"
            />
            <Divider />
            <Radio.Group value={mode} onChange={e => setMode(e.target.value)} style={{ marginBottom: 8 }}>
                <Radio.Button value="encode">Encode</Radio.Button>
                <Radio.Button value="decode">Decode</Radio.Button>
            </Radio.Group>
            <Checkbox style={{ marginLeft: 16 }}>Auto Encode/Decode open types</Checkbox>
            <Button type="primary" style={{ marginTop: 16, float: 'right' }}>
                {mode === 'encode' ? 'Encode' : 'Decode'}
            </Button>
            <div style={{ clear: 'both' }} />
        </div>
    );
};

export default EncodeDecodeBox; 
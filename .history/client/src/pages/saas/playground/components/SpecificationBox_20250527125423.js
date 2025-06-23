import React, { useState } from 'react';
import { Select, Input, Button, Checkbox, Divider } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const schemaOptions = [
    { value: 'manual', label: 'Enter manually' },
    { value: 'upload', label: 'Upload .asn file' },
    { value: '3gpp', label: '3GPP 5G_RRC v16.4.1' },
    // 可继续添加更多选项
];

const SpecificationBox = () => {
    const [schema, setSchema] = useState('manual');
    const [asnText, setAsnText] = useState('');

    return (
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 24, marginBottom: 24, background: '#fafbfc' }}>
            <div style={{ marginBottom: 12, fontWeight: 500 }}>Schema:</div>
            <Select
                value={schema}
                onChange={setSchema}
                style={{ width: '100%', marginBottom: 16 }}
            >
                {schemaOptions.map(opt => (
                    <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                ))}
            </Select>
            <div style={{ marginBottom: 8 }}>ASN.1 Specification</div>
            <TextArea
                rows={8}
                value={asnText}
                onChange={e => setAsnText(e.target.value)}
                placeholder="输入或粘贴ASN.1规范内容"
            />
            <Divider />
            <Checkbox>Strict syntax checking</Checkbox>
            <Checkbox style={{ marginLeft: 16 }}>Treat all types as PDUs</Checkbox>
            <Checkbox style={{ marginLeft: 16 }}>Generate sample values</Checkbox>
            <Button type="primary" style={{ marginTop: 16, float: 'right' }}>Compile</Button>
            <div style={{ clear: 'both' }} />
        </div>
    );
};

export default SpecificationBox; 
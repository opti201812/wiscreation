import React, { useState } from 'react';
import { Select, Input, Button, Radio } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const dataOptions = [
    { value: 'hex', label: 'HEX or Base64' },
    { value: 'bin', label: 'Binary' },
    // 可根据需要添加更多
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
    const [dataType, setDataType] = useState('hex');
    const [type, setType] = useState('');
    const [decodeText, setDecodeText] = useState('');
    const [radio, setRadio] = useState('UPER');

    return (
        <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500, marginBottom: 2 }}>Data:</div>
                    <Select
                        value={dataType}
                        onChange={setDataType}
                        style={{ width: '100%' }}
                    >
                        {dataOptions.map(opt => (
                            <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                        ))}
                    </Select>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500, marginBottom: 2 }}>Type:</div>
                    <Select
                        value={type}
                        onChange={setType}
                        style={{ width: '100%' }}
                    >
                        {typeOptions.map(opt => (
                            <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                        ))}
                    </Select>
                </div>
            </div>
            <div style={{ marginBottom: 8, color: '#888', fontSize: 13 }}>
                Select the Type. Upload a message/PDU/record file. Click Decode. The decoded data can be downloaded as a text file in the ASN.1 Value Notation format.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
                <TextArea
                    rows={7}
                    value={decodeText}
                    onChange={e => setDecodeText(e.target.value)}
                    placeholder="请输入HEX或Base64数据..."
                    style={{ flex: 1, resize: 'vertical' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 8 }}>
                    <Radio.Group
                        value={radio}
                        onChange={e => setRadio(e.target.value)}
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
                </div>
            </div>
            <Button type="primary" style={{ marginTop: 16, float: 'right' }}>
                Decode
            </Button>
            <div style={{ clear: 'both' }} />
        </div>
    );
};

export default DecodeTab; 
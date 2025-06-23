import React from 'react';
import OutputBlock from './OutputBlock';

const mockData = [
    { label: 'HEX', value: 'A1 B2 C3 D4\nE5 F6 00 11' },
    { label: 'JSON', value: '{\n  "field": "value"\n}' },
    { label: 'Text', value: '普通文本输出' }
];

const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
};

const handleDownload = (text, label) => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${label}.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

const ConsoleOutputBox = ({ outputs = [] }) => {
    return (
        <div style={{
            border: '1px solid #eee',
            borderRadius: 8,
            padding: 0,
            background: '#181818',
            color: '#fff',
            height: 550,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                fontWeight: 500,
                padding: '12px 24px',
                borderBottom: '1px solid #222',
                background: '#181818'
            }}>
                Results
            </div>
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: 16
            }}>
                {outputs.map((item, idx) => (
                    <OutputBlock
                        key={item.label + idx}
                        label={item.label}
                        value={item.value}
                        onCopy={() => navigator.clipboard.writeText(item.value)}
                        onDownload={() => {
                            const blob = new Blob([item.value], { type: 'text/plain' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `${item.label}.txt`;
                            a.click();
                            URL.revokeObjectURL(url);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConsoleOutputBox; 
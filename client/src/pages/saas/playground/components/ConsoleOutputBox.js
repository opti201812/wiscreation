import React from 'react';
import OutputBlock from './OutputBlock';

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

const ConsoleOutputBox = ({ outputs = [], clearOutputs }) => {
    return (
        <div style={{
            border: '1px solid #eee',
            borderRadius: 8,
            padding: 0,
            background: '#181818',
            color: '#fff',
            height: 650,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                fontWeight: 500,
                padding: '12px 24px',
                borderBottom: '1px solid #222',
                background: '#181818',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <span>Results</span>
                <button
                    style={{
                        background: '#ff7875',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 4,
                        padding: '4px 12px',
                        cursor: 'pointer',
                        fontWeight: 400
                    }}
                    onClick={clearOutputs}
                >
                    Clear
                </button>
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
                        onCopy={() => handleCopy(item.value)}
                        onDownload={() => handleDownload(item.value, item.label)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConsoleOutputBox;

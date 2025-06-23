import React from 'react';

const ConsoleOutputBox = ({ output = '', result = '' }) => {
    return (
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 24, background: '#181818', color: '#fff' }}>
            <div style={{ fontWeight: 500, marginBottom: 12 }}>Console Output</div>
            <div style={{
                minHeight: 100,
                background: '#222',
                borderRadius: 4,
                padding: 12,
                fontFamily: 'monospace',
                fontSize: 14,
                marginBottom: 16,
                whiteSpace: 'pre-wrap'
            }}>
                {output || '请在上方操作后查看输出...'}
            </div>
            <div style={{
                minHeight: 40,
                background: '#333',
                borderRadius: 4,
                padding: 12,
                fontFamily: 'monospace',
                fontSize: 14,
                color: '#b5f5ec',
                whiteSpace: 'pre-wrap'
            }}>
                {result || '结果区域'}
            </div>
        </div>
    );
};

export default ConsoleOutputBox; 
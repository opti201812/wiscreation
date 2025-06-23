import React from 'react';

const ConsoleOutputBox = ({ output = '', result = '' }) => {
    return (
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 24, background: '#181818', color: '#fff' }}>
            <div style={{ fontWeight: 500, marginBottom: 12 }}>Results</div>
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
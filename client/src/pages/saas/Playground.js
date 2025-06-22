import React, { useState } from 'react';
import SchemaBox from './playground/components/SchemaBox';
import EncodeDecodeBox from './playground/components/EncodeDecodeBox';
import ConsoleOutputBox from './playground/components/ConsoleOutputBox';

const Playground = () => {
    const [outputs, setOutputs] = useState([]);
    const [token, setToken] = useState('');

    // 新增一条输出
    const handleAddOutput = (output) => {
        setOutputs(prev => [...prev, output]);
    };

    // 保存token
    const handleSetToken = (token) => {
        setToken(token);
    };

    return (
        <div style={{ margin: '0 auto', padding: 0, height: '100%' }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 340, height: '100%', overflow: 'hidden' }}>
                    <SchemaBox onAddOutput={handleAddOutput} onSetToken={handleSetToken} />
                </div>
                <div style={{ flex: 1, minWidth: 340, height: '100%', overflow: 'hidden' }}>
                    <EncodeDecodeBox onAddOutput={handleAddOutput} token={token} />
                </div>
                <div style={{ flex: 1, minWidth: 340, height: '100%', overflow: 'hidden' }}>
                    <ConsoleOutputBox outputs={outputs} />
                </div>
            </div>
        </div>
    );
};

export default Playground;
import React, { useState } from 'react';
import SchemaBox from './playground/components/SchemaBox';
import EncodeDecodeBox from './playground/components/EncodeDecodeBox';
import ConsoleOutputBox from './playground/components/ConsoleOutputBox';

const Playground = () => {
    const [outputs, setOutputs] = useState([]);
    const [token, setToken] = useState('');
    const [typeAssignments, setTypeAssignments] = useState([]); // 类型定义

    // 新增一条输出
    const handleAddOutput = (output) => {
        setOutputs(prev => [output, ...prev]);
    };

    // 保存token
    const handleSetTokenAndType = (token, typeAssignments) => {
        setToken(token);
        setTypeAssignments(typeAssignments);
    };

    // 清空输出
    const handleClearOutputs = () => {
        setOutputs([]);
    };

    return (
        <div style={{ margin: '0 auto', padding: 0, height: '100%' }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 340, height: '100%', overflow: 'hidden' }}>
                    <SchemaBox onAddOutput={handleAddOutput} onSetTokenAndType={handleSetTokenAndType} />
                </div>
                <div style={{ flex: 1, minWidth: 340, height: '100%', overflow: 'hidden' }}>
                    <EncodeDecodeBox onAddOutput={handleAddOutput} token={token} typeAssignments={typeAssignments} />
                </div>
                <div style={{ flex: 1, minWidth: 340, height: '100%', overflow: 'hidden' }}>
                    <ConsoleOutputBox outputs={outputs} clearOutputs={handleClearOutputs} />
                </div>
            </div>
        </div>
    );
};

export default Playground;

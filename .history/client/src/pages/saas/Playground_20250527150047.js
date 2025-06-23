import React from 'react';
import SchemaBox from './playground/components/SchemaBox';
import EncodeDecodeBox from './playground/components/EncodeDecodeBox';
import ConsoleOutputBox from './playground/components/ConsoleOutputBox';

const Playground = () => {
    return (
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24, height: '100%' }}>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 340, height: 600, overflow: 'hidden' }}>
                    <SchemaBox />
                </div>
                <div style={{ flex: 1, minWidth: 340, height: 600, overflow: 'hidden' }}>
                    <EncodeDecodeBox />
                </div>
                <div style={{ flex: 1, minWidth: 340, height: 600, overflow: 'hidden' }}>
                    <ConsoleOutputBox outputs={[
                        { label: 't1', value: 'A1 B2 C3 D4\nE5 F6 00 11' },
                        { label: 't2', value: '{\n  "field": "value"\n}' },
                        { label: 'Error', value: '错误！' }
                    ]} />
                </div>
            </div>
        </div>
    );
};

export default Playground; 
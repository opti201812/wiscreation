import React from 'react';
import SpecificationBox from './playground/components/SpecificationBox';
import EncodeDecodeBox from './playground/components/EncodeDecodeBox';
import ConsoleOutputBox from './playground/components/ConsoleOutputBox';

const Playground = () => {
    return (
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 340 }}>
                    <SpecificationBox />
                </div>
                <div style={{ flex: 1, minWidth: 340 }}>
                    <EncodeDecodeBox />
                </div>
                <div style={{ flex: 1, minWidth: 340 }}>
                    <ConsoleOutputBox />
                </div>
            </div>
        </div>
    );
};

export default Playground; 
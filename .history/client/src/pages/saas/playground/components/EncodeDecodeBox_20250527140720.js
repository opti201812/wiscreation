import React, { useState } from 'react';
import { Tabs } from 'antd';
import EncodeTab from './EncodeTab';
import DecodeTab from './DecodeTab';

const EncodeDecodeBox = () => {
    const [activeKey, setActiveKey] = useState('encode');

    return (
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 24, marginBottom: 24, background: '#fafbfc' }}>
            <Tabs
                activeKey={activeKey}
                onChange={setActiveKey}
                items={[
                    {
                        key: 'encode',
                        label: 'Encode',
                        children: <EncodeTab />
                    },
                    {
                        key: 'decode',
                        label: 'Decode',
                        children: <DecodeTab />
                    }
                ]}
            />
        </div>
    );
};

export default EncodeDecodeBox; 
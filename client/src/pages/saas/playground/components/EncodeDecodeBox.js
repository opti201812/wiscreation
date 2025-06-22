import React, { useState } from 'react';
import { Tabs } from 'antd';
import EncodeTab from './EncodeTab';
import DecodeTab from './DecodeTab';

const EncodeDecodeBox = ({ onAddOutput, token }) => {
    const [activeKey, setActiveKey] = useState('encode');

    return (
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 10, marginBottom: 10, background: '#fafbfc' }}>
            <Tabs
                activeKey={activeKey}
                onChange={setActiveKey}
                items={[
                    {
                        key: 'encode',
                        label: 'Encode',
                        children: <EncodeTab onAddOutput={onAddOutput} token={token} />
                    },
                    {
                        key: 'decode',
                        label: 'Decode',
                        children: <DecodeTab onAddOutput={onAddOutput} token={token} />
                    }
                ]}
            />
        </div>
    );
};

export default EncodeDecodeBox;
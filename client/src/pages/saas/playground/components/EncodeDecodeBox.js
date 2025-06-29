import React, { useState } from 'react';
import { Tabs } from 'antd';
import EncodeTab from './EncodeTab';
import DecodeTab from './DecodeTab';

const EncodeDecodeBox = ({ onAddOutput, token, typeAssignments }) => {
    const [activeKey, setActiveKey] = useState('encode');

    return (
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 10, marginBottom: 10, background: '#fafbfc', height: 650 }}>
            <Tabs
                activeKey={activeKey}
                onChange={setActiveKey}
                items={[
                    {
                        key: 'encode',
                        label: 'Encode',
                        children: <EncodeTab onAddOutput={onAddOutput} token={token} typeAssignments={typeAssignments} />
                    },
                    {
                        key: 'decode',
                        label: 'Decode',
                        children: <DecodeTab onAddOutput={onAddOutput} token={token} typeAssignments={typeAssignments} />
                    }
                ]}
            />
        </div>
    );
};

export default EncodeDecodeBox;

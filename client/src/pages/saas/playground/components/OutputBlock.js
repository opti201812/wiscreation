import React from 'react';
import { Button, Tooltip } from 'antd';
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';

const OutputBlock = ({ label, value, onCopy, onDownload }) => (
    <div style={{
        background: '#222',
        borderRadius: 4,
        marginBottom: 12,
        padding: 0,
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '6px 12px',
            borderBottom: '1px solid #333'
        }}>
            <span style={{ color: '#fff', fontWeight: 500 }}>{label}</span>
            <span>
                <Tooltip title="复制">
                    <Button
                        type="text"
                        size="small"
                        icon={<CopyOutlined />}
                        onClick={onCopy}
                        style={{ color: '#b5f5ec' }}
                    />
                </Tooltip>
                <Tooltip title="下载">
                    <Button
                        type="text"
                        size="small"
                        icon={<DownloadOutlined />}
                        onClick={onDownload}
                        style={{ color: '#b5f5ec' }}
                    />
                </Tooltip>
            </span>
        </div>
        <div style={{
            padding: '8px 12px',
            color: '#b5f5ec',
            fontFamily: 'monospace',
            fontSize: 14,
            minHeight: 24,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all'
        }}>
            {value}
        </div>
    </div>
);

export default OutputBlock;
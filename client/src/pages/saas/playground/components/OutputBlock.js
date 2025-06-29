import React from 'react';
import { Button, Tooltip } from 'antd';
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import HexDump from './HexDump';

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
            <span style={{ color: '#fff', fontWeight: 500 }}>
                {(() => {
                    const pad = n => n.toString().padStart(2, '0');
                    const now = new Date();
                    return `[${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}] `;
                })()}
                {label}
            </span>
            <span>
                <Tooltip title="Copy">
                    <Button
                        type="text"
                        size="small"
                        icon={<CopyOutlined />}
                        onClick={onCopy}
                        style={{ color: '#b5f5ec' }}
                    />
                </Tooltip>
                <Tooltip title="Download">
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
            {(() => {
                if (typeof value === 'string') {
                    // 1. 检查是否为合法JSON
                    try {
                        const obj = JSON.parse(value);
                        return <pre style={{ margin: 0 }}>{JSON.stringify(obj, null, 2)}</pre>;
                    } catch (e) { }
                    // 2. 检查是否为十六进制字符串
                    const hexRe = /^[0-9a-fA-F]+$/;
                    if (value.length % 2 === 0 && value.length > 0 && hexRe.test(value)) {
                        return <HexDump value={value} />;
                    }
                    // 3. 其它情况原样输出
                    return value;
                } else if (typeof value === 'object') {
                    return <pre style={{ margin: 0 }}>{JSON.stringify(value, null, 2)}</pre>;
                }
                return value;
            })()}
        </div>
    </div>
);

export default OutputBlock;

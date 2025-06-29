import React from 'react';

const BYTES_PER_LINE = 16;
const addrWidth = 4; // 地址宽度与内容一致

function toHex(n, width = 2) {
    return n.toString(16).toUpperCase().padStart(width, '0');
}

export default function HexDump({ value }) {
    const hexRe = /^[0-9a-fA-F]+$/;
    if (!value || value.length % 2 !== 0 || !hexRe.test(value)) {
        return <div>Invalid hex data</div>;
    }

    const lines = [];
    for (let i = 0; i < value.length; i += BYTES_PER_LINE * 2) {
        const hexChunk = value.substr(i, BYTES_PER_LINE * 2);
        let hexParts = [];
        let ascii = '';
        for (let j = 0; j < hexChunk.length; j += 2) {
            const byteStr = hexChunk.substr(j, 2);
            hexParts.push(byteStr);
            const byte = parseInt(byteStr, 16);
            ascii += (byte >= 32 && byte <= 126) ? String.fromCharCode(byte) : '.';
        }
        // 补齐不足的字节
        while (hexParts.length < BYTES_PER_LINE) hexParts.push('  ');
        lines.push(
            <div key={i} style={{ fontFamily: 'monospace' }}>
                {toHex(i / 2, addrWidth)}  {hexParts.join(' ')}  {ascii}
            </div>
        );
    }

    // 列头
    const header = (
        <div style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
            {('Addr').padEnd(addrWidth, ' ')}  {Array.from({ length: BYTES_PER_LINE }, (_, i) => toHex(i)).join(' ')}  ASCII
        </div>
    );

    return (
        <pre style={{ margin: 0 }}>
            {header}
            {lines}
        </pre>
    );
}
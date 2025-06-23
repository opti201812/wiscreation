import React, { useState } from 'react';
import { Select, Input, Button, Checkbox, Divider } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const schemaOptions = [
    { value: 'manual', label: 'Enter manually' },
];
const schemaText = `--<ASN1.HugeInteger World-Schema.Rocket.range>--
World-Schema DEFINITIONS AUTOMATIC TAGS ::= 
BEGIN
  Rocket ::= SEQUENCE       
  {
     range     INTEGER, -- huge (see a special directive above)
     name      UTF8String (SIZE(1..16)),
     message   UTF8String DEFAULT "Hello World" , 
     fuel      ENUMERATED {solid, liquid, gas}, 
     speed     CHOICE     
     { 
        mph    INTEGER,  
        kmph   INTEGER  
     }  OPTIONAL, 
     payload   SEQUENCE OF UTF8String 
  }                                                     
END`;
const SpecificationBox = () => {
    const [schema, setSchema] = useState('manual');
    const [asnText, setAsnText] = useState(schemaText);

    return (
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 24, marginBottom: 24, background: '#fafbfc' }}>
            <div style={{ marginBottom: 12, fontWeight: 500 }}>Schema:</div>
            <Select
                value={schema}
                onChange={setSchema}
                style={{ width: '100%', marginBottom: 16 }}
                label="Schema:"
            >
                {schemaOptions.map(opt => (
                    <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                ))}
            </Select>
            <div style={{ marginBottom: 8 }}>Select the ASN.1 specification (enter manually, upload new, or pick existing). Compile to check the syntax and to extract the data Types to be used in Decoding and Encoding.</div>
            <TextArea
                rows={8}
                value={asnText}
                onChange={e => setAsnText(e.target.value)}
                placeholder="please input schema..."
            />
            <Button type="primary" style={{ marginTop: 16, float: 'right' }}>Compile</Button>
            <Button type="dashed" style={{ marginTop: 16, float: 'right' }} onClick={() => setAsnText(schemaText)}>Reset</Button>
            <Divider />
            <div style={{ marginBottom: 8 }}>Compiling Options</div>
            <Checkbox style={{ marginLeft: 16 }}>Strict syntax checking</Checkbox>
            <Checkbox style={{ marginLeft: 16, display: 'none' }}>Generate sample values</Checkbox>
            <Checkbox style={{ marginLeft: 16, display: 'none' }}>Treat all types as PDUs</Checkbox>
            <div style={{ clear: 'both' }} />
        </div>
    );
};

export default SpecificationBox; 
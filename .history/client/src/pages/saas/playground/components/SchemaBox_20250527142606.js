import React, { useState } from 'react';
import { Select, Input, Button, Checkbox, Divider, Form, message } from 'antd';

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

const SchemaBox = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        // 这里是API调用的占位符
        // 你可以用fetch/axios等方式提交values
        // 例如：await fetch('/api/schema', { method: 'POST', body: JSON.stringify(values) })
        setTimeout(() => {
            setLoading(false);
            message.success('提交成功（API Placeholder）');
            // 这里可以处理返回结果
        }, 1000);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
                schema: 'manual',
                asnText: schemaText,
                strict: false
            }}
        >
            <Form.Item label="Schema:" name="schema" style={{ marginBottom: 12 }}>
                <Select>
                    {schemaOptions.map(opt => (
                        <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                    ))}
                </Select>
            </Form.Item>
            <div style={{ marginBottom: 8, color: '#888', fontSize: 13 }}>
                Select the ASN.1 specification (enter manually, upload new, or pick existing). Compile to check the syntax and to extract the data Types to be used in Decoding and Encoding.
            </div>
            <Form.Item name="asnText" style={{ marginBottom: 0 }}>
                <TextArea
                    rows={8}
                    placeholder="please input schema..."
                />
            </Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop: 16, float: 'right' }}
                loading={loading}
            >
                Compile
            </Button>
            <Button
                type="dashed"
                style={{ marginTop: 16, float: 'right', marginRight: 8 }}
                onClick={() => form.setFieldsValue({ asnText: schemaText })}
            >
                Reset
            </Button>
            <Divider />
            <div style={{ marginBottom: 8 }}>Compiling Options</div>
            <Form.Item name="strict" valuePropName="checked" style={{ display: 'inline-block', marginLeft: 16, marginBottom: 0 }}>
                <Checkbox>Strict syntax checking</Checkbox>
            </Form.Item>
            <Checkbox style={{ marginLeft: 16, display: 'none' }}>Generate sample values</Checkbox>
            <Checkbox style={{ marginLeft: 16, display: 'none' }}>Treat all types as PDUs</Checkbox>
            <div style={{ clear: 'both' }} />
        </Form>
    );
};

export default SchemaBox; 
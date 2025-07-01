import React, { useState } from 'react';
import { Select, Input, Button, Checkbox, Form, message } from 'antd';
import { API_BASE_URL } from '../../api';

const { Option } = Select;
const { TextArea } = Input;

const schemaOptions = [
    { value: 'manual', label: 'Enter manually' },
];
const schemaText = `Hello-world-schema DEFINITIONS  ::= BEGIN
    PersonnelRecord ::= [APPLICATION 0] IMPLICIT SET {
        name            Name,
        title           [0] VisibleString,
        number          EmployeeNumber,
        dateOfHire      [1] Date,
        nameOfSpouse    [2] Name,
        children        [3] IMPLICIT SEQUENCE OF ChildInformation
    }
    ChildInformation ::= SET {
        name            Name,
        dateOfBirth     [0] Date
    }
    Name ::= [APPLICATION 1] IMPLICIT SEQUENCE {
        givenName       VisibleString,
        initial         VisibleString,
        familyName      VisibleString
    }
    EmployeeNumber ::= [APPLICATION 2] IMPLICIT INTEGER
    Date ::= [APPLICATION 3] IMPLICIT VisibleString -- YYYYMMDD format
END`;


const SchemaBox = ({ onAddOutput, onSetTokenAndType }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const payload = {
                schema: values.asnText,
                options: { syntaxCheck: values.strict }
            };
            const res = await fetch(`${API_BASE_URL}/schemas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            setLoading(false);
            message.success('Compile Success');
            if (onSetTokenAndType && data.token) {
                onSetTokenAndType(data.token, data.type_assignments);
            }
            if (onAddOutput) {
                onAddOutput({
                    label: 'Schema Compile',
                    value: data.data || JSON.stringify(data)
                });
            }
        } catch (e) {
            setLoading(false);
            message.error('Compile Error');
            console.error(e.message);
        }
    };

    return (
        <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 8, padding: 24, height: 650 }}>
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
                    Choose a predefined ASN.1 schema from the dropdown above or manually enter/edit the schema definition below. Click Compile to validate syntax and generate Type Assignments.
                </div>
                <Form.Item name="asnText" style={{ marginBottom: 0 }}>
                    <TextArea
                        rows={18}
                        placeholder="Please enter/edit the schema definition here..."
                    />
                </Form.Item>
                <div style={{ marginBottom: 8, marginTop: 8, display: 'none' }}>Compiling Options</div>
                <Form.Item name="strict" valuePropName="checked" style={{ display: 'none', marginLeft: 16, marginBottom: 0 }}>
                    <Checkbox>Strict syntax checking</Checkbox>
                </Form.Item>
                <Checkbox style={{ marginLeft: 16, display: 'none' }}>Generate sample values</Checkbox>
                <Checkbox style={{ marginLeft: 16, display: 'none' }}>Treat all types as PDUs</Checkbox>
                <div>
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
                </div>
                <div style={{ clear: 'both' }} />
            </Form>
        </div>
    );
};

export default SchemaBox;

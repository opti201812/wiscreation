import React from 'react';
import { Form, Input, Button, Card, Typography, Divider, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const Register = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const onFinish = (values) => {
        console.log('注册表单提交:', values);
        // 这里应该调用后端API进行注册
        // 暂时使用模拟注册
        message.success(t('auth.register.successMsg'));
        navigate('/login');
    };

    return (
        <div className="container" style={{ padding: '50px 0' }}>
            <div style={{ maxWidth: '460px', margin: '0 auto' }}>
                <Card
                    style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px' }}
                    bodyStyle={{ padding: '30px' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <Title level={2} style={{ marginBottom: '8px' }}>{t('auth.register.title')}</Title>
                        <Paragraph type="secondary">
                            {t('auth.register.subtitle')}
                        </Paragraph>
                    </div>

                    <Form
                        name="register_form"
                        onFinish={onFinish}
                        layout="vertical"
                        requiredMark={false}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: t('auth.register.usernameRequired') },
                                { min: 3, message: t('auth.register.usernameLength') }
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder={t('auth.register.username')}
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: t('auth.register.emailRequired') },
                                { type: 'email', message: t('auth.register.emailValid') }
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder={t('auth.register.email')}
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: t('auth.register.passwordRequired') },
                                { min: 6, message: t('auth.register.passwordLength') }
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder={t('auth.register.password')}
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                { required: true, message: t('auth.register.confirmRequired') },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error(t('auth.register.passwordMismatch')));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder={t('auth.register.confirm')}
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error(t('auth.register.agreementRequired'))),
                                },
                            ]}
                        >
                            <Checkbox>
                                {t('auth.register.agreement')} <Link to="/terms">{t('auth.register.terms')}</Link> {t('common.and')} <Link to="/privacy">{t('auth.register.privacy')}</Link>
                            </Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                            >
                                {t('auth.register.submit')}
                            </Button>
                        </Form.Item>

                        <Divider plain>{t('common.or')}</Divider>

                        <div style={{ textAlign: 'center' }}>
                            <Paragraph>
                                {t('auth.register.hasAccount')} <Link to="/login">{t('auth.register.login')}</Link>
                            </Paragraph>
                        </div>
                    </Form>
                </Card>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/">{t('common.back')}</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
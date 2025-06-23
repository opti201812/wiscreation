import React from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, Divider, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const Login = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const onFinish = (values) => {
        console.log('登录表单提交:', values);
        // 这里应该调用后端API进行身份验证
        // 暂时使用模拟登录
        message.success(t('common.success'));
        navigate('/dashboard');
    };

    return (
        <div className="container" style={{ padding: '50px 0' }}>
            <div style={{ maxWidth: '420px', margin: '0 auto' }}>
                <Card
                    style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px' }}
                    bodyStyle={{ padding: '30px' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <Title level={2} style={{ marginBottom: '8px' }}>{t('auth.login.title')}</Title>
                        <Paragraph type="secondary">
                            {t('auth.login.subtitle')}
                        </Paragraph>
                    </div>

                    <Form
                        name="login_form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout="vertical"
                        requiredMark={false}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: t('auth.login.emailRequired') },
                                { type: 'email', message: t('auth.login.emailValid') }
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder={t('auth.login.email')}
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: t('auth.login.passwordRequired') }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder={t('auth.login.password')}
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>{t('auth.login.remember')}</Checkbox>
                                </Form.Item>
                                <Link to="/forgot-password">{t('auth.login.forgot')}</Link>
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                            >
                                {t('auth.login.submit')}
                            </Button>
                        </Form.Item>

                        <Divider plain>{t('common.or')}</Divider>

                        <div style={{ textAlign: 'center' }}>
                            <Paragraph>
                                {t('auth.login.noAccount')} <Link to="/register">{t('auth.login.register')}</Link>
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

export default Login; 
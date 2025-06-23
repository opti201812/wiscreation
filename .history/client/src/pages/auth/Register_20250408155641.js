import React from 'react';
import { Form, Input, Button, Card, Typography, Divider, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Register = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('注册表单提交:', values);
        // 这里应该调用后端API进行注册
        // 暂时使用模拟注册
        message.success('注册成功，请登录');
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
                        <Title level={2} style={{ marginBottom: '8px' }}>创建账户</Title>
                        <Paragraph type="secondary">
                            注册账户，体验我们的服务
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
                                { required: true, message: '请输入您的用户名' },
                                { min: 3, message: '用户名至少3个字符' }
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="用户名"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: '请输入您的邮箱' },
                                { type: 'email', message: '请输入有效的邮箱地址' }
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="邮箱"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: '请输入您的密码' },
                                { min: 6, message: '密码至少6个字符' }
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="密码"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                { required: true, message: '请确认您的密码' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('两次输入的密码不一致'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="确认密码"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('请阅读并同意条款')),
                                },
                            ]}
                        >
                            <Checkbox>
                                我已阅读并同意 <Link to="/terms">服务条款</Link> 和 <Link to="/privacy">隐私政策</Link>
                            </Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                            >
                                注册
                            </Button>
                        </Form.Item>

                        <Divider plain>或者</Divider>

                        <div style={{ textAlign: 'center' }}>
                            <Paragraph>
                                已有账号？ <Link to="/login">立即登录</Link>
                            </Paragraph>
                        </div>
                    </Form>
                </Card>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/">返回首页</Link>
                </div>
            </div>
        </div>
    );
};

export default Register; 
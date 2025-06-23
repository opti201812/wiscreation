import React from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, Divider, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('登录表单提交:', values);
        // 这里应该调用后端API进行身份验证
        // 暂时使用模拟登录
        message.success('登录成功');
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
                        <Title level={2} style={{ marginBottom: '8px' }}>用户登录</Title>
                        <Paragraph type="secondary">
                            登录您的账户，访问更多功能
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
                                { required: true, message: '请输入您的邮箱' },
                                { type: 'email', message: '请输入有效的邮箱地址' }
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="邮箱"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入您的密码' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="密码"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>记住我</Checkbox>
                                </Form.Item>
                                <Link to="/forgot-password">忘记密码？</Link>
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                            >
                                登录
                            </Button>
                        </Form.Item>

                        <Divider plain>或者</Divider>

                        <div style={{ textAlign: 'center' }}>
                            <Paragraph>
                                还没有账号？ <Link to="/register">立即注册</Link>
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

export default Login; 
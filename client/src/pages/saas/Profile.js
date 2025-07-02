import React from 'react';
import { Form, Input, Button, Card, Avatar, Upload, Typography, Divider, Row, Col } from 'antd';
import { UserOutlined, UploadOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Profile = () => {
    // 模拟用户数据
    const userData = {
        name: 'Guest',
        email: 'guest@wiscreationsoft.com',
        phone: '138****1234',
        address: '上海市浦东新区',
        bio: '资深软件工程师，专注于前端开发和用户体验设计',
        company: 'WisCreation科技',
        position: '高级工程师',
    };

    return (
        <div>
            <Title level={2}>个人资料</Title>

            <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                    <Card>
                        <div style={{ textAlign: 'center' }}>
                            <Avatar size={100} icon={<UserOutlined />} />
                            <div style={{ marginTop: 16 }}>
                                <Upload>
                                    <Button icon={<UploadOutlined />}>更换头像</Button>
                                </Upload>
                            </div>
                            <Divider />
                            <Title level={4}>{userData.name}</Title>
                            <p>{userData.position}</p>
                            <p>{userData.company}</p>

                            <Divider />

                            <div style={{ textAlign: 'left' }}>
                                <p>
                                    <MailOutlined style={{ marginRight: 8 }} />
                                    {userData.email}
                                </p>
                                <p>
                                    <PhoneOutlined style={{ marginRight: 8 }} />
                                    {userData.phone}
                                </p>
                                <p>
                                    <EnvironmentOutlined style={{ marginRight: 8 }} />
                                    {userData.address}
                                </p>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} md={16}>
                    <Card title="编辑个人资料">
                        <Form layout="vertical" initialValues={userData}>
                            <Form.Item
                                label="姓名"
                                name="name"
                                rules={[{ required: true, message: '请输入姓名' }]}
                            >
                                <Input placeholder="请输入姓名" />
                            </Form.Item>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="电子邮箱"
                                        name="email"
                                        rules={[
                                            { required: true, message: '请输入电子邮箱' },
                                            { type: 'email', message: '请输入有效的电子邮箱' }
                                        ]}
                                    >
                                        <Input placeholder="请输入电子邮箱" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="手机号码"
                                        name="phone"
                                    >
                                        <Input placeholder="请输入手机号码" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                label="地址"
                                name="address"
                            >
                                <Input placeholder="请输入地址" />
                            </Form.Item>

                            <Form.Item
                                label="公司"
                                name="company"
                            >
                                <Input placeholder="请输入公司名称" />
                            </Form.Item>

                            <Form.Item
                                label="职位"
                                name="position"
                            >
                                <Input placeholder="请输入职位" />
                            </Form.Item>

                            <Form.Item
                                label="个人简介"
                                name="bio"
                            >
                                <Input.TextArea rows={4} placeholder="请输入个人简介" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    保存修改
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>

                    <Card title="修改密码" style={{ marginTop: 24 }}>
                        <Form layout="vertical">
                            <Form.Item
                                label="当前密码"
                                name="currentPassword"
                                rules={[{ required: true, message: '请输入当前密码' }]}
                            >
                                <Input.Password placeholder="请输入当前密码" />
                            </Form.Item>

                            <Form.Item
                                label="新密码"
                                name="newPassword"
                                rules={[
                                    { required: true, message: '请输入新密码' },
                                    { min: 6, message: '密码长度不能少于6个字符' }
                                ]}
                            >
                                <Input.Password placeholder="请输入新密码" />
                            </Form.Item>

                            <Form.Item
                                label="确认新密码"
                                name="confirmPassword"
                                rules={[
                                    { required: true, message: '请确认新密码' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('两次输入的密码不一致'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="请确认新密码" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    更新密码
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Profile; 
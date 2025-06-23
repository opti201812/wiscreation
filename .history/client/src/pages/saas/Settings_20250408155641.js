import React, { useState } from 'react';
import { Tabs, Card, Form, Input, Button, Switch, Select, Radio, message, Typography, Divider } from 'antd';
import { SaveOutlined, BellOutlined, LayoutOutlined, LockOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const Settings = () => {
    const [accountForm] = Form.useForm();
    const [securityForm] = Form.useForm();
    const [notificationForm] = Form.useForm();
    const [uiForm] = Form.useForm();

    const [loading, setLoading] = useState(false);

    // 处理账户设置表单提交
    const handleAccountSubmit = (values) => {
        setLoading(true);
        console.log('账户设置表单提交:', values);

        // 模拟API请求
        setTimeout(() => {
            setLoading(false);
            message.success('账户设置已更新');
        }, 1000);
    };

    // 处理安全设置表单提交
    const handleSecuritySubmit = (values) => {
        setLoading(true);
        console.log('安全设置表单提交:', values);

        // 模拟API请求
        setTimeout(() => {
            setLoading(false);
            message.success('安全设置已更新');
            securityForm.resetFields(['currentPassword', 'newPassword', 'confirmPassword']);
        }, 1000);
    };

    // 处理通知设置表单提交
    const handleNotificationSubmit = (values) => {
        setLoading(true);
        console.log('通知设置表单提交:', values);

        // 模拟API请求
        setTimeout(() => {
            setLoading(false);
            message.success('通知设置已更新');
        }, 1000);
    };

    // 处理界面设置表单提交
    const handleUISubmit = (values) => {
        setLoading(true);
        console.log('界面设置表单提交:', values);

        // 模拟API请求
        setTimeout(() => {
            setLoading(false);
            message.success('界面设置已更新');
        }, 1000);
    };

    return (
        <div>
            <Title level={2}>系统设置</Title>

            <Tabs defaultActiveKey="account">
                <TabPane
                    tab={<span><UserOutlined />账户设置</span>}
                    key="account"
                >
                    <Card>
                        <Form
                            form={accountForm}
                            layout="vertical"
                            initialValues={{
                                username: 'demo_user',
                                email: 'demo@example.com',
                                language: 'zh_CN',
                                timezone: 'Asia/Shanghai',
                            }}
                            onFinish={handleAccountSubmit}
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true, message: '请输入用户名' }]}
                            >
                                <Input placeholder="请输入用户名" />
                            </Form.Item>

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

                            <Form.Item
                                label="语言"
                                name="language"
                            >
                                <Select>
                                    <Option value="zh_CN">中文(简体)</Option>
                                    <Option value="zh_TW">中文(繁体)</Option>
                                    <Option value="en_US">English (US)</Option>
                                    <Option value="ja_JP">日本語</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="时区"
                                name="timezone"
                            >
                                <Select>
                                    <Option value="Asia/Shanghai">中国标准时间 (GMT+8)</Option>
                                    <Option value="Asia/Tokyo">日本标准时间 (GMT+9)</Option>
                                    <Option value="America/New_York">美国东部时间 (GMT-5)</Option>
                                    <Option value="Europe/London">格林威治标准时间 (GMT+0)</Option>
                                </Select>
                            </Form.Item>

                            <Divider />

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    icon={<SaveOutlined />}
                                    loading={loading}
                                >
                                    保存设置
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </TabPane>

                <TabPane
                    tab={<span><LockOutlined />安全设置</span>}
                    key="security"
                >
                    <Card>
                        <Form
                            form={securityForm}
                            layout="vertical"
                            onFinish={handleSecuritySubmit}
                        >
                            <Title level={4}>修改密码</Title>

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
                                    { min: 8, message: '密码长度不能小于8个字符' }
                                ]}
                                hasFeedback
                            >
                                <Input.Password placeholder="请输入新密码" />
                            </Form.Item>

                            <Form.Item
                                label="确认新密码"
                                name="confirmPassword"
                                dependencies={['newPassword']}
                                hasFeedback
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

                            <Divider />

                            <Title level={4}>安全选项</Title>

                            <Form.Item
                                label="启用两步验证"
                                name="twoFactorAuth"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>

                            <Form.Item
                                label="登录活动通知"
                                name="loginNotification"
                                valuePropName="checked"
                                initialValue={true}
                            >
                                <Switch />
                            </Form.Item>

                            <Divider />

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    icon={<SaveOutlined />}
                                    loading={loading}
                                >
                                    保存设置
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </TabPane>

                <TabPane
                    tab={<span><BellOutlined />通知设置</span>}
                    key="notifications"
                >
                    <Card>
                        <Form
                            form={notificationForm}
                            layout="vertical"
                            initialValues={{
                                emailNotification: true,
                                taskAssigned: true,
                                taskDue: true,
                                projectUpdate: true,
                                systemAnnouncement: true,
                                marketingEmail: false,
                            }}
                            onFinish={handleNotificationSubmit}
                        >
                            <Form.Item
                                label="电子邮件通知"
                                name="emailNotification"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>

                            <Divider />

                            <Title level={4}>接收通知的事件</Title>

                            <Form.Item
                                label="任务分配"
                                name="taskAssigned"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>

                            <Form.Item
                                label="任务截止提醒"
                                name="taskDue"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>

                            <Form.Item
                                label="项目更新"
                                name="projectUpdate"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>

                            <Form.Item
                                label="系统公告"
                                name="systemAnnouncement"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>

                            <Form.Item
                                label="营销邮件"
                                name="marketingEmail"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>

                            <Divider />

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    icon={<SaveOutlined />}
                                    loading={loading}
                                >
                                    保存设置
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </TabPane>

                <TabPane
                    tab={<span><LayoutOutlined />界面设置</span>}
                    key="ui"
                >
                    <Card>
                        <Form
                            form={uiForm}
                            layout="vertical"
                            initialValues={{
                                theme: 'light',
                                density: 'default',
                                menuMode: 'inline',
                                dashboardLayout: 'default',
                            }}
                            onFinish={handleUISubmit}
                        >
                            <Form.Item
                                label="主题"
                                name="theme"
                            >
                                <Radio.Group>
                                    <Radio.Button value="light">浅色</Radio.Button>
                                    <Radio.Button value="dark">深色</Radio.Button>
                                    <Radio.Button value="system">跟随系统</Radio.Button>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="界面密度"
                                name="density"
                            >
                                <Radio.Group>
                                    <Radio.Button value="default">默认</Radio.Button>
                                    <Radio.Button value="middle">中等</Radio.Button>
                                    <Radio.Button value="compact">紧凑</Radio.Button>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="菜单模式"
                                name="menuMode"
                            >
                                <Radio.Group>
                                    <Radio.Button value="inline">内嵌</Radio.Button>
                                    <Radio.Button value="horizontal">水平</Radio.Button>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="仪表盘布局"
                                name="dashboardLayout"
                            >
                                <Radio.Group>
                                    <Radio.Button value="default">默认</Radio.Button>
                                    <Radio.Button value="compact">紧凑</Radio.Button>
                                    <Radio.Button value="custom">自定义</Radio.Button>
                                </Radio.Group>
                            </Form.Item>

                            <Divider />

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    icon={<SaveOutlined />}
                                    loading={loading}
                                >
                                    保存设置
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Settings; 
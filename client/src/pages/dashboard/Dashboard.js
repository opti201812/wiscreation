import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Typography, Row, Col, Card, Statistic, Progress, List, Avatar } from 'antd';
import {
    DashboardOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

// 仪表盘子页面
const Overview = () => {
    return (
        <div>
            <Title level={2}>仪表盘概览</Title>

            <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
                <Col xs={24} sm={12} md={6}>
                    <Card>
                        <Statistic
                            title="总项目数"
                            value={12}
                            prefix={<DashboardOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card>
                        <Statistic
                            title="待办任务"
                            value={24}
                            prefix={<ClockCircleOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card>
                        <Statistic
                            title="已完成任务"
                            value={128}
                            prefix={<CheckCircleOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card>
                        <Statistic
                            title="团队成员"
                            value={8}
                            prefix={<UserOutlined />}
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <Card title="项目进度" style={{ marginBottom: 16 }}>
                        <List
                            itemLayout="horizontal"
                            dataSource={[
                                { name: '企业管理系统', progress: 75 },
                                { name: '电商平台', progress: 45 },
                                { name: '移动应用', progress: 100 },
                                { name: '营销自动化工具', progress: 0 },
                            ]}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.name}
                                        description={<Progress percent={item.progress} />}
                                    />
                                    <div>{item.progress}%</div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>

                <Col xs={24} md={12}>
                    <Card title="最近活动" style={{ marginBottom: 16 }}>
                        <List
                            itemLayout="horizontal"
                            dataSource={[
                                { user: '张三', action: '完成了任务', item: 'UI设计评审', time: '10分钟前', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                                { user: '李四', action: '创建了新项目', item: '数据分析平台', time: '2小时前', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
                                { user: '王五', action: '更新了项目进度', item: '企业管理系统', time: '昨天', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
                                { user: '赵六', action: '评论了任务', item: '前端框架搭建', time: '2天前', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
                            ]}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={item.user}
                                        description={`${item.action} "${item.item}"`}
                                    />
                                    <div>{item.time}</div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

// 用户中心子页面
const Profile = () => {
    return (
        <div>
            <Title level={2}>用户资料</Title>
            <p>这里是用户资料页面内容...</p>
        </div>
    );
};

// 设置子页面
const Settings = () => {
    return (
        <div>
            <Title level={2}>系统设置</Title>
            <p>这里是系统设置页面内容...</p>
        </div>
    );
};

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('用户登出');
        // 这里通常会执行登出逻辑，然后重定向到登录页
        navigate('/login');
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0
                }}
            >
                <div style={{ height: 32, margin: 16, color: 'white', textAlign: 'center' }}>
                    <span style={{ fontSize: 18, fontWeight: 'bold' }}>用户中心</span>
                </div>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['overview']}
                    mode="inline"
                >
                    <Menu.Item key="overview" icon={<DashboardOutlined />}>
                        <Link to="/dashboard">仪表盘</Link>
                    </Menu.Item>
                    <Menu.Item key="profile" icon={<UserOutlined />}>
                        <Link to="/dashboard/profile">用户资料</Link>
                    </Menu.Item>
                    <Menu.Item key="settings" icon={<SettingOutlined />}>
                        <Link to="/dashboard/settings">系统设置</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
                <Header style={{ padding: 0, background: '#fff', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button
                        type="primary"
                        icon={<LogoutOutlined />}
                        onClick={handleLogout}
                        style={{ marginRight: 16 }}
                    >
                        退出登录
                    </Button>
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard; 
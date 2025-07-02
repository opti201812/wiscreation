import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    Layout,
    Menu,
    Button,
    Avatar,
    Dropdown,
    Typography,
    Breadcrumb,
    message,
} from 'antd';
import {
    UserOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AppstoreOutlined,
    BellOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

// SaaS子页面
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';
import Tasks from './Tasks';
import Projects from './Projects';
import NotFound from '../NotFound';
import Playground from './Playground';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const SaasApp = () => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // 模拟登录
    const handleLogin = () => {
        // 真实情况下这里会发送API请求验证用户
        setIsLoggedIn(true);
        message.success(t('auth.login.success'));
    };

    // 模拟登出
    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/app');
        message.success(t('auth.logout.success'));
    };

    // 如果用户未登录，显示登录页面
    if (!isLoggedIn) {
        return (
            <div style={{ padding: '50px 20px', background: '#f0f2f5', minHeight: 'calc(100vh - 64px - 70px)' }}>
                <div style={{ maxWidth: '400px', margin: '0 auto', padding: '30px', background: '#fff', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
                        {t('auth.login.title')}
                    </Title>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px' }}>{t('auth.login.email')}</label>
                        <input
                            type="email"
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                borderRadius: '4px',
                                border: '1px solid #d9d9d9',
                            }}
                            placeholder={t('auth.login.emailPlaceholder')}
                            defaultValue="guest@wiscreationsoft.com"
                        />
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <label style={{ display: 'block', marginBottom: '8px' }}>{t('auth.login.password')}</label>
                        <input
                            type="password"
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                borderRadius: '4px',
                                border: '1px solid #d9d9d9',
                            }}
                            placeholder={t('auth.login.passwordPlaceholder')}
                            defaultValue="password123"
                        />
                    </div>

                    <Button type="primary" size="large" block onClick={handleLogin}>
                        {t('auth.login.submit')}
                    </Button>

                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <Text type="secondary">
                            {t('auth.login.demoHint')}
                        </Text>
                    </div>
                </div>
            </div>
        );
    }

    // 获取当前路径，用于菜单高亮
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const currentPath = pathSnippets.length > 1 ? pathSnippets[1] : 'playground';

    // 面包屑导航 (Antd v5+ 用 items 属性)
    const breadcrumbItems = [
        {
            title: <Link to="/">{t('nav.home')}</Link>,
            key: 'home',
        },
        {
            title: <Link to="/app">{t('nav.saas')}</Link>,
            key: 'saas',
        },
        ...pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            const label = pathSnippets[index].charAt(0).toUpperCase() + pathSnippets[index].slice(1);
            return {
                title: <Link to={url}>{label}</Link>,
                key: url,
            };
        })
    ];

    // 用户菜单 items
    const userMenuItems = [
        // {
        //     key: 'profile',
        //     icon: <UserOutlined />,
        //     label: <Link to="/app/profile">{t('nav.profile')}</Link>,
        // },
        // {
        //     key: 'settings',
        //     icon: <SettingOutlined />,
        //     label: <Link to="/app/settings">{t('nav.settings')}</Link>,
        // },
        // { type: 'divider' },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: t('nav.logout'),
            onClick: handleLogout,
        },
    ];

    // Sider 菜单 items for antd v5+
    const sidebarMenuItems = [
        {
            key: 'asn1',
            icon: <AppstoreOutlined />,
            label: <Link to="/app/asn1">{t('nav.playground')}</Link>,
        },
        // Uncomment and adapt these as needed:
        // {
        //     key: 'dashboard',
        //     icon: <DashboardOutlined />,
        //     label: <Link to="/app/dashboard">{t('nav.dashboard')}</Link>,
        // },
        // {
        //     key: 'tasks',
        //     icon: <FileTextOutlined />,
        //     label: t('tasks.title'),
        //     children: [
        //         {
        //             key: 'tasks',
        //             label: <Link to="/app/tasks">{t('tasks.all')}</Link>,
        //         },
        //         {
        //             key: 'mytasks',
        //             label: <Link to="/app/tasks/my">{t('tasks.filter.assignedToMe')}</Link>,
        //         },
        //     ],
        // },
        // {
        //     key: 'projects',
        //     icon: <AppstoreOutlined />,
        //     label: t('projects.title'),
        //     children: [
        //         {
        //             key: 'projects',
        //             label: <Link to="/app/projects">{t('projects.all')}</Link>,
        //         },
        //         {
        //             key: 'myprojects',
        //             label: <Link to="/app/projects/my">{t('projects.filter.myProjects')}</Link>,
        //         },
        //     ],
        // },
        // {
        //     key: 'team',
        //     icon: <TeamOutlined />,
        //     label: <Link to="/app/team">{t('nav.team')}</Link>,
        // },
        // {
        //     key: 'settings',
        //     icon: <SettingOutlined />,
        //     label: <Link to="/app/settings">{t('nav.settings')}</Link>,
        // },
    ];

    return (
        <Layout style={{ minHeight: 'calc(100vh - 64px - 70px)' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                    overflow: 'auto',
                    height: '100%',
                    position: 'sticky',
                    top: 0,
                    left: 0,
                    display: 'none',
                }}
            >
                <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Title level={4} style={{ margin: 0, color: '#fff' }}>
                        {collapsed ? t('nav.saasShort') : t('nav.saasConsole')}
                    </Title>
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[currentPath]}
                    defaultOpenKeys={['tasks', 'projects']}
                    items={sidebarMenuItems}
                />
            </Sider>

            <Layout>
                <Header style={{
                    padding: '0 16px',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)'
                }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ marginRight: 16, display: 'none' }}
                    />
                    <Typography.Title level={3} style={{ margin: 0, color: 'rgba(0, 0, 0, 0.7)' }}>
                        {t('nav.saasConsole')}
                    </Typography.Title>
                    <div style={{ flex: 1 }} />

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            type="text"
                            icon={<BellOutlined />}
                            style={{ marginRight: 16 }}
                        />

                        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                <Avatar icon={<UserOutlined />} />
                                <span style={{ marginLeft: 8, marginRight: 8 }}>{t('auth.demoUser')}</span>
                            </div>
                        </Dropdown>
                    </div>
                </Header>

                <Content style={{ margin: '16px' }}>
                    <Breadcrumb style={{ marginBottom: '16px', display: 'none' }} items={breadcrumbItems} />

                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Routes>
                            <Route path="/" element={<Playground />} />
                            <Route path="/asn1" element={<Playground />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/tasks/*" element={<Tasks />} />
                            <Route path="/projects/*" element={<Projects />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default SaasApp;

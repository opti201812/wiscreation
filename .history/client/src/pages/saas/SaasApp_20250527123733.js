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
    DashboardOutlined,
    TeamOutlined,
    SettingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AppstoreOutlined,
    FileTextOutlined,
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
                            defaultValue="demo@example.com"
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
    const currentPath = pathSnippets.length > 1 ? pathSnippets[1] : 'dashboard';

    // 面包屑导航
    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        const label = pathSnippets[index].charAt(0).toUpperCase() + pathSnippets[index].slice(1);
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{label}</Link>
            </Breadcrumb.Item>
        );
    });

    // 用户菜单
    const userMenu = (
        <Menu>
            <Menu.Item key="profile" icon={<UserOutlined />}>
                <Link to="/app/profile">{t('nav.profile')}</Link>
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
                <Link to="/app/settings">{t('nav.settings')}</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                {t('nav.logout')}
            </Menu.Item>
        </Menu>
    );

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
                >
                    <Menu.Item key="playground" icon={<AppstoreOutlined />}>
                        <Link to="/app/playground">{t('nav.playground')}</Link>
                    </Menu.Item>
                    <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                        <Link to="/app/dashboard">{t('nav.dashboard')}</Link>
                    </Menu.Item>
                    <Menu.SubMenu key="tasks" icon={<FileTextOutlined />} title={t('tasks.title')}>
                        <Menu.Item key="tasks">
                            <Link to="/app/tasks">{t('tasks.all')}</Link>
                        </Menu.Item>
                        <Menu.Item key="mytasks">
                            <Link to="/app/tasks/my">{t('tasks.filter.assignedToMe')}</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="projects" icon={<AppstoreOutlined />} title={t('projects.title')}>
                        <Menu.Item key="projects">
                            <Link to="/app/projects">{t('projects.all')}</Link>
                        </Menu.Item>
                        <Menu.Item key="myprojects">
                            <Link to="/app/projects/my">{t('projects.filter.myProjects')}</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="team" icon={<TeamOutlined />}>
                        <Link to="/app/team">{t('nav.team')}</Link>
                    </Menu.Item>
                    <Menu.Item key="settings" icon={<SettingOutlined />}>
                        <Link to="/app/settings">{t('nav.settings')}</Link>
                    </Menu.Item>
                </Menu>
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
                        style={{ marginRight: 16 }}
                    />

                    <div style={{ flex: 1 }} />

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            type="text"
                            icon={<BellOutlined />}
                            style={{ marginRight: 16 }}
                        />

                        <Dropdown overlay={userMenu} placement="bottomRight">
                            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                <Avatar icon={<UserOutlined />} />
                                <span style={{ marginLeft: 8, marginRight: 8 }}>{t('auth.demoUser')}</span>
                            </div>
                        </Dropdown>
                    </div>
                </Header>

                <Content style={{ margin: '16px' }}>
                    <Breadcrumb style={{ marginBottom: '16px' }}>
                        <Breadcrumb.Item><Link to="/">{t('nav.home')}</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/app">{t('nav.saas')}</Link></Breadcrumb.Item>
                        {breadcrumbItems}
                    </Breadcrumb>

                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/playground" element={<Playground />} />
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
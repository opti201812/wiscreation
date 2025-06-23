import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Drawer, Space, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import {
    HomeOutlined,
    InfoCircleOutlined,
    AppstoreOutlined,
    MailOutlined,
    UserOutlined,
    LoginOutlined,
    MenuOutlined,
} from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Option } = Select;

const Header = ({ onLanguageChange, currentLanguage }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const [current, setCurrent] = useState('');
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // 监听窗口大小变化
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 根据路由更新当前选中菜单
    useEffect(() => {
        const pathname = location.pathname;
        const mainPath = pathname.split('/')[1] || 'home';
        setCurrent(mainPath);
    }, [location]);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onClose = () => {
        setDrawerVisible(false);
    };

    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: <Link to="/">{t('nav.home')}</Link>,
        },
        {
            key: 'about',
            icon: <InfoCircleOutlined />,
            label: <Link to="/about">{t('nav.about')}</Link>,
        },
        {
            key: 'services',
            icon: <AppstoreOutlined />,
            label: <Link to="/services">{t('nav.services')}</Link>,
        },
        {
            key: 'contact',
            icon: <MailOutlined />,
            label: <Link to="/contact">{t('nav.contact')}</Link>,
        },
        {
            key: 'app',
            icon: <AppstoreOutlined />,
            label: <Link to="/app">{t('nav.saas')}</Link>,
        },
    ];

    const authItems = [
        {
            key: 'login',
            icon: <LoginOutlined />,
            label: <Link to="/login">{t('nav.login')}</Link>,
        },
        {
            key: 'register',
            icon: <UserOutlined />,
            label: <Link to="/register">{t('nav.register')}</Link>,
        },
    ];

    const Logo = () => (
        <div className="logo" style={{ float: 'left', margin: '0 24px 0 0' }}>
            <Link to="/" style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
                {t('app.title')}
            </Link>
        </div>
    );

    const LanguageSelector = () => {
        const { i18n } = useTranslation();
        const [language, setLanguage] = useState(i18n.language);

        const handleChange = (value) => {
            i18n.changeLanguage(value);
            setLanguage(value);
        };

        return (
            <Select
                value={language}
                onChange={handleChange}
                size="small"
                dropdownStyle={{ minWidth: 120 }}
            >
                <Option value="zh">中文</Option>
                <Option value="en">English</Option>
                <Option value="ja">日本語</Option>
                <Option value="ko">한국어</Option>
            </Select>
        );
    };

    const DesktopMenu = () => (
        <>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[current]}
                items={menuItems}
                style={{ flex: 1 }}
            />
            <Space>
                <LanguageSelector />
                <Button type="text" icon={<LoginOutlined />} style={{ color: '#fff' }}>
                    <Link to="/login">{t('nav.login')}</Link>
                </Button>
                <Button type="primary">
                    <Link to="/register">{t('nav.register')}</Link>
                </Button>
            </Space>
        </>
    );

    const MobileMenu = () => (
        <>
            <Space>
                <LanguageSelector />
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={showDrawer}
                    style={{ color: '#fff' }}
                />
            </Space>
            <Drawer
                title={t('app.title')}
                placement="right"
                onClose={onClose}
                open={drawerVisible}
            >
                <Menu
                    mode="vertical"
                    selectedKeys={[current]}
                    items={[...menuItems, ...authItems]}
                    onClick={onClose}
                />
            </Drawer>
        </>
    );

    return (
        <AntHeader style={{ display: 'flex', alignItems: 'center', padding: isMobile ? '0 16px' : '0 50px' }}>
            <Logo />
            {isMobile ? <div style={{ flex: 1 }}></div> : null}
            {isMobile ? <MobileMenu /> : <DesktopMenu />}
        </AntHeader>
    );
};

export default Header;

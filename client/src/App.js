import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import zhTW from 'antd/lib/locale/zh_TW';
import 'antd/dist/reset.css'; // antd v5

// i18n配置
import './i18n';
import { useTranslation } from 'react-i18next';

// 公共组件
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// 页面
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/NotFound';

// SaaS应用
import SaasApp from './pages/saas/SaasApp';

// 语言与Antd配置的映射
const localeMap = {
    zh: zhCN,
    en: enUS,
    'zh-TW': zhTW,
    ja: zhCN // 对于日语，暂时使用中文的Antd配置
};

// 获取浏览器语言并映射到支持的语言
const getBrowserLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.split('-')[0];

    // 检查是否是完全匹配的语言代码 (如zh-TW)
    if (Object.keys(localeMap).includes(browserLang)) {
        return browserLang;
    }

    // 检查是否匹配简写语言代码 (如zh)
    if (Object.keys(localeMap).includes(shortLang)) {
        return shortLang;
    }

    return 'zh'; // 默认使用中文
};

function AppContent({ i18n, handleLanguageChange }) {
    const location = useLocation();
    const hideHeader = location.pathname.startsWith('/app');

    return (
        <div className="app">
            {!hideHeader && (
                <Header onLanguageChange={handleLanguageChange} currentLanguage={i18n.language} />
            )}
            <main className="main-content">
                <Routes>
                    {/* 企业网站路由 */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* 认证路由 */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* 用户面板 */}
                    <Route path="/dashboard/*" element={<Dashboard />} />

                    {/* SaaS应用 */}
                    <Route path="/app/*" element={<SaasApp />} />

                    {/* 404页面 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

function App() {
    const { i18n } = useTranslation();
    const [locale, setLocale] = useState(zhCN);

    // 初始化时检查localStorage中是否有保存的语言设置
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng');

        // 如果没有保存的语言设置，则使用浏览器语言
        if (!savedLanguage) {
            const detectedLanguage = getBrowserLanguage();
            i18n.changeLanguage(detectedLanguage);
            localStorage.setItem('i18nextLng', detectedLanguage);
        }
    }, [i18n]);

    // 监听语言变化，动态切换Antd的locale
    useEffect(() => {
        setLocale(localeMap[i18n.language] || zhCN);
    }, [i18n.language]);

    // 切换语言的函数
    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    };

    return (
        <ConfigProvider locale={locale}>
            <Router>
                <AppContent i18n={i18n} handleLanguageChange={handleLanguageChange} />
            </Router>
        </ConfigProvider>
    );
}

export default App;

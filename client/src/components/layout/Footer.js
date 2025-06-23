import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    FacebookOutlined,
    TwitterOutlined,
    LinkedinOutlined,
    InstagramOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

const Footer = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <AntFooter style={{ background: '#001529', padding: '40px 50px 20px' }}>
            <div className="container">
                <Row gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Title level={4} style={{ color: '#fff' }}>
                            {t('app.title')}
                        </Title>
                        <Paragraph style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                            {t('app.subtitle')}
                        </Paragraph>
                        <Space>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FacebookOutlined style={{ color: '#fff', fontSize: 18 }} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <TwitterOutlined style={{ color: '#fff', fontSize: 18 }} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedinOutlined style={{ color: '#fff', fontSize: 18 }} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <InstagramOutlined style={{ color: '#fff', fontSize: 18 }} />
                            </a>
                        </Space>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Title level={4} style={{ color: '#fff' }}>
                            {t('footer.quickLinks')}
                        </Title>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: 10 }}>
                                <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    {t('nav.home')}
                                </Link>
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    {t('nav.about')}
                                </Link>
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    {t('nav.services')}
                                </Link>
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <Link to="/contact" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    {t('nav.contact')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/app" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    {t('nav.saas')}
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Title level={4} style={{ color: '#fff' }}>
                            {t('footer.contact')}
                        </Title>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: 10, color: 'rgba(255, 255, 255, 0.65)' }}>
                                <EnvironmentOutlined style={{ marginRight: 8 }} />
                                {t('footer.address')}
                            </li>
                            <li style={{ marginBottom: 10, color: 'rgba(255, 255, 255, 0.65)' }}>
                                <PhoneOutlined style={{ marginRight: 8 }} />
                                +86 123 4567 8910
                            </li>
                            <li style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                <MailOutlined style={{ marginRight: 8 }} />
                                contact@wiscreation.com
                            </li>
                        </ul>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Title level={4} style={{ color: '#fff' }}>
                            {t('footer.newsletter')}
                        </Title>
                        <Paragraph style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                            {t('footer.newsletterDesc')}
                        </Paragraph>
                        <div style={{ display: 'flex' }}>
                            <input
                                type="email"
                                placeholder={t('footer.emailPlaceholder')}
                                style={{
                                    flex: 1,
                                    padding: '8px 12px',
                                    border: 'none',
                                    borderRadius: '4px 0 0 4px'
                                }}
                            />
                            <button
                                style={{
                                    background: '#1890ff',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '0 15px',
                                    borderRadius: '0 4px 4px 0',
                                    cursor: 'pointer'
                                }}
                            >
                                {t('footer.subscribe')}
                            </button>
                        </div>
                    </Col>
                </Row>

                <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '30px 0 20px' }} />

                <Row justify="space-between" align="middle">
                    <Col>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
                            © {year} {t('app.title')}. {t('footer.rights')}
                        </Text>
                    </Col>
                    <Col>
                        <Space split={<Divider type="vertical" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />}>
                            <Link to="/privacy" style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
                                {t('footer.privacy')}
                            </Link>
                            <Link to="/terms" style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
                                {t('footer.terms')}
                            </Link>
                        </Space>
                    </Col>
                </Row>
            </div>
        </AntFooter>
    );
};

export default Footer;

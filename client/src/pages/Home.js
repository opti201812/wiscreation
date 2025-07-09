import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Typography, Card, Carousel, Statistic } from 'antd';
import { useTranslation } from 'react-i18next';
import {
    RocketOutlined,
    SafetyOutlined,
    TeamOutlined,
    CloudOutlined,
    CustomerServiceOutlined,
    LaptopOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

// 轮播图样式
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
    position: 'relative',
};

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* 轮播图 */}
            <Carousel autoplay>
                <div>
                    <div style={contentStyle}>
                        <div
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                lineHeight: 'normal',
                            }}
                        >
                            <Title
                                style={{
                                    color: '#fff',
                                    fontSize: '3rem',
                                    marginBottom: '20px',
                                }}
                            >
                                {t('home.hero.title')}
                            </Title>
                            <Paragraph
                                style={{
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    maxWidth: '800px',
                                    marginBottom: '30px',
                                }}
                            >
                                {t('home.hero.subtitle')}
                            </Paragraph>
                            <div>
                                <Button type="primary" size="large" style={{ marginRight: '15px' }}>
                                    <Link to="/services">{t('home.hero.cta')}</Link>
                                </Button>
                                <Button size="large">
                                    <Link to="/contact">{t('common.contactUs')}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                lineHeight: 'normal',
                            }}
                        >
                            <Title
                                style={{
                                    color: '#fff',
                                    fontSize: '3rem',
                                    marginBottom: '20px',
                                }}
                            >
                                {t('home.features.saas.title')}
                            </Title>
                            <Paragraph
                                style={{
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    maxWidth: '800px',
                                    marginBottom: '30px',
                                }}
                            >
                                {t('home.features.saas.description')}
                            </Paragraph>
                            <div>
                                <Button type="primary" size="large">
                                    <Link to="/app">{t('home.callToAction.button')}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>

            {/* 服务特点 */}
            <div className="section" style={{ background: '#f7f7f7' }}>
                <div className="container">
                    <div className="section-title">
                        <Title level={2}>{t('home.services.title')}</Title>
                        <Paragraph>
                            {t('home.services.subtitle')}
                        </Paragraph>
                    </div>

                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                style={{ height: '100%' }}
                                cover={
                                    <div style={{
                                        padding: '30px',
                                        textAlign: 'center',
                                        background: '#1890ff',
                                        color: '#fff'
                                    }}>
                                        <RocketOutlined style={{ fontSize: '3rem' }} />
                                    </div>
                                }
                            >
                                <Meta
                                    title={t('services.custom.title')}
                                    description={t('services.custom.description')}
                                />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Link to="/apps/asn1codec" style={{ display: 'block', height: '100%' }}>
                                <Card
                                    hoverable
                                    style={{ height: '100%' }}
                                    cover={
                                        <div style={{
                                            padding: '30px',
                                            textAlign: 'center',
                                            background: '#52c41a',
                                            color: '#fff'
                                        }}>
                                            <CloudOutlined style={{ fontSize: '3rem' }} />
                                        </div>
                                    }
                                >
                                    <Meta
                                        title={t('services.saas.title')}
                                        description={t('services.saas.description')}
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                style={{ height: '100%' }}
                                cover={
                                    <div style={{
                                        padding: '30px',
                                        textAlign: 'center',
                                        background: '#722ed1',
                                        color: '#fff'
                                    }}>
                                        <SafetyOutlined style={{ fontSize: '3rem' }} />
                                    </div>
                                }
                            >
                                <Meta
                                    title={t('services.security.title')}
                                    description={t('services.security.description')}
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* 关于我们 */}
            <div className="section">
                <div className="container">
                    <Row gutter={48} align="middle">
                        <Col xs={24} md={12}>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ color: '#1890ff', marginBottom: '16px' }}>{t('nav.about')}</h3>
                                <Title level={2} style={{ marginBottom: '24px' }}>
                                    {t('home.about.subtitle')}
                                </Title>
                                <Paragraph style={{ fontSize: '16px', marginBottom: '20px' }}>
                                    {t('home.about.description')}
                                </Paragraph>
                                <Paragraph style={{ fontSize: '16px', marginBottom: '30px' }}>
                                    {t('about.vision.description')}
                                </Paragraph>
                                <Button type="primary" size="large">
                                    <Link to="/about">{t('common.learnMore')}</Link>
                                </Button>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Card style={{ textAlign: 'center', height: '180px' }}>
                                        <TeamOutlined style={{ fontSize: '36px', color: '#1890ff', marginBottom: '12px' }} />
                                        <Statistic title={t('home.stats.team')} value="20+" />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card style={{ textAlign: 'center', height: '180px' }}>
                                        <LaptopOutlined style={{ fontSize: '36px', color: '#52c41a', marginBottom: '12px' }} />
                                        <Statistic title={t('home.stats.projects')} value="100+" />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card style={{ textAlign: 'center', height: '180px' }}>
                                        <CustomerServiceOutlined style={{ fontSize: '36px', color: '#fa8c16', marginBottom: '12px' }} />
                                        <Statistic title={t('home.stats.clients')} value="50+" />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card style={{ textAlign: 'center', height: '180px' }}>
                                        <RocketOutlined style={{ fontSize: '36px', color: '#722ed1', marginBottom: '12px' }} />
                                        <Statistic title={t('home.stats.years')} value="5+" suffix={t('home.stats.yearsSuffix')} />
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* 联系我们 */}
            <div className="section" style={{ background: '#f7f7f7' }}>
                <div className="container">
                    <div className="section-title">
                        <Title level={2}>{t('nav.contact')}</Title>
                        <Paragraph>
                            {t('contact.subtitle')}
                        </Paragraph>
                    </div>

                    <Row justify="center">
                        <Col xs={24} md={12} lg={8}>
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <Button type="primary" size="large" style={{ height: 'auto', padding: '12px 40px' }}>
                                    <Link to="/contact" style={{ fontSize: '18px' }}>{t('home.callToAction.button')}</Link>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;

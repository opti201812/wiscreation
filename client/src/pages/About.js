import React from 'react';
import { Row, Col, Typography, Card, Timeline, Image } from 'antd';
import { ClockCircleOutlined, TrophyOutlined, TeamOutlined, RocketOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="container" style={{ padding: '50px 0' }}>
            {/* 页面标题 */}
            <div className="section-title">
                <Title level={2}>{t('about.title')}</Title>
                <Paragraph>
                    {t('about.subtitle')}
                </Paragraph>
            </div>

            {/* 公司简介 */}
            <Row gutter={[48, 48]} align="middle" style={{ marginBottom: '60px' }}>
                <Col xs={24} md={12}>
                    <Title level={3} style={{ marginBottom: '24px' }}>{t('about.intro.title')}</Title>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                        {t('about.intro.content')}
                    </Paragraph>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                        {t('about.mission.description')}
                    </Paragraph>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                        {t('about.vision.description')}
                    </Paragraph>
                </Col>
                <Col xs={24} md={12} style={{ textAlign: 'center' }}>
                    <Image
                        src="https://placehold.co/600x400/e6f7ff/1890ff?text=WisCreation"
                        alt={t('about.title')}
                        style={{ maxWidth: '100%', borderRadius: '8px' }}
                    />
                </Col>
            </Row>

            {/* 核心价值观 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ textAlign: 'center', marginBottom: '40px' }}>
                    {t('about.values.title')}
                </Title>
                <Row gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={6}>
                        <Card
                            hoverable
                            style={{ height: '100%', textAlign: 'center' }}
                            cover={
                                <div style={{ padding: '30px', color: '#1890ff', fontSize: '48px' }}>
                                    <TeamOutlined />
                                </div>
                            }
                        >
                            <Title level={4}>{t('about.values.teamwork')}</Title>
                            <Paragraph>
                                {t('about.team.description')}
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card
                            hoverable
                            style={{ height: '100%', textAlign: 'center' }}
                            cover={
                                <div style={{ padding: '30px', color: '#52c41a', fontSize: '48px' }}>
                                    <TrophyOutlined />
                                </div>
                            }
                        >
                            <Title level={4}>{t('about.values.excellence')}</Title>
                            <Paragraph>
                                {t('services.quality')}
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card
                            hoverable
                            style={{ height: '100%', textAlign: 'center' }}
                            cover={
                                <div style={{ padding: '30px', color: '#fa8c16', fontSize: '48px' }}>
                                    <RocketOutlined />
                                </div>
                            }
                        >
                            <Title level={4}>{t('about.values.innovation')}</Title>
                            <Paragraph>
                                {t('services.innovation')}
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card
                            hoverable
                            style={{ height: '100%', textAlign: 'center' }}
                            cover={
                                <div style={{ padding: '30px', color: '#722ed1', fontSize: '48px' }}>
                                    <ClockCircleOutlined />
                                </div>
                            }
                        >
                            <Title level={4}>{t('about.values.integrity')}</Title>
                            <Paragraph>
                                {t('services.integrity')}
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* 发展历程 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ textAlign: 'center', marginBottom: '40px' }}>
                    {t('about.history.title')}
                </Title>
                <Timeline mode="alternate" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Timeline.Item color="green">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>{t('about.history.milestones.item1')}</Title>
                            <Paragraph>
                                {t('about.history.milestone1')}
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="blue">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>{t('about.history.milestones.item2')}</Title>
                            <Paragraph>
                                {t('about.history.milestone2')}
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="red">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>{t('about.history.milestones.item3')}</Title>
                            <Paragraph>
                                {t('about.history.milestone3')}
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="orange">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>{t('about.history.milestones.item4')}</Title>
                            <Paragraph>
                                {t('about.history.milestone4')}
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="purple">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>{t('about.history.milestones.item5')}</Title>
                            <Paragraph>
                                {t('about.history.milestone5')}
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>{t('about.history.milestones.item6')}</Title>
                            <Paragraph>
                                {t('about.history.milestone6')}
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>
    );
};

export default About;

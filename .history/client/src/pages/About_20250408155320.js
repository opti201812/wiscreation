import React from 'react';
import { Row, Col, Typography, Card, Timeline, Image } from 'antd';
import { ClockCircleOutlined, TrophyOutlined, TeamOutlined, RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => {
    return (
        <div className="container" style={{ padding: '50px 0' }}>
            {/* 页面标题 */}
            <div className="section-title">
                <Title level={2}>关于我们</Title>
                <Paragraph>
                    了解WisCreation的发展历程与企业文化
                </Paragraph>
            </div>

            {/* 公司简介 */}
            <Row gutter={[48, 48]} align="middle" style={{ marginBottom: '60px' }}>
                <Col xs={24} md={12}>
                    <Title level={3} style={{ marginBottom: '24px' }}>公司简介</Title>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                        WisCreation成立于2018年，是一家专注于为企业提供软件解决方案的科技公司。我们的团队由一群充满激情和创新精神的技术专家组成，致力于通过技术的力量帮助企业实现数字化转型。
                    </Paragraph>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                        我们的使命是通过提供高质量的软件产品和服务，帮助企业提高效率、降低成本、增强竞争力。我们相信，技术应该是简单易用的，能够真正解决企业面临的实际问题。
                    </Paragraph>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                        经过多年的发展，WisCreation已经为超过50家企业提供了定制软件开发、SaaS服务和技术咨询服务，涵盖了金融、零售、教育、医疗等多个行业。
                    </Paragraph>
                </Col>
                <Col xs={24} md={12} style={{ textAlign: 'center' }}>
                    <Image
                        src="https://placehold.co/600x400/e6f7ff/1890ff?text=WisCreation"
                        alt="公司照片"
                        style={{ maxWidth: '100%', borderRadius: '8px' }}
                    />
                </Col>
            </Row>

            {/* 核心价值观 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ textAlign: 'center', marginBottom: '40px' }}>
                    我们的核心价值观
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
                            <Title level={4}>团队协作</Title>
                            <Paragraph>
                                我们相信团队的力量，每个成员都是团队中不可或缺的一部分。
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
                            <Title level={4}>卓越品质</Title>
                            <Paragraph>
                                我们追求卓越，致力于提供超出客户期望的产品和服务。
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
                            <Title level={4}>创新精神</Title>
                            <Paragraph>
                                我们鼓励创新思维，不断探索新技术和解决方案。
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
                            <Title level={4}>诚信正直</Title>
                            <Paragraph>
                                我们以诚信为本，与客户建立长期互信的合作关系。
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* 发展历程 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ textAlign: 'center', marginBottom: '40px' }}>
                    发展历程
                </Title>
                <Timeline mode="alternate" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Timeline.Item color="green">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>2018年</Title>
                            <Paragraph>
                                WisCreation正式成立，开始为中小企业提供网站和应用开发服务。
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="blue">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>2019年</Title>
                            <Paragraph>
                                团队扩展到10人，开始为大型企业提供定制软件开发服务。
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="red">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>2020年</Title>
                            <Paragraph>
                                成功开发并推出首款SaaS产品，为企业提供数字化解决方案。
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="orange">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>2021年</Title>
                            <Paragraph>
                                公司获得天使轮融资，团队扩展到20人，设立研发中心。
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="purple">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>2022年</Title>
                            <Paragraph>
                                SaaS产品用户数突破30家企业，开始布局云计算和人工智能领域。
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <div style={{ padding: '20px' }}>
                            <Title level={4}>2023年至今</Title>
                            <Paragraph>
                                成功服务50+企业客户，产品持续迭代优化，不断探索新技术应用。
                            </Paragraph>
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>
    );
};

export default About; 
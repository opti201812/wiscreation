import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Typography, Card, Carousel, Statistic } from 'antd';
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
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79',
    position: 'relative',
};

const Home = () => {
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
                                专业软件解决方案
                            </Title>
                            <Paragraph
                                style={{
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    maxWidth: '800px',
                                    marginBottom: '30px',
                                }}
                            >
                                我们致力于为企业提供高质量的定制软件服务和创新的SaaS解决方案
                            </Paragraph>
                            <div>
                                <Button type="primary" size="large" style={{ marginRight: '15px' }}>
                                    <Link to="/services">了解更多</Link>
                                </Button>
                                <Button size="large">
                                    <Link to="/contact">联系我们</Link>
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
                                创新SaaS产品
                            </Title>
                            <Paragraph
                                style={{
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    maxWidth: '800px',
                                    marginBottom: '30px',
                                }}
                            >
                                体验我们的云服务产品，帮助您的企业更高效、更智能地运营
                            </Paragraph>
                            <div>
                                <Button type="primary" size="large">
                                    <Link to="/app">立即体验</Link>
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
                        <Title level={2}>我们的服务</Title>
                        <Paragraph>
                            提供全方位的软件开发服务与创新的云端解决方案
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
                                    title="定制软件开发"
                                    description="根据您的需求定制开发各类软件应用，从需求分析到设计开发再到上线维护，提供端到端解决方案。"
                                />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
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
                                    title="SaaS服务"
                                    description="提供基于云的软件即服务解决方案，帮助企业降低IT成本，提高业务灵活性和可扩展性。"
                                />
                            </Card>
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
                                    title="网络安全服务"
                                    description="为您的系统和数据提供全面的安全保障，包括安全评估、漏洞扫描、安全加固等服务。"
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
                                <h3 style={{ color: '#1890ff', marginBottom: '16px' }}>关于我们</h3>
                                <Title level={2} style={{ marginBottom: '24px' }}>
                                    专业的软件开发团队，为您提供优质服务
                                </Title>
                                <Paragraph style={{ fontSize: '16px', marginBottom: '20px' }}>
                                    WisCreation是一家专注于为企业提供软件解决方案的技术公司。我们拥有经验丰富的开发团队，专注于为客户提供高质量的软件产品和服务。
                                </Paragraph>
                                <Paragraph style={{ fontSize: '16px', marginBottom: '30px' }}>
                                    我们相信技术的力量可以改变企业的运营方式，通过我们的服务，帮助企业实现数字化转型，提高效率和竞争力。
                                </Paragraph>
                                <Button type="primary" size="large">
                                    <Link to="/about">了解更多</Link>
                                </Button>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Card style={{ textAlign: 'center', height: '180px' }}>
                                        <TeamOutlined style={{ fontSize: '36px', color: '#1890ff', marginBottom: '12px' }} />
                                        <Statistic title="专业团队" value="20+" />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card style={{ textAlign: 'center', height: '180px' }}>
                                        <LaptopOutlined style={{ fontSize: '36px', color: '#52c41a', marginBottom: '12px' }} />
                                        <Statistic title="成功项目" value="100+" />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card style={{ textAlign: 'center', height: '180px' }}>
                                        <CustomerServiceOutlined style={{ fontSize: '36px', color: '#fa8c16', marginBottom: '12px' }} />
                                        <Statistic title="服务客户" value="50+" />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card style={{ textAlign: 'center', height: '180px' }}>
                                        <RocketOutlined style={{ fontSize: '36px', color: '#722ed1', marginBottom: '12px' }} />
                                        <Statistic title="发展年限" value="5+" suffix="年" />
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
                        <Title level={2}>联系我们</Title>
                        <Paragraph>
                            有任何问题或合作意向，欢迎随时与我们联系
                        </Paragraph>
                    </div>

                    <Row justify="center">
                        <Col xs={24} md={12} lg={8}>
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <Button type="primary" size="large" style={{ height: 'auto', padding: '12px 40px' }}>
                                    <Link to="/contact" style={{ fontSize: '18px' }}>立即联系</Link>
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
import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';
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
    const year = new Date().getFullYear();

    return (
        <AntFooter style={{ background: '#001529', padding: '40px 50px 20px' }}>
            <div className="container">
                <Row gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Title level={4} style={{ color: '#fff' }}>
                            WisCreation
                        </Title>
                        <Paragraph style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                            为企业提供创新的软件解决方案和SaaS服务，助力企业数字化转型。
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
                            快速链接
                        </Title>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: 10 }}>
                                <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    首页
                                </Link>
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    关于我们
                                </Link>
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    服务与产品
                                </Link>
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <Link to="/contact" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    联系我们
                                </Link>
                            </li>
                            <li>
                                <Link to="/app" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                                    SaaS应用
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Title level={4} style={{ color: '#fff' }}>
                            联系方式
                        </Title>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: 10, color: 'rgba(255, 255, 255, 0.65)' }}>
                                <EnvironmentOutlined style={{ marginRight: 8 }} />
                                上海市浦东新区张江高科技园区
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
                            订阅通讯
                        </Title>
                        <Paragraph style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                            订阅我们的通讯，获取最新产品和服务信息。
                        </Paragraph>
                        <div style={{ display: 'flex' }}>
                            <input
                                type="email"
                                placeholder="您的邮箱地址"
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
                                订阅
                            </button>
                        </div>
                    </Col>
                </Row>

                <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '30px 0 20px' }} />

                <Row justify="space-between" align="middle">
                    <Col>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
                            © {year} WisCreation. 保留所有权利。
                        </Text>
                    </Col>
                    <Col>
                        <Space split={<Divider type="vertical" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />}>
                            <Link to="/privacy" style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
                                隐私政策
                            </Link>
                            <Link to="/terms" style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
                                服务条款
                            </Link>
                        </Space>
                    </Col>
                </Row>
            </div>
        </AntFooter>
    );
};

export default Footer;

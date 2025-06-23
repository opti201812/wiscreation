import React from 'react';
import { Row, Col, Typography, Card, List, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import {
    DesktopOutlined,
    CloudOutlined,
    SafetyOutlined,
    AppstoreOutlined,
    MobileOutlined,
    DatabaseOutlined,
    RobotOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const Services = () => {
    const { t } = useTranslation();

    // 服务列表
    const servicesList = [
        {
            id: 1,
            icon: <DesktopOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
            title: t('services.custom.title'),
            description: t('services.custom.description'),
            features: t('services.webDev.features', { returnObjects: true }),
        },
        {
            id: 2,
            icon: <CloudOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
            title: t('services.saas.title'),
            description: t('services.saas.description'),
            features: t('services.cloudSolutions.features', { returnObjects: true }),
        },
        {
            id: 3,
            icon: <MobileOutlined style={{ fontSize: '48px', color: '#fa8c16' }} />,
            title: t('services.mobile.title'),
            description: t('services.mobile.description'),
            features: t('services.mobileDev.features', { returnObjects: true }),
        },
        {
            id: 4,
            icon: <SafetyOutlined style={{ fontSize: '48px', color: '#722ed1' }} />,
            title: t('services.security.title'),
            description: t('services.security.description'),
            features: t('services.security.features', { returnObjects: true }),
        },
    ];

    // 技术栈列表
    const techStackList = [
        {
            category: t('services.techStacks.frontend'),
            items: ['React', 'Vue.js', 'Angular', 'TypeScript', 'HTML5/CSS3', 'Ant Design', 'Material UI'],
        },
        {
            category: t('services.techStacks.backend'),
            items: ['Node.js', 'Java', 'Python', 'Go', 'Ruby on Rails', 'ASP.NET Core'],
        },
        {
            category: t('services.techStacks.database'),
            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL Server', 'Oracle'],
        },
        {
            category: t('services.techStacks.cloud'),
            items: ['AWS', 'Azure', 'Google Cloud', 'Alibaba Cloud', 'Tencent Cloud'],
        },
        {
            category: t('services.techStacks.mobile'),
            items: ['React Native', 'Flutter', 'iOS/Swift', 'Android/Kotlin', 'WeChat Mini Program'],
        },
    ];

    // 合作案例列表
    const caseStudies = [
        {
            title: t('services.caseStudies.case1.title'),
            description: t('services.caseStudies.case1.description'),
            tags: t('services.caseStudies.case1.tags', { returnObjects: true }),
        },
        {
            title: t('services.caseStudies.case2.title'),
            description: t('services.caseStudies.case2.description'),
            tags: t('services.caseStudies.case2.tags', { returnObjects: true }),
        },
        {
            title: t('services.caseStudies.case3.title'),
            description: t('services.caseStudies.case3.description'),
            tags: t('services.caseStudies.case3.tags', { returnObjects: true }),
        },
    ];

    return (
        <div className="container" style={{ padding: '50px 0' }}>
            {/* 页面标题 */}
            <div className="section-title">
                <Title level={2}>{t('services.title')}</Title>
                <Paragraph>
                    {t('services.subtitle')}
                </Paragraph>
            </div>

            {/* 主要服务 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ marginBottom: '40px' }}>{t('services.main.title')}</Title>
                <Row gutter={[32, 32]}>
                    {servicesList.map(service => (
                        <Col xs={24} md={12} key={service.id}>
                            <Card
                                hoverable
                                style={{ height: '100%' }}
                                actions={[
                                    <Button type="primary">{t('common.learnMore')}</Button>,
                                    <Button>{t('common.contactUs')}</Button>,
                                ]}
                            >
                                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                                    {service.icon}
                                </div>
                                <Meta
                                    title={<Title level={4}>{service.title}</Title>}
                                    description={
                                        <div>
                                            <Paragraph>{service.description}</Paragraph>
                                            <List
                                                itemLayout="horizontal"
                                                dataSource={service.features}
                                                renderItem={item => (
                                                    <List.Item style={{ padding: '8px 0' }}>
                                                        <CheckCircleOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
                                                        {item}
                                                    </List.Item>
                                                )}
                                            />
                                        </div>
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* 专业领域 */}
            <div style={{ marginBottom: '60px', background: '#f7f7f7', padding: '40px', borderRadius: '8px' }}>
                <Title level={3} style={{ marginBottom: '40px', textAlign: 'center' }}>
                    {t('services.specialization.title')}
                </Title>
                <Row gutter={[32, 32]}>
                    <Col xs={24} sm={12} md={8}>
                        <Card style={{ height: '100%', textAlign: 'center' }}>
                            <AppstoreOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
                            <Title level={4}>{t('services.specialization.enterprise.title')}</Title>
                            <Paragraph>
                                {t('services.specialization.enterprise.description')}
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card style={{ height: '100%', textAlign: 'center' }}>
                            <DatabaseOutlined style={{ fontSize: '48px', color: '#52c41a', marginBottom: '16px' }} />
                            <Title level={4}>{t('services.specialization.data.title')}</Title>
                            <Paragraph>
                                {t('services.specialization.data.description')}
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card style={{ height: '100%', textAlign: 'center' }}>
                            <RobotOutlined style={{ fontSize: '48px', color: '#fa8c16', marginBottom: '16px' }} />
                            <Title level={4}>{t('services.specialization.ai.title')}</Title>
                            <Paragraph>
                                {t('services.specialization.ai.description')}
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* 技术栈 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ marginBottom: '40px', textAlign: 'center' }}>
                    {t('services.techStacks.title')}
                </Title>
                <Row gutter={[32, 32]}>
                    {techStackList.map((tech, index) => (
                        <Col xs={24} sm={12} md={8} lg={4} key={index}>
                            <Card style={{ height: '100%' }}>
                                <Title level={4} style={{ textAlign: 'center', marginBottom: '16px' }}>
                                    {tech.category}
                                </Title>
                                <List
                                    size="small"
                                    dataSource={tech.items}
                                    renderItem={item => (
                                        <List.Item style={{ justifyContent: 'center' }}>
                                            {item}
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* 合作案例 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ marginBottom: '40px' }}>{t('services.caseStudies.title')}</Title>
                {caseStudies.map((cs, index) => (
                    <div key={index} style={{ marginBottom: '30px' }}>
                        <Card>
                            <Title level={4}>{cs.title}</Title>
                            <Paragraph>{cs.description}</Paragraph>
                            <div>
                                {cs.tags.map((tag, idx) => (
                                    <Text key={idx} code style={{ marginRight: '10px' }}>
                                        {tag}
                                    </Text>
                                ))}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            {/* 服务流程 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ marginBottom: '40px', textAlign: 'center' }}>
                    {t('services.process.title')}
                </Title>
                <Row justify="center">
                    <Col xs={24} md={18}>
                        <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <List
                                bordered={false}
                                dataSource={[
                                    { step: '1', title: t('services.process.step1.title'), desc: t('services.process.step1.description') },
                                    { step: '2', title: t('services.process.step2.title'), desc: t('services.process.step2.description') },
                                    { step: '3', title: t('services.process.step3.title'), desc: t('services.process.step3.description') },
                                    { step: '4', title: t('services.process.step4.title'), desc: t('services.process.step4.description') },
                                    { step: '5', title: t('services.process.step5.title'), desc: t('services.process.step5.description') },
                                    { step: '6', title: t('services.process.step6.title'), desc: t('services.process.step6.description') },
                                ]}
                                renderItem={item => (
                                    <List.Item style={{ padding: '20px 0', borderBottom: '1px dashed #e8e8e8' }}>
                                        <List.Item.Meta
                                            avatar={
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    background: '#1890ff',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    color: '#fff',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px'
                                                }}>
                                                    {item.step}
                                                </div>
                                            }
                                            title={<Title level={4} style={{ marginBottom: '8px' }}>{item.title}</Title>}
                                            description={item.desc}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </div>

            {/* 联系我们 */}
            <div style={{ textAlign: 'center', background: '#f0f2f5', padding: '40px', borderRadius: '8px' }}>
                <Title level={3}>{t('services.callToAction.title')}</Title>
                <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
                    {t('services.callToAction.subtitle')}
                </Paragraph>
                <Button type="primary" size="large" style={{ height: 'auto', padding: '10px 30px' }}>
                    {t('services.callToAction.button')}
                </Button>
            </div>
        </div>
    );
};

export default Services; 
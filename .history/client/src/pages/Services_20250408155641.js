import React from 'react';
import { Row, Col, Typography, Card, List, Divider, Button } from 'antd';
import {
    DesktopOutlined,
    CloudOutlined,
    SafetyOutlined,
    AppstoreOutlined,
    MobileOutlined,
    DatabaseOutlined,
    RobotOutlined,
    TeamOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const Services = () => {
    // 服务列表
    const servicesList = [
        {
            id: 1,
            icon: <DesktopOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
            title: '定制软件开发',
            description: '根据您的业务需求，为您量身定制的软件解决方案，从需求分析、设计开发到上线维护。',
            features: [
                '需求分析与技术咨询',
                '原型设计与用户体验',
                '前端与后端开发',
                '质量保证与测试',
                '部署与上线',
                '持续维护与升级',
            ],
        },
        {
            id: 2,
            icon: <CloudOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
            title: 'SaaS服务',
            description: '基于云的软件即服务解决方案，帮助企业降低IT成本，提高业务灵活性和可扩展性。',
            features: [
                '企业管理系统',
                '客户关系管理(CRM)',
                '项目管理工具',
                '任务协作平台',
                '数据分析与报表',
                '多终端支持与访问',
            ],
        },
        {
            id: 3,
            icon: <MobileOutlined style={{ fontSize: '48px', color: '#fa8c16' }} />,
            title: '移动应用开发',
            description: '专业的移动应用开发服务，支持iOS和Android平台，为您的业务提供移动化解决方案。',
            features: [
                'iOS与Android原生应用',
                'React Native跨平台应用',
                '移动UI/UX设计',
                '应用性能优化',
                '应用商店发布',
                '应用维护与更新',
            ],
        },
        {
            id: 4,
            icon: <SafetyOutlined style={{ fontSize: '48px', color: '#722ed1' }} />,
            title: '网络安全服务',
            description: '为您的系统和数据提供全面的安全保障，包括安全评估、漏洞扫描、安全加固等服务。',
            features: [
                '安全风险评估',
                '渗透测试与漏洞扫描',
                '安全架构咨询',
                '数据加密与保护',
                '身份认证与访问控制',
                '安全应急响应',
            ],
        },
    ];

    // 技术栈列表
    const techStackList = [
        {
            category: '前端技术',
            items: ['React', 'Vue.js', 'Angular', 'TypeScript', 'HTML5/CSS3', 'Ant Design', 'Material UI'],
        },
        {
            category: '后端技术',
            items: ['Node.js', 'Java', 'Python', 'Go', 'Ruby on Rails', 'ASP.NET Core'],
        },
        {
            category: '数据库',
            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL Server', 'Oracle'],
        },
        {
            category: '云平台',
            items: ['AWS', 'Azure', 'Google Cloud', 'Alibaba Cloud', 'Tencent Cloud'],
        },
        {
            category: '移动开发',
            items: ['React Native', 'Flutter', 'iOS/Swift', 'Android/Kotlin', 'WeChat Mini Program'],
        },
    ];

    // 合作案例列表
    const caseStudies = [
        {
            title: '某大型零售企业管理系统',
            description: '为客户开发了一套全面的企业管理系统，包括库存管理、销售分析、员工管理等模块，帮助客户提高了30%的运营效率。',
            tags: ['企业管理', 'React', 'Node.js', 'MySQL'],
        },
        {
            title: '金融科技数据分析平台',
            description: '为金融机构开发的数据分析平台，支持实时数据处理和可视化，帮助客户更好地理解市场趋势和客户行为。',
            tags: ['数据分析', 'Python', 'React', 'MongoDB'],
        },
        {
            title: '教育行业在线学习平台',
            description: '为教育机构打造的在线学习平台，支持课程管理、学生互动、作业评分等功能，获得了用户的高度评价。',
            tags: ['在线教育', 'Vue.js', 'Java', 'PostgreSQL'],
        },
    ];

    return (
        <div className="container" style={{ padding: '50px 0' }}>
            {/* 页面标题 */}
            <div className="section-title">
                <Title level={2}>服务与产品</Title>
                <Paragraph>
                    我们提供全方位的软件开发服务与创新的云端解决方案
                </Paragraph>
            </div>

            {/* 主要服务 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ marginBottom: '40px' }}>我们的服务</Title>
                <Row gutter={[32, 32]}>
                    {servicesList.map(service => (
                        <Col xs={24} md={12} key={service.id}>
                            <Card
                                hoverable
                                style={{ height: '100%' }}
                                actions={[
                                    <Button type="primary">了解详情</Button>,
                                    <Button>联系我们</Button>,
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
                    我们的专业领域
                </Title>
                <Row gutter={[32, 32]}>
                    <Col xs={24} sm={12} md={8}>
                        <Card style={{ height: '100%', textAlign: 'center' }}>
                            <AppstoreOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
                            <Title level={4}>企业应用</Title>
                            <Paragraph>
                                为企业定制开发的各类管理系统与办公应用，提高企业运营效率。
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card style={{ height: '100%', textAlign: 'center' }}>
                            <DatabaseOutlined style={{ fontSize: '48px', color: '#52c41a', marginBottom: '16px' }} />
                            <Title level={4}>数据平台</Title>
                            <Paragraph>
                                数据收集、分析与可视化平台，帮助企业实现数据驱动的决策。
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card style={{ height: '100%', textAlign: 'center' }}>
                            <RobotOutlined style={{ fontSize: '48px', color: '#fa8c16', marginBottom: '16px' }} />
                            <Title level={4}>人工智能</Title>
                            <Paragraph>
                                人工智能与机器学习解决方案，为企业创造智能化的业务流程。
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* 技术栈 */}
            <div style={{ marginBottom: '60px' }}>
                <Title level={3} style={{ marginBottom: '40px', textAlign: 'center' }}>
                    我们的技术栈
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
                <Title level={3} style={{ marginBottom: '40px' }}>成功案例</Title>
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
                    我们的服务流程
                </Title>
                <Row justify="center">
                    <Col xs={24} md={18}>
                        <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <List
                                bordered={false}
                                dataSource={[
                                    { step: '1', title: '需求沟通', desc: '深入了解您的业务需求和目标，确定项目范围和预期成果。' },
                                    { step: '2', title: '方案制定', desc: '基于需求分析，制定详细的技术方案和项目计划，包括时间线和预算。' },
                                    { step: '3', title: '设计开发', desc: '按照方案执行设计和开发工作，定期向您展示进度并收集反馈。' },
                                    { step: '4', title: '测试验收', desc: '进行全面的测试和质量保证，确保产品符合要求并交付给您验收。' },
                                    { step: '5', title: '上线部署', desc: '协助您部署上线，提供必要的培训和文档，确保顺利过渡。' },
                                    { step: '6', title: '持续支持', desc: '提供持续的技术支持和维护服务，确保系统稳定运行并根据需求进行优化升级。' },
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
                <Title level={3}>准备开始您的项目？</Title>
                <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
                    联系我们，获取专业咨询和解决方案
                </Paragraph>
                <Button type="primary" size="large" style={{ height: 'auto', padding: '10px 30px' }}>
                    立即咨询
                </Button>
            </div>
        </div>
    );
};

export default Services; 
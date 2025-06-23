import React, { useState } from 'react';
import {
    Typography,
    Card,
    Row,
    Col,
    Tag,
    Progress,
    Button,
    Dropdown,
    Menu,
    Input,
    Space,
    Avatar,
    Tooltip,
    Tabs
} from 'antd';
import {
    SearchOutlined,
    PlusOutlined,
    EllipsisOutlined,
    TeamOutlined,
    CalendarOutlined,
    CheckCircleOutlined,
    FileOutlined,
    AppstoreOutlined,
    BarsOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Projects = () => {
    const [viewMode, setViewMode] = useState('grid');

    // 项目数据
    const projectsData = [
        {
            id: 1,
            name: '企业管理系统',
            description: '一个完整的企业资源管理系统，包含人事、财务、库存等模块',
            status: '进行中',
            progress: 75,
            startDate: '2023-03-01',
            endDate: '2023-06-30',
            members: [
                { id: 1, name: '张三', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                { id: 2, name: '李四', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
                { id: 3, name: '王五', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
                { id: 4, name: '赵六', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
            ],
            tags: ['Web', 'React', 'Node.js', 'MySQL'],
            tasksCompleted: 24,
            totalTasks: 32,
        },
        {
            id: 2,
            name: '电商平台',
            description: '面向中小企业的B2C电商平台解决方案',
            status: '进行中',
            progress: 45,
            startDate: '2023-04-01',
            endDate: '2023-08-31',
            members: [
                { id: 1, name: '张三', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                { id: 2, name: '李四', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
                { id: 5, name: '钱七', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
            ],
            tags: ['Web', 'React', 'Express', 'MongoDB'],
            tasksCompleted: 15,
            totalTasks: 40,
        },
        {
            id: 3,
            name: '移动应用',
            description: '基于React Native的跨平台移动应用',
            status: '已完成',
            progress: 100,
            startDate: '2023-01-15',
            endDate: '2023-04-15',
            members: [
                { id: 3, name: '王五', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
                { id: 4, name: '赵六', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
            ],
            tags: ['Mobile', 'React Native', 'Firebase'],
            tasksCompleted: 28,
            totalTasks: 28,
        },
        {
            id: 4,
            name: '营销自动化工具',
            description: '帮助企业实现营销流程自动化的SaaS工具',
            status: '未开始',
            progress: 0,
            startDate: '2023-07-01',
            endDate: '2023-12-31',
            members: [
                { id: 2, name: '李四', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
                { id: 5, name: '钱七', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
            ],
            tags: ['Web', 'Vue.js', 'Python', 'Django'],
            tasksCompleted: 0,
            totalTasks: 45,
        },
        {
            id: 5,
            name: '数据分析平台',
            description: '企业级数据可视化和分析平台',
            status: '延期',
            progress: 60,
            startDate: '2023-02-01',
            endDate: '2023-05-01',
            members: [
                { id: 1, name: '张三', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                { id: 3, name: '王五', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
                { id: 4, name: '赵六', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
            ],
            tags: ['Web', 'Python', 'D3.js', 'PostgreSQL'],
            tasksCompleted: 32,
            totalTasks: 50,
        },
        {
            id: 6,
            name: '内容管理系统',
            description: '面向中小企业和内容创作者的CMS平台',
            status: '进行中',
            progress: 30,
            startDate: '2023-05-01',
            endDate: '2023-09-30',
            members: [
                { id: 2, name: '李四', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
                { id: 5, name: '钱七', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
            ],
            tags: ['Web', 'React', 'Node.js', 'MongoDB'],
            tasksCompleted: 12,
            totalTasks: 35,
        },
    ];

    // 获取项目状态对应的颜色
    const getStatusColor = (status) => {
        switch (status) {
            case '进行中': return 'processing';
            case '已完成': return 'success';
            case '未开始': return 'default';
            case '延期': return 'error';
            default: return 'default';
        }
    };

    // 项目卡片
    const ProjectCard = ({ project }) => {
        const actionMenu = (
            <Menu>
                <Menu.Item key="1" icon={<CheckCircleOutlined />}>标记为已完成</Menu.Item>
                <Menu.Item key="2" icon={<TeamOutlined />}>管理团队</Menu.Item>
                <Menu.Item key="3" icon={<FileOutlined />}>项目文档</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="4" danger>删除项目</Menu.Item>
            </Menu>
        );

        return (
            <Card
                hoverable
                style={{ marginBottom: 16 }}
                actions={[
                    <Tooltip title="查看详情"><Button type="text" icon={<FileOutlined />} /></Tooltip>,
                    <Tooltip title="查看团队"><Button type="text" icon={<TeamOutlined />} /></Tooltip>,
                    <Dropdown overlay={actionMenu} placement="bottomRight">
                        <Button type="text" icon={<EllipsisOutlined />} />
                    </Dropdown>,
                ]}
            >
                <div style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <Title level={4} style={{ margin: 0 }}>{project.name}</Title>
                        <Tag color={getStatusColor(project.status)}>{project.status}</Tag>
                    </div>
                    <Text type="secondary">{project.description}</Text>
                </div>

                <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <Text type="secondary">进度</Text>
                        <Text>{project.progress}%</Text>
                    </div>
                    <Progress percent={project.progress} size="small" status={project.status === '延期' ? 'exception' : undefined} />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <Space wrap>
                        {project.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Space>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div>
                        <Text type="secondary" style={{ display: 'block' }}>
                            <CalendarOutlined style={{ marginRight: 4 }} />
                            {project.startDate} 至 {project.endDate}
                        </Text>
                    </div>
                    <div>
                        <Text type="secondary">
                            <CheckCircleOutlined style={{ marginRight: 4 }} />
                            {project.tasksCompleted}/{project.totalTasks} 任务
                        </Text>
                    </div>
                </div>

                <div>
                    <Avatar.Group maxCount={3}>
                        {project.members.map(member => (
                            <Tooltip key={member.id} title={member.name}>
                                <Avatar src={member.avatar} />
                            </Tooltip>
                        ))}
                    </Avatar.Group>
                </div>
            </Card>
        );
    };

    // 项目列表行
    const ProjectListItem = ({ project }) => {
        const actionMenu = (
            <Menu>
                <Menu.Item key="1" icon={<CheckCircleOutlined />}>标记为已完成</Menu.Item>
                <Menu.Item key="2" icon={<TeamOutlined />}>管理团队</Menu.Item>
                <Menu.Item key="3" icon={<FileOutlined />}>项目文档</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="4" danger>删除项目</Menu.Item>
            </Menu>
        );

        return (
            <div style={{
                padding: '16px 0',
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <div style={{ marginRight: 16, width: '40%' }}>
                        <Title level={5} style={{ margin: 0 }}>{project.name}</Title>
                        <Text type="secondary">{project.description}</Text>
                    </div>

                    <div style={{ display: 'flex', gap: 16, width: '60%' }}>
                        <div>
                            <Tag color={getStatusColor(project.status)}>{project.status}</Tag>
                        </div>

                        <div style={{ width: 100 }}>
                            <Progress percent={project.progress} size="small" status={project.status === '延期' ? 'exception' : undefined} />
                        </div>

                        <div>
                            <Avatar.Group maxCount={3} size="small">
                                {project.members.map(member => (
                                    <Tooltip key={member.id} title={member.name}>
                                        <Avatar src={member.avatar} size="small" />
                                    </Tooltip>
                                ))}
                            </Avatar.Group>
                        </div>

                        <div>
                            <Text type="secondary">
                                <CalendarOutlined style={{ marginRight: 4 }} />
                                {project.startDate}
                            </Text>
                        </div>

                        <div>
                            <Text type="secondary">
                                <CheckCircleOutlined style={{ marginRight: 4 }} />
                                {project.tasksCompleted}/{project.totalTasks}
                            </Text>
                        </div>
                    </div>
                </div>

                <div>
                    <Dropdown overlay={actionMenu} placement="bottomRight">
                        <Button type="text" icon={<EllipsisOutlined />} />
                    </Dropdown>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Title level={2}>项目管理</Title>

            {/* 工具栏 */}
            <div style={{ marginBottom: 24, display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
                    <Input
                        placeholder="搜索项目..."
                        prefix={<SearchOutlined />}
                        style={{ maxWidth: 300 }}
                    />

                    <Tabs defaultActiveKey="all" style={{ marginBottom: 0 }}>
                        <TabPane tab="全部" key="all" />
                        <TabPane tab="进行中" key="in-progress" />
                        <TabPane tab="已完成" key="completed" />
                        <TabPane tab="未开始" key="not-started" />
                        <TabPane tab="延期" key="delayed" />
                    </Tabs>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button.Group>
                        <Tooltip title="网格视图">
                            <Button
                                type={viewMode === 'grid' ? 'primary' : 'default'}
                                icon={<AppstoreOutlined />}
                                onClick={() => setViewMode('grid')}
                            />
                        </Tooltip>
                        <Tooltip title="列表视图">
                            <Button
                                type={viewMode === 'list' ? 'primary' : 'default'}
                                icon={<BarsOutlined />}
                                onClick={() => setViewMode('list')}
                            />
                        </Tooltip>
                    </Button.Group>

                    <Button type="primary" icon={<PlusOutlined />}>
                        新建项目
                    </Button>
                </div>
            </div>

            {/* 项目视图 */}
            {viewMode === 'grid' ? (
                <Row gutter={[16, 16]}>
                    {projectsData.map(project => (
                        <Col xs={24} sm={12} lg={8} xl={6} key={project.id}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <div>
                    {projectsData.map(project => (
                        <ProjectListItem key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;

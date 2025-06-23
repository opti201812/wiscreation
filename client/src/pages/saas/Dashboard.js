import React from 'react';
import { Row, Col, Card, Statistic, Progress, Table, Typography, Button } from 'antd';
import {
    TeamOutlined,
    FileTextOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const Dashboard = () => {
    // 模拟任务数据
    const taskData = [
        {
            key: '1',
            title: '完成产品设计原型',
            project: '企业管理系统',
            priority: '高',
            status: '进行中',
            deadline: '2023-05-15',
        },
        {
            key: '2',
            title: '前端框架搭建',
            project: '企业管理系统',
            priority: '高',
            status: '进行中',
            deadline: '2023-05-18',
        },
        {
            key: '3',
            title: '数据库设计',
            project: '企业管理系统',
            priority: '中',
            status: '已完成',
            deadline: '2023-05-10',
        },
        {
            key: '4',
            title: '用户认证模块开发',
            project: '电商平台',
            priority: '高',
            status: '延期',
            deadline: '2023-05-05',
        },
        {
            key: '5',
            title: '支付接口集成',
            project: '电商平台',
            priority: '中',
            status: '未开始',
            deadline: '2023-05-20',
        },
    ];

    // 表格列定义
    const columns = [
        {
            title: '任务名称',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a href="#!">{text}</a>,
        },
        {
            title: '所属项目',
            dataIndex: 'project',
            key: 'project',
        },
        {
            title: '优先级',
            dataIndex: 'priority',
            key: 'priority',
            render: (text) => {
                let color = text === '高' ? 'red' : text === '中' ? 'orange' : 'green';
                return <span style={{ color }}>{text}</span>;
            },
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (text) => {
                let icon;
                let color;

                switch (text) {
                    case '已完成':
                        icon = <CheckCircleOutlined />;
                        color = 'green';
                        break;
                    case '进行中':
                        icon = <ClockCircleOutlined />;
                        color = 'blue';
                        break;
                    case '延期':
                        icon = <ExclamationCircleOutlined />;
                        color = 'red';
                        break;
                    default:
                        icon = null;
                        color = 'default';
                }

                return (
                    <span style={{ color }}>
                        {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
                        {text}
                    </span>
                );
            },
        },
        {
            title: '截止日期',
            dataIndex: 'deadline',
            key: 'deadline',
        },
        {
            title: '操作',
            key: 'action',
            render: () => (
                <Button size="small" type="link">
                    查看详情
                </Button>
            ),
        },
    ];

    return (
        <div>
            <Title level={2}>控制面板</Title>

            <Row gutter={[16, 16]}>
                {/* 统计卡片 */}
                <Col xs={24} sm={12} md={6}>
                    <Card>
                        <Statistic
                            title="进行中的项目"
                            value={2}
                            prefix={<TeamOutlined style={{ color: '#1890ff' }} />}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card>
                        <Statistic
                            title="总任务数"
                            value={24}
                            prefix={<FileTextOutlined style={{ color: '#52c41a' }} />}
                            valueStyle={{ color: '#52c41a' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card>
                        <Statistic
                            title="完成的任务"
                            value={16}
                            prefix={<CheckCircleOutlined style={{ color: '#faad14' }} />}
                            valueStyle={{ color: '#faad14' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card>
                        <Statistic
                            title="延期任务"
                            value={3}
                            prefix={<ClockCircleOutlined style={{ color: '#ff4d4f' }} />}
                            valueStyle={{ color: '#ff4d4f' }}
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
                {/* 项目进度 */}
                <Col xs={24} md={12}>
                    <Card title="项目进度" style={{ height: '100%' }}>
                        <div style={{ marginBottom: 20 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                <span>企业管理系统</span>
                                <span>67%</span>
                            </div>
                            <Progress percent={67} status="active" />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                <span>电商平台</span>
                                <span>42%</span>
                            </div>
                            <Progress percent={42} status="active" />
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                <span>移动应用</span>
                                <span>85%</span>
                            </div>
                            <Progress percent={85} status="active" />
                        </div>
                    </Card>
                </Col>

                {/* 团队成员活跃度 */}
                <Col xs={24} md={12}>
                    <Card title="团队活跃度" style={{ height: '100%' }}>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <Card size="small">
                                    <Statistic
                                        title="本周提交"
                                        value={28}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card size="small">
                                    <Statistic
                                        title="问题解决"
                                        value={12}
                                        valueStyle={{ color: '#cf1322' }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={24}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                                    <span>总体活跃度</span>
                                    <span>76%</span>
                                </div>
                                <Progress percent={76} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            {/* 任务列表 */}
            <Card title="我的任务" style={{ marginTop: 16 }}>
                <Table
                    columns={columns}
                    dataSource={taskData}
                    pagination={{ pageSize: 5 }}
                />
            </Card>
        </div>
    );
};

export default Dashboard;

import React from 'react';
import { Typography, Table, Tag, Space, Button, Input, Select, DatePicker } from 'antd';
import { SearchOutlined, PlusOutlined, FilterOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

const Tasks = () => {
    // 任务数据
    const tasksData = [
        {
            key: '1',
            id: 'TASK-001',
            title: '完成产品设计原型',
            project: '企业管理系统',
            assignee: '张三',
            priority: '高',
            status: '进行中',
            dueDate: '2023-05-15',
        },
        {
            key: '2',
            id: 'TASK-002',
            title: '前端框架搭建',
            project: '企业管理系统',
            assignee: '李四',
            priority: '高',
            status: '进行中',
            dueDate: '2023-05-18',
        },
        {
            key: '3',
            id: 'TASK-003',
            title: '数据库设计',
            project: '企业管理系统',
            assignee: '王五',
            priority: '中',
            status: '已完成',
            dueDate: '2023-05-10',
        },
        {
            key: '4',
            id: 'TASK-004',
            title: '用户认证模块开发',
            project: '电商平台',
            assignee: '张三',
            priority: '高',
            status: '延期',
            dueDate: '2023-05-05',
        },
        {
            key: '5',
            id: 'TASK-005',
            title: '支付接口集成',
            project: '电商平台',
            assignee: '李四',
            priority: '中',
            status: '未开始',
            dueDate: '2023-05-20',
        },
        {
            key: '6',
            id: 'TASK-006',
            title: '订单管理页面开发',
            project: '电商平台',
            assignee: '王五',
            priority: '低',
            status: '进行中',
            dueDate: '2023-05-25',
        },
        {
            key: '7',
            id: 'TASK-007',
            title: '性能优化',
            project: '移动应用',
            assignee: '张三',
            priority: '中',
            status: '未开始',
            dueDate: '2023-06-01',
        },
        {
            key: '8',
            id: 'TASK-008',
            title: 'Bug修复',
            project: '移动应用',
            assignee: '李四',
            priority: '高',
            status: '进行中',
            dueDate: '2023-05-15',
        },
    ];

    // 表格列定义
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 100,
        },
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
            filters: [
                { text: '企业管理系统', value: '企业管理系统' },
                { text: '电商平台', value: '电商平台' },
                { text: '移动应用', value: '移动应用' },
            ],
            onFilter: (value, record) => record.project.indexOf(value) === 0,
        },
        {
            title: '负责人',
            dataIndex: 'assignee',
            key: 'assignee',
            filters: [
                { text: '张三', value: '张三' },
                { text: '李四', value: '李四' },
                { text: '王五', value: '王五' },
            ],
            onFilter: (value, record) => record.assignee.indexOf(value) === 0,
        },
        {
            title: '优先级',
            dataIndex: 'priority',
            key: 'priority',
            render: (text) => {
                let color = text === '高' ? 'red' : text === '中' ? 'orange' : 'green';
                return <Tag color={color}>{text}</Tag>;
            },
            filters: [
                { text: '高', value: '高' },
                { text: '中', value: '中' },
                { text: '低', value: '低' },
            ],
            onFilter: (value, record) => record.priority.indexOf(value) === 0,
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (text) => {
                let color = '';
                switch (text) {
                    case '已完成':
                        color = 'success';
                        break;
                    case '进行中':
                        color = 'processing';
                        break;
                    case '未开始':
                        color = 'default';
                        break;
                    case '延期':
                        color = 'error';
                        break;
                    default:
                        color = 'default';
                }
                return <Tag color={color}>{text}</Tag>;
            },
            filters: [
                { text: '已完成', value: '已完成' },
                { text: '进行中', value: '进行中' },
                { text: '未开始', value: '未开始' },
                { text: '延期', value: '延期' },
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
        },
        {
            title: '截止日期',
            dataIndex: 'dueDate',
            key: 'dueDate',
            sorter: (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a href="#!">查看</a>
                    <a href="#!">编辑</a>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Title level={2}>任务管理</Title>

            {/* 搜索和筛选工具栏 */}
            <div style={{ marginBottom: 16, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                    <Input
                        placeholder="搜索任务..."
                        prefix={<SearchOutlined />}
                        style={{ maxWidth: 300 }}
                    />

                    <Select defaultValue="all" style={{ minWidth: 120 }}>
                        <Option value="all">所有项目</Option>
                        <Option value="企业管理系统">企业管理系统</Option>
                        <Option value="电商平台">电商平台</Option>
                        <Option value="移动应用">移动应用</Option>
                    </Select>

                    <Select defaultValue="all" style={{ minWidth: 120 }}>
                        <Option value="all">所有状态</Option>
                        <Option value="已完成">已完成</Option>
                        <Option value="进行中">进行中</Option>
                        <Option value="未开始">未开始</Option>
                        <Option value="延期">延期</Option>
                    </Select>

                    <RangePicker placeholder={['开始日期', '结束日期']} />
                </div>

                <div>
                    <Button type="primary" icon={<PlusOutlined />}>
                        新建任务
                    </Button>
                </div>
            </div>

            {/* 任务表格 */}
            <Table
                columns={columns}
                dataSource={tasksData}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total) => `共 ${total} 条记录`,
                }}
            />
        </div>
    );
};

export default Tasks; 
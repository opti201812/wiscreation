import React from 'react';
import { Row, Col, Typography, Form, Input, Button, Card, message } from 'antd';
import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
    const [form] = Form.useForm();

    // 提交表单
    const handleSubmit = (values) => {
        console.log('表单提交: ', values);
        message.success('您的消息已发送，我们将尽快与您联系！');
        form.resetFields();
    };

    // 联系信息
    const contactInfo = [
        {
            icon: <EnvironmentOutlined style={{ fontSize: '28px', color: '#1890ff' }} />,
            title: '公司地址',
            content: '上海市浦东新区张江高科技园区科苑路88号',
        },
        {
            icon: <PhoneOutlined style={{ fontSize: '28px', color: '#52c41a' }} />,
            title: '联系电话',
            content: '+86 123 4567 8910',
        },
        {
            icon: <MailOutlined style={{ fontSize: '28px', color: '#fa8c16' }} />,
            title: '电子邮箱',
            content: 'contact@wiscreation.com',
        },
        {
            icon: <ClockCircleOutlined style={{ fontSize: '28px', color: '#722ed1' }} />,
            title: '工作时间',
            content: '周一至周五 9:00 - 18:00',
        },
    ];

    return (
        <div className="container" style={{ padding: '50px 0' }}>
            {/* 页面标题 */}
            <div className="section-title">
                <Title level={2}>联系我们</Title>
                <Paragraph>
                    有任何问题或合作意向，欢迎随时与我们联系
                </Paragraph>
            </div>

            <Row gutter={[48, 48]}>
                {/* 联系表单 */}
                <Col xs={24} lg={14}>
                    <Card
                        title={<Title level={3}>发送消息</Title>}
                        style={{ height: '100%' }}
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                            requiredMark={false}
                        >
                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        label="您的姓名"
                                        name="name"
                                        rules={[{ required: true, message: '请输入您的姓名' }]}
                                    >
                                        <Input placeholder="请输入您的姓名" size="large" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        label="您的电话"
                                        name="phone"
                                        rules={[{ required: true, message: '请输入您的电话' }]}
                                    >
                                        <Input placeholder="请输入您的电话" size="large" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                label="电子邮箱"
                                name="email"
                                rules={[
                                    { required: true, message: '请输入您的电子邮箱' },
                                    { type: 'email', message: '请输入有效的电子邮箱地址' },
                                ]}
                            >
                                <Input placeholder="请输入您的电子邮箱" size="large" />
                            </Form.Item>

                            <Form.Item
                                label="公司名称"
                                name="company"
                            >
                                <Input placeholder="请输入您的公司名称（选填）" size="large" />
                            </Form.Item>

                            <Form.Item
                                label="咨询项目"
                                name="subject"
                                rules={[{ required: true, message: '请选择咨询项目' }]}
                            >
                                <Input placeholder="请输入咨询的项目类型" size="large" />
                            </Form.Item>

                            <Form.Item
                                label="您的留言"
                                name="message"
                                rules={[{ required: true, message: '请输入您的留言内容' }]}
                            >
                                <TextArea
                                    placeholder="请详细描述您的需求..."
                                    rows={6}
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" style={{ minWidth: '120px' }}>
                                    发送消息
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>

                {/* 联系信息 */}
                <Col xs={24} lg={10}>
                    <div>
                        <Title level={3} style={{ marginBottom: '24px' }}>联系信息</Title>

                        {/* 联系方式卡片 */}
                        {contactInfo.map((info, index) => (
                            <Card style={{ marginBottom: '20px' }} key={index}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ marginRight: '20px' }}>{info.icon}</div>
                                    <div>
                                        <Title level={5} style={{ marginBottom: '8px' }}>{info.title}</Title>
                                        <Text>{info.content}</Text>
                                    </div>
                                </div>
                            </Card>
                        ))}

                        {/* 关于我们简介 */}
                        <Card style={{ marginTop: '30px', background: '#f7f7f7' }}>
                            <Title level={4}>关于我们</Title>
                            <Paragraph>
                                WisCreation是一家专注于为企业提供软件解决方案的技术公司。我们拥有经验丰富的开发团队，致力于为客户提供高质量的软件产品和服务。
                            </Paragraph>
                            <Paragraph>
                                无论您是需要定制软件开发、SaaS服务还是移动应用开发，我们都能为您提供专业的解决方案。
                            </Paragraph>
                        </Card>
                    </div>
                </Col>
            </Row>

            {/* 地图 */}
            <div style={{ marginTop: '60px' }}>
                <Title level={3} style={{ marginBottom: '24px', textAlign: 'center' }}>
                    我们的位置
                </Title>
                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', height: '400px' }}>
                    {/* 这里可以嵌入地图，例如百度地图或高德地图，下面是一个占位图片 */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: '#f0f2f5',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#999'
                    }}>
                        <EnvironmentOutlined style={{ marginRight: '8px' }} /> 地图加载区域 - 上海市浦东新区张江高科技园区
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 
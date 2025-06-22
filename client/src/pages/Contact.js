import React from 'react';
import { Row, Col, Typography, Form, Input, Button, Card, message } from 'antd';
import { useTranslation } from 'react-i18next';
import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
    const { t } = useTranslation();
    const [form] = Form.useForm();

    // 提交表单
    const handleSubmit = (values) => {
        console.log('表单提交: ', values);
        message.success(t('contact.form.successMessage'));
        form.resetFields();
    };

    // 联系信息
    const contactInfo = [
        {
            icon: <EnvironmentOutlined style={{ fontSize: '28px', color: '#1890ff' }} />,
            title: t('contact.info.address.title'),
            content: t('contact.info.address.line1') + " " + t('contact.info.address.line2'),
        },
        {
            icon: <PhoneOutlined style={{ fontSize: '28px', color: '#52c41a' }} />,
            title: t('contact.info.phone.title'),
            content: t('contact.info.phone.number'),
        },
        {
            icon: <MailOutlined style={{ fontSize: '28px', color: '#fa8c16' }} />,
            title: t('contact.info.email.title'),
            content: t('contact.info.email.address'),
        },
        {
            icon: <ClockCircleOutlined style={{ fontSize: '28px', color: '#722ed1' }} />,
            title: t('contact.info.hours.title'),
            content: t('contact.info.hours.time'),
        },
    ];

    return (
        <div className="container" style={{ padding: '50px 0' }}>
            {/* 页面标题 */}
            <div className="section-title">
                <Title level={2}>{t('contact.title')}</Title>
                <Paragraph>
                    {t('contact.subtitle')}
                </Paragraph>
            </div>

            <Row gutter={[48, 48]}>
                {/* 联系表单 */}
                <Col xs={24} lg={14}>
                    <Card
                        title={<Title level={3}>{t('contact.form.title')}</Title>}
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
                                        label={t('contact.form.name')}
                                        name="name"
                                        rules={[{ required: true, message: t('contact.form.nameRequired') }]}
                                    >
                                        <Input placeholder={t('contact.form.namePlaceholder')} size="large" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        label={t('contact.form.phone')}
                                        name="phone"
                                        rules={[{ required: true, message: t('contact.form.phoneRequired') }]}
                                    >
                                        <Input placeholder={t('contact.form.phonePlaceholder')} size="large" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                label={t('contact.form.email')}
                                name="email"
                                rules={[
                                    { required: true, message: t('contact.form.emailRequired') },
                                    { type: 'email', message: t('contact.form.emailValid') },
                                ]}
                            >
                                <Input placeholder={t('contact.form.emailPlaceholder')} size="large" />
                            </Form.Item>

                            <Form.Item
                                label={t('contact.form.company')}
                                name="company"
                            >
                                <Input placeholder={t('contact.form.companyPlaceholder')} size="large" />
                            </Form.Item>

                            <Form.Item
                                label={t('contact.form.subject')}
                                name="subject"
                                rules={[{ required: true, message: t('contact.form.subjectRequired') }]}
                            >
                                <Input placeholder={t('contact.form.subjectPlaceholder')} size="large" />
                            </Form.Item>

                            <Form.Item
                                label={t('contact.form.message')}
                                name="message"
                                rules={[{ required: true, message: t('contact.form.messageRequired') }]}
                            >
                                <TextArea
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    rows={6}
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" style={{ minWidth: '120px' }}>
                                    {t('contact.form.submit')}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>

                {/* 联系信息 */}
                <Col xs={24} lg={10}>
                    <div>
                        <Title level={3} style={{ marginBottom: '24px' }}>{t('contact.info.title')}</Title>

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
                            <Title level={4}>{t('nav.about')}</Title>
                            <Paragraph>
                                {t('home.about.description')}
                            </Paragraph>
                            <Paragraph>
                                {t('contact.info.aboutDesc')}
                            </Paragraph>
                        </Card>
                    </div>
                </Col>
            </Row>

            {/* 地图 */}
            <div style={{ marginTop: '60px' }}>
                <Title level={3} style={{ marginBottom: '24px', textAlign: 'center' }}>
                    {t('contact.locations.title')}
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
                        <EnvironmentOutlined style={{ marginRight: '8px' }} /> {t('contact.map.placeholder')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
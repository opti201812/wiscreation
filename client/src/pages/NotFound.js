import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <Result
            status="404"
            title="404"
            subTitle={t('notFound.message')}
            extra={
                <Button type="primary">
                    <Link to="/">{t('common.back')}</Link>
                </Button>
            }
        />
    );
};

export default NotFound;

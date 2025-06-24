require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const { testConnection, initDatabase } = require('./config/db');

// 初始化Express应用
const app = express();

// 中间件配置
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API路由
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/user.routes'));

// 静态文件服务 - 用于前端部署
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('开发环境首页，前端请用 npm run dev 或类似命令启动前端服务');
    });
}

// 404处理
app.use((req, res) => {
    res.status(404).json({ message: '请求的资源不存在' });
});

// 全局错误处理
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: '服务器内部错误' });
});

// 启动函数
const startServer = async () => {
    try {
        // 测试数据库连接
        const connected = await testConnection();

        if (connected) {
            // 初始化数据库表
            await initDatabase();

            // 启动服务器
            const PORT = process.env.PORT || 5000;
            app.listen(PORT, () => {
                console.log(`服务器运行在端口: ${PORT}`);
                console.log(`环境: ${process.env.NODE_ENV || 'development'}`);
            });
        } else {
            console.error('无法连接到数据库，服务器启动失败');
            process.exit(1);
        }
    } catch (error) {
        console.error('服务器启动失败:', error);
        process.exit(1);
    }
};

// 启动服务器
startServer(); 
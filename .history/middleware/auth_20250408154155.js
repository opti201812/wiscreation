const jwt = require('jsonwebtoken');

// 验证用户Token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: '未认证，请登录' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: '无效或过期的令牌' });
        }
        req.user = user;
        next();
    });
};

// 验证用户是否为管理员
const isAdmin = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: '未认证，请登录' });
    }

    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: '无权限执行此操作' });
    }

    next();
};

module.exports = {
    authenticateToken,
    isAdmin
}; 
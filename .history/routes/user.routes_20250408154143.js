const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const jwt = require('jsonwebtoken');

// 身份验证中间件
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

// 获取当前用户信息
router.get('/me', authenticateToken, async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const [users] = await conn.query(
            'SELECT id, username, email, role, created_at FROM users WHERE id = ?',
            [req.user.id]
        );

        conn.release();

        if (users.length === 0) {
            return res.status(404).json({ message: '用户不存在' });
        }

        res.json(users[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '服务器错误' });
    }
});

// 更新用户信息
router.put('/me', authenticateToken, async (req, res) => {
    try {
        const { username, email } = req.body;

        if (!username && !email) {
            return res.status(400).json({ message: '未提供任何要更新的字段' });
        }

        const conn = await pool.getConnection();

        // 检查用户名或邮箱是否已被其他用户使用
        if (username || email) {
            const query = 'SELECT * FROM users WHERE (username = ? OR email = ?) AND id != ?';
            const params = [
                username || '',
                email || '',
                req.user.id
            ];

            const [existingUsers] = await conn.query(query, params);

            if (existingUsers.length > 0) {
                conn.release();
                return res.status(400).json({ message: '用户名或邮箱已被使用' });
            }
        }

        // 构建UPDATE查询
        let updateQuery = 'UPDATE users SET ';
        const updateParams = [];
        const updateFields = [];

        if (username) {
            updateFields.push('username = ?');
            updateParams.push(username);
        }

        if (email) {
            updateFields.push('email = ?');
            updateParams.push(email);
        }

        updateQuery += updateFields.join(', ') + ' WHERE id = ?';
        updateParams.push(req.user.id);

        // 执行更新
        await conn.query(updateQuery, updateParams);

        // 获取更新后的用户信息
        const [updatedUsers] = await conn.query(
            'SELECT id, username, email, role, created_at FROM users WHERE id = ?',
            [req.user.id]
        );

        conn.release();

        res.json({
            message: '用户信息已更新',
            user: updatedUsers[0]
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '服务器错误' });
    }
});

module.exports = router; 
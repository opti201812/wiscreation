const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');

// 注册新用户
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 验证输入
        if (!username || !email || !password) {
            return res.status(400).json({ message: '所有字段都是必填的' });
        }

        const conn = await pool.getConnection();

        // 检查用户是否已存在
        const [existingUsers] = await conn.query(
            'SELECT * FROM users WHERE username = ? OR email = ?',
            [username, email]
        );

        if (existingUsers.length > 0) {
            conn.release();
            return res.status(400).json({ message: '用户名或邮箱已被使用' });
        }

        // 哈希密码
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 创建新用户
        const [result] = await conn.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );

        conn.release();

        // 生成JWT令牌
        const token = jwt.sign(
            { id: result.insertId, username, role: 'user' },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.status(201).json({
            message: '注册成功',
            token,
            user: {
                id: result.insertId,
                username,
                email,
                role: 'user'
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '服务器错误' });
    }
});

// 用户登录
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 验证输入
        if (!email || !password) {
            return res.status(400).json({ message: '邮箱和密码是必填的' });
        }

        const conn = await pool.getConnection();

        // 查找用户
        const [users] = await conn.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        conn.release();

        if (users.length === 0) {
            return res.status(401).json({ message: '无效的凭据' });
        }

        const user = users[0];

        // 验证密码
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: '无效的凭据' });
        }

        // 生成JWT令牌
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({
            message: '登录成功',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '服务器错误' });
    }
});

module.exports = router; 
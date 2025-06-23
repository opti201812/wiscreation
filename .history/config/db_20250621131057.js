const mysql = require('mysql2/promise');

// 创建数据库连接池
const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    socketPath: '/tmp/mysql.sock',  // macOS 常见路径
    // 如果 socket 连接失败，可以尝试 TCP 连接
    // host: 'localhost',
    // port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 测试数据库连接
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('数据库连接成功');
        connection.release();
        return true;
    } catch (err) {
        console.error('数据库连接失败:', err);
        return false;
    }
}

// 初始化数据库表
async function initDatabase() {
    try {
        const conn = await pool.getConnection();

        // 创建用户表
        await conn.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        role ENUM('admin', 'user') DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

        // 在这里添加其他表的创建...

        conn.release();
        console.log('数据库表初始化完成');
    } catch (err) {
        console.error('数据库初始化失败:', err);
    }
}

module.exports = {
    pool,
    testConnection,
    initDatabase
}; 
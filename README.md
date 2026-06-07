# WisCreation 企业AI应用开发平台

这是一个基于 React 和 Express 构建的企业AI应用开发与展示平台。整合了企业官网展示功能和 AI 应用体验系统。

## 项目结构

项目分为前端和后端两个部分：

-  `client`: React 前端项目
-  根目录: Node.js Express 后端项目

## 技术栈

### 前端

-  React
-  Ant Design 组件库
-  React Router 用于路由
-  Axios 用于 API 请求

### 后端

-  Node.js
-  Express 框架
-  MySQL 数据库
-  JWT 用于认证

## 功能特点

-  企业网站展示（首页、关于我们、服务等）
-  AI 应用体验（ASN.1 Codec 工具等）
-  用户认证与授权
-  响应式设计，适配各种设备尺寸

## 安装与运行

### 先决条件

-  Node.js (v14+)
-  MySQL (v5.7+)

### 安装依赖

安装所有依赖（前端和后端）：

```bash
npm run install-all
```

### 环境变量配置

复制`.env.example`文件并重命名为`.env`，然后根据您的环境配置相应的变量：

```bash
cp .env.example .env
```

### 数据库配置

1. 在 MySQL 中创建数据库：

```sql
CREATE DATABASE wiscreation_db;
```

2. 启动应用后，会自动初始化数据库表结构

### 运行应用

开发模式（同时运行前端和后端）：

```bash
npm run dev:both
```

只运行后端：

```bash
npm run dev
```

只运行前端：

```bash
npm run client
```

应用访问地址：

-  前端: http://localhost:3000
-  后端 API: http://localhost:5000

## AWS 部署指南

1. 创建 EC2 实例（推荐 t2.micro，满足 AWS 免费套餐要求）
2. 设置安全组，开放必要端口（HTTP 80, HTTPS 443, SSH 22）
3. 创建 RDS MySQL 实例（满足 AWS 免费套餐要求）
4. 使用 SSH 连接到 EC2 实例
5. 安装 Node.js 和 Git
6. 克隆项目代码
7. 配置环境变量
8. 安装 PM2 进行进程管理
9. 配置 Nginx 作为代理服务器
10.   设置 SSL 证书（可选）

## 许可证

MIT

---
title: MySQL
date: 2023-03-06 23:26:01
categories:
- 装机
- 开发工具
---

## MySQL

### 初始化数据库
```cmd
D:/soft/MySQL/bin/mysqld--defaults-file=D:/soft/MySQL/my.ini --initialize-insecure --user=mysql
```
### 启动数据库
```cmd
D:/soft/MySQL/bin/mysqld--console
```
### 免密码登录
```cmd
D:/soft/MySQL/bin/mysql-u root --skip-password
```
### 重置root密码
```cmd
ALTER USER'root'@'localhost' IDENTIFIED BY 'root';
```
### 将MySQL安装成服务
```cmd
D:/soft/MySQL/bin/mysqld--install MySQL --defaults-file=D:/soft/MySQL/my.ini
```
 
## my.ini 配置文件内容
```ini
[mysqld]
# setbasedir to your installation path
basedir=D:/soft/MySQL
# setdatadir to the location of your data directory
datadir=D:/soft/MySQL/data
```
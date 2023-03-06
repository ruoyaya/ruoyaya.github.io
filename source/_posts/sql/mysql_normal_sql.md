---
title: Mysql常用SQL
date: 2023-03-06 23:41:01
categories:
- 代码收藏
- 数据库
---

## Mysql常用SQL
### 创建数据库
```sql
CREATE DATABASE IF NOT EXISTS xinda_test DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
```
### 创建用户
```sql
CREATE USER 'xinda'@'%' IDENTIFIED BY 'xinda';
grant all privileges on xinda_test.* to 'xinda'@'%' with grant option;
flush privileges;
```

### 创建表
```sql
CREATE TABLE test
(
id int(11) NOT NULL,
PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;
```

### 密码策略：
#### 8.0版本：
#### 查看密码策略
```sql
show variables like '%validate_password.policy%';
show variables like '%validate_password.length%';
```
#### 修改密码策略
```sql
set global validate_password.policy=0;  #设置为弱口令
set global validate_password.length=1;  #密码最小长度为1
```

#### 57版本：
#### 查看密码策略
```sql
show variables like '%validate_password_policy%';
show variables like '%validate_password_length%';
```
#### 修改密码策略
```sql
set global validate_password_policy=0;
set global validate_password_length=1;
```
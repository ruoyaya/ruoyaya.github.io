---
title: Oracle常用SQL
date: 2023-03-06 23:41:01
categories:
- 代码收藏
- 数据库
---

## Oracle常用SQL
### 1、替换换行
```sql
UPDATE MSMD_CONVERT_B SET MEMO = REPLACE(MEMO,CHR(10),'')  WHERE  MEMO LIKE '%'||CHR(10) ||'%';
```
### 2、判断是否包含数字
```sql
SELECT 'drop table ' || t.TABLE_NAME || ';' FROM USER_TABLES t WHERE LENGTH(t.TABLE_NAME) != LENGTH(REGEXP_REPLACE(t.TABLE_NAME, '[^0-9]'));
```

### 3、dblink
```sql
create database link dblink2
connect to db1 identified by "1"
using '192.168.1.5/orcl';
```

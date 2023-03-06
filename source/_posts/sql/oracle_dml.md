---
title: Oracle数据库恢复
date: 2023-03-06 23:41:01
categories:
- 代码收藏
- 数据库
---

## Oracle数据库恢复

### 删除表空间
```sql
drop user test2005 CASCADE;
drop tablespace TEST_DATA01;
drop tablespace TEST_INDEX01;
```

### 创建表空间
```sql
create tablespace TEST_DATA01 datafile 'D:\soft\Oracle\oradata\orcl\TEST_DATA01.ora' size 2048M autoextend on NEXT 64M MAXSIZE UNLIMITED NOLOGGING EXTENT MANAGEMENT LOCAL AUTOALLOCATE SEGMENT SPACE MANAGEMENT AUTO;
create tablespace TEST_INDEX01 datafile 'D:\soft\Oracle\oradata\orcl\TEST_INDEX01.ora' size 256M autoextend on NEXT 64M MAXSIZE UNLIMITED NOLOGGING EXTENT MANAGEMENT LOCAL AUTOALLOCATE SEGMENT SPACE MANAGEMENT AUTO;
```

### 创建用户
```sql
create user test2005 identified by 1 default tablespace TEST_DATA01 temporary tablespace temp;
grant connect,dba,resource to test2005 with admin option;
```

### 删除用户：
```sql
drop table test2005 
```

### 删除表空间：
```sql
drop tablespace TEST_DATA01;
```
 
### 数据库恢复
```sql
create tablespace TEST_DATA01 datafile
'D:\soft\Oracle\oradata\orcl\TEST_DATA01.ora'size 256M autoextend on
NEXT32M MAXSIZE UNLIMITED NOLOGGING EXTENT MANAGEMENT LOCAL AUTOALLOCATE
SEGMENTSPACE MANAGEMENT AUTO;
　　　
create tablespace TEST_INDEX01 datafile
'D:\soft\Oracle\oradata\orcl\TEST_INDEX01.ora' size 256M autoextend on NEXT 64M MAXSIZE UNLIMITED NOLOGGING EXTENT MANAGEMENT LOCAL AUTOALLOCATE
SEGMENTSPACE MANAGEMENT AUTO;
 
create user test2005 identified by 1 default tablespace TEST_DATA01 temporary tablespace temp;
grant connect,dba,resource to test2005 with admin option;
impdp test2005/1@127.0.0.1:1521/orcl file=69test2005-2021-11-02.dmp remap_schema=69test2005:test2005 ignore=y FULL=Y 
```

### imp/exp导入导出
```cmd
imp TEST/1@orcl file=E:\work\database\testyj20171219.dmp 
full=y ignore=y statistics=none
exp username/pwd[@sid] file=pathname+filename 
```
### impdp/expdp导入导出
1. 创建目录
```sql
 创建一个导出、导入目录
create directory dpdata2 as 'D:\oracle';（该目录必须是事先创建好的，ORACLE并不会自动创建该目录）
给导出用户赋予在指定目录的操作权限，最好以system等管理员赋予。
grant read,write on directory dpdata1 to test;
```
2. 命令
```cmd
impdp TEST/1 directory=dpdata1 dumpfile=TEST_2020-02-12.dmp 			   remap_schema=TEST:TEST

expdp TEST_20171221/1@orcl tables=t_xxxx dumpfile=t_xxxx.dmp directory=DQ_DUMP schemas=TEST_20171221 version=11.2.0.1.0;

expdp TEST_20171221/1@orcl  dumpfile=TEST_20171221.dmp directory=dpdata1 schemas=TEST_20171221 version=11.2.0.1.0;
13126888060
```
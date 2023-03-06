---
title: Qt
date: 2023-03-06 23:34:01
categories:
- 装机
- 开发工具
---

## Qt

### 数据库驱动
MYSQL mingw：
```
INCLUDEPATH += D:\soft\MySQL\include
LIBPATH += D:\soft\MySQL\lib
#QMAKE_USE += mysql
QMAKE_LFLAGS += D:\soft\MySQL\lib\libmysql.dll
```

Oracle mingw：
```
INCLUDEPATH += D:\soft\Oracle\instantclient_19_9\sdk\include
LIBPATH += D:\soft\Oracle\instantclient_19_9\sdk\lib\msvc
#QMAKE_USE += oci
QMAKE_LFLAGS += D:\soft\Oracle\instantclient_19_9\oci.dll
```
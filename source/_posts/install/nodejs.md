---
title: NodeJS
date: 2023-03-06 01:01:01
categories:
- 装机
- 开发工具
---

## NodeJS
### 环境变量：

```
NODE_PATH=D:\soft\nodejs\node_global\node_modules
PATH+=D:\soft\nodejs
PATH+=D:\soft\nodejs\node_global
```

### NPM配置：

```
npm config set prefix "D:\soft\nodejs\node_global"
npm config set cache "D:\soft\nodejs\node_cache"
npm config set registry "https://registry.npm.taobao.org"
```

### YARN
```
yarn config set global-folder "D:\soft\nodejs\yarn_global"
yarn config set cache-folder "D:\soft\nodejs\yarn_cache"
```
 
### 更新NPM：
```
npm i -g npm
``` 
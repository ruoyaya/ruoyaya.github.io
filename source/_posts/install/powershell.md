---
title: 解决使用 PowerShell 不能运行 cnpm 等命令的问题
date: 2023-03-07 01:01:01
categories:
- 装机
- 开发工具
---

## 解决使用 PowerShell 不能运行 cnpm 等命令的问题
### 解决办法：
1. 以管理员权限运行 Windows PowerShell
2. 输入如下命令：
set-ExecutionPolicy RemoteSigned
3. 根据提示，输入： A
另：
获取执行策略命令：
get-ExecutionPolicy
显示Restricted，表示状态是禁止的
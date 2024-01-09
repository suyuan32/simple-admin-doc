---
order: 3
title: "Doge 部署工具"
---

## 介绍

Doge 是 Simple Admin 的模块下载部署的命令行工具，提供模块源码下载，模块 docker , k8s 部署，服务器维护等功能。用户可以上传自己的付费模块获取收益，现已收录 10 + 模块。

::: warning
Doge 是一个会员专属工具，由于该工具需要连接服务器下载文件和付费模块，所以只能会员使用
:::

## 部署模块

使用 depoy 命令部署模块

```shell
doge docker deploy -a "moduleId"
```

## 模块列表

| **ID**       | **名称**                       | **介绍**                           |
| ------------ | ------------------------------ | ---------------------------------- |
| core         | Core - 核心模块                | 核心模块，负责用户鉴权，后台管理等 |
| cms          | Cms - 文章模块                 | 文章管理模块                       |
| pay-api      | Pay API - 支付服务(API)        | 支付服务                           |
| pay-rpc      | Pay Rpc - 支付服务(RPC)        | 支付服务                           |
| mms-rpc      | Member RPC - 会员服务（RPC）   | 会员服务                           |
| mms-api      | Member API - 会员服务 (API)    | 会员服务                           |
| job          | Job - 定时任务                 | 定时任务服务                       |
| mcms         | Message Center - 消息中心      | 提供短信邮件服务                   |
| fms          | File - 文件管理                | 文件上传管理服务                   |
| backend-vben | Simple Admin Backend UI - Vben | 基于 Vben 的后台界面               |
| simple-uni   | Simple Uni                     | Uni App 前端脚手架                 |
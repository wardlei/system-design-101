---
title: '构建弹性支付系统的 10 条原则'
description: '基于 Shopify 实践总结的构建弹性支付系统的 10 条原则。'
image: 'https://assets.bytebytego.com/diagrams/0336-shopify.png'
createdAt: '2024-03-07'
draft: false
categories:
  - real-world-case-studies
tags:
  - 支付系统
  - 弹性
---

![](https://assets.bytebytego.com/diagrams/0336-shopify.png)

Shopify 在构建弹性支付系统方面有一些宝贵的经验。

### 降低超时时间，让服务尽早失败

默认超时时间是 60 秒。根据 Shopify 的经验，读取超时设为 5 秒、写入超时设为 1 秒是比较合理的配置。

### 安装断路器

Shopify 开发了 Semian，用 Ruby 实现的断路器来保护 Net::HTTP、MySQL、Redis 和 gRPC 服务。

### 容量管理

如果我们的队列中有 50 个请求到达，且处理一个请求平均需要 100 毫秒，那么我们的吞吐量就是每秒 500 个请求。

### 添加监控和告警

Google 的站点可靠性工程（SRE）一书列出了面向用户的系统应当监控的四个黄金信号：延迟、流量、错误和饱和度。

### 实现结构化日志

我们将日志存储在集中的位置，并使其易于搜索。

### 使用幂等键

这些幂等键使用通用唯一词典序可排序标识符（ULID），而不是随机版本 4 的 UUID。

### 坚持对账

将与 Shopify 金融合作伙伴之间的对账差异存储在数据库中。

### 开展负载测试

Shopify 定期模拟大规模的闪购活动，以获得基准测试结果。

### 做好事件管理

每个事件频道有 3 个角色：值班事件经理（IMOC）、支持响应经理（SRM）和服务负责人。

### 组织事件复盘

对于每个事件，Shopify 会问 3 个问题：到底发生了什么？我们对系统抱有哪些错误的假设？我们能做些什么来防止此类事件再次发生？

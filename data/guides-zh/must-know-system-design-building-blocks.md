---
title: "必须掌握的系统设计构建模块"
description: "构建可扩展应用所必需的系统设计组件。"
image: "https://assets.bytebytego.com/diagrams/0285-must-know-system-design-building-blocks.png"
createdAt: "2024-02-11"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "系统设计"
  - "可扩展性"
---

![](https://assets.bytebytego.com/diagrams/0285-must-know-system-design-building-blocks.png)

这些模块被划分为 6 大类。

## 分布式计算

*   分布式消息队列促进异步通信并解耦服务

*   分布式缓存通过把频繁访问的数据存储在内存中来提升性能

*   分布式任务调度器管理和协调任务的执行

## 可扩展性与性能

*   扩容服务有助于调整服务的容量，以应对需求的变化

*   CDN 从地理位置更近的地方提供内容，以提升性能并降低延迟。

*   一致性哈希在节点增加或移除时最小化键的重新映射

## 服务管理

*   服务发现让服务能够找到彼此并进行通信，而无需硬编码网络位置

## 网络与通信

*   DNS 将人类可读的域名转换为 IP 地址

*   负载均衡器将传入的网络流量分发到多台服务器

*   API 网关充当一组微服务的单一入口

## 数据存储与管理

*   数据库存储和管理结构化数据

*   对象存储帮助存储图片、视频和文档等复杂对象

*   分片帮助将数据水平分区到多个节点

*   复制通过把数据拷贝到多个节点来水平扩展数据库

## 可观测性与弹性

通过指标、日志和追踪来洞察系统的内部状态。

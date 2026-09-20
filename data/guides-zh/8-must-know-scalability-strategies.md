---
title: "必须知道的 8 种可扩展性策略"
description: "探索有效扩展系统的 8 种必备策略。"
image: "https://assets.bytebytego.com/diagrams/0013-8-must-know-strategies-to-scale-your-system.png"
createdAt: "2024-01-27"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "可扩展性"
  - "系统设计"
---

Amazon、Netflix 和 Uber 有什么共同点？它们都非常擅长在需要时扩展自己的系统。

![](https://assets.bytebytego.com/diagrams/0013-8-must-know-strategies-to-scale-your-system.png)

以下是扩展系统必须知道的 8 种策略。

*   无状态服务

    设计无状态服务，因为它们不依赖特定服务器上的数据，更容易扩展。

*   水平扩展

    增加更多服务器，让负载可以被分摊。

*   负载均衡

    使用负载均衡器将传入的请求均匀地分发到多台服务器上。

*   自动扩展

    实施自动扩展策略，根据实时流量调整资源。

*   缓存

    使用缓存来减轻数据库负载，并大规模处理重复请求。

*   数据库复制

    在多个节点之间复制数据，在提升冗余度的同时扩展读操作。

*   数据库分片

    将数据分布到多个实例上，以扩展写操作和读操作。

*   异步处理

    使用异步处理，将耗时且资源密集的任务转移到后台 worker，以便扩展处理新请求的能力。

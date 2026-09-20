---
title: "从 0 到 15 亿房客：Airbnb 的架构演进"
description: "探索 Airbnb 为支撑 15 亿房客而进行的架构演进。"
image: 'https://assets.bytebytego.com/diagrams/0427-zero-to-1-5-billion-guests-airbnb-s-architectural-evolution.png'
createdAt: '2024-02-27'
draft: false
categories:
  - real-world-case-studies
tags:
  - 架构
  - 微服务
---

![](https://assets.bytebytego.com/diagrams/0427-zero-to-1-5-billion-guests-airbnb-s-architectural-evolution.png)

Airbnb 在 200 多个国家和地区运营，帮助 400 万房东接待了来自世界各地的超过 15 亿房客。

Airbnb 在技术上是靠什么支撑的？

Airbnb 起步于一个单体应用，使用 Ruby on Rails 构建，内部称为 Monorail。

这个单体是一个单层单元，同时负责客户端和服务器端的功能。

然而，随着 Airbnb 进入高速增长期，Monorail 开始遇到问题。这时他们开启了一段迁移之旅，从单体架构转向面向服务的架构（SOA）。

对 Airbnb 而言，SOA 是一个由松耦合服务组成的网络：客户端向网关（gateway）发起请求，网关将这些请求路由到多个服务和数据库。

他们构建了多种类型的服务，例如：

*   **数据服务（Data Service）：** 这是最底层，充当对数据实体进行所有读写操作的入口。
*   **派生数据服务（Derived Data Service）：** 这些服务从数据服务读取数据，并应用基础的业务逻辑。
*   **中间层服务（Middle Tier Service）：** 它们管理那些不适合放在数据服务层或派生数据服务层的重要业务逻辑。
*   **展示服务（Presentation Service）：** 它们聚合来自所有其他服务的数据，并应用一些前端特有的业务逻辑。

迁移完成后，Monorail 被淘汰，所有读写操作都迁移到了新的服务上。

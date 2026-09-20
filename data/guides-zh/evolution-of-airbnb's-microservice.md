---
title: 'Airbnb 微服务架构的演进'
description: '详细了解 Airbnb 微服务架构的演进历程。'
image: 'https://assets.bytebytego.com/diagrams/0014-airbnb-arch.jpg'
createdAt: '2024-03-05'
draft: false
categories:
  - real-world-case-studies
tags:
  - 微服务
  - 架构
---

[![](https://assets.bytebytego.com/diagrams/0014-airbnb-arch.jpg)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7c90c105-a6bf-46f4-b896-73390fcfe60b_3396x1839.jpeg)

Airbnb 的微服务架构经历了 3 个主要阶段。本文基于 Jessica Tai 的技术分享整理。

**单体架构**（2008 - 2017）

Airbnb 最初是一个连接房东和房客的简单市场。它构建在一个 Ruby on Rails 应用中——也就是那个单体应用。

**面临的挑战是什么？**

*   团队归属混乱 + 无人负责的代码
*   部署缓慢

**微服务**（2017 - 2020）

微服务旨在解决这些挑战。在微服务架构中，关键服务包括：

*   数据获取服务
*   业务逻辑数据服务
*   写工作流服务
*   UI 聚合服务
*   每个服务都有一个负责的团队

**面临的挑战是什么？**

数百个服务及其依赖关系让人难以管理。

**微服务 + 宏服务**（2020 - 至今）

这是 Airbnb 目前正在推进的方向。微服务与宏服务混合模式的重点是 API 的统一。

参考：[The Human Side of Airbnb’s Microservice Architecture](https://www.infoq.com/presentations/airbnb-culture-soa/)

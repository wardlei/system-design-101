---
title: '麦当劳的事件驱动架构'
description: '探索麦当劳用于实现可扩展性和高效性的事件驱动架构。'
image: 'https://assets.bytebytego.com/diagrams/0266-mcdonald-s-event-driven-architecture.png'
createdAt: '2024-02-18'
draft: false
categories:
  - real-world-case-studies
tags:
  - 事件驱动架构
  - 案例研究
---

![](https://assets.bytebytego.com/diagrams/0266-mcdonald-s-event-driven-architecture.png)

你以为自己对麦当劳了如指掌？那它的事件驱动架构呢？

麦当劳使用以下组件来标准化事件：

*   **事件注册中心（Event Registry）：** 用于定义标准化 schema 的事件注册中心。
*   **自定义 SDK：** 用于处理事件和处理错误的自定义软件开发工具包（SDK）。
*   **事件网关（Event Gateway）：** 执行身份认证和授权的事件网关。
*   **实用工具：** 用于修复事件、保持集群健康以及执行管理任务的实用工具。

为了扩展事件处理能力，麦当劳采用了一种基于 AWS 的区域化架构，以提供全球可用性。在一个区域内，生产者按领域（domain）对事件进行分片，每个领域由一个 MSK 集群处理。集群会根据 MSK 指标（例如 CPU 使用率）自动扩容，而自动扩容工作流基于 step-functions 和重新分配任务（re-assignment tasks）。

参考：幕后揭秘：[麦当劳的事件驱动架构](https://medium.com/mcdonalds-technical-blog/behind-the-scenes-mcdonalds-event-driven-architecture-51a6542c0d86)

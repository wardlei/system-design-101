---
title: "Amazon Prime Video 监控服务"
description: "了解 Amazon Prime Video 监控服务如何通过转向单体架构节省 90% 成本。"
image: "https://assets.bytebytego.com/diagrams/0328-serverless-to-monolithic.jpeg"
createdAt: "2024-02-23"
draft: false
categories:
  - software-architecture
tags:
  - "微服务"
  - "系统设计"
---

![](https://assets.bytebytego.com/diagrams/0328-serverless-to-monolithic.jpeg)

为什么 Amazon Prime Video 的监控服务要**从 serverless 转向单体架构**？它如何节省 90% 的成本？

上图展示了迁移前后的架构对比。

## 什么是 Amazon Prime Video 监控服务？

Prime Video 服务需要监控数千个直播流的质量。监控工具实时自动分析这些流，识别诸如块损坏、视频冻结和音画同步问题等质量问题。这对客户满意度来说是一个重要环节。

共有 3 个步骤：媒体转换器（media converter）、缺陷检测器（defect detector）和实时通知。

*   旧架构存在什么问题？

    旧架构基于 Amazon Lambda，这有利于快速构建服务。然而，在大规模运行时，它并不划算。最昂贵的两项操作是：

    1.  编排工作流——AWS Step Functions 按状态转换向用户收费，而编排每秒要执行多次状态转换。

    2.  分布式组件之间的数据传递——中间数据存储在 Amazon S3 中，供下一阶段下载。当数据量很大时，下载的成本可能很高。

*   单体架构节省 90% 成本

    单体架构正是为解决成本问题而设计的。仍然有 3 个组件，但媒体转换器和缺陷检测器部署在同一个进程中，节省了通过网络传递数据的成本。令人惊讶的是，这种部署架构的改变带来了 90% 的成本节省！

    这是一个有趣而独特的案例研究，因为微服务已经成为科技行业的主流和时髦选择。很高兴看到我们正在就架构演进展开更多讨论，并且更坦诚地讨论其利弊。把组件拆分为分布式微服务是有代价的。

*   Amazon 的领导者们对此怎么说？

    Amazon CTO Werner Vogels："构建**可演进的软件系统**是一种策略，而不是一种宗教。以开放的心态重新审视你的架构是必须的。"

    Amazon 前可持续发展副总裁 Adrian Cockcroft："Prime Video 团队走的是一条我称之为 **Serverless First**（Serverless 优先）的道路……但我并不提倡 **Serverless Only**（只用 Serverless）。"

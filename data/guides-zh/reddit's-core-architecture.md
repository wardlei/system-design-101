---
title: "Reddit 的核心架构"
description: "Reddit 服务数百万用户的架构概览。"
image: 'https://assets.bytebytego.com/diagrams/0356-the-core-reddit-architecture.png'
createdAt: '2024-03-06'
draft: false
categories:
  - real-world-case-studies
tags:
  - 架构
  - 社交媒体
---

![](https://assets.bytebytego.com/diagrams/0356-the-core-reddit-architecture.png)

快速了解一下 Reddit 的核心架构，正是它支撑 Reddit 每月服务超过 10 亿用户。

这些信息基于对众多 Reddit 工程博客的研究。不过，由于架构始终在不断演进，某些方面可能已经发生了变化。

Reddit 架构的要点如下：

*   Reddit 使用 Fastly 提供的内容分发网络（CDN）作为应用的前端。
*   Reddit 在 2009 年初开始使用 jQuery。后来，他们开始使用 TypeScript，现在已经迁移到现代的 Node.js 框架。多年来，Reddit 也为 Android 和 iOS 构建了移动应用。
*   在应用栈内部，负载均衡器位于最前端，将传入的请求路由到相应的服务。
*   Reddit 最初是一个基于 Python 的单体应用，但后来开始迁移到使用 Go 构建的微服务。
*   Reddit 在 API 层大量使用 GraphQL。2021 年初，他们开始转向 GraphQL Federation，这是一种将多个较小的 GraphQL API（称为领域图服务，Domain Graph Services，DGS）组合起来的方式。2022 年，Reddit 的 GraphQL 团队为 Reddit 的核心实体添加了多个新的 Go 子图，从而拆分了这个 GraphQL 单体。
*   从数据存储的角度来看，Reddit 依赖 Postgres 作为其核心数据模型。为了减轻数据库的负载，他们在 Postgres 前面使用了 memcached。此外，他们大量使用 Cassandra 来开发新功能，主要是因为它具有出色的韧性和可用性。
*   为了支持数据复制并保持缓存一致性，Reddit 使用 Debezium 运行变更数据捕获（Change Data Capture）流程。
*   诸如用户投票或提交链接这类代价较高的操作，会被推迟到通过 RabbitMQ 实现的异步作业队列中，并由作业工作进程处理。对于内容安全检查和审核，他们使用 Kafka 实时传输数据，以便对数据运行规则。
*   Reddit 使用 AWS 和 Kubernetes 作为其各种应用和内部服务的托管平台。
*   在部署和基础设施方面，他们使用 Spinnaker、Drone CI 和 Terraform。

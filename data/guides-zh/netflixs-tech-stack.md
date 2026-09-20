---
title: Netflix 技术栈
description: 探索支撑 Netflix 流媒体基础设施的技术。
image: 'https://assets.bytebytego.com/diagrams/0286-netflix-tech-stack.png'
createdAt: '2024-03-15'
draft: false
categories:
  - real-world-case-studies
tags:
  - 架构
  - 流媒体
---

本文基于对大量 Netflix 工程博客和开源项目的研究。如果你发现任何不准确之处，请随时告知我们。

![](https://assets.bytebytego.com/diagrams/0286-netflix-tech-stack.png)

*   移动端和 Web 端：Netflix 采用 Swift 和 Kotlin 构建原生移动应用。对于其 Web 应用，它使用 React。

*   前端/服务端通信：GraphQL。

*   后端服务：Netflix 依赖 ZUUL、Eureka、Spring Boot 框架以及其他技术。

*   数据库：Netflix 使用 EV cache、Cassandra、CockroachDB 以及其他数据库。

*   消息/流处理：Netflix 使用 Apache Kafka 和 Flink 进行消息传递和流处理。

*   视频存储：Netflix 使用 S3 和 Open Connect 进行视频存储。

*   数据处理：Netflix 使用 Flink 和 Spark 进行数据处理，随后通过 Tableau 进行可视化。Redshift 用于处理结构化数据仓库信息。

*   CI/CD：Netflix 使用 JIRA、Confluence、PagerDuty、Jenkins、Gradle、Chaos Monkey、Spinnaker、Atlas 等多种工具来完成 CI/CD 流程。

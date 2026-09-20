---
title: Uber 技术栈
description: 探索支撑 Uber 实时出行网络的技术栈。
image: 'https://assets.bytebytego.com/diagrams/0124-uber-tech-stack-overall.png'
createdAt: '2024-03-10'
draft: false
categories:
  - real-world-case-studies
tags:
  - 架构
  - 可扩展性
---

![](https://assets.bytebytego.com/diagrams/0124-uber-tech-stack-overall.png)

本文基于对多个 Uber 工程博客和开源项目的研究。如果你发现任何不准确之处，请随时告知我们。相关链接已添加到评论区。

**Web 前端：** Uber 构建了 Fusion.js，将其作为一个现代化的 React 框架，用于创建健壮的 Web 应用。他们还开发了 visualization.js，用于地理空间可视化场景。

**移动端：** Uber 使用 VIPER 架构（而非 MVC）构建了跨平台的 RIB。该架构能够兼容不同的语言：iOS 使用 Swift，Android 使用 Java。

**服务网格：** Uber 构建了 Uber Gateway，作为 NGINX 之上的动态配置。该服务使用 gRPC 和 QUIC 进行客户端与服务器之间的通信，并使用 Apache Thrift 进行 API 定义。

**服务侧：** Uber 构建了一个名为 Flipr（后来改名为 UCDP）的统一配置存储，以及作为位置索引存储库的 H3。他们使用 Spring Boot 开发基于 Java 的服务，使用 uAct 构建事件驱动架构，并使用 Cadence 进行异步工作流编排。

**数据库端：** OLTP 主要使用强一致性的 DocStore，其底层采用 MySQL 和 PostgreSQL，并搭配 RocksDB 数据库引擎。

**大数据：** 通过 Hadoop 家族进行管理。Hudi 和 Parquet 用作文件格式，Alluxio 用作缓存。时序数据存储在 Pinot 和 AresDB 中。

**数据处理：** Hive、Spark，以及开源的数据摄取框架 Marmaray。消息和流处理中间件包括 Apache Kafka 和 Apache Flink。

**DevOps 侧：** Uber 采用单仓（Monorepo），并使用名为 devpod 的简化开发环境。持续交付由 Netflix Spinnaker 管理，指标上报到 uMetric，告警在 uMonitor 上，以及一致的可观测性数据库 M3。

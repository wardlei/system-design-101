---
title: Netflix 技术栈 —— 数据库
description: Netflix 使用多种数据库来支撑大规模流媒体服务。
image: 'https://assets.bytebytego.com/diagrams/0098-databases-used-in-netflix.jpg'
createdAt: '2024-02-26'
draft: false
categories:
  - real-world-case-studies
tags:
  - 数据库
  - 技术栈
---

![示意图](https://assets.bytebytego.com/diagrams/0098-databases-used-in-netflix.jpg)

Netflix 工程团队选用多种数据库来支撑大规模流媒体服务。

*   **关系型数据库：** Netflix 选择 MySQL 用于计费交易、订阅、税务和收入。他们还使用 CockroachDB 来支持多区域双活架构、全局事务和数据流水线工作流。

*   **列式数据库：** Netflix 主要将其用于分析场景。他们使用 Redshift 和 Druid 存储结构化数据，使用 Spark 进行数据流水线处理，并使用 Tableau 进行数据可视化。

*   **键值数据库：** Netflix 主要使用构建在 Memcached 之上的 EVCache。EVCache 已在 Netflix 使用了 10 多年，被用于大多数服务，缓存各种数据，例如 Netflix 首页和个性化推荐。

*   **宽列数据库：** Cassandra 通常是 Netflix 的默认选择。他们几乎将其用于所有场景，包括视频/演员信息、用户数据、设备信息和观看历史。

*   **时序数据库：** Netflix 构建了一个名为 Atlas 的开源内存数据库，用于指标存储和聚合。

*   **非结构化数据：** S3 是默认选择，几乎存储了与图片/视频/指标/日志文件相关的所有内容。Apache Iceberg 也与 S3 配合使用，用于大数据存储。

如果你在一家大公司工作，并且想讨论你公司的技术栈，欢迎与我联系。默认情况下，所有沟通都将以匿名方式处理。

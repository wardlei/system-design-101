---
title: "为什么 PostgreSQL 是最受喜爱的数据库"
description: "探索为什么 PostgreSQL 在 2022 年调查中被评选为最受喜爱的数据库。"
image: "https://assets.bytebytego.com/diagrams/0303-postgres.png"
createdAt: "2024-02-25"
draft: false
categories:
  - database-and-storage
tags:
  - "PostgreSQL"
  - "数据库"
---

![](https://assets.bytebytego.com/diagrams/0303-postgres.png)

该图展示了 PostgreSQL 的众多用例——一个几乎涵盖开发者所需**所有用例**的数据库。

## PostgreSQL 的用例

*   **OLTP（在线事务处理，Online Transaction Processing）**

    我们可以使用 PostgreSQL 进行 CRUD（创建-读取-更新-删除）操作。

*   **OLAP（在线分析处理，Online Analytical Processing）**

    我们可以使用 PostgreSQL 进行分析处理。PostgreSQL 基于 **HTAP**（混合事务/分析处理，Hybrid transactional/analytical processing）架构，因此能够很好地同时处理 OLTP 和 OLAP。

*   **FDW（外部数据包装器，Foreign Data Wrapper）**

    FDW 是 PostgreSQL 中提供的一种扩展，允许我们从一个数据库访问另一个数据库中的表或模式（schema）。

*   **流式处理（Streaming）**

    PipelineDB 是一个用于高性能时间序列聚合的 PostgreSQL 扩展，旨在为实时报表和分析应用提供支持。

*   **地理空间（Geospatial）**

    PostGIS 是 PostgreSQL 对象关系数据库的空间数据库扩展。它增加了对地理对象的支持，允许在 SQL 中运行位置查询。

*   **时间序列（Time Series）**

    Timescale 扩展了 PostgreSQL，用于时间序列和分析。例如，开发者可以将源源不断的金融和行情（tick）数据与其他业务数据结合起来，构建新的应用并发现独特的洞察。

*   **分布式表（Distributed Tables）**

    CitusData 通过分布数据和查询来扩展 Postgres。

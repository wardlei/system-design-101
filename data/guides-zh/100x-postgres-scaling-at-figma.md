---
title: 'Figma 的 Postgres 百倍扩展之路'
description: '了解 Figma 如何将其 Postgres 数据库扩展 100 倍。'
image: 'https://assets.bytebytego.com/diagrams/0048-100x-postgres-scaling-at-figma.png'
createdAt: '2024-02-12'
draft: false
categories:
  - real-world-case-studies
tags:
  - Postgres
  - 扩展
---

![](https://assets.bytebytego.com/diagrams/0048-100x-postgres-scaling-at-figma.png)

Figma 拥有 300 万月活跃用户，其用户规模自 2018 年以来增长了 200%。

因此，它的 Postgres 数据库经历了惊人的 100 倍增长。

*   **垂直扩展与复制**

    Figma 最初使用单个大型 Amazon RDS 数据库。

    第一步，他们升级到了可用的最大实例（从 r5.12xlarge 升级到 r5.24xlarge）。

    他们还创建了多个只读副本来扩展读取流量，并添加 PgBouncer 作为连接池，以限制不断增长的连接数带来的影响。

*   **垂直分区**

    下一步是垂直分区。

    他们将 "Figma Files" 和 "Organizations" 等高流量表迁移到了各自独立的数据库中。

    他们使用多个 PgBouncer 实例来管理这些独立数据库的连接。

*   **水平分区**

    随着时间推移，一些表的数据量超过了数 TB，行数达到数十亿。

    Postgres Vacuum 成了问题，最大 IOPS 也超出了当时 Amazon RDS 的限值。

    为了解决这个问题，Figma 实现了水平分区，将大表拆分到多个物理数据库中。

    他们还构建了一个新的 DBProxy 服务来处理路由和查询执行。

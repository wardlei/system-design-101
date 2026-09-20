---
title: "PostgreSQL 正在吞噬数据库世界吗？"
description: "探索 PostgreSQL 的多功能性及其对数据库格局的影响。"
image: "https://assets.bytebytego.com/diagrams/0237-is-postgresql-eating-the-database-world.png"
createdAt: "2024-02-27"
draft: false
categories:
  - database-and-storage
tags:
  - "PostgreSQL"
  - "数据库"
---

![](https://assets.bytebytego.com/diagrams/0237-is-postgresql-eating-the-database-world.png)

似乎无论是什么用例，PostgreSQL 都能支持。当你不确定时，直接使用 PostgreSQL 就好了。

## PostgreSQL 的能力

*   **时序数据（TimeSeries）**

    PostgreSQL 内置了 Timescale，这是一个强大的时序数据库扩展，用于高效处理带时间戳的数据。

*   **机器学习（Machine Learning）**

    借助 pgVector 和 PostgresML，Postgres 可以支持机器学习能力和向量相似度搜索。

*   **OLAP**

    Postgres 可以借助 Hydra、Citus 和 pg\_analytics 等工具支持 OLAP。

*   **派生（Derived）**

    甚至 DuckDB、FerretDB、CockroachDB、AlloyDB、YugaByte DB、Supabase 等派生数据库也都提供 PostgreSQL。

*   **地理空间（GeoSpatial）**

    PostGIS 为 PostgreSQL 扩展了地理空间能力，使你能够轻松地存储、查询和分析地理数据。

*   **搜索（Search）**

    pgroonga、ParadeDB 和 ZomboDB 等 Postgres 扩展提供了全文搜索、文本索引和数据解析能力。

*   **联邦（Federated）**

    Postgres 可以与 MongoDB、MySQL、Redis、Oracle、ParquetDB、SQLite 等各种数据源无缝集成，实现联邦查询和数据访问。

*   **图（Graph）**

    Apache AGE 和 EdgeDB 是构建在 PostgreSQL 之上的图数据库。此外，pg\_graphql 是一个为 Postgres 提供 GraphQL 支持的扩展。

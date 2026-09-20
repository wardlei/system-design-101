---
title: "爱奇艺数据库选型树"
description: "探索爱奇艺在关系型和 NoSQL 方面的数据库选型流程。"
image: "https://assets.bytebytego.com/diagrams/0215-how-to-choose-db.png"
createdAt: "2024-03-01"
draft: false
categories:
  - database-and-storage
tags:
  - 数据库选型
  - 爱奇艺
---

![](https://assets.bytebytego.com/diagrams/0215-how-to-choose-db.png)

一图胜千言。

爱奇艺是世界上最大的在线视频网站之一，月活跃用户超过 5 亿。让我们看看他们是如何选择关系型和 NoSQL 数据库的。

爱奇艺使用了以下数据库：

*   MySQL
*   Redis
*   TiDB：一种混合事务/分析处理（HTAP）分布式数据库
*   Couchbase：分布式多模型 NoSQL 面向文档的数据库
*   TokuDB：用于 MySQL 和 MariaDB 的开源存储引擎。
*   大数据分析系统，如 Hive 和 Impala
*   其他数据库，如 MongoDB、HiGraph 和 TiKV

下面的数据库选型树解释了他们如何选择数据库。

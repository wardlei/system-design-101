---
title: "20 行读懂时序数据库（TSDB）"
description: "了解时序数据库（TSDB）及其应用。"
image: "https://assets.bytebytego.com/diagrams/0364-time-series-db-tsdb-in-20-lines.jpeg"
createdAt: "2024-02-07"
draft: false
categories:
  - database-and-storage
tags:
  - "数据库"
  - "时序数据"
---

![](https://assets.bytebytego.com/diagrams/0364-time-series-db-tsdb-in-20-lines.jpeg)

什么是**时序数据库**（TSDB）？它与关系型数据库有何不同？

上图展示了典型时序数据库的**内部数据模型**。

时序数据库（TSDB）是专为时序数据优化的数据库。

*   从用户的角度看，数据看起来与关系型数据库的表类似。但在幕后，weather 表以 \[Measurement, Tag, Field Name]（测量、标签、字段名）的格式存储在 4 个 TSM（Time-Structured Merge Tree，时序结构合并树）中。

*   这样，我们就可以基于时间和标签快速聚合和分析数据。

*   典型用途：

    *   市场中的交易与行情数据更新
    *   服务器指标
    *   应用性能监控
    *   网络数据
    *   传感器数据
    *   事件
    *   点击流

---
title: "垂直分区与水平分区"
description: "探索数据库中的垂直分区与水平分区策略。"
image: "https://assets.bytebytego.com/diagrams/0402-vertical-partitioning-vs-horizontal-partitioning.png"
createdAt: "2024-01-30"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "数据库分区"
  - "分片"
---

![](https://assets.bytebytego.com/diagrams/0402-vertical-partitioning-vs-horizontal-partitioning.png)

在许多大规模应用中，数据被划分为可以单独访问的分区。分区数据有两种典型的策略。

*   垂直分区：指将某些列移到新表中。每张表包含相同的行数，但列数更少（见下图）。

*   水平分区（通常称为分片）：它将一张表划分为多张更小的表。每张表都是一个独立的数据存储，包含相同的列数，但行数更少（见下图）。

水平分区被广泛使用，所以我们来仔细看一下。

## 路由算法

路由算法决定数据存储在哪个分区（分片）中。

*   基于范围的分片。该算法使用有序的列（例如整数、长整型、时间戳）来分隔行。例如，下图使用 User ID 列进行范围分区：User ID 1 和 2 位于分片 1 中，User ID 3 和 4 位于分片 2 中。

*   基于哈希的分片。该算法对一列或多列应用哈希函数，以决定某一行进入哪张表。例如，下图使用 **User ID mod 2** 作为哈希函数。User ID 1 和 3 位于分片 1 中，User ID 2 和 4 位于分片 2 中。

## 优点

*   便于水平扩展。分片使得添加更多机器来分散负载成为可能。

*   缩短响应时间。通过将一张表分片为多张表，查询涉及的行数更少，结果返回得快得多。

## 缺点

*   order by 操作更加复杂。通常，我们需要从不同的分片中获取数据，并在应用程序代码中对数据进行排序。

*   分布不均。某些分片可能包含比其他分片更多的数据（这也被称为热点）。

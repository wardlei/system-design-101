---
title: "B-Tree 与 LSM-Tree"
description: "探索 B-Tree 和 LSM-Tree 这两种数据结构的差异。"
image: "https://assets.bytebytego.com/diagrams/0091-btree-lsm.png"
createdAt: "2024-02-16"
draft: false
categories:
  - database-and-storage
tags:
  - "数据结构"
  - "数据库"
---

![图表特写](https://assets.bytebytego.com/diagrams/0091-btree-lsm.png)

## B-Tree

B-Tree 是几乎所有关系型数据库中应用最广泛的索引数据结构。

B-Tree 中信息存储的基本单元通常称为"页"（page）。查找一个键时，会沿着键的范围逐层向下追踪，直到找到实际的值。

## LSM-Tree

LSM-Tree（Log-Structured Merge Tree，日志结构合并树）被许多 NoSQL 数据库广泛使用，例如 Cassandra、LevelDB 和 RocksDB。

LSM-Tree 维护键值对，并通过 Sorted Strings Table（SSTable，排序字符串表）持久化到磁盘，其中的键是有序排列的。

Level 0 的段会定期合并到 Level 1 的段中，这个过程称为**压缩（compaction）**。

两者最大的区别大概是：

*   B-Tree 让读取更快

*   LSM-Tree 让写入更快

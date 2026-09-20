---
title: "驱动数据库的 8 种数据结构"
description: "探索驱动数据库效率的 8 种关键数据结构。"
image: "https://assets.bytebytego.com/diagrams/0181-eight-ds-db.jpg"
createdAt: "2024-03-02"
draft: false
categories:
  - database-and-storage
tags:
  - 数据结构
  - 数据库
---

![](https://assets.bytebytego.com/diagrams/0181-eight-ds-db.jpg)

答案取决于你的使用场景。数据可以在内存中或磁盘上建立索引。同样，数据格式也多种多样，比如数字、字符串、地理坐标等。系统可能是写密集型或读密集型的。所有这些因素都会影响你对数据库索引格式的选择。

以下是一些最常用的数据索引数据结构：

*   **跳表（Skiplist）：** 一种常见的内存索引类型。Redis 中使用

*   **哈希索引：** “Map” 数据结构（或“集合”）的一种非常常见的实现

*   **SSTable：** 不可变的磁盘上的 “Map” 实现

*   **LSM tree：** 跳表 + SSTable。高写入吞吐量

*   **B-tree：** 基于磁盘的解决方案。读写性能稳定一致

*   **倒排索引：** 用于文档索引。Lucene 中使用

*   **后缀树：** 用于字符串模式搜索

*   **R-tree：** 多维搜索，例如查找最近邻

这并不是所有数据库索引类型的完整列表。

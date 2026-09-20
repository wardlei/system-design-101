---
title: "如何在 Google 规模下避免抓取重复 URL？"
description: "了解如何在 Google 规模下避免抓取重复 URL。"
image: "https://assets.bytebytego.com/diagrams/0089-bloomfilter.png"
createdAt: "2024-02-27"
draft: false
categories:
  - software-development
tags:
  - "布隆过滤器"
  - "网页抓取"
---

![](https://assets.bytebytego.com/diagrams/0089-bloomfilter.png)

方案 1：使用 Set 数据结构来检查 URL 是否已存在。Set 很快，但空间效率不高。

方案 2：将 URL 存储在数据库中，并检查新 URL 是否已在数据库中。这种方式可行，但会给数据库带来很高的负载。

### 方案 3：布隆过滤器

这是首选方案。布隆过滤器由 Burton Howard Bloom 于 1970 年提出。它是一种概率性数据结构，用于判断某个元素是否属于某个集合。

*   false：该元素一定不在集合中。
*   true：该元素可能在集合中。

可能出现假阳性匹配，但不会出现假阴性。

下图展示了布隆过滤器的工作原理。布隆过滤器的基本数据结构是位向量（Bit Vector）。每个位表示一个哈希值。

### 步骤 1

要将元素添加到布隆过滤器，我们将其输入 3 个不同的哈希函数（A、B 和 C），并在得到的位置上将对应的位置 1。注意，[www.myweb1.com](http://www.myweb1.com/) 和 [www.myweb2.com](http://www.myweb2.com/) 都在索引 5 处将同一位标记为 1。假阳性之所以可能出现，是因为某个位可能被另一个元素置位。

### 步骤 2

当测试某个 URL 字符串是否存在时，会对该 URL 字符串应用相同的哈希函数 A、B 和 C。如果三个位都是 1，那么该 URL 可能存在于数据集中；如果其中任意一个位是 0，那么该 URL 一定不存在于数据集中。

哈希函数的选择很重要。它们必须分布均匀且速度快。例如，RedisBloom 和 Apache Spark 使用 murmur，InfluxDB 使用 xxhash。

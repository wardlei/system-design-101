---
title: "扩展数据库必须知道的 7 种策略"
description: "探索有效扩展数据库的 7 种关键策略。"
image: "https://assets.bytebytego.com/diagrams/0161-database-scaling-cheatsheet.png"
createdAt: "2024-03-15"
draft: false
categories:
  - database-and-storage
tags:
  - "数据库扩展"
  - "数据库优化"
---

![](https://assets.bytebytego.com/diagrams/0161-database-scaling-cheatsheet.png)

## 1. 索引

检查应用的查询模式，并创建合适的索引。

## 2. 物化视图

预先计算复杂查询的结果并存储起来，以便更快地访问。

## 3. 反范式化

减少复杂的连接（join）操作，以提升查询性能。

## 4. 垂直扩展

通过增加更多 CPU、内存或存储来增强数据库服务器。

## 5. 缓存

将频繁访问的数据存储在更快的存储层中，以减轻数据库负载。

## 6. 复制

在不同的服务器上创建主数据库的副本，用于扩展读取能力。

## 7. 分片

将数据库表拆分为更小的部分，并分布到多台服务器上。既可以扩展写入能力，也可以扩展读取能力。

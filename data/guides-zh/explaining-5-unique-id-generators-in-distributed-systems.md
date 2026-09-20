---
title: "5 种唯一 ID 生成器详解"
description: "探索分布式系统中的 5 种唯一 ID 生成器及其优缺点。"
image: "https://assets.bytebytego.com/diagrams/0006-explaining-5-unique-id-generators-in-distributed-systems.png"
createdAt: "2024-02-22"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - 分布式系统
  - 唯一 ID
---

![](https://assets.bytebytego.com/diagrams/0006-explaining-5-unique-id-generators-in-distributed-systems.png)

下图展示了它们的工作原理。每种生成器都有各自的优缺点。

## UUID

UUID 有 128 位。它生成简单，不需要调用其他服务。但它不是有序的，对数据库索引来说效率不高。此外，UUID 并不保证全局唯一。我们需要小心 ID 冲突（尽管概率很小）。

## Snowflake

Snowflake 的 ID 生成过程包含多个组成部分：时间戳、机器 ID 和序列号。最高位不使用，以确保 ID 为正数。这种生成器不需要通过网络与 ID 生成服务通信，因此速度快且易于扩展。

Snowflake 的实现方式各有不同。例如，可以把数据中心 ID 加入"MachineID"部分，以保证全局唯一性。

## 数据库自增（DB auto-increment）

大多数数据库产品都提供自增主键列。由于这是数据库本身支持的功能，我们可以利用它的事务管理来处理对 ID 生成器的并发访问。这保证了单张表内的唯一性。不过，这种方式涉及网络通信，还可能向外界暴露敏感的业务数据。例如，如果把它用作用户 ID，竞争对手就能大致估算出我们网站的注册用户数。

## 数据库号段（DB segment）

另一种方法是批量从数据库中获取 ID，并缓存在 ID 服务器上，每台 ID 服务器负责一个号段。这大大减轻了数据库的 I/O 压力。

## Redis

我们还可以使用 Redis 键值对来生成唯一 ID。Redis 将数据存储在内存中，因此这种方式的性能优于数据库方案。

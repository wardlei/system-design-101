---
title: Discord 如何存储数万亿条消息
description: 了解 Discord 如何演进其消息存储系统以支撑数万亿条消息。
image: 'https://assets.bytebytego.com/diagrams/0174-discord-store-messages.png'
createdAt: '2024-03-12'
draft: false
categories:
  - real-world-case-studies
tags:
  - 数据库
  - 架构
---

![](https://assets.bytebytego.com/diagrams/0174-discord-store-messages.png)

上图展示了 Discord 消息存储的演进历程：

MongoDB ➡️ Cassandra ➡️ ScyllaDB

2015 年，Discord 的第一个版本构建在单个 MongoDB 副本之上。到 2015 年 11 月左右，MongoDB 已存储了 1 亿条消息，内存再也无法容纳数据和索引，延迟变得不可预测。消息存储需要迁移到另一个数据库，最终选择了 Cassandra。

2017 年，Discord 拥有 12 个 Cassandra 节点，存储了数十亿条消息。

到 2022 年初，它已拥有 177 个节点，存储了数万亿条消息。此时，延迟变得不可预测，维护操作的成本也高到难以承受。

造成这一问题的原因有几个：

*   Cassandra 内部数据结构使用 LSM 树，读取比写入更昂贵。一台服务器上可能有数百个用户的并发读取，从而产生热点。
*   集群维护操作（例如压缩 SSTable）会影响性能。
*   垃圾回收（GC）停顿会导致显著的延迟尖峰。

ScyllaDB 是一个用 C++ 编写的、兼容 Cassandra 的数据库。Discord 重新设计了其架构，采用单体 API、用 Rust 编写的数据服务，以及基于 ScyllaDB 的存储。

ScyllaDB 的 p99 读取延迟为 15 毫秒，而 Cassandra 为 40-125 毫秒；p99 写入延迟为 5 毫秒，而 Cassandra 为 5-70 毫秒。

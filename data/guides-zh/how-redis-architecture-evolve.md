---
title: "Redis 架构是如何演进的"
description: "探究 Redis 架构的演进，从单机到集群。"
image: "https://assets.bytebytego.com/diagrams/0223-how-redis-architecture-evolve.png"
createdAt: "2024-03-04"
draft: false
categories:
  - caching-performance
tags:
  - Redis
  - 架构
---

![Redis 架构演进](https://assets.bytebytego.com/diagrams/0223-how-redis-architecture-evolve.png)

Redis 是一种流行的内存缓存。它是如何演进成今天这样的架构的？

## 2010 年——单机 Redis

当 Redis 1.0 于 2010 年发布时，架构相当简单。它通常被用作业务应用的缓存。

然而，Redis 将数据存储在内存中。当我们重启 Redis 时，会丢失所有数据，流量会直接打到数据库上。

## 2013 年——持久化

当 Redis 2.8 于 2013 年发布时，它解决了此前的限制。Redis 引入了 RDB 内存快照来持久化数据。它还支持 AOF（Append-Only-File，仅追加文件），每条写命令都会被写入 AOF 文件。

## 2013 年——复制

Redis 2.8 还增加了复制（replication）以提高可用性。主实例（primary instance）处理实时读写请求，而副本（replica）同步主实例的数据。

## 2013 年——哨兵

Redis 2.8 引入了 Sentinel（哨兵）来实时监控 Redis 实例。它是一套旨在帮助管理 Redis 实例的系统。它执行以下四项任务：监控、通知、自动故障转移以及配置提供者。

## 2015 年——集群

2015 年，Redis 3.0 发布。它增加了 Redis 集群。

Redis 集群是一种分布式数据库解决方案，通过分片（sharding）来管理数据。数据被划分为 16384 个槽（slot），每个节点负责其中一部分槽。

## 展望未来

Redis 之所以流行，是因为它的高性能和丰富的数据结构，这些极大地降低了开发业务应用的复杂性。

2017 年，Redis 5.0 发布，新增了 stream 数据类型。

2020 年，Redis 6.0 发布，在网络模块中引入了多线程 I/O。Redis 的模型分为网络模块和主处理模块。Redis 的开发者认为网络模块往往会成为系统中的瓶颈。

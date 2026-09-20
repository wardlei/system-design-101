---
title: "Redis 入门终极指南"
description: "通过这些简单步骤学习 Redis 的基础知识。"
image: "https://assets.bytebytego.com/diagrams/0009-steps-to-learn-the-fundamentals-of-redis-101.png"
createdAt: "2024-02-19"
draft: false
categories:
  - caching-performance
tags:
  - "Redis"
  - "数据库"
---

![](https://assets.bytebytego.com/diagrams/0009-steps-to-learn-the-fundamentals-of-redis-101.png)

Redis 是世界上最受欢迎的数据存储之一，功能非常丰富。

以下 8 个简单步骤可以帮助你理解 Redis 的基础知识。

## 什么是 Redis？

Redis（Remote Dictionary Server，远程字典服务器）是一种多模态数据库，可提供亚毫秒级的延迟。Redis 背后的核心理念是：缓存也可以充当一个功能完备的数据库。

## Redis 的应用

Airbnb、Uber、Slack 等许多高流量互联网网站，都已在其技术栈中采用了 Redis。

## Redis 如何改变了数据库格局？

Redis 支持基于主内存的读写，同时仍支持完全持久化的存储。读写操作由主内存提供服务，但数据也会持久化到磁盘。这是通过快照（RDB）和 AOF 实现的。

## Redis 数据结构

Redis 以键值对的形式存储数据。它支持多种数据结构，例如字符串、位图、列表、集合、有序集合、哈希、JSON 等。

## Redis 基本命令

一些最常用的 Redis 命令有 SET、GET、DELETE、INCR、HSET 等。还有更多命令可供使用。

## Redis 模块

Redis 模块是扩展 Redis 核心功能之外的附加组件。一些著名的模块有 RediSearch、RedisJSON、RedisGraph、RedisBloom、RedisAI、RedisTimeSeries、RedisGears、RedisML 等等。

## Redis 发布/订阅

Redis 还通过发布-订阅通信模型支持事件驱动架构。

## Redis 使用场景

Redis 的主要使用场景有分布式缓存、会话存储、消息队列、限流、高速数据库等。

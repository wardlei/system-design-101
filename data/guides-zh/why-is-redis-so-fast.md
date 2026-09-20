---
title: "为什么 Redis 这么快？"
description: "探索 Redis 卓越速度背后的关键因素。"
image: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
createdAt: '2024-03-07'
draft: false
categories:
  - caching-performance
tags:
  - "Redis"
  - "性能"
---

![](https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png)

如上图所示，主要有 3 个原因。

*   Redis 是一个基于 RAM 的数据库。RAM 访问至少比随机磁盘访问快 1000 倍。

*   Redis 利用 IO 多路复用和单线程执行循环来实现执行效率。

*   Redis 利用了几种高效的低层数据结构。

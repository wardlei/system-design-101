---
title: "Memcached 与 Redis"
description: "探索 Memcached 与 Redis 在缓存方面的关键区别。"
image: "https://assets.bytebytego.com/diagrams/0267-memcached-redis.jpg"
createdAt: "2024-02-25"
draft: false
categories:
  - caching-performance
tags:
  - "memcached"
  - "redis"
---

![](https://assets.bytebytego.com/diagrams/0267-memcached-redis.jpg)

常见的面试题——Redis 和 Memcached 有什么区别？

上图展示了它们的核心区别。数据结构上的优势使 Redis 成为以下场景的好选择：

*   记录每篇帖子的点击数和评论数（hash）

*   对评论用户列表排序并对用户去重（zset）

*   缓存用户行为历史并过滤恶意行为（zset、hash）

*   将极大数据量的布尔信息存储到很小的空间中。例如，登录状态、会员状态。（bitmap）

---
title: "Redis 有哪些用途？"
description: "探索 Redis 在缓存之外的各种使用场景。"
image: "https://assets.bytebytego.com/diagrams/0388-how-can-redis-be-used.png"
createdAt: "2024-03-06"
draft: false
categories:
  - caching-performance
tags:
  - Redis
  - 使用场景
---

![](https://assets.bytebytego.com/diagrams/0388-how-can-redis-be-used.png)

Redis 的用途远不止缓存。

如图所示，Redis 可以用于多种场景：

*   **Session（会话）**

    我们可以使用 Redis 在不同服务之间共享用户会话数据。

*   **Cache（缓存）**

    我们可以使用 Redis 缓存对象或页面，尤其是热点数据。

*   **分布式锁**

    我们可以使用 Redis 字符串在分布式服务之间获取锁。

*   **计数器**

    我们可以统计文章的点赞数或阅读数。

*   **限流器**

    我们可以对某些用户 IP 应用限流。

*   **全局 ID 生成器**

    我们可以使用 Redis 的 Int 类型生成全局 ID。

*   **购物车**

    我们可以使用 Redis Hash 来表示购物车中的键值对。

*   **计算用户留存**

    我们可以使用 Bitmap 记录用户每日登录情况，并计算用户留存率。

*   **消息队列**

    我们可以使用 List 作为消息队列。

*   **排行榜**

    我们可以使用 ZSet 对文章进行排序。

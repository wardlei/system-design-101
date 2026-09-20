---
title: "缓存未命中攻击"
description: "探索缓存未命中攻击、其影响及缓解策略。"
image: "https://assets.bytebytego.com/diagrams/0128-cache-miss-attack.png"
createdAt: "2024-02-27"
draft: false
categories:
  - caching-performance
tags:
  - "缓存"
  - "安全"
---

![](https://assets.bytebytego.com/diagrams/0128-cache-miss-attack.png)

缓存很棒，但和生活中许多事情一样，它也不是没有代价的。

其中一个问题就是**缓存未命中攻击**（Cache Miss Attack）。如果这个术语不准确，欢迎指正。它指的是这样一种场景：要获取的数据在数据库中不存在，缓存中也没有。于是每个请求最终都会打到数据库上，使缓存形同虚设。如果恶意用户用这类键发起大量查询，数据库很容易被打垮。

上图展示了这一过程。

## 解决方案

通常有两种方法可以解决这个问题：

*   **缓存空值键。** 为值为空的键设置一个较短的 TTL（Time to Live，存活时间）。

*   **使用布隆过滤器（Bloom filter）。** 布隆过滤器是一种数据结构，可以快速判断一个元素是否存在于某个集合中。如果键存在，请求先访问缓存，必要时再查询数据库。如果键在数据集中不存在，就意味着它在缓存/数据库中也不存在。这种情况下，查询根本不会触达缓存或数据库层。

---
title: "五大缓存策略"
description: "探索优化数据同步的五大缓存策略。"
image: "https://assets.bytebytego.com/diagrams/0374-top-5-caching-strategies.png"
createdAt: "2024-02-22"
draft: false
categories:
  - caching-performance
tags:
  - "缓存"
  - "数据同步"
---

![](https://assets.bytebytego.com/diagrams/0374-top-5-caching-strategies.png)

当我们在架构中引入缓存后，缓存与数据库之间的同步就变得不可避免。

让我们来看看保持数据同步的 5 种常见策略。

## 读策略

*   旁路缓存（Cache Aside）
*   读穿透（Read Through）

## 写策略

*   绕写（Write Around）
*   写回（Write Back）
*   写穿透（Write Through）

这些缓存策略经常组合使用。例如，绕写（write-around）常与旁路缓存（cache-aside）一起使用，以确保缓存是最新的。

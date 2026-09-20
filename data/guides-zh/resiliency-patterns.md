---
title: "韧性模式"
description: "探索用于构建韧性系统的云设计模式。"
image: "https://assets.bytebytego.com/diagrams/0316-reliciency-patterns.jpg"
createdAt: "2024-02-08"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - 韧性
  - 设计模式
---

你有没有注意到，最严重的事故通常都是由非常微小的事情引起的？

![](https://assets.bytebytego.com/diagrams/0316-reliciency-patterns.jpg)

一个微小的错误会引发滚雪球效应，不断累积，突然间一切都崩溃了。

以下是 8 种云设计模式，可用于减少故障造成的损害。

*   超时（Timeout）
*   重试（Retry）
*   熔断器（Circuit breaker）
*   限流（Rate limiting）
*   负载削减（Load shedding）
*   舱壁隔离（Bulkhead）
*   背压（Back pressure）
*   让它崩溃（Let it crash）

这些模式通常不会单独使用。为了有效地应用它们，我们需要理解为什么需要它们、它们如何工作，以及它们的局限性。

---
title: "如何处理 Web 请求错误"
description: "了解如何在客户端和服务器端处理 HTTP 错误。"
image: "https://assets.bytebytego.com/diagrams/0144-client-handle-error.png"
createdAt: "2024-02-13"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "错误处理"
  - "Web 请求"
---

![Web 请求错误处理](https://assets.bytebytego.com/diagrams/0144-client-handle-error.png)

我们应该如何在浏览器端妥善处理 HTTP 错误？当问题出在客户端时，又该如何在服务器端正确处理它们？

从浏览器的角度看，最简单的做法是重试，并希望错误就此消失。这在分布式网络中是个好主意，但我们也必须非常小心，以免让情况变得更糟。这里有两条通用规则：

*   对于 4XX HTTP 错误码，不要重试。

*   对于 5XX HTTP 错误码，要谨慎重试。

那么在浏览器中我们应该谨慎地做哪些事？我们绝不能用过量的重试请求压垮服务器。一种名为“指数退避”（exponential backoff）的算法或许能帮上忙。它控制两件事：

*   两次重试之间的延迟。该延迟会呈指数级增长。

*   重试次数通常设有上限。

所有浏览器都会以优雅的方式处理重试逻辑吗？大概率不会。因此，服务器必须自己保证安全。控制 HTTP 请求流量的一种常见方式，是在服务器前面设置一个流量控制网关。它提供了两个有用的工具：

*   **限流器（Rate limiter）：**用于限制请求发起的频率。它有两种略有不同的选择：令牌桶和漏桶。

*   **熔断器（Circuit breaker）：**当错误阈值被超过时，它会立即停止 HTTP 流量。经过一段时间后，它只允许有限数量的 HTTP 流量通过。如果一切正常，它会慢慢放行所有 HTTP 流量。

借助浏览器端的指数退避和服务器端的流量控制网关，我们应该能够有效地处理偶发性错误。任何剩余的问题都是真正的错误，需要谨慎修复。

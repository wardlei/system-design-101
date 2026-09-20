---
title: "六大负载均衡算法"
description: "详细探讨六大负载均衡算法。"
image: "https://assets.bytebytego.com/diagrams/0251-lb-algorithms.png"
createdAt: "2024-03-05"
draft: false
categories:
  - software-development
tags:
  - "负载均衡"
  - "算法"
---

![](https://assets.bytebytego.com/diagrams/0251-lb-algorithms.png)

## 六大负载均衡算法

*   **静态算法**

    *   轮询（Round Robin）

        客户端请求按顺序依次发送到不同的服务实例。这些服务通常要求是无状态的。

    *   粘性轮询（Sticky Round-Robin）

        这是轮询算法的改进版本。如果 Alice 的第一个请求发送到服务 A，那么后续的请求也会发送到服务 A。

    *   加权轮询（Weighted Round-Robin）

        管理员可以为每个服务指定权重。权重较高的服务会比其他服务处理更多的请求。

    *   哈希（Hash）

        该算法对传入请求的 IP 或 URL 应用哈希函数。根据哈希函数的结果，将请求路由到相应的实例。

*   **动态算法**

    *   最少连接（Least Connections）

        新请求会被发送到并发连接数最少的服务实例。

    *   最短响应时间（Least Response Time）

        新请求会被发送到响应时间最快的服务实例。

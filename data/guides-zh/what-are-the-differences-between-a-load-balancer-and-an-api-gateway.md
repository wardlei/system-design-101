---
title: '负载均衡器与 API 网关'
description: '探索负载均衡器与 API 网关之间的关键区别。'
image: 'https://assets.bytebytego.com/diagrams/0252-lb-api-gateway.png'
createdAt: '2024-02-11'
draft: false
categories:
  - api-web-development
tags:
  - API 网关
  - 负载均衡
---

![](https://assets.bytebytego.com/diagrams/0252-lb-api-gateway.png)

首先，在讨论区别之前，我们先澄清一些概念。

*   NLB（网络负载均衡器）通常部署在 API 网关之前，基于 IP 处理流量路由。它不解析 HTTP 请求。
*   ALB（应用负载均衡器）基于 HTTP 头或 URL 路由请求，因此可以提供更丰富的路由规则。我们可以根据路由需求来选择负载均衡器。对于规模较小的简单服务，一个负载均衡器就足够了。
*   API 网关更多地是在应用层面执行任务。因此它与负载均衡器的职责不同。

上图展示了细节。通常，它们被组合使用，为现代 Web 应用提供可扩展且安全的架构。

方案 a：ALB 用于在不同服务之间分发请求。由于各服务自行实现限流、认证等功能，这种方法更灵活，但需要在服务层面做更多工作。

方案 b：API 网关负责处理认证、限流、缓存等，因此服务层面的工作更少。然而，与 ALB 方案相比，这种方案的灵活性较低。

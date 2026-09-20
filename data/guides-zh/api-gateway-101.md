---
title: 'API 网关入门（API Gateway 101）'
description: '学习 API 网关的基础知识：功能、优势等。'
image: 'https://assets.bytebytego.com/diagrams/0074-api-gateway-101.png'
createdAt: '2024-02-15'
draft: false
categories:
  - api-web-development
tags:
  - API 网关
  - 微服务
---

![](https://assets.bytebytego.com/diagrams/0074-api-gateway-101.png)

API 网关是一台充当 API 前端的服务器，它接收 API 请求，执行节流和安全策略，把请求转发给后端服务，然后将相应的结果返回给客户端。

它本质上是客户端和服务器之间的中间人，负责管理和优化 API 流量。

**API 网关的关键功能**

*   **请求路由：** 将传入的 API 请求定向到合适的后端服务。
*   **负载均衡：** 将请求分发到多台服务器上，确保没有单台服务器过载。
*   **安全：** 实现认证、授权和数据加密等安全措施。
*   **限流与节流：** 控制客户端在一定时间内可以发起的请求数量。
*   **API 聚合：** 将多个后端 API 请求合并为一个前端请求，以优化性能。
*   **缓存：** 临时存储响应，减少重复处理的需要。

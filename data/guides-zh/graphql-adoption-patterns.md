---
title: 'GraphQL 采用模式'
description: '探索 4 种适合你的团队的流行 GraphQL 采用模式。'
image: 'https://assets.bytebytego.com/diagrams/0208-graphql-adoption-patterns.png'
createdAt: '2024-02-13'
draft: false
categories:
  - api-web-development
tags:
  - GraphQL
  - API
---
![](https://assets.bytebytego.com/diagrams/0208-graphql-adoption-patterns.png)

通常，团队会以一个基础架构开始他们的 GraphQL 之旅：客户端应用查询单个 GraphQL 服务器。

不过，还有多种模式可供选择：

*   **基于客户端的 GraphQL**

    客户端将现有 API 封装在单个 GraphQL 端点之后。这种方式改善了开发者体验，但客户端仍然要承担聚合数据带来的性能开销。

*   **GraphQL 与 BFF**

    BFF（Backend-for-Frontends，前端专属后端）增加了一个新层，每个客户端都有一个专属的 BFF 服务。GraphQL 天然适合构建这种面向客户端的中间层。

    客户端的性能和开发者体验都得到了提升，但代价是需要构建和维护 BFF。

*   **单体 GraphQL**

    多个团队共享一个 GraphQL 服务器的代码库，供多个客户端使用。此外，也可能由单个团队拥有一个被多个客户端团队访问的 GraphQL API。

*   **GraphQL Federation（联邦）**

    这种方式将多个图（graph）整合为一个超图（supergraph）。

    GraphQL 联邦网关负责将请求路由到下游的子图服务，每个子图服务负责 GraphQL schema 中的特定部分。这种方式既保持了领域团队对数据的所有权，又避免了重复劳动。

你怎么看：你见过或使用过哪种 GraphQL 采用方式？

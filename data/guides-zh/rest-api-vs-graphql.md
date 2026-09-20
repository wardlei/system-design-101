---
title: 'REST API 与 GraphQL'
description: '探索 REST API 与 GraphQL 在 API 设计上的差异。'
image: 'https://assets.bytebytego.com/diagrams/0036-rest-vs-graphql.png'
createdAt: '2024-03-11'
draft: false
categories:
  - api-web-development
tags:
  - API
  - GraphQL
---

![](https://assets.bytebytego.com/diagrams/0036-rest-vs-graphql.png)

在 API 设计方面，REST 和 GraphQL 各有优劣。

**REST**

*   使用 GET、POST、PUT、DELETE 等标准 HTTP 方法进行 CRUD 操作。
*   当你在相互独立的服务/应用之间需要简单、统一的接口时，它表现良好。
*   缓存策略易于实现。
*   缺点是，它可能需要多次往返，才能从不同的端点组装出相关联的数据。

**GraphQL**

*   为客户端提供单一的端点，让客户端精确查询它们需要的数据。
*   客户端在嵌套查询中指定所需的确切字段，服务器则返回仅包含这些字段的优化载荷。
*   支持用于修改数据的 Mutation，以及用于实时通知的 Subscription。
*   非常适合聚合来自多个数据源的数据，也能很好地应对快速演进的前端需求。
*   然而，它把复杂性转移到了客户端，并且如果不加以适当防护，可能允许滥用查询。
*   缓存策略可能比 REST 更复杂。

在 REST 和 GraphQL 之间做选择，取决于应用和开发团队的具体需求。GraphQL 很适合复杂或频繁变化的前端需求，而 REST 则适合那些偏好简单、一致契约的应用。

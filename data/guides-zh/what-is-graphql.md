---
title: 什么是 GraphQL？
description: "GraphQL 详解：一种用于 API 的查询语言。"
image: 'https://assets.bytebytego.com/diagrams/0055-what-is-graphql.png'
createdAt: '2024-03-12'
draft: false
categories:
  - api-web-development
tags:
  - GraphQL
  - API
---

![](https://assets.bytebytego.com/diagrams/0055-what-is-graphql.png)

### 它是 REST API 的替代品吗？

GraphQL 是一种用于 API 的查询语言，也是一种通过使用你为数据定义的类型系统来执行这些查询的运行时。它于 2012 年由 Meta 内部开发，并于 2015 年公开发布。

与更传统的 REST API 不同，GraphQL 允许客户端精确地请求它们所需的数据，从而能够通过一次查询从多个数据源获取数据。这种数据检索效率可以提升 Web 和移动应用的性能。

GraphQL 服务器位于客户端和后端服务之间。它可以将多个 REST 请求聚合为一次查询。GraphQL 服务器以图（graph）的形式组织资源。

GraphQL 支持查询（queries）、变更（mutations，对资源应用数据修改）和订阅（subscriptions，在 schema 修改时接收通知）。

**GraphQL 的优点：**

*   GraphQL 在数据获取方面更高效。
*   GraphQL 返回更准确的结果。
*   GraphQL 拥有强大的类型系统来管理实体的结构，从而减少错误。
*   GraphQL 适合管理复杂的微服务。

**GraphQL 的缺点**

*   复杂度增加。
*   设计上存在过度获取（over fetching）。
*   缓存方面的复杂性。

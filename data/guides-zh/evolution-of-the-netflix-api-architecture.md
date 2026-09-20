---
title: 'Netflix API 架构的演进'
description: '通过四个阶段探索 Netflix API 架构的演进历程。'
image: 'https://assets.bytebytego.com/diagrams/0290-netflix-api.png'
createdAt: '2024-03-11'
draft: false
categories:
  - real-world-case-studies
tags:
  - API 架构
  - Netflix
---

![](https://assets.bytebytego.com/diagrams/0290-netflix-api.png)

Netflix 的 API 架构经历了 4 个主要阶段。

**单体架构（Monolith）**。应用以单体形式打包和部署，例如单个 Java WAR 文件、Rails 应用等。大多数初创公司都是从单体架构开始的。

**直接访问（Direct access）**。在这种架构中，客户端应用可以直接向微服务发起请求。当微服务数量达到数百甚至上千个时，把它们全部暴露给客户端并不理想。

**网关聚合层（Gateway aggregation layer）**。有些用例会跨越多个服务，我们需要一个网关聚合层。想象一下，Netflix 应用需要 3 个 API（电影、制作、艺人）来渲染前端页面，网关聚合层让这一切成为可能。

**联邦网关（Federated gateway）**。随着开发者数量的增长和领域复杂度的增加，开发 API 聚合层变得越来越困难。GraphQL 联邦（federation）让 Netflix 能够搭建一个单一的 GraphQL 网关，从所有其他 API 中获取数据。

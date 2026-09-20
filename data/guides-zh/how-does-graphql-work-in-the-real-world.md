---
title: LinkedIn 是如何使用 GraphQL 的
description: 了解 LinkedIn 如何利用 GraphQL 改进其开发流程。
image: 'https://assets.bytebytego.com/diagrams/0209-graphql-linkedin.jpeg'
createdAt: '2024-02-12'
draft: false
categories:
  - api-web-development
tags:
  - GraphQL
  - LinkedIn
---

![](https://assets.bytebytego.com/diagrams/0209-graphql-linkedin.jpeg)

上图展示了 LinkedIn 如何采用 GraphQL。

“迁移到 GraphQL 是一项浩大的工程，它改变了数千名工程师的开发流程……”\[1\]

采用 GraphQL 之后的整体工作流程分为 3 个部分：

## 第 1 部分——编辑并测试查询

**第 1-2 步：** 客户端开发人员编写一个查询，并用后端服务进行测试。

## 第 2 部分——注册查询

**第 3-4 步：** 客户端开发人员提交查询，并将查询发布到查询注册表（query registry）。

## 第 3 部分——在生产中使用

**第 5 步：** 查询与客户端代码一起发布。

**第 6-7 步：** 每个已注册的查询都包含路由元数据。这些元数据在流量路由层用于将传入的请求路由到正确的服务集群。

**第 8 步：** 已注册的查询在服务运行时被缓存。

**第 9 步：** 示例查询首先进入身份服务（identity service）以获取成员信息，然后再进入组织服务（organization service）以获取公司信息。

LinkedIn 不部署 GraphQL 网关，原因有二：

1.  避免额外的网络跳转
2.  避免单点故障

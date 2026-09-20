---
title: Netflix 究竟如何使用 Java
description: 探究 Netflix 在其微服务架构中对 Java 的广泛使用。
image: 'https://assets.bytebytego.com/diagrams/0102-how-netflix-really-uses-java.png'
createdAt: '2024-03-04'
draft: false
categories:
  - real-world-case-studies
tags:
  - Java
  - 微服务
---

![](https://assets.bytebytego.com/diagrams/0102-how-netflix-really-uses-java.png)

Netflix 主要是一家以 Java 为主的公司。

Netflix 的每一个后端应用（包括内部应用、流媒体应用和影视制作应用）都是 Java 应用。

然而，这套 Java 技术栈并非一成不变，多年来经历了多次迭代。

以下是这些迭代的细节：

*   **API 网关**

    Netflix 采用微服务架构。每一块功能和数据都由一个使用 Java（最初是版本 8）构建的微服务负责。

*   **使用 Groovy 与 RxJava 的 BFF**

    对 Netflix 来说，为多个客户端使用单一网关是有问题的，因为每个客户端（如电视、移动应用或网页浏览器）都有细微的差异。

    为了应对这一点，Netflix 采用了 BFF（Backend-for-Frontend，服务于前端的后端）模式。Zuul 被移到了代理（proxy）的角色。

*   **GraphQL 联邦**

    Groovy 和 RxJava 的方案要求 UI 开发人员在编写 Groovy 脚本时投入更多工作。此外，响应式编程通常也很难。

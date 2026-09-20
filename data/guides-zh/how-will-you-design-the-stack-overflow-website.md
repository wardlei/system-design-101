---
title: '如何设计 Stack Overflow'
description: '探索 Stack Overflow 的架构及其设计考量。'
image: 'https://assets.bytebytego.com/diagrams/0343-stack-overflow-architecture.png'
createdAt: '2024-02-20'
draft: false
categories:
  - real-world-case-studies
tags:
  - 系统设计
  - 架构
---

![图片](https://assets.bytebytego.com/diagrams/0343-stack-overflow-architecture.png)

如果你的回答是本地部署服务器和单体架构，你很可能在面试中失败，但这正是它在现实中的构建方式！

**人们以为它应该长什么样**

面试官可能期待的是左侧那样的东西。

*   使用微服务把系统拆解成一个个小组件。
*   每个服务都有自己的数据库，并大量使用缓存。
*   服务进行分片。
*   服务之间通过消息队列异步通信。
*   服务使用事件溯源（Event Sourcing）和 CQRS 来实现。
*   展示分布式系统方面的知识，比如最终一致性、CAP 定理等。

**它实际上是什么样**

Stack Overflow 仅用 9 台本地部署的 Web 服务器就承载了所有流量，而且它是单体架构！它拥有自己的服务器，并不运行在云端。

这与我们如今普遍的看法背道而驰。

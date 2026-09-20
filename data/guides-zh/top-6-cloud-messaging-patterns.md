---
title: "6 大云消息传递模式"
description: "探索分布式系统中 6 个关键的云消息传递模式。"
image: "https://assets.bytebytego.com/diagrams/0378-top-6-cloud-messaging-patterns.png"
createdAt: "2024-02-26"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "云消息传递"
  - "设计模式"
---

服务之间是如何相互通信的？下图展示了 6 种云消息传递模式。

![](https://assets.bytebytego.com/diagrams/0378-top-6-cloud-messaging-patterns.png)

## 异步请求-应答（Asynchronous Request-Reply）

该模式旨在为长时间运行的后端任务提供确定性。它将后端处理与前端客户端解耦。

在下图中，客户端对 API 发起同步调用，触发后端一个长时间运行的操作。API 返回 HTTP 202（Accepted）状态码，确认请求已被接收并进入处理。

## 发布-订阅（Publisher-Subscriber）

该模式旨在将发送者与消费者解耦，并避免发送者因等待响应而被阻塞。

## 凭据存储（Claim Check）

该模式解决了大消息的传输问题。它将整个消息负载存储到数据库中，只传输对消息的引用，之后再用该引用从数据库中取回负载。

## 优先级队列（Priority Queue）

该模式对发送到服务的请求进行优先级排序，使优先级较高的请求比优先级较低的请求更早被接收和处理。

## 事务补偿（Saga）

Saga 用于在分布式系统的多个服务之间管理数据一致性，尤其是在每个服务管理各自数据库的微服务架构中。

Saga 模式解决了在不依赖分布式事务的情况下维持数据一致性的难题，而分布式事务难以扩展，并且会对系统性能产生负面影响。

## 竞争消费者（Competing Consumers）

该模式允许多个并发消费者处理在同一消息通道上接收到的消息。无需在消费者之间配置复杂的协调机制。然而，该模式无法保证消息顺序。

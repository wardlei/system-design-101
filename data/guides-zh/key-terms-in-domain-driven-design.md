---
title: "领域驱动设计中的关键术语"
description: "理解领域驱动设计中的关键概念，以打造更好的软件。"
image: "https://assets.bytebytego.com/diagrams/0163-ddd.png"
createdAt: "2024-02-28"
draft: false
categories:
  - software-architecture
tags:
  - "领域驱动设计"
  - "软件设计"
---

你听说过领域驱动设计（DDD）这种重要的软件设计方法吗？

![](https://assets.bytebytego.com/diagrams/0163-ddd.png)

DDD 是在 Eric Evans 的经典著作《领域驱动设计：软件核心复杂性应对之道》中提出的。它阐释了一种对复杂业务进行建模的方法论。这本书内容很多，所以我将总结一下基础部分。

## 领域对象的组成：

*   **实体（Entity）：** 具有 ID 和生命周期的领域对象。

*   **值对象（Value Object）：** 没有 ID 的领域对象。它用于描述实体的属性。

*   **聚合（Aggregate）：** 一组实体的集合，它们通过聚合根（Aggregate Root，它本身也是一个实体）绑定在一起。它是存储的单元。

## 领域对象的生命周期：

*   **仓储（Repository）：** 存储和加载聚合。

*   **工厂（Factory）：** 处理聚合的创建。

## 领域对象的行为：

*   **领域服务（Domain Service）：** 编排多个聚合。

*   **领域事件（Domain Event）：** 对聚合所发生事件的描述。该发布会被公开，以便其他方可以消费并重建它。

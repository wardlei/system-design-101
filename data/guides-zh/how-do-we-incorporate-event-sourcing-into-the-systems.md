---
title: "我们如何将事件溯源（Event Sourcing）融入系统？"
description: "探索如何融入事件溯源：从纽约时报档案到微服务。"
image: "https://assets.bytebytego.com/diagrams/0037-use-cases-for-event-sourcing.png"
createdAt: "2024-02-20"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "事件溯源"
  - "微服务"
---

![](https://assets.bytebytego.com/diagrams/0037-use-cases-for-event-sourcing.png)

事件溯源将编程范式从持久化状态转变为持久化事件。事件存储是事实来源（source of truth）。我们来看三个例子。

## 纽约时报

该报网站将自 1851 年以来的每篇文章、图片和署名都存储在事件存储中。随后，原始数据被反规范化成不同的视图，并注入不同的 ElasticSearch 节点用于网站搜索。

## CDC（变更数据捕获）

CDC 连接器从表中拉取数据并将其转换为事件。这些事件被推送到 Kafka，其他下游（sink）从 Kafka 消费事件。

## 微服务连接器

我们还可以使用事件溯源范式在微服务之间传递事件。例如，购物车服务会为添加或移除购物车中的商品生成各种事件。Kafka broker 充当事件存储，其他服务（包括风控服务、账单服务和邮件服务）从事件存储中消费事件。由于事件是事实来源，每个服务都可以自行确定领域模型。

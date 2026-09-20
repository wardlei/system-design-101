---
title: "你必须掌握的最终一致性模式"
description: "探索分布式数据库设计中的最终一致性模式。"
image: "https://assets.bytebytego.com/diagrams/0100-eventual-consistency-patterns-you-must-know.png"
createdAt: "2024-02-15"
draft: false
categories:
  - database-and-storage
tags:
  - "一致性"
  - "数据库"
---

![](https://assets.bytebytego.com/diagrams/0100-eventual-consistency-patterns-you-must-know.png)

最终一致性是一种数据一致性模型，它确保对分布式数据库的更新最终会反映到所有节点上。异步复制等技术有助于实现最终一致性。

然而，最终一致性也可能导致数据不一致。以下是 4 种可以帮助你设计应用的模式。

## 基于事件的最终一致性（Event-based Eventual Consistency）

服务发出事件，其他服务监听这些事件来更新各自的数据库实例。这使服务之间松散耦合，但会延迟数据的一致性。

## 后台同步的最终一致性（Background Sync Eventual Consistency）

在这种模式中，一个后台作业负责让各数据库之间的数据保持一致。由于后台作业按特定计划运行，最终一致性的达成会更慢。

## 基于 Saga 的最终一致性（Saga-based Eventual Consistency）

Saga 是一系列本地事务，每个事务都只在单一服务中更新数据。它用于管理那些最终一致的长生命周期事务。

## 基于 CQRS 的最终一致性（CQRS-based Eventual Consistency）

将读操作和写操作分离到不同的数据库中，这些数据库最终保持一致。读模型和写模型可以针对各自的需求进行优化。

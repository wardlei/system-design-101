---
title: "变更数据捕获（CDC）：利用实时数据的关键"
description: "了解变更数据捕获（CDC）如何帮助利用实时数据。"
image: "https://assets.bytebytego.com/diagrams/0133-change-data-capture-key-to-leverage-real-time-data.png"
createdAt: "2024-02-11"
draft: false
categories:
  - database-and-storage
tags:
  - "数据流"
  - "数据同步"
---

![](https://assets.bytebytego.com/diagrams/0133-change-data-capture-key-to-leverage-real-time-data.png)

世界上 90% 的数据是在过去两年内产生的，而且这种增长只会越来越快。

然而，最大的挑战在于如何实时利用这些数据。持续的数据变化使得数据库、数据湖和数据仓库之间失去同步。

CDC（Change Data Capture，变更数据捕获）可以帮助你克服这一挑战。

CDC 能够识别并捕获数据库中数据的变化，让你可以在多个系统之间复制和同步数据。

## 变更数据捕获的工作原理

那么，变更数据捕获是如何工作的呢？下面是逐步拆解：

1. 数据修改：源数据库中的数据发生了变化。可能是对表的插入、更新或删除操作。

2. 变更捕获：CDC 工具监控数据库的事务日志以捕获这些修改。它使用源连接器（source connector）连接数据库并读取日志。

3. 变更处理：捕获到的变更被处理并转换成适合下游系统的格式。

4. 变更传播：处理后的变更被发布到消息队列，并传播到目标系统，例如数据仓库、分析平台、像 Redis 这样的分布式缓存等。

5. 实时集成：CDC 工具使用其目标连接器（sink connector）消费日志并更新目标系统。变更被实时接收，从而实现无冲突的数据分析和决策。

用户只需要关心第 1 步，其余所有步骤都是透明的。

一个流行的 CDC 方案是使用 Debezium 搭配 Kafka Connect，以 Kafka 作为 broker，将数据变更从源系统流式传输到目标系统。Debezium 为大多数数据库提供了连接器，如 MySQL、PostgreSQL、Oracle 等。

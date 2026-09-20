---
title: "读副本模式"
description: "探索用于数据库设计与优化的读副本模式。"
image: "https://assets.bytebytego.com/diagrams/0312-read-replica-pattern.png"
createdAt: "2024-01-28"
draft: false
categories:
  - database-and-storage
tags:
  - "数据库复制"
  - "读扩展性"
---

![](https://assets.bytebytego.com/diagrams/0312-read-replica-pattern.png)

在本文中，我们来讨论一种简单而常用的数据库设计模式（设置）：**读副本模式**。

在这种设置中，所有修改数据的命令（如插入、删除或更新）都会发送到主数据库，而读取操作则发送到读副本。

上图展示了这种设置：

1.  当 Alice 在 amazon.com 上下单时，请求会发送到订单服务（Order Service）。

2.  订单服务在主数据库中创建关于该订单的记录（写操作）。数据会被复制到两个副本。

3.  Alice 查看订单详情。数据从某个副本提供（读操作）。

4.  Alice 查看最近的订单历史。数据从某个副本提供（读操作）。

这种设置存在一个主要问题：**复制延迟（replication lag）**。

在某些情况下（网络延迟、服务器过载等），副本中的数据可能会落后几秒甚至几分钟。在这种情况下，如果 Alice 在下单后立即查看订单状态（该查询由副本提供），她可能根本看不到这笔订单。这会让 Alice 感到困惑。在这种情况下，我们需要「读后写」一致性（read-after-write consistency）。

## 缓解这个问题的可能解决方案：

*   对延迟敏感的读取操作发送到主数据库。

*   紧跟写入之后的读取操作路由到主数据库。

*   关系型数据库通常会提供一种方法来检查副本是否已追上主库。如果数据是最新的，就查询副本；否则使读请求失败或从主库读取。

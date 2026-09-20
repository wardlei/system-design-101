---
title: "CAP 定理：最容易被误解的术语之一"
description: "探讨 CAP 定理、其含义以及常见的误解。"
image: "https://assets.bytebytego.com/diagrams/0131-cap-theorem.jpeg"
createdAt: "2024-03-06"
draft: false
categories:
  - database-and-storage
tags:
  - "分布式系统"
  - "CAP 定理"
---

![白色背景上的文字和标志特写](https://assets.bytebytego.com/diagrams/0131-cap-theorem.jpeg)

CAP 定理是计算机科学中最著名的术语之一，但我敢说不同的开发者对它有不同的理解。让我们来看看它到底是什么，以及为什么它会引起困惑。

CAP 定理指出，一个分布式系统不可能同时提供以下三项保证中的两项以上。

## 一致性（Consistency）

一致性意味着无论客户端连接到哪个节点，所有客户端在同一时间看到的数据都是相同的。

## 可用性（Availability）

可用性意味着任何请求数据的客户端都能得到响应，即使部分节点已经宕机。

## 分区容错性（Partition Tolerance）

分区容错性意味着即使发生网络分区，系统仍能继续运行。

"三选二" 的说法可能有用，但这种简化可能会产生误导。

*   选择数据库并不容易。仅仅基于 CAP 定理来证明我们的选择是不够的。例如，公司选择 Cassandra 用于聊天应用，并不是仅仅因为它是一个 AP 系统。Cassandra 有一系列优良特性，使它成为存储聊天消息的理想选择。我们需要更深入地挖掘。

*   "CAP 只禁止了设计空间中极小的一部分：在发生分区时同时实现完美的可用性和一致性，而分区是很罕见的。"——摘自论文《CAP Twelve Years Later: How the "Rules" Have Changed》。

*   这个定理讨论的是 100% 的可用性和一致性。更现实的讨论应该是在没有网络分区时，延迟和一致性之间的权衡。更多细节请参见 PACELC 定理。

## CAP 定理真的有用吗？

我认为它仍然有用，因为它开启了我们对一系列权衡问题的思考，但它只是故事的一部分。在选择合适的数据库时，我们需要更深入地挖掘。

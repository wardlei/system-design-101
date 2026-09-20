---
title: "ACID 是什么意思？"
description: "理解数据库事务的 ACID 属性。"
image: "https://assets.bytebytego.com/diagrams/0407-what-does-acid-mean.png"
createdAt: "2024-03-12"
draft: false
categories:
  - database-and-storage
tags:
  - "数据库"
  - "ACID"
---

上图解释了 ACID 在数据库事务上下文中的含义。

![](https://assets.bytebytego.com/diagrams/0407-what-does-acid-mean.png)

## 原子性（Atomicity）

事务中的写入会一次性全部执行，不能被拆分成更小的部分。如果在执行事务时出现故障，事务中的写入会被回滚。

因此，原子性意味着“要么全做，要么全不做”。

## 一致性（Consistency）

与 CAP 定理中的“一致性”（即每次读取都得到最新写入或一个错误）不同，这里的一致性指的是保持数据库不变量。事务写入的任何数据都必须符合所有已定义的规则，并让数据库维持在良好状态。

## 隔离性（Isolation）

当两个不同事务发生并发写入时，这两个事务彼此隔离。最严格的隔离是“可串行化”，即每个事务表现得就像它是数据库中唯一在运行的事务。然而这在现实中很难实现，所以我们常常采用更低的隔离级别。

## 持久性（Durability）

事务提交后，即使发生系统故障，数据也会被持久化。在分布式系统中，这意味着数据会被复制到其他一些节点上。

---
title: "什么是死锁？"
description: "探讨死锁：产生条件、预防与恢复策略。"
image: "https://assets.bytebytego.com/diagrams/0411-what-is-a-deadlock.png"
createdAt: "2024-03-11"
draft: false
categories:
  - computer-fundamentals
tags:
  - "并发"
  - "数据库"
---

当两个或多个事务相互等待对方释放它们继续处理所需的资源上的锁时，就会发生死锁。这会导致没有任何事务能够继续执行，最终陷入无限期等待。

![](https://assets.bytebytego.com/diagrams/0411-what-is-a-deadlock.png)

## Coffman 条件

Coffman 条件以 Edward G. Coffman, Jr. 的名字命名，他于 1971 年首次提出这些条件。它们描述了死锁发生所必须同时满足的四个必要条件：

*   互斥（Mutual Exclusion）
*   持有并等待（Hold and Wait）
*   不可抢占（No Preemption）
*   循环等待（Circular Wait）

## 死锁预防

*   资源排序：对所有资源类型规定一个全序，并要求每个进程严格按照递增的顺序请求资源。

*   超时：持有资源时间过长的进程可以被回滚。

*   银行家算法（Banker's Algorithm）：一种死锁避免算法，它模拟向进程分配资源的过程，并根据资源的未来可用性来判断批准某个资源请求是否安全，从而避免进入不安全状态。

## 死锁恢复

*   选择牺牲者：大多数现代数据库管理系统（DBMS）和操作系统都实现了复杂的算法来检测死锁并选择牺牲者，通常还允许通过配置设置自定义牺牲者的选择标准。选择可以基于资源利用率、事务优先级、回滚成本等因素。

*   回滚：数据库可以回滚整个事务，或只回滚到足以打破死锁的程度。被回滚的事务可以由数据库管理系统自动重新启动。

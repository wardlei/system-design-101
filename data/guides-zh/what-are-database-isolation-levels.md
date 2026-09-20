---
title: "数据库隔离级别"
description: "探索数据库隔离级别及其对事务并发的影响。"
image: "https://assets.bytebytego.com/diagrams/0239-isolation-level.png"
createdAt: "2024-02-03"
draft: false
categories:
  - database-and-storage
tags:
  - "数据库"
  - "事务"
---

![](https://assets.bytebytego.com/diagrams/0239-isolation-level.png)

## 它们的用途是什么？

数据库隔离允许一个事务像不存在其他并发运行的事务一样执行。

上图展示了四种隔离级别。

## 隔离级别

*   **可串行化（Serializable）：** 这是最高的隔离级别。并发事务保证按顺序执行。

*   **可重复读（Repeatable Read）：** 事务期间读取的数据与事务开始时保持一致。

*   **读已提交（Read Committed）：** 数据修改只能在事务提交之后被读取。

*   **读未提交（Read Uncommitted）：** 在事务提交之前，数据修改就可以被其他事务读取。

隔离性由 MVCC（多版本并发控制）和锁来保证。

## MVCC 示例

该图以可重复读为例，演示了 MVCC 的工作原理：

每一行都有两个隐藏的列：transaction\_id 和 roll\_pointer。当事务 A 开始时，会创建一个 transaction\_id=201 的新 Read View。不久之后，事务 B 开始，并创建一个 transaction\_id=202 的新 Read View。

现在事务 A 将余额修改为 200，会创建一行新的日志记录，roll\_pointer 指向旧的行。在事务 A 提交之前，事务 B 读取余额数据。事务 B 发现 transaction\_id 201 尚未提交，于是它读取下一条已提交的记录（transaction\_id=200）。

即使事务 A 提交了，事务 B 仍然基于事务 B 开始时创建的 Read View 来读取数据。因此事务 B 始终读到 balance=100 的数据。

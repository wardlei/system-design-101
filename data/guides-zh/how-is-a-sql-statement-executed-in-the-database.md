---
title: "SQL 语句在数据库中的执行"
description: "探究数据库系统中 SQL 语句执行的各个步骤。"
image: "https://assets.bytebytego.com/diagrams/0340-sql-execution-order-in-db.jpeg"
createdAt: "2024-02-23"
draft: false
categories:
  - database-and-storage
tags:
  - SQL
  - 数据库内部机制
---

![](https://assets.bytebytego.com/diagrams/0340-sql-execution-order-in-db.jpeg)

上图展示了这一流程。请注意，不同数据库的架构各不相同，该图展示的是一些常见的设计。

## 第 1 步——传输层

SQL 语句通过传输层协议（例如 TCP）发送到数据库。

## 第 2 步——命令解析器

SQL 语句被送到命令解析器，在这里进行语法分析和语义分析，随后生成查询树（query tree）。

## 第 3 步——优化器

查询树被送到优化器。优化器生成执行计划（execution plan）。

## 第 4 步——执行器

执行计划被送到执行器。执行器从执行过程中检索数据。

## 第 5 步——访问方法

访问方法（Access methods）提供执行所需的数据获取逻辑，从存储引擎中检索数据。

## 第 6 步——缓冲区管理器（只读查询）

访问方法判断 SQL 语句是否只读。如果查询是只读的（SELECT 语句），它会被交给缓冲区管理器做进一步处理。缓冲区管理器在缓存或数据文件中查找数据。

## 第 7 步——事务管理器（更新/插入）

如果语句是 UPDATE 或 INSERT，它会被交给事务管理器做进一步处理。

## 第 8 步——锁管理器

在事务期间，数据处于锁定模式。这由锁管理器来保证。它还确保事务的 ACID 特性。

---
title: "数据库锁详解"
description: "探索不同类型的数据库锁及其功能。"
image: "https://assets.bytebytego.com/diagrams/0022-9-types-of-database-locks.png"
createdAt: "2024-03-10"
draft: false
categories:
  - database-and-storage
tags:
  - "数据库锁"
  - "并发控制"
---

![](https://assets.bytebytego.com/diagrams/0022-9-types-of-database-locks.png)

在数据库管理中，锁是防止对数据进行并发访问的机制，以确保数据的完整性和一致性。

## 常见的锁类型

以下是数据库中常用的锁类型：

*   **共享锁（S Lock）**

    它允许多个事务同时读取一个资源，但不允许修改它。其他事务也可以在同一资源上获取共享锁。

*   **排他锁（X Lock）**

    它允许一个事务既读取又修改一个资源。当排他锁被持有时，其他任何事务都不能在同一资源上获取任何类型的锁。

*   **更新锁（U Lock）**

    当一个事务打算更新某个资源时，它用于防止死锁场景。

*   **架构锁（Schema Lock）**

    它用于保护数据库对象的结构。

*   **批量更新锁（BU Lock）**

    它在批量插入操作期间使用，通过减少所需的锁数量来提高性能。

*   **键范围锁（Key-Range Lock）**

    它用于索引数据中，以防止幻读（向事务已经读取的范围内插入新行）。

*   **行级锁（Row-Level Lock）**

    它锁定表中的特定行，允许其他行被并发访问。

*   **页级锁（Page-Level Lock）**

    它锁定数据库中的特定页（固定大小的数据块）。

*   **表级锁（Table-Level Lock）**

    它锁定整张表。这种方法实现简单，但会显著降低并发性。

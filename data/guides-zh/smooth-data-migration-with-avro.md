---
title: "使用 Avro 平滑地进行数据迁移"
description: "了解 Apache Avro 如何通过模式演化实现平滑的数据迁移。"
image: "https://assets.bytebytego.com/diagrams/0080-avro.png"
createdAt: "2024-02-01"
draft: false
categories:
  - database-and-storage
tags:
  - 数据迁移
  - Apache Avro
---

![](https://assets.bytebytego.com/diagrams/0080-avro.png)

在执行数据迁移时，我们如何确保万无一失？上图展示了 Apache Avro 在数据迁移过程中如何管理模式的演化。

Avro 始于 2009 年，最初是 Apache Hadoop 的一个子项目，目的是解决 Thrift 在 Hadoop 使用场景中的局限。Avro 主要用于两件事：数据序列化和 RPC。

图中的要点：

*   我们可以将数据导出到**对象容器文件**中，模式与数据块放在一起。Avro 会根据列**动态**生成模式，因此如果模式发生变化，就会生成一个新的模式，并与新数据一起存储。

*   当导出的文件被加载到另一个数据存储（例如 Teradata）时，任何人都可以读取模式，并知道如何读取数据。旧数据和新数据都可以顺利迁移到新数据库。
    与静态生成模式的 gRPC 或 Thrift 不同，Avro 让数据迁移过程更加轻松。

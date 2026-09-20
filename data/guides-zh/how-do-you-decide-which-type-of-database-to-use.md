---
title: "如何决定使用哪种类型的数据库"
description: "一份根据你的具体需求选择合适数据库的指南。"
image: "https://assets.bytebytego.com/diagrams/0160-database-types.jpg"
createdAt: "2024-02-17"
draft: false
categories:
  - database-and-storage
tags:
  - 数据库选型
  - 数据库类型
---

![](https://assets.bytebytego.com/diagrams/0160-database-types.jpg)

如今有成百上千种数据库可供选择，比如 Oracle、MySQL、MariaDB、SQLite、PostgreSQL、Redis、ClickHouse、MongoDB、S3、Ceph 等等。你该如何为自己的系统选择合适的架构呢？我的简要总结如下：

## 数据库类型

*   关系型数据库：几乎任何问题都可以用它们解决。

*   内存存储：速度快、数据容量有限，非常适合需要快速操作的场景。

*   时序数据库：用于存储和管理带时间戳的数据。

*   图数据库：适合处理非结构化对象之间的复杂关系。

*   文档存储：适合存储大型不可变数据。

*   宽列存储：通常用于大数据、分析、报表等需要反规范化数据的场景。

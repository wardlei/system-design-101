---
title: "什么是无服务器数据库？"
description: "探索无服务器数据库、其优势以及它们的不同之处。"
image: "https://assets.bytebytego.com/diagrams/0329-serverlessdb.jpeg"
createdAt: "2024-02-24"
draft: false
categories:
  - database-and-storage
tags:
  - "无服务器"
  - "数据库"
---

![](https://assets.bytebytego.com/diagrams/0329-serverlessdb.jpeg)

无服务器数据库是未来吗？无服务器数据库与传统云数据库有何不同？

上图所示的 Amazon Aurora Serverless 是一种可自动扩展、按需可用的 Amazon Aurora 配置。

## Aurora Serverless 的关键特性

*   Aurora Serverless 能够根据业务需求自动上调或下调容量。例如，一个正在为大型促销活动做准备的电商网站，可以在几毫秒内将负载扩展到多个数据库。与需要配置和管理数据库实例的普通云数据库相比，Aurora Serverless 可以自动启动和关闭。

*   通过将计算层与数据存储层解耦，Aurora Serverless 能够以更精确的方式计费。此外，Aurora Serverless 可以是预配置实例和无服务器实例的组合，使现有的预配置数据库能够成为无服务器池的一部分。

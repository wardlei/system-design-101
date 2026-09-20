---
title: "理解数据库分片的关键概念"
description: "通过垂直/水平策略探索数据库分片的关键概念。"
image: "https://assets.bytebytego.com/diagrams/0096-dbshards.png"
createdAt: "2024-03-09"
draft: false
categories:
  - database-and-storage
tags:
  - "数据库分片"
  - "数据库设计"
---

![](https://assets.bytebytego.com/diagrams/0096-dbshards.png)

在这份简洁且图文并茂的资料中，我们将拆解数据库分区的关键概念，并解释垂直和水平两种策略。

## 基于范围的分片

将你的数据拆分成不同的范围。可以把它想象成按类型把书整理到不同的书架上。

## 基于键的分片（辅以 %3 哈希）

想象每条数据都有一个唯一的键，我们根据特定的规则来分发它们。这就像按花色和数字整理扑克牌。

## 基于目录的分片

目录就像电话簿一样，能帮助你快速找到所需信息。类似地，这种技术使用目录来高效地路由数据。

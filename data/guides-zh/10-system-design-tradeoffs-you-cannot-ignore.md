---
title: "系统设计中不可忽视的 10 个权衡取舍"
description: "探索构建健壮架构时 10 个关键的系统设计权衡。"
image: "https://assets.bytebytego.com/diagrams/0026-10-system-design-trade-offs-you-cannot-ignore.png"
createdAt: "2024-03-03"
draft: false
categories:
  - software-architecture
tags:
  - 系统设计
  - 权衡取舍
---

![系统设计权衡](https://assets.bytebytego.com/diagrams/0026-10-system-design-trade-offs-you-cannot-ignore.png)

如果你不懂权衡取舍，你就不懂系统设计。

## 1. 垂直扩展 vs 水平扩展

垂直扩展是给现有服务器增加更多资源（CPU、内存）。

水平扩展是向服务器池中添加更多服务器。

## 2. SQL vs NoSQL

SQL 数据库将数据组织为由行和列组成的表。

NoSQL 非常适合需要灵活模式（schema）的应用。

## 3. 批处理 vs 流处理

批处理是先收集数据，然后一次性处理。例如每日账单处理。

流处理是实时处理数据。例如欺诈检测流程。

## 4. 规范化 vs 反规范化

规范化将数据拆分到相关联的表中，确保每条信息只存储一次。

反规范化将数据合并到更少的表中，以获得更好的查询性能。

## 5. 一致性 vs 可用性

一致性是保证每次都能获取到最新的数据。

可用性是确保系统始终正常运行，即使某些部分出现问题。

## 6. 强一致性 vs 最终一致性

强一致性是指数据更新会立即反映出来。

最终一致性是指数据更新会延迟一段时间后才能在各节点间生效。

## 7. REST vs GraphQL

使用 REST 端点时，你需要访问多个端点来收集数据。

使用 GraphQL 时，你可以通过特定的查询更高效地获取数据，但设计成本更高。

## 8. 有状态 vs 无状态

有状态系统会记住过去的交互。

无状态系统不会跟踪过去的交互。

## 9. 读穿透缓存 vs 写穿透缓存

读穿透缓存（read-through cache）在缓存未命中时从数据库加载数据。

写穿透缓存（write-through cache）同时将数据更新写入缓存和存储。

## 10. 同步处理 vs 异步处理

在同步处理中，任务一个接一个地执行。

在异步处理中，任务可以在后台运行。新任务可以在不等待前一个任务的情况下启动。

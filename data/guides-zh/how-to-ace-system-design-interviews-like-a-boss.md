---
title: "如何像高手一样通过系统设计面试"
description: "一个在系统设计面试中脱颖而出的 7 步流程。"
image: "https://assets.bytebytego.com/diagrams/0104-how-to-ace-system-design-interviews-like-a-boss.png"
createdAt: '2024-03-14'
draft: false
categories:
  - technical-interviews
tags:
  - "系统设计"
  - "面试准备"
---

![系统设计面试](https://assets.bytebytego.com/diagrams/0104-how-to-ace-system-design-interviews-like-a-boss.png)

遵循以下 7 步流程，在系统设计环节中表现出色

## 1. 需求澄清

第一步，澄清功能性和非功能性需求。通过提问来理解系统的核心功能，以及数据量、可用性、规模等非功能性方面。

## 2. 容量估算

接下来，估算系统的容量。重点关注用户数量、流量、存储/内存需求，以及计算和网络需求等属性。

## 3. 构建高层设计

将系统拆分为客户端应用、服务器、负载均衡器、数据库等组件。

先画一张简单的框图，展示这些组件及其之间可能的交互。重点关注数据流。

## 4. 数据库设计

对数据进行建模，并为系统选择合适的数据库类型。完成后，重点关注数据库 schema。

## 5. 接口设计

接下来，重点关注系统的接口。这些接口可以是 API 端点，也可以是系统各组件之间交换的事件模型。同时，选择一种通信方式，例如 REST、GraphQL、gRPC 或事件驱动

## 6. 可扩展性与性能

通过提出将采用的技术，来解决系统的可扩展性、性能和延迟问题。例如垂直扩展和水平扩展、缓存、索引、反规范化、分片、复制、CDN 等。

## 7. 可靠性与弹性

最后，解决设计的可靠性与弹性问题。找出单点故障并减轻其影响。

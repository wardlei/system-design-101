---
title: "事件溯源系统设计的差异"
description: "探索事件溯源系统设计的细节及其优势。"
image: "https://assets.bytebytego.com/diagrams/0188-event-sourcing.jpeg"
createdAt: "2024-02-08"
draft: false
categories:
  - database-and-storage
tags:
  - "事件溯源"
  - "系统设计"
---

![](https://assets.bytebytego.com/diagrams/0188-event-sourcing.jpeg)

如何用事件溯源（event sourcing）范式来设计一个系统？它与普通的系统设计有什么不同？它有哪些好处？我们将在本文中讨论这些问题。

上图对比了普通的 CRUD 系统设计与事件溯源系统设计。我们用一个可以下单和支付订单的电商系统来演示事件溯源的工作原理。

事件溯源范式用于设计具有确定性的系统。这改变了普通系统设计的设计哲学。

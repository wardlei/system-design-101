---
title: "如何设计 Google Docs"
description: "通过这份详细指南，了解如何设计 Google Docs。"
image: "https://assets.bytebytego.com/diagrams/0206-google-doc.png"
createdAt: "2024-03-07"
draft: false
categories:
  - how-it-works
tags:
  - "系统设计"
  - "实时协作"
---

![](https://assets.bytebytego.com/diagrams/0206-google-doc.png)

1. 客户端将文档编辑操作发送到 WebSocket 服务器。

2. 实时通信由 WebSocket 服务器处理。

3. 文档操作被持久化到消息队列中。

4. 文件操作服务器消费客户端产生的操作，并使用协作算法生成转换后的操作。

5. 存储三类数据：文件元数据、文件内容和操作。

最大的挑战之一是实时冲突解决。常见的算法包括：

*   操作转换（OT）
*   差分同步（DS）
*   无冲突复制数据类型（CRDT）

根据 Google Docs 的维基百科页面，它使用的是 OT；而 CRDT 是实时并发编辑领域的一个活跃研究方向。

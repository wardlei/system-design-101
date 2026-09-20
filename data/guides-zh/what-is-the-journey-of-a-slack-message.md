---
title: '一条 Slack 消息的旅程是怎样的？'
description: '探索一条 Slack 消息从发送者到接收者的旅程。'
image: 'https://assets.bytebytego.com/diagrams/0338-slack-message-journey.jpg'
createdAt: '2024-03-08'
draft: false
categories:
  - real-world-case-studies
tags:
  - 系统设计
  - 消息传递
---

![](https://assets.bytebytego.com/diagrams/0338-slack-message-journey.jpg)

在最近的一篇技术文章中，Slack 解释了它的实时消息框架是如何工作的。以下是我的简短总结：

一条 Slack 消息会经过五个重要的服务器：

*   **WebApp：** 定义了 Slack 客户端可以使用的 API
*   **管理服务器（Admin Server，AS）：** 使用频道 ID 找到正确的频道服务器
*   **频道服务器（Channel Server，CS）：** 维护消息频道的历史记录
*   **网关服务器（Gateway Server，GS）：** 部署在每个地理区域，维护 WebSocket 频道订阅
*   **Envoy：** 云原生应用的服务代理

*   由于频道太多，频道服务器（CS）使用一致性哈希（consistent hashing）将数百万个频道分配到众多频道服务器上。
*   Slack 消息通过 WebApp 和管理服务器传递到正确的频道服务器。
*   频道服务器通过网关服务器和 Envoy（一个代理）将消息推送给消息接收者。
*   消息接收者使用 WebSocket——一种双向消息机制，因此能够实时接收更新。

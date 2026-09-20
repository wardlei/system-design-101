---
title: "用 Redis 构建一个简单的聊天应用"
description: "学习使用 Redis 的发布/订阅功能构建一个简单的聊天应用。"
image: "https://assets.bytebytego.com/diagrams/0314-redis-chat.jpg"
createdAt: "2024-03-04"
draft: false
categories:
  - how-it-works
tags:
  - Redis
  - "聊天应用"
---

![](https://assets.bytebytego.com/diagrams/0314-redis-chat.jpg)

我们如何用 Redis 构建一个简单的聊天应用？

下图展示了我们如何利用 Redis 的发布/订阅（pub-sub）功能来开发一个聊天应用。

## 阶段 1：连接初始化

*   步骤 1 和 2：Bob 打开聊天应用。客户端与服务器之间建立一个 WebSocket 连接。

*   步骤 3 和 4：发布/订阅服务器与 Redis 建立若干连接。其中一个连接用于更新 Redis 数据模型并向某个主题（topic）发布消息；其他连接用于订阅和监听各个主题的更新。

*   步骤 5 和 6：Bob 的客户端应用请求聊天成员列表和历史消息列表。这些信息从 Redis 中获取并发送到客户端应用。

*   步骤 7 和 8：由于 Bob 是新加入聊天应用的成员，系统会向 "member\_add" 主题发布一条消息，这样聊天应用的其他参与者就能看到 Bob。

## 阶段 2：消息处理

*   步骤 1：Bob 在聊天应用中给 Alice 发送一条消息。

*   步骤 2：新的聊天消息通过调用 "zadd" 被添加到 Redis 的 SortedSet 中。聊天消息按到达时间排序。然后，发布/订阅服务器将该聊天消息发布到 "messages" 主题，订阅者便可获取到它。

*   步骤 3：Alice 的客户端应用收到来自 Bob 的聊天消息。

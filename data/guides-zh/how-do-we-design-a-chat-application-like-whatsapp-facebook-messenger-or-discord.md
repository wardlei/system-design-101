---
title: "设计聊天应用"
description: "探索 WhatsApp、Messenger 等聊天应用的架构。"
image: "https://assets.bytebytego.com/diagrams/0134-chat-app.jpeg"
createdAt: "2024-03-10"
draft: false
categories:
  - how-it-works
tags:
  - 架构
  - 消息系统
---

![](https://assets.bytebytego.com/diagrams/0134-chat-app.jpeg)

下图展示了一个简化的 1 对 1 聊天应用的设计。

## 用户登录流程

*   步骤 1：Alice 登录聊天应用，并与服务端建立 WebSocket 连接。

*   步骤 2-4：在线状态服务（presence service）收到 Alice 的通知，更新她的在线状态，并将她的状态通知给她的好友。

## 消息收发流程

*   步骤 1-2：Alice 向 Bob 发送一条聊天消息，该消息被路由到聊天服务 A（Chat Service A）。

*   步骤 3-4：聊天消息被发送到序列服务（sequencing service）生成唯一 ID，并被持久化到消息存储（message store）中。

*   步骤 5：聊天消息被发送到消息同步队列，以同步到 Bob 一侧的聊天服务。

*   步骤 6：在转发消息之前，消息同步服务会检查 Bob 的在线状态：

    *   如果 Bob 在线，聊天消息会被发送到聊天服务 B。

    *   如果 Bob 离线，消息会被发送到推送服务器，再推送到 Bob 的设备上。

*   步骤 7-8：如果 Bob 在线，聊天消息通过 WebSocket 推送给 Bob。

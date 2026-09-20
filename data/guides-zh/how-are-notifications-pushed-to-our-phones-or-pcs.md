---
title: "通知是如何推送到我们的手机或电脑上的？"
description: "了解手机和电脑上的推送通知如何通过 FCM 工作。"
image: "https://assets.bytebytego.com/diagrams/0309-push-notifiction.jpg"
createdAt: "2024-03-12"
draft: false
categories:
  - how-it-works
tags:
  - "通知"
  - "移动端"
---

![](https://assets.bytebytego.com/diagrams/0309-push-notifiction.jpg)

可以使用消息解决方案（Firebase）来支持通知推送。

下图展示了 Firebase Cloud Messaging（FCM）的工作原理。

FCM 是一个跨平台的消息解决方案，可以可靠地撰写、发送、排队和路由通知。它在消息发送方（应用服务器）和接收方（客户端应用）之间提供了统一的 API。应用开发者可以使用这个方案来提升用户留存率。

步骤 1 - 2：当客户端应用首次启动时，客户端应用会向 FCM 发送凭证，包括 Sender ID、API Key 和 App ID。FCM 为该客户端应用实例生成注册令牌（Registration Token，因此注册令牌也称为 Instance ID）。这个令牌必须包含在通知中。

步骤 3：客户端应用将注册令牌发送到应用服务器。应用服务器会缓存该令牌以备后续通信。随着时间推移，应用服务器需要维护的令牌会越来越多，因此推荐的做法是将令牌连同时间戳一起存储，并不时清除过期的令牌。

步骤 4：发送消息有两种方式。一种是直接在控制台 GUI 中撰写消息（步骤 4.1），另一种是从应用服务器发送消息（步骤 4.2）。对于后者，我们可以使用 Firebase Admin SDK 或 HTTP。

步骤 5：FCM 接收消息，如果设备不在线，则将消息存储在队列中。

步骤 6：FCM 将消息转发到平台级传输层。该传输层负责处理特定平台的配置。

步骤 7：消息被路由到目标设备。通知可以按照应用服务器发送的配置进行展示。

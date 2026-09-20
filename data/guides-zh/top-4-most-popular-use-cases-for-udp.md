---
title: "UDP 的四大最常见使用场景"
description: "探索 UDP 的四大使用场景：流媒体、DNS、组播和物联网。"
image: "https://assets.bytebytego.com/diagrams/0044-top-4-udp-use-cases.png"
createdAt: "2024-03-07"
draft: false
categories:
  - computer-fundamentals
tags:
  - "UDP"
  - "网络"
---

![](https://assets.bytebytego.com/diagrams/0044-top-4-udp-use-cases.png)

### UDP（用户数据报协议）因其简单、速度快、开销低，相比 TCP 等其他协议，被广泛应用于各种软件架构中。

## 实时视频流

许多 VoIP 和视频会议应用利用 UDP，因为它开销更低，且能够容忍丢包。与 TCP 相比，UDP 的延迟更低，因此实时通信从中受益。

## DNS

DNS（域名服务）查询通常使用 UDP，因为它快速且轻量。虽然对于较大的响应或区域传输，DNS 也可以使用 TCP，但大多数查询都是通过 UDP 处理的。

## 行情数据组播

在低延迟交易中，UDP 被用于同时高效地向多个接收方传递行情数据。

## IoT

UDP 常用于物联网设备之间的通信，在设备之间发送小数据包。

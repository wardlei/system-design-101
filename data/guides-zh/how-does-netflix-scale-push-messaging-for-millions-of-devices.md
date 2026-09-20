---
title: 'Netflix 如何扩展推送消息'
description: '探索 Netflix 如何为海量设备扩展推送消息。'
image: 'https://assets.bytebytego.com/diagrams/0291-netflix-pn.png'
createdAt: '2024-02-28'
draft: false
categories:
  - real-world-case-studies
tags:
  - 系统设计
  - 推送通知
---

本文取材自 Netflix 工程博客上的一篇文章。以下是我对这家在线流媒体巨头系统运作方式的理解。

![](https://assets.bytebytego.com/diagrams/0291-netflix-pn.png)

**需求与规模**

*   2.2 亿用户
*   近实时
*   后端系统需要向各种客户端发送通知
*   支持的客户端：iOS、Android、智能电视、Roku、Amazon FireStick、Web 浏览器

**一条推送通知的生命周期**

1.  推送通知事件由时钟、用户操作或系统触发。
2.  事件被发送到事件管理引擎。
3.  事件管理引擎监听特定事件，并将事件转发到不同的队列。队列通过基于优先级的事件转发规则来填充。
4.  “基于事件优先级的处理集群”处理事件，并为设备生成推送通知数据。
5.  使用 Cassandra 数据库来存储通知数据。
6.  推送通知被发送到外发消息系统。
7.  对于 Android，使用 FCM 发送推送通知。对于 Apple 设备，使用 APNs。对于 Web、电视和其他流媒体设备，则使用 Netflix 自研的名为“Zuul Push”的解决方案。

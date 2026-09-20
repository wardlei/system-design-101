---
title: '单播 vs 广播 vs 组播 vs 任播'
description: '了解单播、广播、组播与任播之间的区别。'
image: 'https://assets.bytebytego.com/diagrams/0125-unicast-vs-broadcast-vs-multicast-vs-anycast.png'
createdAt: '2024-02-19'
draft: false
categories:
  - api-web-development
tags:
  - 网络通信
  - 协议
---

![单播 vs 广播 vs 组播 vs 任播](https://assets.bytebytego.com/diagrams/0125-unicast-vs-broadcast-vs-multicast-vs-anycast.png)

这 4 种网络通信方式你必须掌握。

*   **单播（Unicast）**

    唯一的发送方和单一的接收方。

    例如，聚会上两个人之间的交流。

    用于 HTTP、FTP 和 SMTP 等协议。

*   **广播（Broadcast）**

    单一发送方和多个接收方。

    例如，聚会上一个人站上讲台，向所有人喊出一条消息。但这并不意味着每个接收方都能收到这条消息。

    用于地址解析协议（ARP）、DHCP 和 NTP。

*   **组播（Multicast）**

    发送方到网络中一组特定设备的通信。这是广播路由的一种特例。

    例如，聚会上某个小组的成员与其他成员交谈并倾听。

    用于 IPTV 和视频会议应用。

*   **任播（Anycast）**

    发送方到单一设备或一组特定设备。

    例如，向组织聚会的一组主办方中的某一位道谢，而其他所有主办方也都能收到这份致谢。

    用于 DNS 查询和 CDN。

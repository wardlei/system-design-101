---
title: "应用之间的数据传输"
description: "详细探究数据如何在应用之间传输。"
image: "https://assets.bytebytego.com/diagrams/0159-data-transfer-between-apps.png"
createdAt: "2024-02-24"
draft: false
categories:
  - software-development
tags:
  - 网络
  - 数据传输
---

![](https://assets.bytebytego.com/diagrams/0159-data-transfer-between-apps.png)

下图展示了一台服务器如何向另一台服务器发送数据。

假设一个运行在用户空间的聊天应用发出了一条聊天消息。这条消息被发送到内核空间的发送缓冲区（send buffer）。随后数据经过网络协议栈，被封装上 TCP 头、IP 头和 MAC 头。数据还会经过 qdisc（队列规则，Queueing Disciplines）进行流量控制。然后数据经由环形缓冲区（ring buffer）发送到 NIC（网络接口卡）。

数据经由 NIC 发送到互联网。经过路由器与交换机之间的多次跳转后，数据到达接收服务器的 NIC。

接收服务器的 NIC 将数据放入环形缓冲区，并向 CPU 发送硬中断（hard interrupt）。CPU 发送软中断（soft interrupt），以便 ksoftirqd 从环形缓冲区接收数据。随后数据依次经过数据链路层、网络层和传输层进行解封装。最终，数据（聊天消息）被复制到用户空间，到达接收端的聊天应用。

---
title: "OSI 模型详解"
description: "了解 OSI 模型以及数据如何在网络中传输。"
image: "https://assets.bytebytego.com/diagrams/0295-osi-model.jpeg"
createdAt: "2024-03-13"
draft: false
categories:
  - computer-fundamentals
tags:
  - "网络"
  - "OSI 模型"
---

![](https://assets.bytebytego.com/diagrams/0295-osi-model.jpeg)

数据是如何在网络中发送的？为什么 OSI 模型需要这么多层？

下图展示了数据在网络中传输时是如何封装（encapsulation）和解封装（de-encapsulation）的。

*   第 1 步：当设备 A 通过 HTTP 协议向设备 B 发送数据时，数据首先在应用层被加上一个 HTTP 头部。

*   第 2 步：随后数据被加上 TCP 或 UDP 头部。它在传输层被封装成 TCP 段（segment）。头部包含源端口、目的端口和序列号。

*   第 3 步：这些段随后在网络层被封装上 IP 头部。IP 头部包含源/目的 IP 地址。

*   第 4 步：IP 数据报在数据链路层被加上 MAC 头部，包含源/目的 MAC 地址。

*   第 5 步：封装后的帧被发送到物理层，并以二进制比特的形式在网络中传输。

*   第 6-10 步：当设备 B 从网络接收到这些比特后，它会执行解封装过程，也就是封装过程的逆向处理。头部被逐层移除，最终设备 B 能够读取数据。

我们在网络模型中需要分层，是因为每一层都专注于各自的职责。每一层都可以依赖头部来获得处理指令，而无需知道上一层数据的含义。

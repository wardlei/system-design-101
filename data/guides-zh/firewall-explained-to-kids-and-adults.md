---
title: "防火墙：讲给孩子也讲给大人"
description: "了解防火墙：网络安全、类型，以及它们如何保护我们。"
image: "https://assets.bytebytego.com/diagrams/0191-firewall.jpeg"
createdAt: "2024-02-16"
draft: false
categories:
  - security
tags:
  - "网络安全"
  - "防火墙"
---

![](https://assets.bytebytego.com/diagrams/0191-firewall.jpeg)

防火墙是一种网络安全系统，它控制和过滤网络流量，在私有网络和公共互联网之间充当守门人。

防火墙大致分为两类：

*   基于软件：安装在单个设备上提供保护

*   基于硬件：独立设备，保护整个网络

防火墙有几种类型，每种都为特定的安全需求而设计：

### 包过滤防火墙（Packet Filtering Firewalls）

检查数据包，根据来源、目的地或协议决定接受还是拒绝。

### 电路级网关（Circuit-level Gateways）

监控数据包之间的 TCP 握手过程，判断会话是否合法。

### 应用级网关（代理防火墙，Proxy Firewalls）

在你的网络和流量来源之间过滤传入流量，为不受信任的网络提供一道防护屏障。

### 状态检测防火墙（Stateful Inspection Firewalls）

跟踪活跃连接来决定放行哪些数据包，并结合数据包在数据流中所处的上下文进行分析。

### 下一代防火墙（NGFW）

高级防火墙，将传统方法与入侵防御系统、深度包检测和应用感知等功能整合在一起。

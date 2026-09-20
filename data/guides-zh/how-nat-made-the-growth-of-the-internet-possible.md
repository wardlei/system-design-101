---
title: 'NAT 如何成就了互联网'
description: '探究 NAT 如何促进互联网的扩张。'
image: 'https://assets.bytebytego.com/diagrams/0231-http-header.png'
createdAt: '2024-01-29'
draft: false
categories:
  - api-web-development
tags:
  - NAT
  - 网络
---

![](https://assets.bytebytego.com/diagrams/0231-http-header.png)

网络地址转换（Network Address Translation，NAT）这一过程成就了互联网的发展。

但它究竟是如何工作的？

1. 在企业或家庭环境中，多台设备（手机、电脑等）共用一个路由器，该路由器只有一个公网 IP 地址。
2. 当某台设备想要访问互联网时，它会向你的路由器发送请求。该请求包含设备的私有 IP 地址。
3. 路由器的 NAT 过程将私有 IP 替换为路由器的公网 IP。
4. 修改后的请求被发送到互联网。
5. 当响应返回时，NAT 会查看其记录，将公网 IP 替换为正确的私有 IP。它把响应发送给正确的设备。

NAT 有几个重要用途：

*   **节省公网 IP 地址：** 如果没有 NAT，IPv4 地址会更早耗尽，从而严重限制互联网的发展。
*   **实现共享：** 它允许多台设备共享一个公网 IP 地址。
*   **充当基础防火墙：** NAT 充当隐藏内部 IP 地址的基础防火墙。
*   **便于网络管理：** NAT 还让大型网络的管理变得更加容易。

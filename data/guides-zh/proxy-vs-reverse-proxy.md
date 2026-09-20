---
title: '正向代理 vs 反向代理'
description: '理解正向代理与反向代理之间的区别。'
image: 'https://assets.bytebytego.com/diagrams/0196-forward-proxy-vs-reverse-proxy.png'
createdAt: '2024-03-01'
draft: false
categories:
  - api-web-development
tags:
  - 网络
  - 安全
---

![](https://assets.bytebytego.com/diagrams/0196-forward-proxy-vs-reverse-proxy.png)

正向代理是位于用户设备与互联网之间的服务器。正向代理通常用于：

*   **保护客户端**

*   **绕过浏览限制**

*   **阻止访问某些内容**

反向代理是接受来自客户端的请求、将请求转发给 Web 服务器，并把结果返回给客户端的服务器，就好像是代理服务器自己处理了该请求一样。反向代理适用于：

*   **保护服务器**

*   **负载均衡**

*   **缓存静态内容**

*   **对 SSL 通信进行加密和解密**

---
title: 'HTTP/1 -> HTTP/2 -> HTTP/3'
description: '探索 HTTP 的演进：从 HTTP/1 到最新的 HTTP/3。'
image: 'https://assets.bytebytego.com/diagrams/0101-http-1-http-2-http-3.png'
createdAt: '2024-03-02'
draft: false
categories:
  - api-web-development
tags:
  - HTTP
  - 协议
---

![](https://assets.bytebytego.com/diagrams/0101-http-1-http-2-http-3.png)

HTTP 1 始于 1996 年，紧接着第二年就推出了 HTTP 1.1。2015 年，HTTP 2 问世；2019 年，我们又迎来了 HTTP 3。

每一次迭代，这个协议都以新颖而有趣的方式不断演进。

*   **HTTP 1**（及其子版本）引入了持久连接、管线化以及头部（header）等概念。该协议构建在 TCP 之上，为万维网提供了一种可靠的通信方式。尽管已经超过 25 年，它至今仍在使用。

*   **HTTP 2** 带来了多路复用、流优先级、服务器推送和 HPACK 压缩等新特性。不过，它仍然使用 TCP 作为底层协议。

*   **HTTP 3** 使用 Google 的 QUIC，它构建在 UDP 之上。换句话说，HTTP 3 已经摆脱了 TCP。

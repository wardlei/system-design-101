---
title: '短轮询/长轮询、SSE、WebSocket'
description: '探索实时 Web 更新：轮询、SSE 和 WebSocket。'
image: 'https://assets.bytebytego.com/diagrams/0337-short-long-polling-sse-websocket.jpeg'
createdAt: '2024-01-25'
draft: false
categories:
  - api-web-development
tags:
  - WebSockets
  - SSE
---

![](https://assets.bytebytego.com/diagrams/0337-short-long-polling-sse-websocket.jpeg)

HTTP 服务器无法主动向浏览器发起连接。因此，Web 浏览器才是发起方。那么，我们接下来该怎么做，才能从 HTTP 服务器获取实时更新呢？

Web 浏览器和 HTTP 服务器都可以承担这个任务。

*   **由 Web 浏览器承担主要工作**：短轮询或长轮询。使用短轮询时，浏览器会不断重试，直到获取到最新数据。使用长轮询时，HTTP 服务器会一直不返回结果，直到有新的数据到达。
*   **HTTP 服务器与 Web 浏览器协作**：WebSocket 或 SSE（服务器发送事件）。在这两种情况下，连接建立后，HTTP 服务器都可以直接向浏览器发送最新数据。区别在于，SSE 是单向的，浏览器无法向服务器发送新请求；而 WebSocket 是全双工的，浏览器可以持续发送新请求。

---
title: 是什么让 HTTP2 比 HTTP1 更快？
description: 探索让 HTTP2 比 HTTP1 更快的关键特性。
image: 'https://assets.bytebytego.com/diagrams/0421-why-http2-is-faster-than-http1.png'
createdAt: '2024-02-02'
draft: false
categories:
  - api-web-development
tags:
  - HTTP2
  - 性能
---

![](https://assets.bytebytego.com/diagrams/0421-why-http2-is-faster-than-http1.png)

HTTP2 的关键特性在其中发挥了重要作用。让我们来看看它们：

*   **二进制分帧层（Binary Framing Layer）**
    HTTP2 将消息编码为二进制格式。
    这使得消息被拆分为更小的单元——帧（frame），然后通过 TCP 连接发送，从而实现更高效的处理。
*   **多路复用（Multiplexing）**
    二进制分帧实现了完整的请求和响应多路复用。
    客户端和服务器可以在传输过程中交错发送帧，并在另一端重新组装它们。
*   **流优先级（Stream Prioritization）**
    通过流优先级，开发者可以自定义请求或流的相对权重，让服务器为更高优先级的请求发送更多帧。
*   **服务器推送（Server Push）**
    由于 HTTP2 允许对客户端的请求进行多个并发响应，服务器可以在请求的页面之外，向客户端发送额外的资源。
*   **HPACK 头部压缩**
    HTTP2 使用一种名为 HPACK 的特殊压缩算法，让多个请求的头部更小，从而节省带宽。

当然，尽管有这些特性，在特定的技术场景下 HTTP2 也可能变慢。因此，开发者需要测试和优化，以最大化 HTTP2 的收益。

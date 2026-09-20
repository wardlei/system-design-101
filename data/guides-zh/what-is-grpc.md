---
title: 什么是 gRPC？
description: 了解 gRPC，谷歌出品的高性能 RPC 框架。
image: 'https://assets.bytebytego.com/diagrams/0054-what-is-grpc.png'
createdAt: '2024-03-08'
draft: false
categories:
  - api-web-development
tags:
  - gRPC
  - 微服务
---

![](https://assets.bytebytego.com/diagrams/0054-what-is-grpc.png)

gRPC 是一个高性能、开源的通用 RPC（远程过程调用，Remote Procedure Call）框架，最初由 Google 开发。它使用 HTTP/2 作为传输协议，以 Protocol Buffers 作为接口描述语言，并提供诸如身份验证、负载均衡等功能。

gRPC 旨在实现微服务架构中各服务之间高效、稳健的通信，因此成为构建分布式系统和 API 的热门选择。

**gRPC 的关键特性：**

*   **Protocol Buffers：** 默认情况下，gRPC 使用 Protocol Buffers（proto 文件）作为其接口定义语言（IDL）。与 JSON 或 XML 相比，这使得 gRPC 消息更小、更快。
*   **基于 HTTP/2 的传输：** gRPC 使用 HTTP/2 进行传输，相比 HTTP/1.x 有许多改进。
*   **多语言支持：** gRPC 支持多种编程语言。
*   **双向流式传输：** gRPC 支持流式请求和响应，可用于开发具有双向通信能力的高级实时应用，例如聊天服务。

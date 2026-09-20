---
title: gRPC 是如何工作的？
description: 了解 gRPC 的工作原理、数据流及其性能优势。
image: 'https://assets.bytebytego.com/diagrams/0210-grpc.png'
createdAt: '2024-01-28'
draft: false
categories:
  - api-web-development
tags:
  - gRPC
  - RPC
---

![](https://assets.bytebytego.com/diagrams/0210-grpc.png)

RPC（Remote Procedure Call，远程过程调用）被称为**“远程”**，是因为在微服务架构下，当服务部署到不同的服务器时，它能实现远程服务之间的通信。从用户的角度来看，它就像一个本地函数调用。

上图说明了 **gRPC** 的整体数据流。

*   第 1 步：客户端发起一个 REST 调用。请求体通常是 JSON 格式。

*   第 2-4 步：订单服务（gRPC 客户端）接收 REST 调用，对其进行转换，并向支付服务发起 RPC 调用。gRPC 将**客户端存根（client stub）**编码为二进制格式，并发送到低层传输层。

*   第 5 步：gRPC 通过 HTTP2 在网络上发送数据包。由于采用了二进制编码和网络优化，据说 gRPC 比 JSON 快 5 倍。

*   第 6-8 步：支付服务（gRPC 服务器）从网络接收数据包，对其进行解码，并调用服务器应用。

*   第 9-11 步：结果从服务器应用返回，经过编码后发送到传输层。

*   第 12-14 步：订单服务接收数据包，对其进行解码，并将结果发送给客户端应用。

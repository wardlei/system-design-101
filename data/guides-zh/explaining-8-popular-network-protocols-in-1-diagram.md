---
title: "一张图讲清 8 种常见网络协议"
description: "通过可视化图解理解 8 种常见网络协议。"
image: "https://assets.bytebytego.com/diagrams/0292-explaining-8-popular-network-protocols-in-1-diagram.png"
createdAt: "2024-03-15"
draft: false
categories:
  - computer-fundamentals
tags:
  - "计算机网络"
  - "协议"
---

网络协议是网络中两台计算机之间传输数据的标准方法。

![](https://assets.bytebytego.com/diagrams/0292-explaining-8-popular-network-protocols-in-1-diagram.png)

## 1. HTTP（超文本传输协议）

HTTP 是用于获取 HTML 文档等资源的协议。它是 Web 上一切数据交换的基础，是一种客户端-服务器协议。

## 2. HTTP/3

HTTP/3 是 HTTP 的下一代主要版本。它运行在 QUIC 之上，QUIC 是为移动互联网重度使用场景设计的新型传输协议。它依赖 UDP 而非 TCP，可以让网页响应更快。VR 应用需要更高的带宽来渲染虚拟场景的精细细节，很可能会从迁移到基于 QUIC 的 HTTP/3 中受益。

## 3. HTTPS（安全超文本传输协议）

HTTPS 在 HTTP 的基础上做了扩展，使用加密来实现安全通信。

## 4. WebSocket

WebSocket 是一种在 TCP 之上提供全双工通信的协议。客户端建立 WebSocket 连接，以接收来自后端服务的实时更新。与总是"拉取"数据的 REST 不同，WebSocket 让数据可以被"推送"过来。在线游戏、股票交易和即时通讯等应用都利用 WebSocket 实现实时通信。

## 5. TCP（传输控制协议）

TCP 用于在互联网上发送数据包，确保数据和消息在网络中被成功送达。许多应用层协议都构建在 TCP 之上。

## 6. UDP（用户数据报协议）

UDP 直接将数据包发送到目标计算机，不先建立连接。UDP 常用于对时间敏感的通信场景——偶尔丢包比等待重传更好。语音和视频流量通常使用这个协议传输。

## 7. SMTP（简单邮件传输协议）

SMTP 是将电子邮件从一个用户传输到另一个用户的标准协议。

## 8. FTP（文件传输协议）

FTP 用于在客户端和服务器之间传输计算机文件。它的控制通道和数据通道使用独立的连接。

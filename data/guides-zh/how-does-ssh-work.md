---
title: "SSH 是如何工作的？"
description: "探索 SSH 这一安全网络协议的内部工作原理。"
image: "https://assets.bytebytego.com/diagrams/0224-how-does-ssh-work.png"
createdAt: "2024-03-05"
draft: false
categories:
  - security
tags:
  - "SSH"
  - "安全"
---

![](https://assets.bytebytego.com/diagrams/0224-how-does-ssh-work.png)

SSH（Secure Shell，安全外壳协议）是一种网络协议，用于在不安全的网络上安全地连接远程机器。它对连接进行加密，并提供多种认证和数据传输机制。

SSH 有两个版本：SSH-1 和 SSH-2。SSH-2 由 IETF 标准化。

它主要有三个层次：传输层、认证层和连接层。

## 传输层

传输层提供加密、完整性和数据保护，以确保客户端与服务器之间的通信安全。

## 认证层

认证层验证客户端的身份，确保只有授权用户才能访问服务器。

## 连接层

连接层将加密并经过认证的通信复用到多个逻辑通道中。

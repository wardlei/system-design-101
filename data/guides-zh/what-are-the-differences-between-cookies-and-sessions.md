---
title: "Cookie 与 Session"
description: "探索 Web 开发中 Cookie 与 Session 之间的关键区别。"
image: "https://assets.bytebytego.com/diagrams/0154-cookies-vs-session.png"
createdAt: "2024-02-17"
draft: false
categories:
  - security
tags:
  - "Cookie"
  - "Session"
---

![](https://assets.bytebytego.com/diagrams/0154-cookies-vs-session.png)

Cookie 和 Session 都用于在 HTTP 请求中携带用户信息，包括用户登录状态、用户权限等。

## Cookie

Cookie 通常有大小限制（4KB）。它们携带少量信息，并存储在用户设备上。Cookie 会随用户的每一次后续请求一起发送。用户可以在浏览器中禁用 Cookie。

## Session

与 Cookie 不同，Session 是在服务器端创建和存储的。服务器上通常会生成一个唯一的 Session ID，并附加到特定的用户会话上。这个 Session ID 会通过 Cookie 返回给客户端。Session 可以保存更大的数据量。由于 Session 数据不会被客户端直接访问，Session 提供了更高的安全性。

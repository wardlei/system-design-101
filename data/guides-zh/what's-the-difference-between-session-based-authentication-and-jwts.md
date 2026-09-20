---
title: "基于会话的认证与 JWT"
description: "了解基于会话的认证与 JWT 认证之间的关键区别。"
image: "https://assets.bytebytego.com/diagrams/0333-what-s-the-difference-between-session-based-authentication-and-jwts.png"
createdAt: "2024-02-28"
draft: false
categories:
  - security
tags:
  - "认证"
  - "JWT"
---

![](https://assets.bytebytego.com/diagrams/0333-what-s-the_difference-between-session-based-authentication-and-jwts.png)

以下是对这两种方式的简单拆解：

## 基于会话的认证（Session-Based Authentication）

在这种方式中，你将会话信息存储在数据库或会话存储（session store）中，并将一个会话 ID 交给用户。

可以把它想象成：乘客只拿到自己航班的票据 ID（Ticket ID），而所有其他细节都存储在航空公司的数据库中。

它的工作原理如下：

*   用户发起登录请求，前端应用将请求发送到后端服务器。
*   后端使用密钥创建一个会话，并将数据存储在会话存储中。
*   服务器将一个带有唯一会话 ID 的 cookie 发送回客户端。
*   用户发起新的请求，浏览器随请求一起发送会话 ID。
*   服务器使用会话 ID 对用户进行认证。

## 基于 JWT 的认证（JWT-Based Authentication）

在基于 JWT 的方式中，你不会将会话信息存储在会话存储中。

所有信息都包含在令牌（token）中。

可以把它想象成：拿到机票时，所有细节都在票上，只是经过了编码。

它的工作原理如下：

*   用户发起登录请求，请求到达后端服务器。
*   服务器验证凭据并签发一个 JWT。该 JWT 使用私钥签名，不涉及任何会话存储。
*   JWT 被传递给客户端，可以通过 cookie 或响应体传递。两种方式各有优缺点，但这里我们采用 cookie 方式。
*   对于每一个后续请求，浏览器都会随请求一起发送带有 JWT 的 cookie。
*   服务器使用私钥验证 JWT，并提取用户信息。

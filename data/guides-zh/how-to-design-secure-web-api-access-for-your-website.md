---
title: 如何设计安全的 Web API 访问
description: 了解如何为你的网站设计安全的 Web API 访问。
image: 'https://assets.bytebytego.com/diagrams/0325-secure-api.png'
createdAt: '2024-03-06'
draft: false
categories:
  - api-web-development
tags:
  - API 安全
  - 身份认证
---

![](https://assets.bytebytego.com/diagrams/0325-secure-api.png)

当我们向用户开放 Web API 访问时，需要确保每个 API 调用都经过身份认证。这意味着用户必须确实是自己声称的那个人。

本文探讨两种常见方式：

*   基于令牌（Token）的认证
*   HMAC（基于哈希的消息认证码）认证

上图展示了它们的工作原理。

**基于令牌（Token）**

步骤 1 —— 用户在客户端输入密码，客户端将密码发送给认证服务器。

步骤 2 —— 认证服务器验证凭据，并生成一个带过期时间的令牌。

步骤 3 和 4 —— 现在客户端可以携带 HTTP 头部中的令牌发送请求，访问服务器资源。在令牌过期之前，该访问一直有效。

**基于 HMAC**

该机制通过使用哈希函数（SHA256 或 MD5）生成消息认证码（签名）。

步骤 1 和 2 —— 服务器生成两个密钥，一个是公共 APP ID（公钥），另一个是 API Key（私钥）。

步骤 3 —— 现在我们在客户端生成一个 HMAC 签名（hmac A）。该签名由图中所列的一组属性生成。

步骤 4 —— 客户端在 HTTP 头部中携带 hmac A 发送请求，访问服务器资源。

步骤 5 —— 服务器收到包含请求数据和认证头部的请求。它从请求中提取必要属性，并使用存储在服务器端的 API key 生成签名（hmac B）。

步骤 6 和 7 —— 服务器比较 hmac A（客户端生成的）和 hmac B（服务器端生成的）。如果两者匹配，请求的资源将被返回给客户端。

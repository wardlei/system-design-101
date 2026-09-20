---
title: "用通俗易懂的语言解释 OAuth 2.0"
description: "了解 OAuth 2.0，一个用于应用间交互的安全框架。"
image: "https://assets.bytebytego.com/diagrams/0111-what-is-oauth.png"
createdAt: "2024-03-16"
draft: false
categories:
  - security
tags:
  - "OAuth 2.0"
  - "身份验证"
---

![](https://assets.bytebytego.com/diagrams/0111-what-is-oauth.png)

OAuth 2.0 是一个强大且安全的框架，它允许不同的应用代表用户安全地进行交互，而无需共享敏感凭据。

OAuth 中涉及的实体包括用户（User）、服务器（Server）和身份提供方（IDP）。

## OAuth 令牌能做什么？

使用 OAuth 时，你会获得一个代表你身份和权限的 OAuth 令牌。这个令牌可以做几件重要的事情：

*   单点登录（SSO）：有了 OAuth 令牌，你只需一次登录即可登录多个服务或应用，让生活更轻松、更安全。

*   跨系统授权：OAuth 令牌允许你在不同系统之间共享授权或访问权限，这样你就不必在每个地方分别登录。

*   访问用户资料：拥有 OAuth 令牌的应用可以访问你允许的某些用户资料，但不会看到全部内容。

请记住，OAuth 2.0 的核心是让你和你的数据保持安全，同时在不同应用和服务之间提供顺畅无阻、省心省力的在线体验。

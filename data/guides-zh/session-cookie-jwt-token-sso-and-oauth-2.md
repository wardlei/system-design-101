---
title: "详解 Session、Cookie、JWT、Token、SSO 和 OAuth 2.0"
description: "用一张图理解 Session、Cookie、JWT、SSO 和 OAuth 2.0。"
image: "https://assets.bytebytego.com/diagrams/0152-cookies-session-jwt.png"
createdAt: "2024-03-14"
draft: false
categories:
  - security
tags:
  - 身份认证
  - 授权
---

![](https://assets.bytebytego.com/diagrams/0152-cookies-session-jwt.png)

当你登录一个网站时，你的身份需要被管理。以下是不同解决方案的工作原理：

*   **Session（会话）** - 服务器存储你的身份，并给浏览器一个会话 ID cookie。这样服务器就能跟踪登录状态。但 cookie 在跨设备场景下效果不佳。

*   **Token（令牌）** - 你的身份被编码进一个发送给浏览器的令牌中。浏览器在后续请求中发送这个令牌用于认证。无需服务器端的会话存储。但令牌需要加密/解密。

*   **JWT** - JSON Web Token 通过数字签名来标准化身份令牌，从而建立信任。签名包含在令牌内部，因此不需要服务器端会话。

*   **SSO（单点登录）** - 单点登录使用一个集中的认证服务，让一次登录就能在多个站点之间通用。

*   **OAuth2** - 允许一个网站在不泄露密码的情况下，有限地访问你在另一个网站上的数据。

*   **QR Code（二维码）** - 将一个随机令牌编码进二维码用于移动端登录。扫描二维码即可登录，无需输入密码。

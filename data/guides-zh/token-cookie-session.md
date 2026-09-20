---
title: "Token、Cookie、Session"
description: "理解用于用户身份管理的 token、cookie 和 session。"
image: "https://assets.bytebytego.com/diagrams/0331-session-cookie-jwt.jpg"
createdAt: "2024-02-19"
draft: false
categories:
  - security
tags:
  - "身份认证"
  - "授权"
---

![Token, Cookie, Session](https://assets.bytebytego.com/diagrams/0331-session-cookie-jwt.jpg)

Session、cookie、JWT、token、SSO 和 OAuth 2.0——它们到底是什么？！

这些术语都与用户身份管理相关。当你登录一个网站时，你会声明自己是谁（identification，身份标识）。你的身份会被验证（authentication，身份认证），然后你被授予必要的权限（authorization，授权）。过去人们提出了许多解决方案，而且这个列表还在不断增加。

从简单到复杂，以下是我对用户身份管理的理解：

## WWW-Authenticate

WWW-Authenticate 是最基本的方法。浏览器会要求你输入用户名和密码。由于无法控制登录生命周期，如今它已很少被使用。

## Session-Cookie

session-cookie 可以更精细地控制登录生命周期。服务器维护会话存储，而浏览器保存会话的 ID。cookie 通常只适用于浏览器，对移动应用并不友好。

## Token

为了解决兼容性问题，可以使用 token。客户端将 token 发送给服务器，服务器验证该 token。缺点是 token 需要加密和解密，这可能会比较耗时。

## JWT

JWT 是一种表示 token 的标准方式。由于它是经过数字签名的，因此这些信息可以被验证和信任。因为 JWT 包含签名，所以无需在服务器端保存会话信息。

## SSO（单点登录）

通过使用 SSO（单点登录），你只需登录一次即可登录多个网站。它使用 CAS（中央认证服务）来维护跨站点的信息。

## OAuth 2.0

通过使用 OAuth 2.0，你可以授权一个网站访问你在另一个网站上的信息。

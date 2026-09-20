---
title: "OAuth 2.0 流程"
description: "探索 OAuth 2.0 流程：授权码、客户端凭据等。"
image: "https://assets.bytebytego.com/diagrams/0112-oauth-flows.png"
createdAt: "2024-03-10"
draft: false
categories:
  - security
tags:
  - "OAuth 2.0"
  - "授权"
---

![](https://assets.bytebytego.com/diagrams/0112-oauth-flows.png)

## 授权码流程

最常见的 OAuth 流程。用户认证后，客户端会收到一个授权码，并用它换取访问令牌和刷新令牌。

## 客户端凭据流程

专为单页应用设计。访问令牌直接返回给客户端，无需中间授权码。

## 隐式代码流程

专为单页应用设计。访问令牌直接返回给客户端，无需中间授权码。

## 资源所有者密码授权流程

允许用户直接向客户端提供用户名和密码，客户端再用它们换取访问令牌。

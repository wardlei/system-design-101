---
title: "Cookies vs Sessions vs JWT vs PASETO"
description: "了解 Cookies、Sessions、JWT 和 PASETO 等现代认证方式。"
image: "https://assets.bytebytego.com/diagrams/0155-cookies-vs-sessions-vs-jwt-vs-paseto.png"
createdAt: "2024-03-04"
draft: false
categories:
  - security
tags:
  - "认证"
  - "安全"
---

![](https://assets.bytebytego.com/diagrams/0155-cookies-vs-sessions-vs-jwt-vs-paseto.png)

认证（Authentication）确保只有授权用户才能访问应用的资源。它回答的是用户身份的问题，即“你是谁？”

现代认证领域有多种方式：Cookies、Sessions、JWT 和 PASETO。以下是它们的含义：

## Cookies 和 Sessions

Cookies 和 Sessions 是一种认证机制：会话数据存储在服务器端，并通过客户端的 cookie 进行引用。

Sessions 非常适合需要对用户数据进行严格服务器端控制的应用。缺点是，在分布式系统中，Sessions 可能面临可扩展性挑战。

## JWT

JSON Web Token（JWT）是一种无状态、自包含的认证方式，它将所有用户数据存储在令牌（token）内部。

JWT 具有极高的可扩展性，但需要谨慎处理，以降低令牌被盗的风险并管理好令牌过期。

## PASETO

平台无关安全令牌（Platform-Agnostic Security Tokens，PASETO）在 JWT 的基础上做了改进：强制使用更强的加密默认设置，并消除了算法层面的漏洞。

PASETO 通过规避配置错误带来的风险，简化了令牌的实现。

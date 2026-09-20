---
title: "JWT 101：无状态认证的关键"
description: "了解用于实现安全、无状态认证的 JSON Web Token（JWT）。"
image: "https://assets.bytebytego.com/diagrams/0244-jwt-101-key-to-stateless-authentication.png"
createdAt: "2024-03-01"
draft: false
categories:
  - security
tags:
  - "认证"
  - "jwt"
---

![](https://assets.bytebytego.com/diagrams/0244-jwt-101-key-to-stateless-authentication.png)

JWT（JSON Web Token）是一种在两方之间安全传输信息的开放标准。它们被广泛用于认证和授权。

JWT 由三个主要部分组成：

1. 头部（Header）

每个 JWT 都带有一个头部，用于指定对该 JWT 进行签名的算法。它以 JSON 格式编写。

2. 载荷（Payload）

载荷由声明和用户数据组成。声明有不同的类型，例如已注册声明、公共声明和私有声明。

3. 签名（Signature）

签名是让 JWT 变得安全的部分。它是通过将编码后的头部、编码后的载荷、密钥以及算法放在一起进行签名而生成的。

JWT 可以通过两种不同的方式进行签名：

*   **对称签名**

    它使用同一个密钥来对令牌进行签名和验证。签名 JWT 的服务器和验证它的系统之间必须共享同一个密钥。

*   **非对称签名**

    在这种情况下，使用私钥对令牌进行签名，使用公钥进行验证。私钥安全地保存在服务器上，而公钥可以分发给任何需要验证令牌的一方。

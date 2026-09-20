---
title: 'API 设计速查表'
description: '一份用于设计安全高效 API 的实用速查表。'
image: 'https://assets.bytebytego.com/diagrams/0137-cheat-sheet-for-api-design.png'
createdAt: '2024-02-14'
draft: false
categories:
  - api-web-development
tags:
  - API 设计
  - 安全
---

![](https://assets.bytebytego.com/diagrams/0137-cheat-sheet-for-api-design.png)

API 将业务逻辑和数据暴露给外部系统，因此安全、高效地设计它们非常重要。

## API 密钥生成

我们通常为每个客户端生成一个唯一的应用 ID（app ID），并生成不同的公钥（access key）和私钥（secret key）对来满足不同的授权需求。例如，我们可以为只读访问生成一对密钥，为读写访问生成另一对密钥。

## 签名生成

签名用于验证 API 请求的真实性和完整性。它们使用私钥生成，通常包含以下步骤：

*   收集参数
*   创建待签名字符串
*   对字符串进行哈希：使用加密哈希函数，例如 HMAC（基于哈希的消息认证码）结合 SHA-256，使用私钥对字符串进行哈希。
*   发送请求

设计 API 时，决定哪些内容应该包含在 HTTP 请求参数中至关重要。请在请求参数中包含以下内容：

*   认证凭据（Authentication Credentials）
*   时间戳（Timestamp）：用于防止重放攻击。
*   请求特定数据（Request-specific Data）：处理请求所必需的数据，例如用户 ID、交易详情或搜索查询。
*   Nonces：每个请求中包含的随机生成字符串，用于确保每个请求的唯一性，并防止重放攻击。

## 安全准则

为了防范常见的漏洞和威胁，请遵循以下安全准则来保护 API。

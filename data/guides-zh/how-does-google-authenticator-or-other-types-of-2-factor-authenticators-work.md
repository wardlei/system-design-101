---
title: "Google 身份验证器是如何工作的"
description: "探索 Google 身份验证器与双因素认证的机制。"
image: "https://assets.bytebytego.com/diagrams/0079-authenticator.jpg"
createdAt: "2024-03-07"
draft: false
categories:
  - security
tags:
  - "双重认证"
  - "身份认证"
---

![Authenticator](https://assets.bytebytego.com/diagrams/0079-authenticator.jpg)

当启用双因素认证时，Google Authenticator（Google 身份验证器）通常用于登录我们的账户。它是如何保证安全的？

Google Authenticator 是一款基于软件的验证器，实现了两步验证服务。下图提供了细节。

这涉及两个阶段：

*   阶段 1——用户启用 Google 两步验证

*   阶段 2——用户使用验证器登录等

我们来看看这些阶段。

## 阶段 1

第 1 步和第 2 步：Bob 打开网页以启用两步验证。前端请求一个密钥。认证服务为 Bob 生成密钥并将其存储在数据库中。

第 3 步：认证服务向前端返回一个 URI。该 URI 由密钥颁发者（issuer）、用户名和密钥组成。该 URI 以二维码的形式显示在网页上。

第 4 步：Bob 随后使用 Google Authenticator 扫描生成的二维码。密钥被存储在验证器中。

## 阶段 2

第 1 步和第 2 步：Bob 想用 Google 两步验证登录一个网站。为此，他需要密码。每 30 秒，Google Authenticator 使用 TOTP（基于时间的一次性密码）算法生成一个 6 位数字的密码。Bob 使用该密码进入网站。

第 3 步和第 4 步：前端将 Bob 输入的密码发送到后端进行认证。认证服务从数据库读取密钥，并使用与客户端相同的 TOTP 算法生成一个 6 位数字的密码。

第 5 步：认证服务比较客户端和服务器生成的两个密码，并将比较结果返回给前端。只有当两个密码匹配时，Bob 才能继续登录流程。

### 这种认证机制安全吗？

密钥会被其他人获取吗？

我们需要确保密钥通过 HTTPS 传输。验证器客户端和数据库都存储密钥，我们需要确保密钥已加密。

6 位数字的密码会被黑客猜到吗？

不会。该密码有 6 位数字，因此生成的密码有 100 万种可能的组合。此外，密码每 30 秒更换一次。如果黑客想在 30 秒内猜出密码，他们需要每秒尝试 3 万种组合。

---
title: "密码管理器是如何工作的"
description: "了解 1Password 和 LastPass 等密码管理器如何保护密码安全。"
image: "https://assets.bytebytego.com/diagrams/0297-password-manager.png"
createdAt: "2024-02-14"
draft: false
categories:
  - security
tags:
  - "安全"
  - "密码"
---

![](https://assets.bytebytego.com/diagrams/0297-password-manager.png)

它是如何保证我们密码安全的？

下图展示了一个典型密码管理器的工作原理。

密码管理器为我们生成并存储密码。我们可以通过应用程序、浏览器扩展或命令行来使用它。

密码管理器不仅可以为个人存储密码，还支持小企业和大型企业的团队密码管理。

让我们逐步来看。

## 第 1 步

当我们注册密码管理器时，需要输入邮箱地址并设置账户密码。密码管理器会为我们生成一个密钥（secret key）。这三个字段通过 2SKD 算法生成 MUK（主解锁密钥，Master Unlock Key）和 SRP-X。MUK 用于解密存储我们密码的保险库（vault）。注意，密钥存储在本地，不会发送到密码管理器的服务器端。

## 第 2 步

第 1 步生成的 MUK 用于生成主密钥集（primary keyset）的加密 MP 密钥。

## 第 3-5 步

MP 密钥随后用于生成私钥（private key），私钥可用于在其他密钥集中生成 AES 密钥。私钥还用于生成保险库密钥（vault key）。保险库在服务器端为我们存储一组条目（item），这些条目可以是密码、笔记等。

## 第 6 步

保险库密钥用于加密保险库中的条目。

由于这个过程非常复杂，密码管理器无法知道加密后的密码内容。我们只需要记住一个账户密码，其余的交给密码管理器来记。

---
title: "对称加密 vs 非对称加密"
description: "探索对称加密与非对称加密：方法、安全性与应用场景。"
image: "https://assets.bytebytego.com/diagrams/0349-symmetric-encryption-vs-asymmetric-encryption.png"
createdAt: "2024-02-27"
draft: false
categories:
  - security
tags:
  - "加密"
  - "密码学"
---

![](https://assets.bytebytego.com/diagrams/0349-symmetric-encryption-vs-asymmetric-encryption.png)

对称加密和非对称加密是用于保护数据和通信安全的两种密码学技术，但它们在加密和解密的方法上有所不同。

*   在对称加密中，加密和解密数据使用同一个密钥。它的速度更快，可应用于批量数据的加密/解密。例如，我们可以用它来加密大量的 PII（个人身份信息）数据。它在密钥管理方面存在挑战，因为发送方和接收方共享同一个密钥。

*   非对称加密使用一对密钥：公钥和私钥。公钥可以自由分发，用于加密数据；私钥则保密保存，用于解密数据。由于私钥从不共享，它比对称加密更安全。然而，由于密钥生成和数学计算的复杂性，非对称加密的速度较慢。例如，HTTPS 在 TLS 握手过程中使用非对称加密来交换会话密钥，之后 HTTPS 使用对称加密进行后续通信。

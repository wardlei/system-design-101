---
title: Telegram 安全吗？
description: 探索 Telegram 的安全特性与加密方式。
image: 'https://assets.bytebytego.com/diagrams/0354-is-telegram-secure.jpg'
createdAt: '2024-02-15'
draft: false
categories:
  - real-world-case-studies
tags:
  - 安全
  - 加密
---

![](https://assets.bytebytego.com/diagrams/0354-is-telegram-secure.jpg)

我们先来定义一下“安全”的含义。在即时通讯 App 中，“安全”的聊天通常意味着消息在发送端被加密，并且只能在接收端被解密。这也被称为“E2EE”（端到端加密）。

**Telegram 的普通私聊和群聊并非端到端加密**

这通常意味着第三方可以拦截并读取你的消息。Telegram 通过以下方式保障安全：

*   加密后的消息存储在 Telegram 的服务器上，但会被拆分成若干片段，分别存储在不同的国家。
*   解密密钥同样被拆分，并分别保存在不同的国家。

这意味着黑客需要从所有地方获取消息片段和密钥。这是有可能的，但极其困难。

**私密聊天（Secret Chat）是端到端加密的**

如果你选择“私密聊天”选项，它会是端到端加密的。它有一些限制：

*   它不支持群聊或普通的一对一聊天。
*   它仅在移动设备上启用。

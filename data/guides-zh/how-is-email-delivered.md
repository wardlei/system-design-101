---
title: "电子邮件是如何送达的？"
description: "逐步探究一封电子邮件从发件人到收件人的旅程。"
image: "https://assets.bytebytego.com/diagrams/0185-email-deliver.png"
createdAt: "2024-02-28"
draft: false
categories:
  - how-it-works
tags:
  - 电子邮件协议
  - 邮件投递
---

你知道一封电子邮件是如何送达的吗？

当我第一次了解到电子邮件与传统“蜗牛”邮件有多相似时，我感到很惊讶。或许你也会。请允许我解释一下。

![](https://assets.bytebytego.com/diagrams/0185-email-deliver.png)

在物理世界中，如果我想给朋友寄一张明信片，我会把它投进附近的邮箱。邮局定期收集邮件，并将其转运到目的地的邮局。然后该邮局把明信片放进我朋友的邮箱。这个过程通常需要几天，我的朋友以纸质形式收到了我的心意。

电子邮件以类似的方式运作。由于它是基于互联网的解决方案，术语有所不同，但基本原理是一样的：

*   发件人不是把邮件投进邮箱，而是使用 MUA（邮件用户代理，mail user agent），如 Outlook 或 Gmail，把电子邮件推送到发件人邮件服务器（Sender Mail Server）。

*   不是使用邮局来转运邮件，而是由 MTA（邮件传输代理，mail transmission agent）来转运电子邮件。它通过 SMTP 协议进行通信。

电子邮件由收件人邮件服务器（Receiver Mail Server）接收。它使用 MDA（邮件投递代理，mail delivery agent）把邮件存储到邮箱（Mailbox）。收件人使用 MUA，通过 POP3/IMAP 协议来收取电子邮件。

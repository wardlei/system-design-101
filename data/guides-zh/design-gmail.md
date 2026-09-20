---
title: "设计 Gmail"
description: "了解 Gmail 的设计：从发信到收信的全过程。"
image: "https://assets.bytebytego.com/diagrams/0184-email.jpg"
createdAt: "2024-03-01"
draft: false
categories:
  - how-it-works
tags:
  - "电子邮件"
  - "系统设计"
---

![](https://assets.bytebytego.com/diagrams/0184-email.jpg)

一图胜千言。在这篇文章中，我们来看看当 Alice 给 Bob 发送一封电子邮件时会发生什么。

## 发送电子邮件：分步指南

1. Alice 登录她的 Outlook 客户端，撰写邮件并点击“发送”。邮件被发送到 Outlook 邮件服务器。Outlook 客户端与邮件服务器之间的通信协议是 SMTP。

2. Outlook 邮件服务器查询 DNS（图中未画出），以找到收件方 SMTP 服务器的地址。在本例中，收件方是 Gmail 的 SMTP 服务器。接着，它将邮件转发给 Gmail 邮件服务器。邮件服务器之间的通信协议同样是 SMTP。

3. Gmail 服务器存储这封邮件，并将其提供给收件人 Bob。

4. 当 Bob 登录 Gmail 时，Gmail 客户端通过 IMAP/POP 服务器拉取新邮件。

---
title: "你应该了解的 DNS 记录类型"
description: "了解最常见、最重要的 DNS 记录类型。"
image: "https://assets.bytebytego.com/diagrams/0175-dns-record-types-you-should-know.png"
createdAt: "2024-03-09"
draft: false
categories:
  - computer-fundamentals
tags:
  - "DNS"
  - "网络"
---

![](https://assets.bytebytego.com/diagrams/0175-dns-record-types-you-should-know.png)

以下是 8 种最常用的 DNS 记录类型。

## A（Address）记录

将域名映射到 IPv4 地址。它是把人类可读的域名翻译成 IP 地址的最基本记录之一。

## CNAME（Canonical Name）记录

用于将一个域名别名指向另一个域名。常用于子域名，将其指向主域名，同时隐藏实际的域名。

## AAAA 记录

与 A 记录类似，但将域名映射到 IPv6 地址。用于支持 IPv6 协议的网站和服务。

## PTR 记录

提供反向 DNS 查询，将 IP 地址映射回域名。常用于验证服务器的真实性。

## MX 记录

将电子邮件流量导向正确的邮件服务器。

## NS（Name Server）记录

指定该域名的权威 DNS 服务器。这些记录帮助将查询引导到正确的 DNS 服务器进行进一步查找。

## SRV（Service）记录

SRV 记录为特定服务（如 VoIP）指定主机和端口。它们与 A 记录配合使用。

## TXT（Text）记录

允许管理员向 DNS 记录中添加人类可读的文本。用于包含验证记录，例如用于电子邮件安全的 SPF。

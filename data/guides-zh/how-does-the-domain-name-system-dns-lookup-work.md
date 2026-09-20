---
title: "域名系统（DNS）查找是如何工作的？"
description: "了解 DNS 如何将域名转换为 IP 地址以实现网页访问。"
image: "https://assets.bytebytego.com/diagrams/0176-dns-look-up.png"
createdAt: "2024-03-08"
draft: false
categories:
  - computer-fundamentals
tags:
  - "DNS"
  - "网络"
---

![](https://assets.bytebytego.com/diagrams/0176-dns-look-up.png)

DNS 就像一本通讯录。它将人类可读的域名（[google.com](http://google.com/)）转换为机器可读的 IP 地址（[142.251.46.238](http://142.251.46.238/)）。

为了实现更好的可扩展性，DNS 服务器被组织成层级树状结构。

DNS 服务器有 3 个基本层级：

*   根名称服务器（.）。它存储顶级域名（Top Level Domain，TLD）名称服务器的 IP 地址。全球有 13 台逻辑根名称服务器。

*   TLD 名称服务器。它存储权威名称服务器的 IP 地址。TLD 名称有多种类型。例如，通用 TLD（.com、.org）、国家/地区代码 TLD（.us）、测试 TLD（.test）。

*   权威名称服务器。它为 DNS 查询提供实际答案。你可以通过域名注册商（如 GoDaddy、Namecheap 等）注册权威名称服务器。

下面的示意图说明了 DNS 查找在底层是如何工作的：

1.  在浏览器中输入 [google.com](http://google.com/)，浏览器将域名发送给 DNS 解析器（resolver）。

2.  解析器查询 DNS 根名称服务器。

3.  根服务器以一个 TLD DNS 服务器的地址回应解析器。在这个例子中，是 .com。

4.  解析器随后向 .com TLD 发出请求。

5.  TLD 服务器以域名的名称服务器 [google.com](http://google.com/)（权威名称服务器）的 IP 地址作为响应。

6.  DNS 解析器向该域名的名称服务器发送查询。

7.  [google.com](http://google.com/) 的 IP 地址随后从名称服务器返回给解析器。

8.  DNS 解析器将最初所请求域名的 IP 地址（[142.251.46.238](http://142.251.46.238/)）响应给 Web 浏览器。

DNS 查找平均需要 20-120 毫秒才能完成（根据 YSlow 的数据）。

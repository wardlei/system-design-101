---
title: "当你在浏览器中输入 google.com 时会发生什么？"
description: "探索在浏览器中输入 google.com 的旅程。"
image: "https://assets.bytebytego.com/diagrams/0410-what-happens-when-you-type-google-in-your-browser.png"
createdAt: "2024-03-12"
draft: false
categories:
  - technical-interviews
tags:
  - "网络"
  - "Web 浏览器"
---

![当你在浏览器中输入 google.com 时会发生什么？](https://assets.bytebytego.com/diagrams/0410-what-happens-when-you-type-google-in-your-browser.png)

1.  首先，你在浏览器的地址栏中输入网站地址。

2.  浏览器先检查自己的缓存。如果缓存未命中，就必须找到 IP 地址。

3.  DNS 查找开始（可以把它想象成查电话号码）。请求会经过不同的 DNS 服务器（根服务器、TLD 服务器和权威服务器）。最终，IP 地址被取回。

4.  接下来，你的浏览器发起一个类似握手的 TCP 连接。例如，在 HTTP 1.1 的情况下，客户端和服务器通过 SYN、SYN-ACK 和 ACK 消息完成 TCP 三次握手。

5.  一旦握手成功，浏览器就向服务器发出 HTTP 请求，服务器以 HTML、CSS 和 JS 文件作为响应。

6.  最后，浏览器处理所有内容。它解析 HTML 文档，并创建 DOM 树和 CSSOM 树。

7.  浏览器执行 JavaScript，并通过多个步骤（分词器、解析器、渲染树、布局和绘制）渲染页面。

8.  最终，网页出现在你的屏幕上。

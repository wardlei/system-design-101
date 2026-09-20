---
title: "当你在浏览器中输入一个 URL 时会发生什么？"
description: "探索一个 URL 从浏览器输入到网页显示的完整旅程。"
image: "https://assets.bytebytego.com/diagrams/0393-type-a-url-into-your-browser.png"
createdAt: "2024-03-13"
draft: false
categories:
  - technical-interviews
tags:
  - "网络"
  - "浏览器"
---

![](https://assets.bytebytego.com/diagrams/0393-type-a-url-into-your-browser.png)

上图展示了这些步骤。

- Bob 在浏览器中输入一个 URL 并按下回车键。在这个例子中，URL 由 4 个部分组成：
  - **scheme（协议）** - *http://*。它告诉浏览器使用 HTTP 向服务器发送连接。
  - **domain（域名）** - *example.com*。这是站点的域名。
  - **path（路径）** - *product/electric*。它是服务器上指向所请求资源 *phone* 的路径。
  - **resource（资源）** - *phone*。它是 Bob 想要访问的资源的名称。

- 浏览器通过域名系统（DNS）查找该域名对应的 IP 地址。为了加快查找过程，数据会缓存在不同层级：浏览器缓存、操作系统缓存、本地网络缓存和 ISP 缓存。
  - 如果在任何缓存中都找不到 IP 地址，浏览器就会去 DNS 服务器做递归 DNS 查找，直到找到 IP 地址（这将在另一篇文章中介绍）。

- 现在我们有了服务器的 IP 地址，浏览器便与服务器建立 TCP 连接。

- 浏览器向服务器发送一个 HTTP 请求。该请求看起来像这样：

  ```
  𝘎𝘌𝘛 /𝘱𝘩𝘰𝘯𝘦 𝘏𝘛𝘛𝘗/1.1
  𝘏𝘰𝘴𝘵: 𝘦𝘹𝘢𝘮𝘱𝘭𝘦.𝘤𝘰𝘮
  ```

- 服务器处理请求并发回响应。对于一个成功的响应（状态码为 200），HTML 响应可能看起来像这样：

  ```
  𝘏𝘛𝘛𝘗/1.1 200 𝘖𝘒
  𝘋𝘢𝘵𝘦: 𝘚𝘶𝘯, 30 𝘑𝘢𝘯 2022 00:01:01 𝘎𝘔𝘛
  𝘚𝘦𝘳𝘷𝘦𝘳: 𝘈𝘱𝘢𝘤𝘩𝘦
  𝘊𝘰𝘯𝘵𝘦𝘯𝘵-𝘛𝘺𝘱𝘦: 𝘵𝘦𝘹𝘵/𝘩𝘵𝘮𝘭; 𝘤𝘩𝘢𝘳𝘴𝘦𝘵=𝘶𝘵𝘧-8
  
  <**!𝘋𝘖𝘊𝘛𝘠𝘗𝘌** 𝘩𝘵𝘮𝘭>
  <**𝘩𝘵𝘮𝘭** 𝘭𝘢𝘯𝘨="𝘦𝘯">
  𝘏𝘦𝘭𝘭𝘰 𝘸𝘰𝘳𝘭𝘥
  </**𝘩𝘵𝘮𝘭**\>
  ```

- 浏览器渲染 HTML 内容。

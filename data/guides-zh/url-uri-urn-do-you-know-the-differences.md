---
title: 'URL、URI、URN 的区别详解'
description: '通过清晰的示例了解 URL、URI 和 URN 之间的区别。'
image: 'https://assets.bytebytego.com/diagrams/0401-url-uri-urn.png'
createdAt: '2024-02-21'
draft: false
categories:
  - api-web-development
tags:
  - 网络
  - Web
---

![](https://assets.bytebytego.com/diagrams/0401-url-uri-urn.png)

上图展示了 URL、URI 和 URN 的对比。

*   **URI**

    URI 是统一资源标识符（Uniform Resource Identifier）的缩写。它标识 Web 上的逻辑或物理资源。URL 和 URN 都是 URI 的子类型。URL 用于定位资源，而 URN 用于命名资源。

URI 由以下几个部分组成：

```
scheme:[//authority]path[?query][#fragment]
```

*   **URL**

    URL 是统一资源定位符（Uniform Resource Locator）的缩写，是 HTTP 的核心概念。它是 Web 上某个唯一资源的地址。它也可以与 FTP 和 JDBC 等其他协议一起使用。
*   **URN**

    URN 是统一资源名称（Uniform Resource Name）的缩写。它使用 urn 协议。URN 不能用于定位资源。图中给出的一个简单示例由命名空间和命名空间特定的字符串组成。

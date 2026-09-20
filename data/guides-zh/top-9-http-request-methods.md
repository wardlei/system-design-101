---
title: '9 大 HTTP 请求方法'
description: '通过清晰的讲解了解 9 大 HTTP 请求方法。'
image: 'https://assets.bytebytego.com/diagrams/0371-top-9-http-request-methods.png'
createdAt: '2024-02-27'
draft: false
categories:
  - api-web-development
tags:
  - HTTP
  - API
---

![](https://assets.bytebytego.com/diagrams/0371-top-9-http-request-methods.png)

GET、POST、PUT……常见的 HTTP“动词”都集中在这一张图里。

*   **HTTP GET**

    从服务器获取资源。它是幂等的，多个相同的请求会返回相同的结果。
*   **HTTP PUT**

    用于更新或创建资源。它是幂等的，多个相同的请求会更新同一个资源。
*   **HTTP POST**

    用于创建新资源。它不是幂等的，发送两个相同的 POST 请求会导致资源被重复创建。
*   **HTTP DELETE**

    用于删除资源。它是幂等的，多个相同的请求会删除同一个资源。
*   **HTTP PATCH**

    PATCH 方法对资源进行部分修改。
*   **HTTP HEAD**

    HEAD 方法请求一个与 GET 请求相同的响应，但不包含响应体。
*   **HTTP CONNECT**

    CONNECT 方法建立到目标资源所标识服务器的隧道。
*   **HTTP OPTIONS**

    用于描述目标资源的通信选项。
*   **HTTP TRACE**

    用于沿着到达目标资源的路径执行消息回环测试。

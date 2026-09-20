---
title: "给 10 岁小朋友讲解 JSON Web Token（JWT）"
description: "用简单的语言给小朋友讲解 JSON Web Token（JWT）。"
image: "https://assets.bytebytego.com/diagrams/0107-explaining-json-web-token-jwt-to-a-10-year-old-kid.png"
createdAt: "2024-03-15"
draft: false
categories:
  - security
tags:
  - "JWT"
  - "安全"
---

![示意图](https://assets.bytebytego.com/diagrams/0107-explaining-json-web-token-jwt-to-a-10-year-old-kid.png)

想象你有一个特别的盒子，叫做 JWT。这个盒子里面有三部分：头部（header）、载荷（payload）和签名（signature）。

头部就像贴在盒子外面的标签。它告诉我们这是什么类型的盒子、它是如何被保护的。它通常用一种叫 JSON 的格式书写，JSON 只是一种用花括号 { } 和冒号 : 来组织信息的方式。

载荷就像你真正想发送的消息或信息。它可以是你的名字、年龄，或者任何你想分享的数据。它也是用 JSON 格式书写的，所以很容易理解和使用。

接下来，签名是让 JWT 变得安全的关键。它就像一个特殊的印章，只有发送者才知道怎么制作。签名是用一段秘密代码（有点像密码）生成的。这个签名确保没有人能在发送者不知情的情况下篡改 JWT 的内容。

当你想把 JWT 发送给服务器时，你把头部、载荷和签名放进这个盒子里，然后把它发送给服务器。服务器可以轻松读取头部和载荷，从而知道你是谁、你想做什么。

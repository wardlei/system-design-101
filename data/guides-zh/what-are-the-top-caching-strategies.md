---
title: "顶级缓存策略"
description: "探索优化系统性能的顶级缓存策略。"
image: "https://assets.bytebytego.com/diagrams/0129-caching-strategy.jpg"
createdAt: "2024-03-12"
draft: false
categories:
  - caching-performance
tags:
  - "缓存"
  - "性能"
---

![缓存策略](https://assets.bytebytego.com/diagrams/0129-caching-strategy.jpg)

从系统中读取数据：

*   **旁路缓存（Cache aside）**
*   **读穿透（Read through）**

向系统写入数据：

*   **写绕过（Write around）**
*   **写回（Write back）**
*   **写穿透（Write through）**

上图展示了这 5 种策略的工作原理。其中一些缓存策略可以组合使用。

我省略了很多细节，因为那样会让这篇文章变得很长。

欢迎留言评论，以便我们相互学习。

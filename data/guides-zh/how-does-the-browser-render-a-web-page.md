---
title: '浏览器如何渲染网页'
description: '探索浏览器如何渲染网页：从 HTML 解析到最终显示。'
image: 'https://assets.bytebytego.com/diagrams/0090-browser-render-page.jpg'
createdAt: '2024-02-01'
draft: false
categories:
  - api-web-development
tags:
  - 浏览器
  - 渲染
---

![](https://assets.bytebytego.com/diagrams/0090-browser-render-page.jpg)

*   **解析 HTML 并生成文档对象模型（DOM）树。**

    当浏览器从服务器接收到 HTML 数据后，会立即对其进行解析，并将其转换为 DOM 树。

*   **解析 CSS 并生成 CSSOM 树。**

    样式（CSS 文件）被加载并解析为 CSSOM（CSS 对象模型，CSS Object Model）。

*   **合并 DOM 树和 CSSOM 树以构建渲染树（Render Tree）。** 渲染树映射了除不可见元素（如 `<head>` 或带有 `display:none;` 的标签）之外的所有 DOM 结构。换句话说，渲染树是 DOM 的视觉表示。

*   **布局（Layout）**

    渲染树中每个元素的内容都会被计算，以获得几何信息（位置、大小），这一过程称为布局。

*   **绘制（Painting）**

    布局完成后，渲染树被转换为屏幕上的实际内容。这一步称为绘制。浏览器获取内容的绝对像素。

*   **显示（Display）**

    最后，浏览器将绝对像素发送给 GPU，并将其显示在页面上。

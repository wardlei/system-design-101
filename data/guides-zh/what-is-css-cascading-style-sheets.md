---
title: 什么是 CSS（层叠样式表）？
description: CSS 是一种用于描述网页呈现效果的标记语言。
image: 'https://assets.bytebytego.com/diagrams/0408-what-is-css-cascading-style-sheets.png'
createdAt: '2024-02-03'
draft: false
categories:
  - api-web-development
tags:
  - CSS
  - Web 开发
---

![](https://assets.bytebytego.com/diagrams/0408-what-is-css-cascading-style-sheets.png)

前端开发不仅需要呈现内容，还需要美观。CSS 是一种标记语言，用于描述网页上的元素应该如何渲染。

*   **CSS 的作用**
    CSS 将文档的内容与呈现分离。在 Web 开发的早期，HTML 同时承担内容和样式的职责。

    CSS 将结构（HTML）和样式（CSS）分开。这带来很多好处，例如，当我们更改网页的配色方案时，只需调整 CSS 文件即可。
*   **CSS 的工作原理**
    CSS 由一个选择器和一组属性组成，它们可以看作是一条条独立的规则。选择器用于定位我们想要更改样式的 HTML 元素，而属性则是对这些元素的具体样式描述，例如颜色、大小、位置等。

    例如，如果我们想把段落中的所有文字都变成蓝色，可以这样编写 CSS 代码：
    p { color: blue; }
    这里 “p” 是选择器，“color: blue” 是声明段落文字颜色为蓝色的属性。
*   **CSS 中的层叠**
    层叠的概念对于理解 CSS 至关重要。

    当多条样式规则发生冲突时，浏览器需要根据特定的优先级规则来决定使用哪条规则。权重最高的规则胜出。权重可以由多种因素决定，包括选择器类型和源码的顺序。
*   **CSS 强大的布局能力**
    过去，CSS 只用于简单的视觉效果，如文字颜色、字体样式或背景。如今，CSS 已经演变为一种强大的布局工具，能够处理复杂的设计布局。

    “Flexbox” 和 “Grid” 布局模块是两个流行的 CSS 布局模块，它们让创建响应式设计和精确放置网页元素变得容易，因此 Web 开发者不再需要依赖复杂的表格或浮动布局。
*   **CSS 动画**
    动画和交互元素可以极大地提升用户体验。

    CSS3 引入了动画特性，使我们无需使用 JavaScript 就能对元素进行变换和动画处理。例如，“@keyframes” 规则定义动画序列，而 `transition` 属性可用于设置从一个状态到另一个状态的动画过渡。
*   **响应式设计**
    CSS 允许网站的布局和样式适配不同的屏幕尺寸和分辨率，从而为手机、平板和电脑等不同设备提供优化的浏览体验。

---
title: JavaScript 是如何工作的？
description: 了解 JavaScript 的核心特性及其运行方式。
image: 'https://assets.bytebytego.com/diagrams/0241-javascript-js-explained.png'
createdAt: '2024-02-07'
draft: false
categories:
  - api-web-development
tags:
  - JavaScript
  - 编程
---

![](https://assets.bytebytego.com/diagrams/0241-javascript-js-explained.png)

下面的速查表展示了 JavaScript 最重要的特性。

*   **解释型语言**
    JavaScript 代码由浏览器或 JavaScript 引擎执行，而不是预先编译成机器语言。这使得它具有极高的跨平台可移植性。现代引擎（如 V8）利用即时编译（Just-In-Time，JIT）技术将代码编译成可直接执行的机器代码。
*   **函数是一等公民**
    在 JavaScript 中，函数被视为一等公民，这意味着函数可以存储在变量中、作为参数传递给其他函数，也可以从函数中返回。
*   **动态类型**
    JavaScript 是一种弱类型或动态语言，这意味着我们无需提前声明变量的类型，且类型可以在运行时改变。
*   **客户端执行**
    JavaScript 支持异步编程，允许读取文件、发起 HTTP 请求或查询数据库等操作在后台运行，并在完成时触发回调或 Promise。这在 Web 开发中对于提升性能和用户体验尤其有用。
*   **基于原型的面向对象编程（OOP）**
    与基于类的面向对象语言不同，JavaScript 使用原型（prototype）进行继承。这意味着对象可以从其他对象继承属性和方法。
*   **自动垃圾回收**
    JavaScript 中的垃圾回收是一种自动内存管理机制。垃圾回收的主要目标是回收程序中不再使用的对象所占用的内存，这有助于防止内存泄漏并优化应用的性能。
*   **与其他语言对比**
    与 Python 或 Java 等编程语言相比，JavaScript 的独特之处在于它是 Web 开发的主流语言。

    虽然 Python 以良好的代码可读性和通用性著称，Java 以结构化和健壮性著称，但 JavaScript 是一种无需编译、直接在浏览器上运行的解释型语言，强调灵活性和动态性。
*   **与 TypeScript 的关系**
    TypeScript 是 JavaScript 的超集，这意味着它通过为语言添加特性（最显著的是类型注解）来扩展 JavaScript。这种关系使得任何合法的 JavaScript 代码都可以被视为合法的 TypeScript 代码。
*   **流行的 JavaScript 框架**
    React 以其灵活性和大量社区驱动的插件而闻名，而 Vue 则简洁直观，具有高度集成和响应式的特性。另一方面，Angular 为企业级 JS 开发提供了一套严格的开发规范。

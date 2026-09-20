---
title: "在 Web 浏览器中运行 C、C++ 或 Rust"
description: "探索使用 WASM 在 Web 浏览器中运行 C、C++ 和 Rust 代码。"
image: "https://assets.bytebytego.com/diagrams/0406-how-wasm-work.jpeg"
createdAt: "2024-02-21"
draft: false
categories:
  - software-development
tags:
  - "WebAssembly"
  - "性能"
---

![](https://assets.bytebytego.com/diagrams/0406-how-wasm-work.jpeg)

什么是 **WebAssembly**（WASM）？它为什么能吸引如此多的关注？

该图展示了我们如何借助 WASM 在 Web 浏览器中运行原生的 C/C++/Rust 代码。

传统上，我们只能在 Web 浏览器中使用 Javascript，而且由于其是解释执行的，性能无法与 C/C++ 等原生代码相比。

然而，借助 WASM，我们可以**复用**用 C/C++/Rust 等语言开发的现有原生代码库，让它们在 Web 浏览器中运行。这些 Web 应用拥有接近原生的性能。

例如，我们可以在 Web 浏览器中运行**视频编码/解码**库（用 C++ 编写）。

这为云计算和**边缘计算**带来了许多可能性。我们可以用更少的资源和即时的启动时间来运行无服务器应用。

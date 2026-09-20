---
title: "实验平台架构"
description: "探索实验平台的架构及其关键组件。"
image: "https://assets.bytebytego.com/diagrams/0189-experiment-framework.jpg"
createdAt: "2024-03-08"
draft: false
categories:
  - how-it-works
tags:
  - "A/B 测试"
  - "实验"
---

[![图表](https://assets.bytebytego.com/diagrams/0189-experiment-framework.jpg)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd79ea50e-e386-41c9-9f66-e28006ed1115_1677x1536.jpeg)

下图描绘了一个潜在实验平台的架构。该图的内容来自《可信赖的在线对照实验》（Trustworthy Online Controlled Experiments）一书（由我重新绘制）。该平台包含 4 个高层级组件。

## 关键组件

*   **通过 UI 进行实验的定义、设置和管理。** 它们存储在实验系统配置中。

*   **实验部署**到服务端和客户端（同时涵盖变体分配和参数化）。

*   **实验埋点（instrumentation）。**

*   **实验分析。**

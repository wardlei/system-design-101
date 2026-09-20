---
title: "MVC、MVP、MVVM、VIPER 架构模式"
description: "对比 MVC、MVP、MVVM 和 VIPER 架构模式。"
image: "https://assets.bytebytego.com/diagrams/0143-client-arch-patterns.png"
createdAt: "2024-03-12"
draft: false
categories:
  - software-architecture
tags:
  - "架构模式"
  - "软件设计"
---

![MVC、MVP、MVVM、VIPER 架构模式](https://assets.bytebytego.com/diagrams/0143-client-arch-patterns.png)

MVC、MVP、MVVM、MVVM-C 和 VIPER 架构模式之间有什么区别？

这些架构模式是应用开发中最常用的模式，无论是在 iOS 还是 Android 平台上。开发者引入它们是为了克服早期模式的局限性。那么，它们之间有什么不同？

*   MVC 是最古老的模式，距今已有近 50 年的历史

*   每个模式都有一个“视图”（V），负责显示内容并接收用户输入

*   大多数模式都包含一个“模型”（M），用于管理业务数据

*   “控制器”、“呈现器”和“视图模型”是在视图与模型（在 VIPER 模式中称为“实体”）之间进行协调的中介者

*   这些中介者编写起来可能相当复杂，因此人们提出了各种模式，使其更易于维护

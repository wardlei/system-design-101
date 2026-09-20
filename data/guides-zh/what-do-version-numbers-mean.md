---
title: 版本号是什么意思？
description: "理解版本号：MAJOR、MINOR、PATCH 与语义化版本控制。"
image: 'https://assets.bytebytego.com/diagrams/0415-what-do-version-numbers-mean.png'
createdAt: '2024-02-17'
draft: false
categories:
  - api-web-development
tags:
  - 版本控制
  - SemVer
---

![](https://assets.bytebytego.com/diagrams/0415-what-do-version-numbers-mean.png)

语义化版本控制（SemVer）是一种软件版本管理方案，旨在传达版本中底层变更的含义。

*   SemVer 使用三段式版本号：MAJOR.MINOR.PATCH。
    *   **主版本（MAJOR）**：当出现不兼容的 API 变更时递增。
    *   **次版本（MINOR）**：当以向后兼容的方式添加功能时递增。
    *   **修订版本（PATCH）**：当进行向后兼容的错误修复时递增。
*   **示例流程**
    *   **初始开发阶段**
        *   从 0.1.0 版本开始。
    *   **首个稳定版本**
        *   达到稳定版本：1.0.0。
    *   **后续变更**
        *   **修订版本**：1.0.0 需要修复一个 bug，升级到 1.0.1。
        *   **次版本**：为 1.0.3 添加一个向后兼容的新功能，升级到 1.1.0。
        *   **主版本**：在 1.2.2 中引入一个不向后兼容的重大变更，升级到 2.0.0。
    *   **特殊版本与预发布版本**
        *   **预发布版本**：1.0.0-alpha、1.0.0-beta、1.0.0-rc.1。
        *   **构建元数据**：1.0.0+20130313144700。

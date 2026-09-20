---
title: TikTok 如何管理一个拥有 20 万文件的前端 MonoRepo
description: TikTok 管理一个拥有 20 万文件的大型前端 MonoRepo 的策略。
image: 'https://assets.bytebytego.com/diagrams/0226-how-tiktok-manages-a-200k-file-frontend-monorepo.png'
createdAt: '2024-03-03'
draft: false
categories:
  - real-world-case-studies
tags:
  - Monorepo
  - 性能
---

![](https://assets.bytebytego.com/diagrams/0226-how-tiktok-manages-a-200k-file-frontend-monorepo.png)

MonoRepo 是 monolithic repository（单体仓库）的缩写，是一种软件开发策略：一个仓库中包含多个项目、库和服务。

MonoRepo 的优点有：

*   **更好的代码共享**
*   **更简化的依赖管理**
*   **对代码库的统一视图**

然而，MonoRepo 越大，各种 Git 操作就越慢。

TikTok 也遇到了类似的挑战，它的前端 TypeScript MonoRepo 拥有 20 万文件。

为了应对这一点，TikTok 构建了一个名为 Sparo 的工具，用于为大型前端 MonoRepo 优化 Git 操作的性能。

Sparo 极大地提升了 Git 操作的性能。一些数据如下：

*   Git clone 时间从 40 分钟缩短到仅 2 分钟。
*   Checkout 从 1.5 分钟缩短到 30 秒。
*   Status 从 7 秒缩短到 1 秒。
*   Git commit 时间从 15 秒缩短到 11 秒。

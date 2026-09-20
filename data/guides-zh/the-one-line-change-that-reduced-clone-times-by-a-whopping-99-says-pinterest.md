---
title: 'Pinterest 一行改动让克隆时间缩短 99%'
description: 'Pinterest 通过一行改动将克隆时间缩短了 99%。'
image: 'https://assets.bytebytego.com/diagrams/0302-pinterest-one-line-change.png'
createdAt: '2024-02-14'
draft: false
categories:
  - real-world-case-studies
tags:
  - DevOps
  - Git
---

![](https://assets.bytebytego.com/diagrams/0302-pinterest-one-line-change.png)

虽然听起来像陈词滥调，但小小的改动确实能带来巨大的影响。

Pinterest 的工程效率团队对此有切身体会。

他们在其名为 Pinboard 的单仓库（monorepo）代码库的 Jenkins 构建流水线中做了一个小小的改动。

这一改动将克隆时间从 40 分钟缩短到了惊人的 30 秒。

作为参考，Pinboard 是 Pinterest 最古老、规模最大的单仓库。关于它的一些事实：

*   **35 万次提交（350K commits）**
*   **完全克隆时大小达 20 GB**
*   **每个工作日有 6 万次 git pull（60K git pulls）**

克隆拥有大量代码和历史的单仓库非常耗时。Pinboard 的情况正是如此。

构建流水线（用 Groovy 编写）以一个“检出”（Checkout）阶段开始，在该阶段会为构建和测试步骤克隆仓库。

克隆选项设置为浅克隆、不获取标签、只获取最近 50 次提交。

但它遗漏了一个至关重要的优化点。

检出步骤没有使用 Git refspec 选项。

这意味着 Git 实际上在每次构建时都会获取所有 refspec。对于 Pinboard 单仓库来说，这意味着要获取超过 2500 个分支。

那么——修复方案是什么？

团队只是简单地添加了 refspec 选项，并指定了他们关心的 ref。在这个例子中，就是“master”分支。

这一处改动让 Git 克隆只需要处理一个分支，从而显著缩短了单仓库的整体构建时间。

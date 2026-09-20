---
title: 在 Meta 规模下自动修复 Bug
description: Meta 如何使用 SapFix 实现大规模的自动化 bug 修复。
image: 'https://assets.bytebytego.com/diagrams/0193-fixing-bugs-automatically-at-meta-scale.png'
createdAt: '2024-02-16'
draft: false
categories:
  - real-world-case-studies
tags:
  - 自动化
  - 调试
---
![](https://assets.bytebytego.com/diagrams/0193-fixing-bugs-automatically-at-meta-scale.png)

如果一个系统能自动为我们发现并修复 bug，那该多好？

Meta 发布了一篇论文，介绍他们如何在 Facebook 的规模下实现端到端的自动化修复。让我们来仔细看看。

一个名为 SapFix 的工具，其目标是通过自动为特定问题生成修复方案来简化调试工作。

SapFix 的成效如何？

以下是一些公开的细节：

*   应用于 Facebook 应用家族中的六个关键应用（Facebook、Messenger、Instagram、FBLite、Workplace 和 Workchat）。每个应用都包含数千万行代码

*   在 90 天的试点阶段，它为 57 个崩溃问题生成了 165 个补丁

*   从检测到故障到修复方案送交人工审核的中位时间为 69 分钟。

SapFix 的实际工作流程如下：

1.  开发者使用 Phabricator（Facebook 的 CI 系统）提交变更以供审核
2.  SapFix 从 Sapienz（Facebook 的自动化测试用例设计系统）中选择合适的测试用例，并在提交审核的 Diff 上执行它们
3.  当 SapFix 检测到由该 Diff 引起的崩溃时，它会尝试生成潜在的修复方案。修复方案有 4 种类型——模板修复、变异修复、完全回滚和部分回滚。
4.  为了生成修复方案，SapFix 会在打过补丁的构建版本上运行测试，检查哪种方案有效。可以把它想象成通过尝试不同的拼图片来解谜。
5.  补丁测试完成后，SapFix 会选择一个候选补丁，并通过 Phabricator 将其发送给人工审核者进行审核。
6.  主要审核者是提交引发崩溃的变更的开发者。这位开发者通常拥有最好的技术上下文。其他工程师也会订阅被提议的 Diff。
7.  开发者可以接受 SapFix 提出的补丁。当然，开发者也可以拒绝该修复并将其丢弃。

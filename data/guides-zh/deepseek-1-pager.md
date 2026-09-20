---
title: 'DeepSeek 一页纸速览'
description: "了解 DeepSeek 高性价比的 AI 模型及其创新的 R1 版本。"
image: 'https://assets.bytebytego.com/diagrams/0164-deepseek.png'
createdAt: '2024-03-11'
draft: false
categories:
  - ai-machine-learning
tags:
  - AI 模型
  - DeepSeek
---

![此图片未提供 alt 文字](https://assets.bytebytego.com/diagrams/0164-deepseek.png)

据说它仅用极低的成本就训练出了强大的 AI 模型，最后一轮训练大约只花了 600 万美元。2025 年 1 月，据说它发布了以推理能力为核心的最新模型——DeepSeek R1。

这一发布使其成为 Apple 应用商店下载量第一的免费应用。

大多数 AI 模型通过监督微调（supervised fine-tuning）进行训练，即通过模仿大量人工标注的样例来学习。这种方法存在局限性。

DeepSeek R1 通过采用组相对策略优化（Group Relative Policy Optimization, GRPO）克服了这些局限。这是一种强化学习技术，通过在相同上下文中比较多个候选答案来提升推理效率。

关于 DeepSeek R1 模型的一些事实如下：

- DeepSeek-R1 采用混合专家（Mixture-of-Experts, MoE）架构，总参数量为 6710 亿，每个任务仅激活 370 亿参数。
- 它通过 MoE 的选择性参数激活实现资源优化。
- 该模型在涵盖 52 种语言的 14.8 万亿 token 上进行了预训练。
- DeepSeek-R1 的训练仅使用了 2000 块 Nvidia GPU。相比之下，ChatGPT-4 使用了约 2.5 万块 Nvidia GPU，训练了 90-100 天。
- 该模型的成本效益比竞争对手高出 85-90%。
- 它在数学、编程和推理任务上表现出色。
- 此外，该模型已基于 MIT 许可证开源发布。

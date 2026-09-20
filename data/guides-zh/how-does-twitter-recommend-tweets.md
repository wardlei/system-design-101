---
title: Twitter 如何在 1.5 秒内推荐“为你推荐”（For You）时间线？
description: 解读 Twitter 的“为你推荐”时间线推荐系统。
image: 'https://assets.bytebytego.com/diagrams/0121-twitter-serving-pipeline.jpeg'
createdAt: '2024-02-22'
draft: false
categories:
  - real-world-case-studies
tags:
  - 系统设计
  - 推荐系统
---

![](https://assets.bytebytego.com/diagrams/0121-twitter-serving-pipeline.jpeg)

我们花了几天时间来分析它。

上图展示了基于开源算法的详细流水线。

该过程包含 5 个阶段：

*   **候选召回（Candidate Sourcing）** ~ 从 5 亿条推文开始
*   **全局过滤（Global Filtering）** ~ 缩减到 1500 个候选
*   **打分与排序（Scoring & Ranking）** ~ 4800 万参数的神经网络、Twitter Blue 加权
*   **过滤（Filtering）** ~ 以实现作者和内容的多样性
*   **混合（Mixing）** ~ 与广告推荐和“关注谁”（Who to Follow）混合

本文由 ByteByteGo 和 [Mem](https://www.linkedin.com/company/memdotai/) 联合创作。特别感谢 Mem 的创始工程师 [Scott Mackie](https://www.linkedin.com/in/ACoAABLDe9kBSK7DsORQHK2G1srZCmM1isaUun8) 完成了这篇内容。

Mem 正在打造世界上第一个知识助手。在下周的 ByteByteGo 客座通讯中，Mem 将分享他们在大规模语言模型以及构建 AI 原生基础设施方面的丰富经验。

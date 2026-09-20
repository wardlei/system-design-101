---
title: Uber 技术栈 - CI/CD
description: "Uber 的 CI/CD 技术栈：高效交付的工具与平台。"
image: 'https://assets.bytebytego.com/diagrams/0398-uber-tech-stack-ci-cd.png'
createdAt: '2024-02-19'
draft: false
categories:
  - real-world-case-studies
tags:
  - CI/CD
  - Uber
---

Uber 是工程领域最具创新力的公司之一。让我们来看看他们的 CI/CD 技术栈。

![](https://assets.bytebytego.com/diagrams/0398-uber-tech-stack-ci-cd.png)

注：本文基于对 Uber 工程博客的研究。如果你发现任何不准确之处，请告诉我们。

*   **项目规划：** JIRA

*   **后端服务：** 使用 Spring Boot 开发后端服务。为了让事情更快，他们还打造了一个名为 Flipr 的巧妙配置系统，用于快速发布配置。

*   **代码问题：** 他们开发了 NullAway 来应对空指针（NullPointer）问题，以及 NEAL 来做代码 lint 检查。此外，他们还构建了 Piranha 来清理过时的功能开关（feature flag）。

*   **代码仓库：** 他们信奉单仓（Monorepo）理念，在大规模上使用 Bazel。

*   **测试：** 他们使用 SLATE 来管理短生命周期的测试环境，并依靠 Shadower 通过回放生产流量进行负载测试。他们甚至开发了 Ballast 来确保流畅的用户体验。

*   **实验平台：** 该平台基于深度学习构建，他们慷慨地开源了其中部分内容，例如 Pyro。

*   **构建：** Uber 使用 uBuild 将服务打包成容器。这是他们所有打包任务的首选工具，由 Buildkite 提供支持。

*   **应用部署：** Netflix Spinnaker。这是他们将服务平稳高效地上线的信赖工具。

*   **监控：** Uber 构建了自己的监控系统。他们使用基于 Cassandra 构建的 uMetric 平台来保持指标的一致性。

*   **专用工具：** Uber 依靠 Peloton 进行容量规划、调度和运维。Crane 构建多云基础设施以优化成本。借助 uAct 和 OnCall 看板，他们完成了事件追踪和值班管理的覆盖。

---
title: 'Netflix 技术栈 —— CI/CD 流水线'
description: "Netflix 的 CI/CD 流水线：从规划到事件上报。"
image: 'https://assets.bytebytego.com/diagrams/0287-netflix-ci-cd.png'
createdAt: '2024-03-02'
draft: false
categories:
  - real-world-case-studies
  - devops-cicd
tags:
  - CI/CD
  - 流媒体
---

![](https://assets.bytebytego.com/diagrams/0287-netflix-ci-cd.png)

*   **规划：** Netflix 工程团队使用 JIRA 进行规划，使用 Confluence 编写文档。

*   **编码：** Java 是后端服务的主要编程语言，而其他语言则用于不同的使用场景。

*   **构建：** 主要使用 Gradle 进行构建，并开发了 Gradle 插件以支持各种使用场景。

*   **打包：** 将软件包和依赖项打包成 Amazon Machine Image（AMI）以进行发布。

*   **测试：** 测试环节体现了生产文化对构建混沌工具的重视。

*   **部署：** Netflix 使用自研的 Spinnaker 进行金丝雀滚动部署。

*   **监控：** 监控指标集中存储在 Atlas 中，并使用 Kayenta 检测异常。

*   **事件上报：** 事件按优先级进行分派，使用 PagerDuty 处理事件。

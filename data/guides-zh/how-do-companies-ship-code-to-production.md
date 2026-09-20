---
title: "公司是如何将代码发布到生产环境的？"
description: "了解公司高效地将代码发布到生产环境的流程。"
image: "https://assets.bytebytego.com/diagrams/0334-ship-to-prod.png"
createdAt: "2024-03-15"
draft: false
categories:
  - devtools-productivity
tags:
  - 软件工程
  - 部署
---

![](https://assets.bytebytego.com/diagrams/0334-ship-to-prod.png)

下图展示了典型的工作流程。

步骤 1：流程从产品负责人根据需求创建用户故事（user story）开始。

步骤 2：开发团队从待办列表（backlog）中领取用户故事，将它们放入一个为期两周的开发迭代（sprint）中。

步骤 3：开发者将源代码提交到 Git 代码仓库。

步骤 4：Jenkins 中触发构建。源代码必须通过单元测试、代码覆盖率阈值以及 SonarQube 中的质量门禁。

步骤 5：构建成功后，构建产物会被存储到 artifactory 中，然后部署到开发（dev）环境。

步骤 6：可能有多个开发团队在开发不同的功能。这些功能需要独立测试，因此它们会被部署到 QA1 和 QA2 环境。

步骤 7：QA 团队领取新的 QA 环境，执行 QA 测试、回归测试和性能测试。

步骤 8：QA 构建通过 QA 团队的验证后，会被部署到 UAT（用户验收测试）环境。

步骤 9：如果 UAT 测试成功，这些构建就成为发布候选版本（release candidate），并按计划部署到生产环境。

步骤 10：SRE（站点可靠性工程）团队负责生产环境的监控。

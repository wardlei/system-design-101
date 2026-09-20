---
title: "Terraform 如何将代码变成云？"
description: "探索 Terraform 如何将代码转化为云基础设施。"
image: "https://assets.bytebytego.com/diagrams/0225-how-terraform-creates-infra-at-scale.png"
createdAt: "2024-03-08"
draft: false
categories:
  - devops-cicd
tags:
  - "Terraform"
  - "基础设施即代码"
---

![](https://assets.bytebytego.com/diagrams/0225-how-terraform-creates-infra-at-scale.png)

Terraform 工作流包含多个阶段：

## 编写基础设施即代码

*   在 Terraform 配置文件中定义资源、提供者和配置。

*   使用变量、模块和函数，让代码具备可复用性和可维护性。

*   与 Terraform 社区注册表集成，以使用现成的模块。

## Terraform Plan

通过运行“terraform plan”预览 Terraform 将对基础设施做出的更改。它可以作为 CI/CD 流水线的一部分触发。

Terraform 会将配置文件中定义的期望状态与状态文件中的当前状态进行比较。

## Terraform Apply

运行“terraform apply”根据计划创建、更新或删除资源。

Terraform 会向指定的提供者（AWS、Azure、GCP、Kubernetes 等）发起 API 调用，以配置资源。

状态文件会被更新，以反映基础设施的新状态。

## 基础设施就绪

Terraform 状态文件充当基础设施当前状态的唯一事实来源（single source of truth）。

状态文件支持版本控制，并便于团队成员之间为后续更改进行协作。

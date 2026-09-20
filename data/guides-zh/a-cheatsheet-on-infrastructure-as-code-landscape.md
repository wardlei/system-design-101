---
title: "基础设施即代码全景速查表"
description: "基础设施即代码（Infrastructure as Code）领域全景的快速参考指南。"
image: "https://assets.bytebytego.com/diagrams/0063-a-cheatsheet-on-infrastructure-as-code-landscape.png"
createdAt: "2024-02-18"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "基础设施即代码"
  - "DevOps"
---

![](https://assets.bytebytego.com/diagrams/0063-a-cheatsheet-on-infrastructure-as-code-landscape.png)

可扩展的基础设施开通（provisioning）在可用性、可扩展性、可重复性和成本效益方面带来了诸多好处。

但如何实现这一目标呢？

用代码来开通基础设施是可扩展的基础设施管理的关键。

有多种策略可以提供帮助：

*   容器化是最早让应用部署基于代码的策略之一。Docker 是最流行的应用容器化方式之一。

*   其次，当应用中涉及多个容器时，容器编排就成了必需品。这正是 Kubernetes 等容器编排工具变得重要的地方。

*   IaC 将基础设施的开通和配置视为代码，让开发者可以在文件中定义应用基础设施，这些文件可以被版本化、测试和复用。可以使用 Terraform、AWS CloudFormation 和 Ansible 等流行工具。Ansible 更偏向于配置管理工具。

*   GitOps 利用 Git 工作流结合 CI/CD，自动化基础设施和配置的更新。

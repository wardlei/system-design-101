---
title: "我们如何管理系统中的配置？"
description: "对比传统配置管理与基础设施即代码（IaC）。"
image: "https://assets.bytebytego.com/diagrams/0056-how-we-manage-configuration.png"
createdAt: "2024-02-19"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - 基础设施即代码
  - 配置管理
---

![](https://assets.bytebytego.com/diagrams/0056-how-we-manage-configuration.png)

该图展示了传统配置管理与 IaC（基础设施即代码）之间的对比。

## 配置管理

配置管理旨在通过系统化、可重复的流程来管理和提供 IT 基础设施。这对于确保系统按预期运行至关重要。

传统配置管理侧重于在服务器、网络设备和应用等系统配置项完成提供之后，维护其期望状态。

它通常涉及 DevOps 的初始手动设置。变更通过逐步执行命令来管理。

## 什么是 IaC？

另一方面，IaC 代表了基础设施提供和管理方式的转变，将基础设施的设置和变更视为软件开发实践。

IaC 自动化基础设施的提供过程，通过代码启动和管理系统。它通常采用声明式方法，描述基础设施的期望状态。

Terraform、AWS CloudFormation、Chef 和 Puppet 等工具被用于在受源代码管理的代码文件中定义基础设施。

IaC 代表了向自动化、可重复性以及将软件开发实践应用于基础设施管理的演进。

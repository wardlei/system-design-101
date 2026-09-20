---
title: "十二要素应用"
description: "构建现代、可扩展且可靠应用的最佳实践。"
image: "https://assets.bytebytego.com/diagrams/0028-12-factor-app.png"
createdAt: "2024-02-21"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "应用架构"
  - "最佳实践"
---

![](https://assets.bytebytego.com/diagrams/0028-12-factor-app.png)

“十二要素应用”（The 12-Factor App）为构建现代软件应用提供了一套最佳实践。遵循这十二条原则，可以帮助开发者和团队构建可靠、可扩展且易于管理的应用。

以下是每条原则的简要概述：

## I. 代码库（Codebase）

将你的所有代码放在一个地方进行管理，并使用 Git 这样的版本控制工具进行管理。

## II. 依赖（Dependencies）

列出应用正常运行所需的所有东西，并确保它们易于安装。

## III. 配置（Config）

将数据库凭据等重要设置与代码分离，这样你就可以在不重写代码的情况下修改它们。

## IV. 后端服务（Backing Services）

将其他服务（如数据库或支付处理器）作为独立组件来使用，让你的应用连接它们。

## V. 构建、发布、运行（Build, Release, Run）

明确区分应用的准备（构建）、发布和在生产环境中运行这几个阶段。

## VI. 进程（Processes）

将应用设计得使每个部分都不依赖于特定的计算机或内存。就像拼搭可以互相契合的乐高积木一样。

## VII. 端口绑定（Port Binding）

让你的应用可以通过网络端口访问，并确保它不在单台计算机上存储关键信息。

## VIII. 并发（Concurrency）

通过增加同一应用的更多副本，让你的应用能够处理更多工作，就像为繁忙的餐厅雇佣更多员工一样。

## IX. 可处置性（Disposability）

你的应用应该快速启动、优雅关闭，就像关掉电灯开关，而不是猛拔电源线。

## X. 开发/生产一致性（Dev/Prod Parity）

确保你开发应用时所使用的东西与生产环境中使用的非常相似，以避免意外。

## XI. 日志（Logs）

记录应用中发生的事情，这样你就能理解和修复问题，就像为你的软件写日记一样。

## XII. 管理进程（Admin Processes）

将特殊任务与你的应用分开运行，就像在车间里做维护工作，而不是在工厂生产线上进行。

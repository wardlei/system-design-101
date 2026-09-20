---
title: "Monorepo 与 Microrepo：哪种更好？"
description: "探索 Monorepo 与 Microrepo 这两种代码管理方式。"
image: "https://assets.bytebytego.com/diagrams/0279-monorepo-microrepo.png"
createdAt: "2024-02-12"
draft: false
categories:
  - "cloud-distributed-systems"
tags:
  - "Monorepo"
  - "微服务"
---

![](https://assets.bytebytego.com/diagrams/0279-monorepo-microrepo.png)

为什么不同的公司会选择不同的方案？

## 你相信 Google、Meta、Uber 和 Airbnb 几乎把它们的全部代码都放在一个仓库里吗？

这种做法被称为 monorepo（单体仓库）。本文是 [Xiong Wang](https://www.linkedin.com/in/wangxiong/) 的客座文章。

Monorepo 并不新鲜；Linux 和 Windows 都是用 Monorepo 的方式构建的。为了提高可扩展性和构建速度，Google 开发了内部的专用工具链来更快地扩展它，并制定了严格的编码质量标准来保持一致性。

Amazon 和 Netflix 是微服务理念的主要倡导者。这种方式天然地把服务代码分散到各自独立的仓库中。它的扩展速度更快，但后期可能带来治理上的痛点。

在 Monorepo 中，每个服务是一个文件夹，每个文件夹都有 BUILD 配置和 OWNERS 权限控制。每个服务成员负责自己的文件夹。

另一方面，在 Microrepo 中，每个服务负责自己的仓库，构建配置和权限通常是针对整个仓库设置的。

在 Monorepo 中，依赖在整个代码库中共享，与你的业务无关，所以当有版本升级时，每个代码库都会升级各自的版本。

在 Microrepo 中，依赖在每个仓库内部控制。各业务根据自己的时间表选择何时升级版本。

Monorepo 有一套代码提交（check-in）标准。Google 的代码审查流程以设立高标准而闻名，它确保 Monorepo 无论业务如何都能保持一致的质量标准。

Microrepo 既可以设定自己的标准，也可以通过引入最佳实践来采纳共享标准。它对业务而言扩展更快，但代码质量可能会略有差异。

Google 工程师打造了 Bazel，Meta 打造了 Buck。还有其他可用的开源工具，包括 Nix、Lerna 等。

多年来，Microrepo 拥有更多受支持的工具，包括用于 Java 的 Maven 和 Gradle、用于 NodeJS 的 NPM，以及用于 C/C++ 的 CMake 等。

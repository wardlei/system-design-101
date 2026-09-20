---
title: "亚马逊的构建系统：Brazil"
description: "探索亚马逊用于微仓库协作的 Brazil 构建系统。"
image: "https://assets.bytebytego.com/diagrams/0069-amazon-build-system.jpeg"
createdAt: "2024-02-17"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - 构建系统
  - 亚马逊
---

![](https://assets.bytebytego.com/diagrams/0069-amazon-build-system.jpeg)

来认识亚马逊创新的构建系统——Brazil。

亚马逊的所有权模式要求每个团队管理自己的仓库，这使得更快速的创新成为可能。亚马逊创建了一个独特的构建系统，名为 Brazil，用于提升生产力并支撑亚马逊以微仓库（micro-repo）驱动的协作模式。这个系统非常值得研究！

借助 Brazil，开发者可以专注于开发代码，并创建一个简单易懂的构建配置文件。构建系统随后会可重复、一致地处理输出产物。构建配置将构建需求降到最低限度，包括语言、版本、依赖、主版本号，以及最后一点——如何解决版本冲突。

对于本地构建，Brazil 构建工具将构建配置解析为有向无环图（DAG），从 myservice 的私有空间（VersionSet，版本集）——名为 myservice-cpp-version-set——中获取包，生成特定语言的构建配置，并调用相应的构建工具来产出输出产物。

版本集是一组包版本的集合，为包及其依赖提供一个私有空间。当引入新的包依赖时，它也必须合并到这个私有空间中。有一个名为 "live" 的默认版本集，它是一个公共空间，任何人都可以在其中发布任何版本。

在远端，包构建服务（package builder）通过选择版本集和构建目标，提供了直观的体验。该服务支持 x86、x64 和 ARM 上的 Amazon Linux。构建可以手动触发，也可以在 master 分支有新提交时自动触发。包构建服务保证构建的一致性和可重现性，每次构建过程都会做快照，输出产物也会进行版本化。

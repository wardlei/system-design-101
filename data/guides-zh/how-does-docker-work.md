---
title: "Docker 是如何工作的？"
description: "探索 Docker 的内部工作原理：架构与关键组件。"
image: "https://assets.bytebytego.com/diagrams/0414-how-does-docker-work.png"
createdAt: "2024-03-15"
draft: false
categories:
  - devops-cicd
tags:
  - "Docker"
  - "容器"
---

![](https://assets.bytebytego.com/diagrams/0414-how-does-docker-work.png)

下图展示了 Docker 的架构，以及当我们运行“docker build”、“docker pull”和“docker run”时它是如何工作的。

Docker 架构中有 3 个组件：

*   **Docker 客户端**

    Docker 客户端与 Docker 守护进程（daemon）通信。

*   **Docker 主机**

    Docker 守护进程监听 Docker API 请求，并管理镜像、容器、网络和卷等 Docker 对象。

*   **Docker 镜像仓库**

    Docker 镜像仓库存储 Docker 镜像。Docker Hub 是一个任何人都可以使用的公共镜像仓库。

我们以“docker run”命令为例。

*   Docker 从镜像仓库拉取镜像。
*   Docker 创建一个新容器。
*   Docker 为容器分配一个可读写的文件系统。
*   Docker 创建一个网络接口，将容器连接到默认网络。
*   Docker 启动容器。

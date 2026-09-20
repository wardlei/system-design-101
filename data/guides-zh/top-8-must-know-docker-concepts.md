---
title: "必须知道的 8 个 Docker 概念"
description: "学习高效部署应用所必备的 Docker 核心概念。"
image: "https://assets.bytebytego.com/diagrams/0012-8-must-know-docker-concepts.png"
createdAt: "2024-03-03"
draft: false
categories:
  - devops-cicd
tags:
  - "Docker"
  - "容器"
---

![](https://assets.bytebytego.com/diagrams/0012-8-must-know-docker-concepts.png)

## Dockerfile

它包含构建 Docker 镜像的指令，通过指定基础镜像、依赖和运行命令来完成。

## Docker 镜像

一个轻量级、独立的软件包，包含运行应用程序所需的一切（代码、库和依赖）。镜像由 Dockerfile 构建，并且可以进行版本管理。

## Docker 容器

Docker 镜像的运行实例。容器之间以及与宿主机系统相互隔离，为运行应用程序提供安全且可复现的环境。

## Docker 注册表

用于存储和分发 Docker 镜像的集中式仓库。例如，Docker Hub 是默认的公共注册表，但你也可以搭建私有注册表。

## Docker 卷

一种持久化容器生成数据的方式。卷位于容器的文件系统之外，并且可以在多个容器之间共享。

## Docker Compose

一个用于定义和运行多容器 Docker 应用的工具，让管理整个技术栈变得更加容易。

## Docker 网络

用于实现容器与宿主机系统之间的通信。自定义网络可以隔离容器，或实现选择性的通信。

## Docker CLI

与 Docker 交互的主要方式，提供用于构建镜像、运行容器、管理卷以及执行其他操作的命令。

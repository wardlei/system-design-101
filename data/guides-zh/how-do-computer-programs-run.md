---
title: "计算机程序是如何运行的？"
description: "探索计算机程序从启动到结束的完整执行流程。"
image: "https://assets.bytebytego.com/diagrams/0218-how-do-computer-programs-run.png"
createdAt: "2024-03-10"
draft: false
categories:
  - software-architecture
tags:
  - 操作系统
  - 程序执行
---

![](https://assets.bytebytego.com/diagrams/0218-how-do-computer-programs-run.png)

上图展示了各个步骤。

## 用户交互与命令发起

通过双击一个程序，用户实际上是在指示操作系统通过图形用户界面启动一个应用程序。

## 程序预加载

一旦执行请求被发起，操作系统首先会获取该程序的可执行文件。

操作系统通过文件系统找到这个文件，并将其加载到内存中，为执行做好准备。

## 依赖解析与加载

大多数现代应用程序依赖许多共享库，例如动态链接库（DLL）。

## 分配内存空间

操作系统负责在内存中分配空间。

## 初始化运行时环境

分配内存之后，操作系统和执行环境（例如 Java 的 JVM 或 .NET Framework）会初始化运行程序所需的各种资源。

## 系统调用与资源管理

程序的入口点（通常是名为 `main` 的函数）被调用，开始执行程序员编写的代码。

## 冯·诺依曼架构

在冯·诺依曼架构中，CPU 执行存储在内存中的指令。

## 程序终止

最终，当程序完成其任务，或者用户主动终止应用程序时，程序会进入清理阶段。这包括关闭打开的文件描述符、释放网络资源，以及将内存归还给系统。

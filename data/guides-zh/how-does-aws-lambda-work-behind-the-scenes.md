---
title: "AWS Lambda 幕后工作原理"
description: "探索 AWS Lambda 及其无服务器架构的内部工作原理。"
image: "https://assets.bytebytego.com/diagrams/0249-lambda.jpg"
createdAt: "2024-01-26"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "AWS Lambda"
  - "无服务器"
---

![](https://assets.bytebytego.com/diagrams/0249-lambda.jpg)

**Serverless**（无服务器）是云服务中最热门的话题之一。AWS **Lambda** 在幕后是如何工作的？

Lambda 是亚马逊云科技（AWS）提供的一项**无服务器**计算服务，它会响应事件来运行函数。

## Firecracker MicroVM

Firecracker 是为所有 Lambda 函数提供动力的引擎。它是亚马逊开发的一种虚拟化技术，使用 Rust 编写。

下图展示了 AWS Lambda Worker 的隔离模型。

Lambda 函数在一个沙箱中运行，沙箱提供了一个最小的 Linux 用户态环境以及一些常用的库和工具。它在 EC2 实例上创建执行环境（worker）。

Lambda 是如何启动和被调用的？有两种方式。

## 同步执行

*   第 1 步：“Worker Manager 与 Placement Service（放置服务）通信，该服务负责在给定主机上为工作负载选择放置位置（即预配沙箱），并将结果返回给 Worker Manager”。

*   第 2 步：“随后 Worker Manager 可以调用 *Init* 来初始化要执行的函数，即从 S3 下载 Lambda 包并设置 Lambda 运行时”。

*   第 3 步：此时 Frontend Worker 可以调用 *Invoke*。

## 异步执行

*   第 1 步：Application Load Balancer（应用负载均衡器）将调用转发给一个可用的 Frontend，Frontend 将事件放入一个内部队列（SQS）。

*   第 2 步：有“一组分配给该内部队列的 poller（轮询器），它们负责轮询队列，并将事件同步地移到 Frontend 上。事件被放到 Frontend 之后，就遵循我们前面介绍的同步调用模式”。

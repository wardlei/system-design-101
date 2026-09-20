---
title: "是什么让 AWS Lambda 如此之快？"
description: "探索 AWS Lambda 惊人速度背后的关键因素。"
image: "https://assets.bytebytego.com/diagrams/0417-what-makes-aws-lambda-so-fast.png"
createdAt: "2024-02-06"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "AWS Lambda"
  - "无服务器"
---

![](https://assets.bytebytego.com/diagrams/0417-what-makes-aws-lambda-so-fast.png)

主要有 4 大支柱：

## 函数调用

AWS Lambda 支持同步调用和异步调用。

在同步调用中，调用方使用 AWS CLI、SDK 或其他服务直接调用 Lambda 函数。

在异步调用中，调用方不会等待函数的响应。请求经过授权后，事件会被放入内部 SQS 队列。轮询器（Pollers）从队列中读取消息并将其送去处理。

## 分配服务

分配服务（Assignment Service）负责管理执行环境。

该服务使用 Rust 编写以实现高性能，并被划分为多个分区，采用主从（leader-follower）模式来实现高可用。

执行环境的状态会被写入外部日志（journal log）。

## Firecracker 微虚拟机

Firecracker 是一个轻量级虚拟机管理器，专为运行 AWS Lambda 和 AWS Fargate 等无服务器工作负载而设计。

它使用 Linux 的基于内核的虚拟机（KVM）来创建和管理安全、可快速启动的 microVM。

## 组件存储

AWS Lambda 还需要管理由输入数据和函数代码组成的状态。

为了提高效率，它使用了多种技术：

*   使用分块（Chunking）来更高效地存储容器镜像。
*   使用收敛加密（convergent encryption）来保护共享数据。这需要向分块追加额外数据，以计算更稳健的哈希。
*   使用 SnapStart 功能，通过预初始化执行环境来降低冷启动延迟。

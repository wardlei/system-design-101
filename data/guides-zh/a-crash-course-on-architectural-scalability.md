---
title: "架构可扩展性速成课"
description: "了解架构可扩展性、瓶颈和关键技术。"
image: "https://assets.bytebytego.com/diagrams/0293-a-crash-course-on-architectural-scalability.png"
createdAt: "2024-02-10"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "可扩展性"
  - "架构"
---

![](https://assets.bytebytego.com/diagrams/0293-a-crash-course-on-architectural-scalability.png)

可扩展性（scalability）是系统在不损失性能的情况下处理不断增长的工作负载的能力。

不过，我们也可以从扩展策略的角度来看待可扩展性。

可扩展性是系统通过反复应用一种具有成本效益的策略来处理不断增长的工作负载的能力。这意味着，如果扩展策略在经济上不可行，系统就很难扩展到某个临界点之外。

可扩展性的三个主要瓶颈是：

1. 中心化组件：这可能成为单点故障
2. 高延迟组件：这些是执行耗时操作的组件。
3. 紧耦合：使组件难以扩展

因此，要构建一个可扩展的系统，我们应该遵循无状态、松耦合和异步处理的原则。

一些提升可扩展性的常见技术如下：

* 负载均衡：将请求分散到多台服务器上，防止单台服务器成为瓶颈。
* 缓存：把最常请求的信息存储在内存中。
* 事件驱动处理：使用异步处理方式来处理长时间运行的任务。
* 分片：将大数据集拆分成称为分片（shard）的较小子集，实现水平扩展。

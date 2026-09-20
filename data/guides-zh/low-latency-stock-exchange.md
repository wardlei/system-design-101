---
title: "低延迟证券交易所"
description: "探索低延迟证券交易所系统的架构。"
image: "https://assets.bytebytego.com/diagrams/0265-low-latency-stock-exchange.jpg"
createdAt: "2024-02-26"
draft: false
categories:
  - caching-performance
tags:
  - "低延迟"
  - "证券交易所"
---

![](https://assets.bytebytego.com/diagrams/0265-low-latency-stock-exchange.jpg)

现代证券交易所是如何实现**微秒级延迟**的？其原则是：

**在关键路径上做更少的事**

*   关键路径上的任务更少

*   每个任务的耗时更短

*   网络跳数更少

*   磁盘使用更少

对于证券交易所来说，关键路径是：

*   **起点**：订单进入订单管理器（Order Manager）

*   强制性的风险检查

*   订单得到撮合，执行结果被返回

*   **终点**：执行结果从订单管理器出来

其他非关键任务应当从关键路径中移除。

我们按图中所示设计了一套方案：

*   将所有组件部署在一台大型服务器上（不使用容器）

*   使用共享内存作为事件总线，让组件之间进行通信，不使用硬盘

*   关键组件（如订单管理器和撮合引擎）在关键路径上是单线程的，并且各自绑定到一个 CPU 上，因此**没有上下文切换**，也**没有锁**

*   单线程的应用循环按顺序逐个执行任务

*   其他组件监听事件总线并做出相应反应

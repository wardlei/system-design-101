---
title: "为什么要使用分布式锁？"
description: "探索分布式系统中分布式锁的主要用例。"
image: "https://assets.bytebytego.com/diagrams/0383-top-6-use-cases-of-distributed-lock.png"
createdAt: "2024-02-25"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "分布式系统"
  - "并发"
---

![](https://assets.bytebytego.com/diagrams/0383-top-6-use-cases-of-distributed-lock.png)

分布式锁是一种在分布式系统中确保互斥的机制。

## 分布式锁的 6 大用例

*   **领导者选举（Leader Election）**

    分布式锁可用于确保在任何给定时刻只有一个节点成为领导者。

*   **任务调度（Task Scheduling）**

    在分布式任务调度器中，分布式锁确保一个定时任务只由一个工作节点执行，从而防止重复执行。

*   **资源分配（Resource Allocation）**

    在管理文件系统、网络套接字或硬件设备等共享资源时，分布式锁确保一次只有一个进程可以访问该资源。

*   **微服务协调（Microservices Coordination）**

    当多个微服务需要执行协调操作时（例如更新不同数据库中的相关数据），分布式锁确保这些操作以受控且有序的方式执行。

*   **库存管理（Inventory Management）**

    在电商平台中，分布式锁可以管理库存更新，以确保当多个用户同时尝试购买同一商品时，库存水平得到准确维护。

*   **会话管理（Session Management）**

    在分布式环境中处理用户会话时，分布式锁可以确保一个用户会话一次只被一台服务器修改，从而防止不一致。

---
title: "一致性哈希详解"
description: "了解一致性哈希：它的优势及真实世界的应用。"
image: "https://assets.bytebytego.com/diagrams/0151-consistent-hashing.png"
createdAt: "2024-03-07"
draft: false
categories:
  - database-and-storage
tags:
  - "一致性哈希"
  - "分布式系统"
---

![](https://assets.bytebytego.com/diagrams/0151-consistent-hashing.png)

## 算法 1：一致性哈希

Amazon DynamoDB、Apache Cassandra、Discord 和 Akamai CDN 有什么共同点？

它们都使用了一致性哈希。让我们直入主题。

## 简单哈希有什么问题？

在大规模分布式系统中，数据无法存放在单台服务器上，而是被“分布”到许多机器上，这称为水平扩展。

要构建这样一个性能可预测的系统，关键在于将数据均匀地分布到这些服务器上。

简单哈希：serverIndex = hash(key) % N，其中 N 是服务器池的大小。

当集群规模固定且数据分布均匀时，这种方法效果不错。但当为了满足新需求而新增服务器、或移除现有服务器时，就会引发大量的缓存未命中风暴和大量对象迁移。

## 一致性哈希

一致性哈希是缓解这一问题的有效技术。

一致性哈希的目标很简单：即使服务器数量发生变化，我们也希望几乎所有对象仍然被分配到原来的服务器上。

如图所示，我们使用哈希函数，按每台服务器的名称或 IP 地址对其进行哈希，并将服务器放置到哈希环上。接着，我们用同一个哈希函数按对象的键对每个对象进行哈希。

要定位某个对象所在的服务器，我们从该对象键在环上的位置出发，顺时针查找，直到遇到一台服务器。继续我们的例子：key 0 位于 server 0 上，key 1 位于 server 1 上。

现在让我们看看新增一台服务器时会发生什么。

这里我们在环上 s0 的左侧插入一台新服务器 s4。注意，只有 k0 需要从 s0 迁移到 s4。这是因为从 k0 在环上的位置顺时针查找时，s4 是 k0 遇到的第一台服务器。键 k1、k2 和 k3 均不受影响。

## 一致性哈希在真实世界中的应用

*   **Amazon DynamoDB 和 Apache Cassandra：** 在再平衡（rebalancing）过程中最小化数据迁移

*   **Akamai 等内容分发网络（CDN）：** 将 Web 内容均匀分布到各边缘服务器

*   **Google Network Load Balancer 等负载均衡器：** 将持久连接均匀分布到后端服务器

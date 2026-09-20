---
title: "为什么 Kafka 这么快？"
description: "探索 Kafka 高性能背后的关键设计选择。"
image: "https://assets.bytebytego.com/diagrams/0424-why-is-kafka-fast.jpg"
createdAt: "2024-02-05"
draft: false
categories:
  - database-and-storage
tags:
  - "Kafka"
  - "性能"
---

![此图片无替代文字描述](https://assets.bytebytego.com/diagrams/0424-why-is-kafka-fast.jpg)

有许多设计决策促成了 Kafka 的性能。在本文中，我们聚焦其中两个。我们认为这两个权重最大。

## 顺序 I/O（Sequential I/O）

第一个是 Kafka 对顺序 I/O 的依赖。

## 零拷贝（Zero Copy）

第二个赋予 Kafka 性能优势的设计选择，是它对效率的关注：零拷贝原则。

上图说明了数据如何在生产者和消费者之间传输，以及零拷贝的含义。

*   步骤 1.1 - 1.3：生产者将数据写入磁盘
*   步骤 2：消费者在没有零拷贝的情况下读取数据
    *   2.1：数据从磁盘加载到操作系统缓存
    *   2.2：数据从操作系统缓存复制到 Kafka 应用
    *   2.3：Kafka 应用将数据复制到套接字缓冲区（socket buffer）
    *   2.4：数据从套接字缓冲区复制到网卡
    *   2.5：网卡将数据发送给消费者
*   步骤 3：消费者在零拷贝的情况下读取数据
    *   3.1：数据从磁盘加载到操作系统缓存
    *   3.2：操作系统缓存通过 sendfile() 命令将数据直接复制到网卡
    *   3.3：网卡将数据发送给消费者

零拷贝是一种捷径，可以在应用上下文和内核上下文之间省去多次数据拷贝。

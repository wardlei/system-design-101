---
title: "一张图讲清 4 种最常用的队列"
description: "通过一张图了解 4 种最常用的队列类型。"
image: "https://assets.bytebytego.com/diagrams/0366-types-of-queues.png"
createdAt: "2024-02-06"
draft: false
categories:
  - database-and-storage
tags:
  - "数据结构"
  - "队列"
---

![](https://assets.bytebytego.com/diagrams/0366-types-of-queues.png)

队列是在系统中被广泛使用的常见数据结构。上图展示了我们经常使用的 4 种队列类型。

## 简单 FIFO 队列

简单队列遵循 FIFO（先进先出）原则。新元素插入队尾，元素从队头移除。

如果我们想在每次收到支付响应时给用户发送邮件通知，就可以使用 FIFO 队列。邮件会按照支付响应的顺序依次发出。

## 循环队列

循环队列也叫循环缓冲区（circular buffer）或环形缓冲区（ring buffer）。它的最后一个元素与第一个元素相连。插入发生在队头，删除发生在队尾。

一个著名的实现是 LMAX 的低延迟环形缓冲区。交易组件之间通过环形缓冲区通信。它基于内存实现，速度极快。

## 优先级队列

优先级队列中的元素带有预定义的优先级。我们从队列中取出优先级最高（或最低）的元素。它的底层通常用最大堆或最小堆实现，优先级最高或最低的元素位于堆顶。

一个典型的用例是：把病情最严重的患者分配到急诊室，其他患者分配到普通诊室。

## 双端队列（Deque）

Deque 也叫双端队列（double-ended queue）。插入和删除都可以在队头和队尾进行。Deque 同时支持 FIFO 和 LIFO（后进先出），所以我们可以用它来实现栈这种数据结构。

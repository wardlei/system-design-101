---
title: "阻塞队列与非阻塞队列"
description: "探索阻塞与非阻塞队列、它们的差异以及实现方式。"
image: "https://assets.bytebytego.com/diagrams/0088-blocking-noblocking-queue.jpeg"
createdAt: "2024-02-25"
draft: false
categories:
  - software-development
tags:
  - "并发"
  - "数据结构"
---

![](https://assets.bytebytego.com/diagrams/0088-blocking-noblocking-queue.jpeg)

我们如何实现一个**非阻塞**队列？阻塞算法与非阻塞算法之间有什么区别？

讨论阻塞与非阻塞算法时使用的术语容易让人困惑，所以我们先用一张图来回顾一下并发领域的术语。

## 阻塞算法与非阻塞算法

*   **阻塞（Blocking）**

    阻塞算法使用锁。线程 A 先获得锁，如果线程 A 在持有锁期间被挂起，线程 B 可能要等待任意长的时间。这种算法可能导致线程 B 饥饿（starve）。

*   **非阻塞（Non-blocking）**

    非阻塞算法允许线程 A 访问队列，但线程 A 必须在一定步数内完成任务。其他线程（如线程 B）仍可能因为被拒绝访问而饥饿。

这就是阻塞与非阻塞算法的主要**区别**：阻塞算法会让线程 B 一直阻塞，直到锁被释放；非阻塞算法则会通知线程 B 访问被拒绝。

*   **无饥饿（Starvation-free）**

    线程饥饿指某个线程无法获得对特定共享资源的访问，因而无法继续执行。无饥饿意味着这种情况不会发生。

*   **无等待（Wait-free）**

    所有线程都能在有限步数内完成任务。

无等待 = 非阻塞 + 无饥饿

## 非阻塞队列的实现

我们可以使用 Compare and Swap（CAS，比较并交换）来实现非阻塞队列。下图展示了这个算法。

## 优势

1.  没有线程挂起。线程 B 可以立即得到响应，然后决定下一步做什么。这样，线程延迟大大降低。

2.  没有死锁。线程 A 和 B 不会等待锁释放，这意味着不存在发生死锁的可能。

---
title: "垃圾回收是如何工作的？"
description: "探索垃圾回收如何自动回收不再使用的内存。"
image: "https://assets.bytebytego.com/diagrams/0200-garbage-collection-101.png"
createdAt: "2024-02-17"
draft: false
categories:
  - software-development
tags:
  - "垃圾回收"
  - "内存管理"
---

垃圾回收是编程语言中一种自动化的内存管理特性，用于回收程序不再使用的内存。

![此图片没有替代文字描述](https://assets.bytebytego.com/diagrams/0200-garbage-collection-101.png)

## Java

Java 提供了多种垃圾回收器，每种都适用于不同的使用场景：

*   Serial 垃圾回收器：最适合单线程环境或小型应用。

*   Parallel 垃圾回收器：也称为“吞吐量回收器（Throughput Collector）”。

*   CMS（Concurrent Mark-Sweep，并发标记-清除）垃圾回收器：低延迟回收器，旨在最小化停顿时间。

*   G1（Garbage-First）垃圾回收器：旨在平衡吞吐量和延迟。

*   Z 垃圾回收器（ZGC）：一种低延迟垃圾回收器，专为需要大堆内存和极短停顿时间的应用而设计。

## Python

Python 的垃圾回收基于引用计数和循环垃圾回收器：

*   引用计数：每个对象都有一个引用计数；当计数归零时，内存就被释放。

*   循环垃圾回收器：处理引用计数无法解决的循环引用。

## GoLang

并发标记-清除垃圾回收器：Go 的垃圾回收器与应用并发运行，从而最小化 stop-the-world 停顿。

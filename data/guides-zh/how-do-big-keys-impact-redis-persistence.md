---
title: "大 Key 如何影响 Redis 持久化"
description: "探讨大 key 对 Redis AOF 持久化模式的影响。"
image: "https://assets.bytebytego.com/diagrams/0085-big-keys.png"
createdAt: "2024-02-17"
draft: false
categories:
  - caching-performance
tags:
  - "Redis"
  - "持久化"
---

![](https://assets.bytebytego.com/diagrams/0085-big-keys.png)

我们把包含大量数据的 key 称为大 key。例如，某个 key 的大小为 5 MB。

上图展示了大 key 如何影响 Redis 的 AOF（Append-Only-File）持久化。

开启 AOF 持久化时有三种模式：

*   Always —— 只要内存中有数据更新，就同步将数据写入磁盘。

*   EverySec —— 每秒写入一次磁盘。

*   No —— Redis 不控制数据何时写入磁盘，而是由操作系统决定何时将数据写入磁盘。

## 我们如何分析大 key 的影响？

Redis 先将 key 写入内存，然后调用 write() 将数据写入内核缓冲区缓存，接着 fsync() 将文件的所有已修改的内核中数据刷新到磁盘设备。这里共有 3 种模式。

在 “Always” 模式下，Redis 会同步调用 fsync()。如果我们需要更新一个大 key，主线程会被阻塞，因为它必须等待写入完成。

“EverySec” 模式会启动一个后台定时任务，每秒调用一次 fsync()，因此大 key 对 Redis 主线程没有影响。

“No” 模式从不调用 fsync()，一切交给操作系统处理。大 key 对主线程没有影响。

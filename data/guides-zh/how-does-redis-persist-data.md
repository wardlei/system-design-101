---
title: "Redis 是如何持久化数据的？"
description: "探索 Redis 的数据持久化：AOF、RDB 以及混合方案。"
image: "https://assets.bytebytego.com/diagrams/0214-how-redis-presists-data.png"
createdAt: "2024-03-05"
draft: false
categories:
  - caching-performance
tags:
  - "Redis"
  - "数据持久化"
---

![](https://assets.bytebytego.com/diagrams/0214-how-redis-presists-data.png)

Redis 是一个内存数据库。如果服务器宕机，数据就会丢失。

上图展示了将 Redis 数据持久化到磁盘的两种方式：

1. AOF（Append-Only File，追加写文件）
2. RDB（Redis Database，Redis 数据库）

需要注意的是，数据持久化并不在关键路径上执行，也不会阻塞 Redis 的写入过程。

## AOF（Append-Only File）

与预写日志（write-ahead log）不同，Redis 的 AOF 日志是一种写后日志。Redis 先执行命令修改内存中的数据，然后再将其写入日志文件。AOF 日志记录的是命令，而不是数据。这种基于事件的设计简化了数据恢复。此外，AOF 是在命令于内存中执行完成之后才记录命令的，因此不会阻塞当前的写操作。

## RDB（Redis Database）

AOF 的局限在于它持久化的是命令而不是数据。当我们使用 AOF 日志进行恢复时，必须扫描整个日志。当日志体积较大时，Redis 恢复需要很长时间。因此，Redis 提供了另一种持久化数据的方式——RDB。

RDB 在特定时间点记录数据快照。当服务器需要恢复时，可以直接将数据快照加载到内存中，从而实现快速恢复。

步骤 1：主线程 fork 出“bgsave”子进程，该子进程共享主线程的所有内存数据。“bgsave”从主线程读取数据并将其写入 RDB 文件。

步骤 2 和 3：如果主线程修改了数据，就会创建一份数据副本。

步骤 4 和 5：随后主线程在数据副本上进行操作。与此同时，“bgsave”子进程继续将数据写入 RDB 文件。

## 混合方案

通常在生产系统中，我们可以选择混合方案：使用 RDB 时不时记录数据快照，并使用 AOF 记录自上次快照以来的命令。

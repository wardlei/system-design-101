---
title: "你应该了解哪些延迟数值？"
description: "开发者和系统设计者必知的延迟基准。"
image: "https://assets.bytebytego.com/diagrams/0250-latency-numbers.jpg"
createdAt: "2024-03-11"
draft: false
categories:
  - caching-performance
tags:
  - "延迟"
  - "性能"
---

请注意，这些并非精确数值。它们基于一些在线基准测试（Jeff Dean 的延迟数值以及其他一些来源）。

![](https://assets.bytebytego.com/diagrams/0250-latency-numbers.jpg)

*   **L1 和 L2 缓存：1 ns、10 ns**

    例如：它们通常内置在微处理器芯片上。除非你直接与硬件打交道，否则可能无需担心它们。

*   **RAM 访问：100 ns**

    例如：从内存中读取数据大约需要 100 ns。Redis 是一种内存数据存储，因此从 Redis 读取数据大约需要 100 ns。

*   **通过 1 Gbps 网络发送 1K 字节：10 us**

    例如：通过网络从 Memcached 发送 1KB 数据大约需要 10 us。

*   **从 SSD 读取：100 us**

    例如：RocksDB 是一种基于磁盘的键值存储（K/V store），因此在 SSD 上的读取延迟约为 100 us。

*   **数据库插入操作：1 ms**

    例如：PostgreSQL 提交可能需要 1ms。数据库需要存储数据、创建索引并刷写日志。所有这些操作都需要时间。

*   **发送数据包 CA → 荷兰 → CA：100 ms**

    例如：如果我们进行一次长途 Zoom 通话，延迟可能在 100 ms 左右。

*   **重试/刷新间隔：1-10s**

    例如：在监控系统中，刷新间隔通常设置为 5~10 秒（Grafana 的默认值）。

## 备注

1 ns = 10^-9 秒
1 us = 10^-6 秒 = 1,000 ns
1 ms = 10^-3 秒 = 1,000 us = 1,000,000 ns

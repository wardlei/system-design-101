---
title: 'Netflix 使用缓存的 4 种方式'
description: '探索 Netflix 如何利用缓存维持用户参与度。'
image: 'https://assets.bytebytego.com/diagrams/0007-4-ways-netflix-uses-caching.png'
createdAt: '2024-02-25'
draft: false
categories:
  - real-world-case-studies
tags:
  - 缓存
  - Netflix
---

![](https://assets.bytebytego.com/diagrams/0007-4-ways-netflix-uses-caching.png)

Netflix 的目标是让你尽可能长时间地持续观看。但用户的典型注意力时长只有 90 秒。

他们使用 EVCache（一种分布式键值存储）来降低延迟，以免用户失去兴趣。

不过，EVCache 在 Netflix 有多种用途。

*   **旁路缓存（Lookaside Cache）**

    当应用需要某些数据时，它首先尝试通过 EVCache 客户端获取；如果数据不在缓存中，就转向后端服务和 Cassandra 数据库获取数据。

    该服务还会更新缓存，以服务后续的请求。

*   **临时数据存储（Transient Data Store）**

    Netflix 使用 EVCache 来跟踪临时数据，比如播放会话信息。

    一个应用服务可能开启会话，另一个服务可能更新会话，最后再由某个服务关闭会话。

*   **主存储（Primary Store）**

    Netflix 每晚运行大规模预计算系统，根据观看历史和推荐为每个用户的每个 profile 计算一个全新的首页。

    所有这些数据都会写入 EVCache 集群，在线服务从那里读取数据并构建首页。

*   **高访问量数据（High Volume Data）**

    Netflix 有些数据访问量极高，同时也需要高可用。例如，Netflix 首页上展示的 UI 字符串和翻译。

    一个独立的进程异步计算 UI 字符串并发布到 EVCache，应用可以从那里以低延迟、高可用的方式读取。

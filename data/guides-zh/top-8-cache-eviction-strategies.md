---
title: "8 大缓存淘汰策略"
description: "探索 8 种用于优化性能的关键缓存淘汰策略。"
image: "https://assets.bytebytego.com/diagrams/0059-top-8-cache-eviction-strategies.png"
createdAt: "2024-02-28"
draft: false
categories:
  - caching-performance
tags:
  - "缓存"
  - "算法"
---

![](https://assets.bytebytego.com/diagrams/0059-top-8-cache-eviction-strategies.png)

## LRU（最近最少使用）

LRU 淘汰策略会优先移除最久未被访问的条目。这种方法基于这样的原则：最近访问过的条目在不久的将来更有可能再次被访问。

## MRU（最近最常使用）

与 LRU 相反，MRU 算法会优先移除最近最常使用的条目。这种策略适用于那些最近访问过的条目不太可能很快再次被访问的场景。

## SLRU（分段 LRU）

SLRU 将缓存划分为两个段：试用段（probationary segment）和保护段（protected segment）。新条目最初会被放入试用段。如果试用段中的某个条目再次被访问，它就会被提升到保护段。

## LFU（最不经常使用）

LFU 算法会淘汰访问频率最低的条目。

## FIFO（先进先出）

FIFO 是最简单的缓存策略之一，缓存以类似队列的方式运行，优先淘汰最旧的条目，而不考虑它们的访问模式或频率。

## TTL（生存时间）

虽然严格来说 TTL 不是一种淘汰算法，但它是一种策略：为每个缓存条目指定一个特定的生命周期。

## 双层缓存

在双层缓存策略中，我们使用内存缓存作为第一层，分布式缓存作为第二层。

## RR（随机替换）

随机替换算法会随机选择一个缓存条目并将其淘汰，以便为新条目腾出空间。这种方法实现起来也很简单，不需要跟踪访问模式或频率。

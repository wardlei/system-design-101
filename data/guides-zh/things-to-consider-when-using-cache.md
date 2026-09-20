---
title: "使用缓存时需要考虑的事项"
description: "构建快速在线系统时使用缓存需要考虑的 5 大事项。"
image: "https://assets.bytebytego.com/diagrams/0362-things-to-consider-when-using-cache.png"
createdAt: "2024-02-23"
draft: false
categories:
  - caching-performance
tags:
  - "缓存"
  - "性能"
---

![](https://assets.bytebytego.com/diagrams/0362-things-to-consider-when-using-cache.png)

缓存是构建快速在线系统时最常用的技术之一。使用缓存时，需要考虑以下 5 大事项：

这份速查表的初版由客座作者 [Love Sharma](https://twitter.com/Zonito87) 撰写。

## 适用场景

*   内存解决方案

*   读密集型系统

*   数据不频繁更新

## 缓存技术

*   Cache Aside（旁路缓存）

*   Write-through（写穿透）

*   Read-through（读穿透）

*   Write-around（写绕行）

*   Write-back（写回）

## 缓存淘汰算法

*   最近最少使用（LRU）

*   最不经常使用（LFU）

*   先进先出（FIFO）

*   随机替换（RR）

## 关键指标

*   缓存命中率

*   延迟

*   吞吐量

*   失效率

*   内存使用

*   CPU 使用

*   网络使用

## 其他问题

*   冷启动时的惊群效应

*   生存时间（TTL）

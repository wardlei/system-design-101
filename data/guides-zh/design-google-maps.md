---
title: "设计 Google Maps"
description: "学习如何设计一个简化版的 Google Maps。"
image: "https://assets.bytebytego.com/diagrams/0207-google-maps.png"
createdAt: "2024-03-09"
draft: false
categories:
  - how-it-works
tags:
  - "系统设计"
  - "地图"
---

![](https://assets.bytebytego.com/diagrams/0207-google-maps.png)

Google 于 2005 年启动了 **Google Maps** 项目。截至 2021 年 3 月，Google Maps 已拥有 10 亿日活跃用户，覆盖了全球 99% 的地区。

尽管 Google Maps 是一个非常复杂的系统，但我们可以将其拆解为 3 个高层组件。在这篇文章中，我们来看看如何设计一个简化版的 Google Maps。

## 位置服务（Location Service）

位置服务负责记录用户的位置更新。Google Maps 客户端每隔几秒就会发送一次位置更新。用户位置数据可用于许多场景：

* 发现新开通的道路和最近关闭的道路。
* 随时间推移不断提升地图的准确性。
* 作为实时交通数据的输入。

## 地图渲染（Map Rendering）

世界地图被投影为一张巨大的 2D 地图图像。它被切分成称为“瓦片（tiles）”的小图像块（见下文）。瓦片是静态的，不会频繁变化。提供静态瓦片文件的高效方式是使用 CDN，并由 S3 等云存储作为后端支撑。用户可以从就近的 CDN 加载所需的瓦片来拼合地图。

如果用户在客户端上缩放、平移地图视角来探索周围环境，该怎么办？

一种高效的做法是预先计算不同缩放级别下的地图块，在需要时再加载对应图像。

## 导航服务（Navigation Service）

这个组件负责找到从 A 点到 B 点的一条合理且快捷的路线。它会调用两个服务来辅助路径计算：

1. 地理编码服务（Geocoding Service）：将给定的地址解析为经纬度坐标对。
2. 路线规划服务（Route Planner Service）：该服务按顺序完成三件事：

    * 计算 A 与 B 之间的 top-K 条最短路径
    * 基于当前交通状况和历史数据，估算每条路径所需的时间
    * 按时间预测和用户过滤条件对路径排序。例如，用户不想避开收费站（可据此过滤）。

---
title: "邻近服务"
description: "探索用于查找附近地点的邻近服务设计。"
image: "https://assets.bytebytego.com/diagrams/0306-proximity-service-design.jpg"
createdAt: "2024-03-14"
draft: false
categories:
  - how-it-works
tags:
  - "位置服务"
  - "地理空间数据"
---

![](https://assets.bytebytego.com/diagrams/0306-proximity-service-design.jpg)

我们如何在 Yelp 或 Google Maps 上查找附近的餐厅？以下是幕后的一些设计细节。

这里有两个关键服务（见下图）：

## 业务服务

*   新增/删除/更新餐厅信息

*   顾客查看餐厅详情

## 基于位置的服务

*   给定半径和位置，返回附近餐厅的列表

餐厅位置是如何存储在数据库中的，才能让 LBS 高效地返回附近的餐厅？

是把餐厅的纬度和经度存储在数据库中吗？当你需要计算自己与每一家餐厅之间的距离时，这种查询会非常低效。

加快搜索的一种方法是使用 geohash 算法。

首先，沿着本初子午线和赤道把地球划分为四个象限：

*   纬度范围 \[-90, 0] 用 0 表示

*   纬度范围 \[0, 90] 用 1 表示

*   经度范围 \[-180, 0] 用 0 表示

*   经度范围 \[0, 180] 用 1 表示

其次，把每个网格再划分为四个更小的网格。每个网格可以通过经度位和纬度位交替排列来表示。

因此，当你想搜索红色高亮网格中的附近餐厅时，可以编写如下 SQL：

SELECT \* FROM geohash\_index WHERE geohash LIKE \`01%\`

Geohash 有一些局限性。一个网格中可能有大量餐厅（如纽约市中心），而另一个网格中可能一家都没有（如海洋）。因此还有其他更复杂的算法来优化这一过程。如果你对细节感兴趣，请告诉我。

---
title: "你不能忽视的 9 大网站性能指标"
description: "探索实现最佳用户体验的关键网站性能指标。"
image: "https://assets.bytebytego.com/diagrams/0021-must-know-website-performance-metrics.png"
createdAt: "2024-03-13"
draft: false
categories:
  - caching-performance
tags:
  - 网站性能
  - 指标
---

![](https://assets.bytebytego.com/diagrams/0021-must-know-website-performance-metrics.png)

## 加载时间（Load Time）

这是浏览器下载并显示网页所花费的时间，以毫秒为单位计量。

## 首字节时间（Time to First Byte，TTFB）

这是浏览器从 Web 服务器接收到第一个字节数据所花费的时间。TTFB 至关重要，因为它反映了服务器处理流量的总体能力。

## 请求数量（Request Count）

浏览器为了完全加载页面而必须发出的 HTTP 请求数量。这个数量越少，网站给用户的感觉就越快。

## DOMContentLoaded（DCL）

这是网页完整 HTML 代码加载完成所需的时间。这个时间越短，用户就能越快看到可用的功能。这一时间不包含加载 CSS 和其他资源的时间。

## 首屏加载时间（Time to Above-the-Fold Load）

“首屏（above the fold）”是指浏览器窗口中无需用户向下滚动即可看到的网页区域。这是用户最先看到的内容，往往决定他们是否会继续阅读该网页。

## 首次内容绘制（First Contentful Paint，FCP）

这是内容首次被浏览器“绘制”出来的时间。它可以是文本、图片，甚至是背景颜色。

## 页面大小（Page Size）

这是页面上出现的所有内容和资源的总文件大小。过去几年里，网站的页面大小一直在不断增长。网页越大，加载所需的时间就越长。

## 往返时间（Round Trip Time，RTT）

这是一次往返所花费的时间。一次往返包括请求从浏览器发送到源服务器，以及响应从服务器返回浏览器。降低 RTT 是提升网站性能的关键方法之一。

## 渲染阻塞资源（Render Blocking Resources）

有些资源会阻塞页面的其他部分加载。跟踪这类资源的数量非常重要。网页拥有的渲染阻塞资源越多，浏览器加载页面的延迟就越大。

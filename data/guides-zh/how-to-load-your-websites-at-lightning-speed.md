---
title: "前端性能优化"
description: "通过这些前端优化技巧，提升你网站的速度。"
image: "https://assets.bytebytego.com/diagrams/0198-frontend-performance-cheatsheet.png"
createdAt: "2024-03-10"
draft: false
categories:
  - caching-performance
tags:
  - "前端"
  - "性能"
---

![](https://assets.bytebytego.com/diagrams/0198-frontend-performance-cheatsheet.png)

来看看这 8 个提升前端性能的技巧：

* **压缩（Compression）** 在传输前压缩文件、减小数据体积，以降低网络负载。

* **选择性渲染/窗口化（Selective Rendering/Windowing）** 只显示可见元素，以优化渲染性能。例如，在动态列表中只渲染可见的条目。

* **模块化架构与代码拆分（Code Splitting）** 将较大的应用打包文件拆分成多个较小的包，以便更高效地加载。

* **基于优先级的加载（Priority-Based Loading）** 优先加载关键资源以及可见（或首屏）内容，以带来更好的用户体验。

* **预加载（Pre-loading）** 在资源被请求之前就提前获取，以提升加载速度。

* **摇树优化/死代码清除（Tree Shaking / Dead Code Removal）** 通过移除永远不会被用到的死代码来优化最终的 JS 打包文件。

* **预取（Pre-fetching）** 主动获取或缓存可能很快会用到的资源。

* **动态导入（Dynamic Imports）** 根据用户操作动态加载代码模块，以优化初始加载时间。

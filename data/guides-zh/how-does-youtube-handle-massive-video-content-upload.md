---
title: 'YouTube 如何处理海量视频上传'
description: "探究 YouTube 处理海量视频上传的架构。"
image: 'https://assets.bytebytego.com/diagrams/0425-yt-massive-upload.png'
createdAt: '2024-02-23'
draft: false
categories:
  - real-world-case-studies
tags:
  - 架构
  - 可扩展性
---

![](https://assets.bytebytego.com/diagrams/0425-yt-massive-upload.png)

YouTube 平均每分钟处理 500 多小时的上传视频内容。它是如何做到的？

上图展示了 YouTube 于 2021 年发布的创新性硬件编码方案。

*   **传统软件编码**

YouTube 的使命是将原始视频转码成不同的压缩码率，以适应不同的观看设备——手机（720p）、笔记本电脑（1080p）或高清电视（4K）。

创作者每分钟都会向 YouTube 上传海量视频内容。尤其是在 COVID-19 疫情期间，由于人们居家隔离，视频消费量大幅增加。基于软件的编码变得缓慢且成本高昂。这意味着需要一种专为视频编码/解码量身定制的专用处理大脑。

*   **YouTube 的转码大脑——VCU**

就像 GPU 或 TPU 用于图形或机器学习计算一样，YouTube 开发了 VCU（Video transCoding Unit，视频转码单元），用于仓库规模的视频处理。

每个集群都有若干台 VCU 加速服务器。每台服务器有多个加速器托盘，每个托盘包含多块 VCU 卡。每块卡上有编码器、解码器等。

VCU 集群生成不同分辨率的视频内容，并将其存储在云存储中。

与之前优化过的系统相比，这一新设计在计算效率上带来了 20-33 倍的提升。

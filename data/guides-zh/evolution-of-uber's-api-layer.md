---
title: Uber API 层的演进
description: 了解 Uber API 层的演进历程。
image: 'https://assets.bytebytego.com/diagrams/0397-uber-api-layer.png'
createdAt: '2024-03-14'
draft: false
categories:
  - real-world-case-studies
tags:
  - API 网关
  - 微服务
---

![](https://assets.bytebytego.com/diagrams/0397-uber-api-layer.png)

Uber 的 API 网关经历了 3 个主要阶段。

第一代：自然演进。2014 年 Uber 的架构有两个关键服务：dispatch 和 API。dispatch 服务负责将乘客与司机连接起来，而 API 服务负责存储用户和行程的长期数据。

第二代：无所不包的网关。Uber 很早就采用了微服务架构。到 2019 年，由于这一架构决策，Uber 的产品由 2,200 多个微服务驱动。

第三代：自助式、去中心化、分层化。到 2018 年初，Uber 已经有了全新的业务线和大量新应用。货运（Freight）、自动驾驶（ATG）、Elevate、生鲜杂货等业务线不断壮大。伴随着一系列新的目标，第三代 API 层应运而生。

---
title: "指标采集系统中的推送 vs 拉取"
description: "探索指标采集系统中的推送与拉取模型。"
image: "https://assets.bytebytego.com/diagrams/0274-metrics-push-pull.png"
createdAt: "2024-02-22"
draft: false
categories:
  - devops-cicd
tags:
  - "指标"
  - "监控"
---

[![](https://assets.bytebytego.com/diagrams/0274-metrics-push-pull.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F197e300b-7e29-40b4-ac0e-8e9280133bf0_1514x1999.png)

指标数据的采集有两种方式：拉取（pull）或推送（push）。关于哪种方式更好，是一个老生常谈的争论，而且没有明确的答案。在本文中，我们将重点介绍拉取模型。

图 1 展示了通过 HTTP 使用拉取模型进行数据采集的方式。我们有专门的指标采集器，它们会定期从正在运行的应用中拉取指标值。

在这种方式中，指标采集器需要知道要从中拉取数据的服务端点的完整列表。一种简单的做法是，在「指标采集器」服务器上用一个文件保存每个服务端点的 DNS/IP 信息。虽然这个想法很简单，但在服务器频繁增加或移除的大规模环境中，这种方式很难维护，而且我们希望确保指标采集器不会漏掉任何新服务器的指标采集。

好消息是，我们可以通过服务发现（Service Discovery）获得一个可靠、可扩展且易于维护的解决方案。Kubernetes、Zookeeper 等提供了服务发现能力，服务在其中注册自身的可用性，当服务端点列表发生变化时，指标采集器可以由服务发现组件通知。如图 2 所示，服务发现包含关于何时以及在哪里采集指标的配置规则。

图 3 详细解释了拉取模型。

### 拉取模型详解

*   指标采集器从服务发现中获取服务端点的配置元数据。元数据包括拉取间隔、IP 地址、超时和重试参数等。

*   指标采集器通过预定义的 HTTP 端点（例如 /metrics）拉取指标数据。要暴露该端点，通常需要在服务中添加一个客户端库。在图 3 中，该服务是 Web 服务器。

*   可选地，指标采集器向服务发现注册变更事件通知，以便在服务端点发生变化时接收更新。或者，指标采集器可以定期轮询端点变化。

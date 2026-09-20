---
title: 数据管道概览
description: 了解数据管道的核心阶段。
image: 'https://assets.bytebytego.com/diagrams/0157-data-pipeline-overview.png'
createdAt: '2024-03-14'
draft: false
categories:
  - ai-machine-learning
tags:
  - 数据管道
  - 数据处理
---

![](https://assets.bytebytego.com/diagrams/0157-data-pipeline-overview.png)

数据管道是现代系统中高效管理和处理数据的基础组件。这些管道通常包含 5 个主要阶段：收集（Collect）、摄取（Ingest）、存储（Store）、计算（Compute）和消费（Consume）。

## 收集（Collect）：

数据从数据存储、数据流和应用程序中获取，这些数据源来自远程设备、应用程序或业务系统。

## 摄取（Ingest）：

在摄取过程中，数据被加载到系统中，并在事件队列中进行组织。

## 存储（Store）：

摄取之后，组织好的数据被存储在数据仓库、数据湖和数据湖仓中，同时也会存入数据库等各种系统，确保摄取后的数据得到持久化存储。

## 计算（Compute）：

数据经过聚合、清洗和处理，以符合公司标准，其中包括格式转换、数据压缩和分区等任务。该阶段同时采用批处理和流处理技术。

## 消费（Consume）：

处理后的数据通过分析和可视化工具、运营数据存储、决策引擎、面向用户的应用、仪表盘、数据科学、机器学习服务、商业智能和自助式分析等方式供各方使用。

每个阶段的效率和效果共同决定了组织内数据驱动型业务的整体成效。

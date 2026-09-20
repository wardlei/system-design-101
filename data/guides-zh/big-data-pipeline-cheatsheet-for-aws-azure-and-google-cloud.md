---
title: "AWS、Azure 和 Google Cloud 大数据管道速查表"
description: "AWS、Azure 和 Google Cloud 的大数据管道速查表。"
image: "https://assets.bytebytego.com/diagrams/0086-big-data-pipeline-cheatsheet-for-aws-azure-and-gcp.png"
createdAt: "2024-03-14"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "大数据"
  - "云计算"
---

![](https://assets.bytebytego.com/diagrams/0086-big-data-pipeline-cheatsheet-for-aws-azure-and-gcp.png)

每个平台都提供了一整套覆盖整个生命周期的服务：

*   数据摄取：从各种来源收集数据

*   数据湖：存储原始数据

*   计算：处理和分析数据

*   数据仓库：存储结构化数据

*   呈现：将洞察可视化和生成报表

AWS 使用的服务包括：Kinesis 用于数据流，S3 用于存储，EMR 用于处理，RedShift 用于数据仓库，QuickSight 用于可视化。

Azure 的管道包括：Event Hubs 用于摄取，Data Lake Store 用于存储，Databricks 用于处理，Cosmos DB 用于数据仓库，Power BI 用于呈现。

GCP 提供：PubSub 用于数据流，Cloud Storage 用于数据湖，DataProc 和 DataFlow 用于处理，BigQuery 用于数据仓库，Data Studio 用于可视化。

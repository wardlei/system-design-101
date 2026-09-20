---
title: "什么是 ELK Stack，它为什么如此流行？"
description: "了解 ELK Stack：Elasticsearch、Logstash 和 Kibana。"
image: "https://assets.bytebytego.com/diagrams/0183-elk.jpg"
createdAt: "2024-02-15"
draft: false
categories:
  - caching-performance
tags:
  - "ELK Stack"
  - "日志管理"
---

![](https://assets.bytebytego.com/diagrams/0183-elk.jpg)

ELK Stack 由三个开源产品组成。ELK 代表 Elasticsearch、Logstash 和 Kibana。

*   Elasticsearch 是一个全文搜索和分析引擎，以 Apache Lucene 搜索引擎作为其核心组件。

*   Logstash 从各种边缘采集器收集数据，然后转换这些数据，并将其发送到各种目的地，以便进一步处理或可视化。

为了扩展边缘数据采集能力，后来又开发了一个新产品 Beats，作为安装在边缘主机上的轻量级代理，用于采集日志并将其发送到 Logstash。

*   Kibana 是一个可视化层，用户可以通过它分析和可视化数据。

上图展示了 ELK Stack 的工作原理：

## ELK Stack 工作流程

第 1 步 - Beats 从各种数据源收集数据。例如，Filebeat 和 Winlogbeat 处理日志，Packetbeat 处理网络流量。

第 2 步 - Beats 将数据发送到 Logstash 进行聚合和转换。如果处理的是海量数据，我们可以添加消息队列（Kafka）来解耦数据生产者和消费者。

第 3 步 - Logstash 将数据写入 Elasticsearch，用于数据索引和存储。

第 4 步 - Kibana 构建在 Elasticsearch 之上，为用户提供各种搜索工具和仪表盘，用于可视化数据。

ELK Stack 非常便于故障排查和监控。它以合理的价格提供了日志分析领域一套简单而强大的套件，因而变得流行。

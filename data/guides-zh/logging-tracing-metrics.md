---
title: "日志、追踪与指标"
description: "了解系统可观测性的三大支柱：日志、追踪与指标。"
image: "https://assets.bytebytego.com/diagrams/0264-logging-tracing-metrics.png"
createdAt: "2024-03-11"
draft: false
categories:
  - devops-cicd
tags:
  - "可观测性"
  - "监控"
---

日志、追踪和指标是系统可观测性的三大支柱。下图展示了它们的定义和典型架构。

![](https://assets.bytebytego.com/diagrams/0264-logging-tracing-metrics.png)

## 日志（Logging）

日志记录系统中的离散事件。例如，我们可以将传入的请求或对数据库的访问记录为事件。日志的数据量最大。通常使用 ELK（Elastic-Logstash-Kibana）技术栈来构建日志分析平台。我们通常会为不同团队定义一套标准化的日志格式，以便在海量日志中进行搜索时能够利用关键词。

## 追踪（Tracing）

追踪通常以请求为范围。例如，一个用户请求会经过 API 网关、负载均衡器、服务 A、服务 B 和数据库，这些过程可以在追踪系统中可视化。当我们需要识别系统中的瓶颈时，这一点非常有用。我们使用 OpenTelemetry 来展示典型架构，它把三大支柱统一到了一个框架中。

## 指标（Metrics）

指标通常是来自系统的可聚合信息。例如，服务的 QPS、API 响应速度、服务延迟等。原始数据记录在 InfluxDB 等时序数据库中。Prometheus 拉取数据，并根据预定义的告警规则对数据进行转换。随后，数据被发送到 Grafana 进行展示，或发送到告警管理器，由其发出邮件、短信或 Slack 通知或告警。

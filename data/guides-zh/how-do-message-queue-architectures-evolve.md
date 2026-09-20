---
title: "IBM MQ -> RabbitMQ -> Kafka -> Pulsar：消息队列的演进"
description: "探索消息队列架构的演进：从 IBM MQ 到 Pulsar。"
image: "https://assets.bytebytego.com/diagrams/0271-message-queue-evolve.png"
createdAt: "2024-03-05"
draft: false
categories:
  - "database-and-storage"
tags:
  - "消息队列"
  - "系统设计"
---

![消息队列的演进](https://assets.bytebytego.com/diagrams/0271-message-queue-evolve.png)

*   IBM MQ

IBM MQ 于 1993 年推出。它最初名为 MQSeries，2002 年更名为 WebSphere MQ，2014 年更名为 IBM MQ。IBM MQ 是一款非常成功的产品，被广泛应用于金融行业。它在 2020 年的收入仍达到 10 亿美元。

*   RabbitMQ

RabbitMQ 的架构与 IBM MQ 不同，其概念更接近 Kafka。生产者向一个指定类型的交换机（exchange）发布消息，类型可以是 direct、topic 或 fanout。交换机随后根据不同的消息属性和交换机类型将消息路由到相应的队列中，消费者据此消费消息。

*   Kafka

2011 年初，LinkedIn 开源了 Kafka，这是一个分布式事件流平台。它以 Franz Kafka 的名字命名。正如其名，Kafka 针对写入进行了优化。它为处理实时数据流提供了一个高吞吐、低延迟的平台。Kafka 提供统一的事件日志以支持事件流，在互联网公司中被广泛使用。

Kafka 定义了生产者（producer）、代理（broker）、主题（topic）、分区（partition）和消费者（consumer）。它的简洁性和容错能力使其能够取代此前基于 AMQP 的消息队列等产品。

*   Pulsar

Pulsar 最初由 Yahoo 开发，是一个一体化的消息与流处理平台。与 Kafka 相比，Pulsar 吸收了其他产品的许多实用特性，支持广泛的能力。此外，Pulsar 的架构更具云原生特性，对集群扩缩容和分区迁移等场景提供了更好的支持。

Pulsar 架构分为两层：服务层（serving layer）和持久层（persistent layer）。Pulsar 原生支持分层存储（tiered storage），我们可以利用 AWS S3 等更便宜的对象存储将消息保存更长时间。

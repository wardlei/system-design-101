---
title: "不容错过的 Kafka 入门终极指南"
description: "用 8 个简单步骤学习 Kafka 的基础知识。"
image: "https://assets.bytebytego.com/diagrams/0246-kafka-101-8-steps-to-learn-the-fundamentals-of-kafka.png"
createdAt: "2024-02-02"
draft: false
categories:
  - database-and-storage
tags:
  - "Kafka"
  - "分布式系统"
---

![](https://assets.bytebytego.com/diagrams/0246-kafka-101-8-steps-to-learn-the-fundamentals-of-kafka.png)

Kafka 非常流行，但初学者一开始可能会感到不知所措。

以下 8 个简单步骤可以帮助你理解 Kafka 的基础知识。

## 什么是 Kafka？

Kafka 是一个分布式事件存储和流处理平台。它最初是 LinkedIn 的内部项目，如今为 Netflix、Uber 等公司运行着世界上规模最大的一些数据管道。

## Kafka 消息

消息是 Kafka 中数据的基本单位。它就像表中的一条记录，由 headers（消息头）、key（键）和 value（值）组成。

## Kafka 主题与分区

每条消息都会进入某个特定的 Topic（主题）。可以把主题想象成计算机上的文件夹。主题还拥有多个分区。

## Kafka 的优势

Kafka 可以处理多个生产者和消费者，同时提供基于磁盘的数据保留和高扩展性。

## Kafka 生产者

Kafka 中的生产者创建新消息，将其批量打包，并发送到 Kafka 主题。它们还负责在不同分区之间平衡消息。

## Kafka 消费者

Kafka 消费者以消费者组的形式协作，从 broker 读取消息。

## Kafka 集群

Kafka 集群由多个 broker 组成，其中每个分区都会在多个 broker 上复制，以确保高可用性和冗余。

## Kafka 的使用场景

Kafka 可用于日志分析、数据流处理、变更数据捕获和系统监控。

---
title: "Kafka 会丢消息吗？"
description: "探讨 Kafka 消息丢失的场景及预防策略。"
image: "https://assets.bytebytego.com/diagrams/0130-can-kafka-lose-messages.png"
createdAt: "2024-02-12"
draft: false
categories:
  - "database-and-storage"
tags:
  - "Kafka"
  - "消息丢失"
---

错误处理是构建可靠系统最重要的方面之一。

今天，我们来讨论一个重要的话题：Kafka 会丢消息吗？

![](https://assets.bytebytego.com/diagrams/0130-can-kafka-lose-messages.png)

许多开发者普遍相信，Kafka 从设计上就保证了消息不丢失。然而，要真正理解 Kafka 在何时、以何种方式可能丢消息，以及更重要的是如何防止这种情况，就必须深入理解其架构和配置的细节。

上图展示了一条消息在 Kafka 的生命周期中可能丢失的过程。

## 生产者（Producer）

当我们调用 producer.send() 发送消息时，消息并不会直接发送到 broker。消息发送过程中涉及两个线程和一个队列：

*   应用线程（Application thread）
*   记录累加器（Record accumulator）
*   发送线程（Sender thread，即 I/O 线程）

我们需要为生产者配置合适的 `acks` 和 `retries` 参数，以确保消息被发送到 broker。

## Broker

正常情况下，broker 集群不应丢失消息。然而，我们需要了解哪些极端情况可能导致消息丢失：

*   消息通常是异步刷盘的，以获得更高的 I/O 吞吐量，因此如果实例在刷盘发生之前宕机，消息就会丢失。

*   Kafka 集群中的副本需要正确配置，以持有数据的有效副本。数据同步的确定性非常重要。

## 消费者（Consumer）

Kafka 提供了多种提交消息的方式。自动提交可能会在记录真正被处理之前就确认其已被处理。当消费者在处理过程中宕机时，一些记录可能永远不会被处理。

一个好的做法是结合使用同步提交和异步提交：在处理循环中使用异步提交以获得更高的吞吐量，在异常处理中使用同步提交，以确保最后的偏移量总是被提交。

---
title: '轮询 vs Webhook'
description: '轮询 vs Webhook：两种数据获取方式的详细对比。'
image: 'https://assets.bytebytego.com/diagrams/0057-pooling-vs-webhook.png'
createdAt: '2024-03-03'
draft: false
categories:
  - api-web-development
tags:
  - API
  - Webhook
---

![](https://assets.bytebytego.com/diagrams/0057-pooling-vs-webhook.png)

## 轮询

轮询是指以固定的时间间隔反复检查外部服务或端点，以获取更新后的信息。

这就像不断地问：「你有什么新东西给我吗？」——即使可能根本没有任何更新。

这种方式会消耗大量资源，且效率低下。

而且，你只有在主动询问时才能获得更新，因此会错过任何实时信息。

不过，开发者可以更好地控制何时以及如何获取数据。

## Webhook

Webhook 就像内置的通知系统。

你不需要持续地询问信息。

相反，你在应用服务器中创建一个端点，并将其作为回调提供给外部服务（例如支付处理器或物流供应商）。

每当有值得关注的事情发生时，外部服务就会调用该端点并提供信息。

这使得 Webhook 非常适合处理实时更新，因为数据一旦可用就会立即推送到你的应用。

那么，什么时候该用轮询，什么时候该用 Webhook 呢？

当存在某些基础设施限制导致无法使用 Webhook 时，轮询是一个可靠的选择。此外，Webhook 存在因网络问题而错过通知的风险，因此需要适当的重试机制。

对于需要即时数据送达的应用，推荐使用 Webhook。此外，Webhook 在资源利用方面也很高效，尤其是在高吞吐量的环境中。

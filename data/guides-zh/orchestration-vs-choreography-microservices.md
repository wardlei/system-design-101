---
title: "微服务中的编排与协同"
description: "探索微服务协作中的编排与协同。"
image: "https://assets.bytebytego.com/diagrams/0113-orchestration-vs-choreography-microservices.png"
createdAt: "2024-02-21"
draft: false
categories:
  - software-architecture
tags:
  - 微服务
  - 架构
---

![](https://assets.bytebytego.com/diagrams/0113-orchestration-vs-choreography-microservices.png)

微服务之间如何协作和交互？

有两种方式：编排（orchestration）和协同（choreography）。

协同就像有一位编舞者制定所有规则，然后舞台上的舞者（微服务）按照这些规则进行互动。服务协同描述了这种消息交换以及微服务交互所依据的规则。

编排则不同。编排器充当权威中心，负责调用和组合各个服务。它描述了所有参与服务之间的交互，就像指挥家指挥交响乐中的乐手一样。编排模式还包含不同服务之间的事务管理。

## 编排的优势：

*   **可靠性**——编排内置了事务管理和错误处理，而协同则是点对点通信，容错场景要复杂得多。

*   **可扩展性**——在编排中新增一个服务时，只需要编排器修改交互规则；而在协同中，所有参与交互的服务都需要修改。

## 编排的一些局限：

*   **性能**——所有服务都通过集中式编排器通信，因此延迟比协同更高。此外，吞吐量也受限于编排器的容量。

*   **单点故障**——如果编排器宕机，服务之间就无法通信。为了缓解这一问题，编排器必须具有高可用性。

实际应用案例：Netflix Conductor 就是一个微服务编排器，你可以在编排器设计相关内容中了解更多细节。

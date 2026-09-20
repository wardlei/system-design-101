---
title: "四大 Kubernetes 服务类型"
description: "通过一张直观的示意图，探索四大 Kubernetes 服务类型。"
image: "https://assets.bytebytego.com/diagrams/0005-4-k8s-service-types.png"
createdAt: "2024-02-24"
draft: false
categories:
  - devops-cicd
tags:
  - Kubernetes
  - 网络
---

![](https://assets.bytebytego.com/diagrams/0005-4-k8s-service-types.png)

下图展示了暴露 Service 的 4 种方式。

在 Kubernetes 中，Service 是一种在集群中暴露网络应用的方法。我们使用 Service 让一组 Pod 在网络上可用，以便用户能够与之交互。

Kubernetes 服务共有 4 种类型：ClusterIP、NodePort、LoadBalancer 和 ExternalName。Service 规范中的 “type” 属性决定了服务如何暴露到网络中。

## Kubernetes 服务类型

*   **ClusterIP**

    ClusterIP 是默认且最常见的服务类型。Kubernetes 会为 ClusterIP 服务分配一个集群内部 IP 地址，使该服务只能在集群内部访问。

*   **NodePort**

    该类型通过在 ClusterIP 之上添加一个集群范围的端口，将服务暴露到集群之外。我们可以通过 NodeIP:NodePort 来访问该服务。

*   **LoadBalancer**

    该类型使用云提供商的负载均衡器将 Service 暴露到外部。

*   **ExternalName**

    该类型将 Service 映射到一个域名。这通常用于在 Kubernetes 中创建一个代表外部数据库的服务。

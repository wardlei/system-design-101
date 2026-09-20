---
title: "什么是 Kubernetes（k8s）？"
description: "了解 Kubernetes，一个用于部署的容器编排系统。"
image: "https://assets.bytebytego.com/diagrams/0245-k8s.png"
createdAt: "2024-03-14"
draft: false
categories:
  - devops-cicd
tags:
  - "Kubernetes"
  - "容器"
---

[![k8s](https://assets.bytebytego.com/diagrams/0245-k8s.png)](https://assets.bytebytego.com/diagrams/0245-k8s.png)

k8s 是一个容器编排系统，用于容器的部署和管理。它的设计深受 Google 内部系统 Borg 的影响。

一个 k8s 集群由一组被称为节点（node）的工作机器组成，这些机器运行容器化应用。每个集群至少有一个工作节点。\[1]

工作节点承载着 Pod，Pod 是应用工作负载的组成部分。控制平面（control plane）管理集群中的工作节点和 Pod。在生产环境中，控制平面通常运行在多台计算机上，集群通常运行多个节点，从而提供容错能力和高可用性。\[1]

## 控制平面组件

*   **API 服务器（API Server）**

    API 服务器与 k8s 集群中的所有组件通信。对 Pod 的所有操作都是通过与 API 服务器通信来执行的。

*   **调度器（Scheduler）**

    调度器监控 Pod 上的工作负载，并为新创建的 Pod 分配负载。

*   **控制器管理器（Controller Manager）**

    控制器管理器运行各种控制器，包括节点控制器（Node Controller）、任务控制器（Job Controller）、端点切片控制器（EndpointSlice Controller）和服务账户控制器（ServiceAccount Controller）。

*   **etcd**

    etcd 是一个键值存储，用作 Kubernetes 所有集群数据的后备存储。

## 节点

*   **Pod**

    Pod 是一组容器，是 k8s 管理的最小单元。Pod 有一个单一 IP 地址，应用于 Pod 内的每个容器。

*   **Kubelet**

    一个运行在集群每个节点上的代理。它确保容器在 Pod 中运行。\[1]

*   **Kube Proxy**

    kube-proxy 是一个网络代理，运行在集群的每个节点上。它将进入节点的流量从服务路由出去，并把工作请求转发到正确的容器。

---
title: "Kubernetes 部署策略"
description: "探索用于实现应用无缝更新的 Kubernetes 部署策略。"
image: "https://assets.bytebytego.com/diagrams/0247-kubernates-deployment-strategy.jpeg"
createdAt: "2024-03-07"
draft: false
categories:
  - devops-cicd
tags:
  - "Kubernetes"
  - "部署"
---

![Kubernetes 部署策略](https://assets.bytebytego.com/diagrams/0247-kubernates-deployment-strategy.jpeg)

每种策略都提供了一种独特的方式来管理更新。

## 重建（Recreate）

所有现有实例一次性全部终止，然后创建带有更新版本的新实例。

*   停机时间：是
*   使用场景：非关键应用或处于初始开发阶段时

## 滚动更新（Rolling Update）

应用实例逐个更新，在此过程中确保高可用性。

*   停机时间：否
*   使用场景：周期性发布

## 影子部署（Shadow）

将实时流量的一个副本重定向到新版本进行测试，而不影响生产用户。

这是最复杂的部署策略，需要建立模拟服务来与部署的新版本进行交互。

*   停机时间：否
*   使用场景：在真实环境中验证新版本的性能和行为

## 金丝雀发布（Canary）

新版本先发布给一小部分用户或服务器进行测试，然后再进行更广泛的部署。

*   停机时间：否
*   使用场景：在部分用户上验证影响

## 蓝绿部署（Blue-Green）

*   维护两个完全相同的环境：一个运行当前版本（蓝），另一个运行更新后的版本（绿）。
*   流量一开始走蓝色环境，然后切换到准备好的绿色环境以使用更新后的版本。

*   停机时间：否
*   使用场景：高风险更新

## A/B 测试

在多个版本上对不同用户同时进行测试，以比较性能或用户体验。

*   停机时间：不直接适用
*   使用场景：优化用户体验

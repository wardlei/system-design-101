---
title: "典型的微服务架构"
description: "探索包含关键组件的典型微服务架构。"
image: "https://assets.bytebytego.com/diagrams/0396-typical-microservice-architecture.png"
createdAt: "2024-03-14"
draft: false
categories:
  - software-architecture
tags:
  - 微服务
  - 架构
---

![](https://assets.bytebytego.com/diagrams/0396-typical-microservice-architecture.png)

上图展示了一个典型的微服务架构。

## 关键组件

*   **负载均衡器：** 将传入流量分发到多个后端服务。

*   **CDN（内容分发网络）：** CDN 是一组地理上分布的服务器，持有静态内容以加快交付速度。客户端会先在 CDN 中查找内容，然后再转向后端服务。

*   **API 网关：** 处理传入请求并将其路由到相应的服务。它会与身份提供方和服务发现通信。

*   **身份提供方：** 负责用户的身份认证与授权。

*   **服务注册与发现：** 微服务的注册与发现都发生在这个组件中，API 网关会在此组件中查找要通信的相关服务。

*   **管理：** 该组件负责监控各项服务。

*   **微服务：** 微服务按不同的领域设计和部署。每个领域都有自己的数据库。

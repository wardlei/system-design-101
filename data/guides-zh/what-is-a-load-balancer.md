---
title: 什么是负载均衡器？
description: 将网络流量分发到多台服务器，以优化资源利用。
image: 'https://assets.bytebytego.com/diagrams/0261-what-is-a-load-balancer.png'
createdAt: '2024-02-28'
draft: false
categories:
  - api-web-development
tags:
  - 负载均衡
  - 网络
---

![](https://assets.bytebytego.com/diagrams/0261-what-is-a-load-balancer.png)

负载均衡器是一种将网络流量或应用流量分发到多台服务器的设备或软件应用。

*   **负载均衡器做什么？**

    *   分发流量
    *   确保可用性和可靠性
    *   提升性能
    *   扩展应用

*   **负载均衡器的类型**

    *   硬件负载均衡器：这些是用于在服务器之间分发流量的物理设备。
    *   软件负载均衡器：这些是可以安装在标准硬件或虚拟机上的应用。
    *   基于云的负载均衡器：由云服务提供商提供，这些负载均衡器集成在云基础设施中。例如 AWS Elastic Load Balancer、Google Cloud Load Balancing 和 Azure Load Balancer。
    *   第 4 层负载均衡器（传输层）：工作在传输层（OSI 第 4 层），根据 IP 地址和 TCP/UDP 端口做出转发决策。
    *   第 7 层负载均衡器（应用层）：工作在应用层（OSI 第 7 层）。
    *   全局服务器负载均衡（GSLB）：将流量分发到多个地理位置，以在全球范围内提升冗余性和性能。

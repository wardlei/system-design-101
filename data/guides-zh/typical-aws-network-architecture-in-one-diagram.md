---
title: "典型的 AWS 网络架构"
description: "探索包含关键组件的典型 AWS 网络架构。"
image: "https://assets.bytebytego.com/diagrams/0123-typical-aws-network-architecture.png"
createdAt: "2024-02-15"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - AWS 网络
  - 云架构
---

![此图片无替代文字说明](https://assets.bytebytego.com/diagrams/0123-typical-aws-network-architecture.png)

Amazon Web Services（AWS）提供了一整套全面的网络服务，旨在为企业提供安全、可扩展且高可用的网络基础设施。AWS 的网络架构组件实现了互联网、远程办公人员、企业数据中心以及 AWS 生态系统内部之间的无缝连接。

## 关键组件

*   **VPC（Virtual Private Cloud，虚拟私有云）**

    AWS 网络服务的核心是 Amazon VPC，它允许用户划分出一个逻辑隔离的 AWS 云区域。在这个隔离环境中，用户可以在自己定义的虚拟网络中启动 AWS 资源。

*   **AZ（Availability Zone，可用区）**

    AWS 中的 AZ 指的是 AWS 区域内一个或多个独立的数据中心，它们拥有冗余的电源、网络和连接。

下面我们逐一了解网络连接方式：

## 网络连接

### 1. 连接互联网 —— 互联网网关（Internet Gateway，IGW）

IGW 是你的 AWS VPC 与互联网之间的门户，支持双向通信。

### 2. 远程办公人员 —— 客户端 VPN 端点

AWS 提供 Client VPN 服务，让远程办公人员能够通过互联网安全地访问 AWS 资源或本地网络。它提供了一种安全且易于管理的 VPN 方案。

### 3. 企业数据中心连接 —— 虚拟网关（Virtual Gateway，VGW）

VGW 是位于你的网络与 VPC 之间的站点到站点（Site-to-Site）VPN 连接中，Amazon 一侧的 VPN 集中器。

### 4. VPC 对等连接（VPC Peering）

VPC Peering 允许你连接两个 VPC，从而能够使用私有 IPv4 或 IPv6 地址在它们之间路由流量。

### 5. 中转网关（Transit Gateway）

AWS Transit Gateway 充当网络中转枢纽，让你能够将多个 VPC、VPN 和 AWS 账户连接在一起。

### 6. VPC 端点（网关型）

网关型 VPC Endpoint 允许你将 VPC 与受支持的 AWS 服务以及由 PrivateLink 支持的 VPC 端点服务进行私有连接，而无需互联网网关或 VPN。

### 7. VPC 端点（接口型）

接口型 VPC Endpoint（由 AWS PrivateLink 支持）能够在你的 VPC 与受支持的 AWS 服务、其他 VPC 或 AWS Marketplace 服务之间建立私有连接，而无需 IGW、VGW 或 NAT 设备。

### 8. SaaS 私有连接（PrivateLink）

AWS PrivateLink 在 VPC 与托管于 AWS 或本地的服务之间提供私有连接，非常适合安全地访问 SaaS 应用。

---
title: "设计权限系统"
description: "探索常见的权限系统设计：ACL、DAC、MAC、ABAC 和 RBAC。"
image: "https://assets.bytebytego.com/diagrams/0300-permission-systems.png"
createdAt: "2024-02-13"
draft: false
categories:
  - security
tags:
  - 访问控制
  - rbac
---

![](https://assets.bytebytego.com/diagrams/0300-permission-systems.png)

下图列出了 5 种常见的方式。

## 1. ACL（访问控制列表）

ACL 是一组规则，指定哪些用户被授予或拒绝对特定资源的访问。

*   优点——易于理解。
*   缺点——容易出错，维护成本高。

## 2. DAC（自主访问控制）

DAC 基于 ACL。它通过由对象所有者组（owner group）决定的访问策略来授予或限制对对象的访问。

*   优点——简单灵活。Linux 文件系统支持 DAC。
*   缺点——权限控制分散，对象的所有者组权力过大。

## 3. MAC（强制访问控制）

资源所有者和资源都带有分类标签（classification label），不同的标签被授予不同的权限。

*   优点——严格且直接。
*   缺点——不够灵活。

## 4. ABAC（基于属性的访问控制）

根据资源所有者、操作（Action）、资源（Resource）和环境（Environment）的属性来评估权限。

*   优点——灵活。
*   缺点——规则可能很复杂，实现难度大。它并不常用。

## 5. RBAC（基于角色的访问控制）

根据角色评估权限。

*   优点——分配角色灵活。

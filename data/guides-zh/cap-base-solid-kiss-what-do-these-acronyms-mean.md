---
title: "CAP、BASE、SOLID、KISS，这些缩写是什么意思？"
description: "理解系统设计中的常见缩写：CAP、BASE、SOLID 和 KISS。"
image: "https://assets.bytebytego.com/diagrams/0350-cap-base-solid-kiss.png"
createdAt: "2024-03-09"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "系统设计"
  - "软件工程"
---

下图解释了系统设计中的常见缩写。

![图解](https://assets.bytebytego.com/diagrams/0350-cap-base-solid-kiss.png)

*   **CAP**

    CAP 定理指出，任何分布式数据存储最多只能同时提供以下三项保证中的两项：

    1.  一致性（Consistency）——每次读取都能收到最新的写入结果，或者收到一个错误。
    2.  可用性（Availability）——每个请求都能收到响应。
    3.  分区容错性（Partition tolerance）——系统在发生网络故障时仍能继续运行。

    然而，这一定理被批评为对分布式系统而言过于狭隘，我们不应该用它来给数据库分类。网络故障在分布式系统中必然会发生，我们必须在任何分布式系统中应对它。

    你可以阅读 Martin Kleppmann 的《Please stop calling databases CP or AP》了解更多。

*   **BASE**

    关系型数据库使用的 ACID（原子性-一致性-隔离性-持久性）模型对 NoSQL 数据库来说过于严格。BASE 原则提供了更大的灵活性，选择可用性优先于一致性。它指出，系统状态最终会达到一致。

*   **SOLID**

    SOLID 原则在面向对象编程（OOP）中非常著名。它由 5 个部分组成：

    1.  SRP（单一职责原则，Single Responsibility Principle）
        每个代码单元只应承担一项职责。

    2.  OCP（开闭原则，Open Close Principle）
        代码单元应该对扩展开放，对修改关闭。

    3.  LSP（里氏替换原则，Liskov Substitution Principle）
        子类应该能够替换其基类。

    4.  ISP（接口隔离原则，Interface Segregation Principle）
        暴露多个职责明确的接口。

    5.  DIP（依赖倒置原则，Dependency Inversion Principle）
        使用抽象来解耦系统中的依赖关系。

*   **KISS**

    "Keep it simple, stupid!"（保持简单，傻瓜！）是美国海军在 1960 年最早提出的设计原则。它指出，大多数系统保持简单时运行得最好。

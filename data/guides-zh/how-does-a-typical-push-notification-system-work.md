---
title: 典型的推送通知系统是如何工作的？
description: 探索典型推送通知系统的架构。
image: 'https://assets.bytebytego.com/diagrams/0042-design-a-notification-push-system.png'
createdAt: '2024-02-24'
draft: false
categories:
  - real-world-case-studies
tags:
  - 系统设计
  - 通知
---

![](https://assets.bytebytego.com/diagrams/0042-design-a-notification-push-system.png)

上图展示了一个覆盖主要通知渠道的通知系统架构：

*   **应用内通知**
*   **邮件通知**
*   **短信和 OTP 通知**
*   **社交媒体推送**

让我们逐步来看。

*   步骤 1.1 和 1.2 —— 业务服务将通知发送到通知网关。网关可以处理两种模式：一种每次接收一条通知，另一种批量接收通知。
*   步骤 2、2.1 和 2.2 —— 通知网关将通知转发给分发服务，在那里根据设置对消息进行验证、格式化和调度。通知模板仓库允许用户预定义消息格式，渠道偏好仓库允许用户预定义首选的投递渠道。
*   步骤 3 —— 通知随后被发送到路由器，通常是消息队列。
*   步骤 4 —— 渠道服务与各种内部和外部的投递渠道通信，包括应用内通知、邮件投递、短信投递和社交媒体应用。
*   步骤 5 和 6 —— 投递指标由通知跟踪与分析服务采集，运营团队可以在那里查看分析报告并改进用户体验。

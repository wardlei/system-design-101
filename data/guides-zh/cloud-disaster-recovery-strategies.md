---
title: "云灾难恢复策略"
description: "了解云灾难恢复策略：RTO、RPO 及关键方法。"
image: "https://assets.bytebytego.com/diagrams/0050-cloud-disaster-recovery-strategies.png"
createdAt: "2024-01-29"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "云计算"
  - "灾难恢复"
---

![](https://assets.bytebytego.com/diagrams/0050-cloud-disaster-recovery-strategies.png)

一个有效的灾难恢复（DR）计划不只是预防措施，更是必需品。

任何稳健的 DR 策略的关键，都在于理解并设定两个核心指标：恢复时间目标（RTO）和恢复点目标（RPO）。

*   **恢复时间目标（Recovery Time Objective，RTO）** 指的是灾难发生后，你的应用或网络可以离线的最长可接受时间。

*   **恢复点目标（Recovery Point Objective，RPO）** 则指以时间衡量的最长可接受数据丢失量。

让我们来了解四种广泛采用的 DR 策略：

## 备份与恢复策略：

该方法通过定期备份数据和系统，以便在灾难后进行恢复。

*   **典型 RTO：** 从数小时到数天。
*   **典型 RPO：** 从数小时到上次成功备份的时间点。

## 引导灯（Pilot Light）方法：

将关键组件保持在可随时激活的模式，以便在灾难发生时快速扩容。

*   **典型 RTO：** 从几分钟到数小时。
*   **典型 RPO：** 取决于数据同步的频率。

## 温备（Warm Standby）方案：

建立一个持有当前数据的半活跃环境，以缩短恢复时间。

*   **典型 RTO：** 一般在几分钟到数小时之间。
*   **典型 RPO：** 最多为最近几分钟或几小时的数据。

## 热备站点 / 多站点配置：

确保一个与主系统并行运行的、完全可用的复制环境。

*   **典型 RTO：** 几乎即时，通常只需几分钟。
*   **典型 RPO：** 极小，通常只有几秒的数据。

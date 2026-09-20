---
title: "唯一 ID 生成器"
description: "探索可扩展后端系统中的唯一 ID 生成方案。"
image: "https://assets.bytebytego.com/diagrams/0105-id-generator.png"
createdAt: "2024-02-16"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "ID 生成"
  - "系统设计"
---

![](https://assets.bytebytego.com/diagrams/0105-id-generator.png)

ID 对后端来说非常重要。你知道如何生成全局唯一的 ID 吗？

在本文中，我们将探讨 Facebook、Twitter 和 LinkedIn 等社交媒体中所使用的 ID 的常见需求。

## 需求：

*   全局唯一

*   大致按时间排序

*   仅限数值

*   64 位

*   高可扩展性、低延迟

这些算法的实现细节可以在网上找到，因此这里不再赘述。

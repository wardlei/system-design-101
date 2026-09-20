---
title: "悲观锁 vs 乐观锁"
description: "探索用于保证数据一致性的悲观锁与乐观锁策略。"
image: "https://assets.bytebytego.com/diagrams/0301-pessimistic-vs-optimistic-locking.png"
createdAt: "2024-01-29"
draft: false
categories:
  - database-and-storage
tags:
  - "并发控制"
  - "数据库事务"
---

![](https://assets.bytebytego.com/diagrams/0301-pessimistic-vs-optimistic-locking.png)

锁对于在多用户环境中维护数据一致性和完整性至关重要。它们可以防止同时修改而导致的数据不一致。

悲观锁假定冲突一定会发生，并在做任何更改之前就锁定数据。在锁被释放之前，它会阻止其他用户访问和更新数据。

乐观锁假定冲突很少发生。它允许多个用户同时访问数据，并在提交更改时检查冲突。如果检测到冲突，则回滚该操作。

## 最佳实践

以下是一些值得考虑的最佳实践：

*   尽可能缩短持有锁的时间，以减少争用。

*   在最细粒度上应用锁，例如锁定行而不是表。

*   为因冲突而失败的事务实现重试逻辑。

*   悲观锁更有利于数据完整性，但可能会影响性能。

*   乐观锁在效率和性能方面更优。

---
title: '用 Pandas 合并数据的 5 个函数'
description: '探索 5 个用于高效数据合并与分析的 Pandas 函数。'
image: 'https://assets.bytebytego.com/diagrams/0192-five-pandas.jpg'
createdAt: '2024-03-08'
draft: false
categories:
  - ai-machine-learning
tags:
  - Pandas
  - 数据处理
---

![](https://assets.bytebytego.com/diagrams/0192-five-pandas.jpg)

不用 Microsoft Excel，我们如何快速合并数据？

以下是 5 个在生产级数据分析中非常实用的 pandas 函数。

- **Concat：** 这个函数支持对两个表进行纵向和横向合并。Concat 可以快速合并来自不同分片的数据。
- **Append：** 这个函数支持向已有的表追加数据。Append 可以用于网络爬虫场景：当新数据被抓取到时，就追加到表中。
- **Merge：** 这个函数支持基于键的横向合并。它的工作方式类似于数据库的 join。Merge 可用于合并具有相同键、来自不同领域的数据。
- **Join：** 这个函数的工作方式类似于数据库的外连接（outer join）。
- **Combine：** 这个函数可以在合并两个表的同时应用计算。下面的示例为单元格选择较小的值。Combine 在数据清洗过程中很有用。

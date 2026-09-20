---
title: "为什么 Meta、Google 和 Amazon 都停止使用闰秒"
description: "探索科技巨头为何正在抛弃闰秒。"
image: "https://assets.bytebytego.com/diagrams/0363-do-you-know-why-meta-google-and-amazon-all-stop-using-leap-seconds.jpeg"
createdAt: "2024-02-04"
draft: false
categories:
  - cloud-distributed-systems
tags:
  - "时间同步"
  - "闰秒"
---

![闰秒](https://assets.bytebytego.com/diagrams/0363-do-you-know-why-meta-google-and-amazon-all-stop-using-leap-seconds.jpeg)

每隔几年，就会出现一种特殊现象："23:59:59"之后的下一秒不是"00:00:00"，而是"23:59:60"。这就是闰秒，如果处理不当，很容易引发时间处理方面的 bug。

我们总是需要处理闰秒吗？这取决于使用哪种时间表示方式。常用的时间表示方式包括 UTC、GMT、TAI、Unix 时间戳、Epoch time、TrueTime 和 GPS 时间。

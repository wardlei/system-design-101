---
title: "大端序与小端序"
description: "探索计算机体系结构中的大端序与小端序字节序。"
image: "https://assets.bytebytego.com/diagrams/0084-big-endian-vs-little-endian.png"
createdAt: "2024-02-26"
draft: false
categories:
  - software-development
tags:
  - "计算机体系结构"
  - "数据表示"
---

![](https://assets.bytebytego.com/diagrams/0084-big-endian-vs-little-endian.png)

微处理器架构通常使用两种不同的方法在内存中存储各个字节。这种差异称为"字节序"（byte ordering）或"端序"（endianness）。

## 小端序（Little Endian）

Intel x86 处理器存储一个双字节整数时，先存最低有效字节，再存最高有效字节。这称为小端字节序。

## 大端序（Big Endian）

在大端字节序中，最高有效字节存储在最低的内存地址，最低有效字节存储在最高的内存地址。较老的 PowerPC 和 Motorola 68k 架构通常使用大端序。在网络通信和文件存储中，我们也使用大端序。

当数据在不同系统之间传输，或由端序不同的系统处理时，字节序就变得至关重要。必须正确处理字节序，才能在各种系统之间一致地解读数据。

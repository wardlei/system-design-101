---
title: "分页与分段"
description: "探索分页与分段这两种内存管理技术。"
image: "https://assets.bytebytego.com/diagrams/0269-memory-allocation-paging-vs-segmentation.png"
createdAt: "2024-03-05"
draft: false
categories:
  - computer-fundamentals
tags:
  - "内存管理"
  - "操作系统"
---

![](https://assets.bytebytego.com/diagrams/0269-memory-allocation-paging-vs-segmentation.png)

## 分页

分页是一种内存管理方案，它消除了对物理内存连续分配的需求。进程的地址空间被划分为固定大小的块，称为页（page）；而物理内存被划分为固定大小的块，称为帧（frame）。

地址转换过程分 3 步进行：

*   逻辑地址空间：逻辑地址（由 CPU 生成）被划分为页号和页内偏移。
*   页表查找：以页号作为页表的索引，以找到对应的帧号。
*   物理地址形成：将帧号与页内偏移组合，形成内存中的物理地址。

### 优点：

*   消除外部碎片。
*   简化内存分配。
*   支持高效的交换和虚拟内存。

## 分段

分段是一种内存管理技术，它根据程序的逻辑划分（例如函数、对象或数据数组）将内存划分为大小可变的段。

地址转换过程分 3 步进行：

*   逻辑地址空间：逻辑地址由段号和该段内的偏移量组成。
*   段表查找：以段号作为段表的索引，以找到该段的基地址。
*   物理地址形成：将基地址与偏移量相加，形成内存中的物理地址。

### 优点：

*   提供程序不同部分之间的逻辑分离。
*   便于段的保护和共享。
*   简化了对不断增长的数据结构的管理。

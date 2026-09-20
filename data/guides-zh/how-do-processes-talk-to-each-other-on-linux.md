---
title: "Linux 上的进程间通信"
description: "探索 Linux 系统中进程之间如何相互通信。"
image: "https://assets.bytebytego.com/diagrams/0234-inter-process-communication.png"
createdAt: "2024-02-20"
draft: false
categories:
  - software-architecture
tags:
  - "Linux"
  - "IPC"
---

![](https://assets.bytebytego.com/diagrams/0234-inter-process-communication.png)

上图展示了 5 种进程间通信（IPC）方式。

## 管道（Pipe）

管道是单向字节流，将一个进程的标准输出连接到另一个进程的标准输入。

## 消息队列（Message Queue）

消息队列允许一个或多个进程写入消息，并由一个或多个读取进程读取这些消息。

## 信号（Signal）

信号是 Unix 系统中历史最悠久的进程间通信方式之一。信号可以由键盘中断产生，也可以由错误条件产生，例如进程试图访问其虚拟内存中不存在的位置。内核可以生成一组预定义的信号，系统中其他进程也可以生成这些信号。例如，Ctrl+C 会向进程 A 发送 SIGINT 信号。

## 信号量（Semaphore）

信号量是内存中的一个位置，其值可以被多个进程测试（test）和设置（set）。根据测试和设置操作的结果，某个进程可能需要休眠，直到另一个进程改变信号量的值。

## 共享内存（Shared Memory）

共享内存允许一个或多个进程通过一段出现在它们各自虚拟地址空间中的内存进行通信。当进程不再需要共享这段虚拟内存时，它们会与之分离（detach）。

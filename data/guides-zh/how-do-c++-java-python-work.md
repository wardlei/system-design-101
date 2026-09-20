---
title: "C++、Java、Python 是如何工作的？"
description: "理解 C++、Java 和 Python 的内部工作原理。"
image: "https://assets.bytebytego.com/diagrams/0003-how-python-works.png"
createdAt: "2024-03-02"
draft: false
categories:
  - software-development
tags:
  - "编程语言"
  - "编译器"
---

![](https://assets.bytebytego.com/diagrams/0003-how-python-works.png)

上图展示了编译和执行的工作方式。

编译型语言由编译器编译成机器码，机器码随后可以被 CPU 直接执行。例如：C、C++、Go。

像 Java 这样的字节码语言，先将源代码编译成字节码，然后由 JVM 执行程序。有时 JIT（Just-In-Time，即时编译器）会将源代码编译成机器码，以加快执行速度。例如：Java、C#。

解释型语言不进行编译，而是在运行时由解释器逐行解释执行。例如：Python、Javascript、Ruby。

一般来说，编译型语言的运行速度比解释型语言更快。

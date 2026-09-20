---
title: "Git 是如何工作的"
description: "理解 Git 的内部工作原理及其存储位置。"
image: "https://assets.bytebytego.com/diagrams/0202-git-commands.png"
createdAt: "2024-03-14"
draft: false
categories:
  - devtools-productivity
tags:
  - "git"
  - "版本控制"
---

![](https://assets.bytebytego.com/diagrams/0202-git-commands.png)

首先，关键是确定我们的代码存储在哪里。常见的假设是只有两个位置——一个在像 Github 这样的远程服务器上，另一个在我们的本地机器上。然而，这并不完全准确。Git 在我们的机器上维护着三个本地存储位置，这意味着我们的代码可以出现在四个地方：

*   工作目录：我们编辑文件的地方

*   暂存区：文件为下一次提交而保存的临时位置

*   本地仓库：包含已提交的代码

*   远程仓库：存储代码的远程服务器

大多数 Git 命令主要是在这四个位置之间移动文件。

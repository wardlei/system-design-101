---
title: "Git Merge 与 Git Rebase"
description: "理解 Git merge 与 Git rebase 命令之间的区别。"
image: "https://assets.bytebytego.com/diagrams/0203-git-merge-git-rebase.jpg"
createdAt: "2024-02-28"
draft: false
categories:
  - devtools-productivity
tags:
  - Git
  - 版本控制
---

![](https://assets.bytebytego.com/diagrams/0203-git-merge-git-rebase.jpg)

它们有什么区别？

当我们将一个 Git 分支的变更𝐦𝐞𝐫𝐠𝐞（合并）到另一个分支时，可以使用 'git merge' 或 'git rebase'。下图展示了这两个命令的工作方式。

## Git Merge

这会在 main 分支上创建一个新的提交 G'。G' 将 main 分支和 feature 分支的历史连接在一起。

Git merge 是𝐧𝐨𝐧-𝐝𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐯𝐞（非破坏性）的。main 分支和 feature 分支都不会被改变。

## Git Rebase

Git rebase 将 feature 分支的历史移动到 main 分支的头部。它会为 feature 分支上的每个提交创建新的提交 E'、F' 和 G'。

rebase 的好处是它具有𝐥𝐢𝐧𝐞𝐚𝐫 𝐜𝐨𝐦𝐦𝐢𝐭 𝐡𝐢𝐬𝐭𝐨𝐫𝐲（线性的提交历史）。

如果不遵守“git rebase 的黄金法则”，rebase 可能会很危险。

## Git Rebase 的黄金法则

永远不要在公共分支上使用它！

---
title: "Git 命令速查表"
description: "开发者必备的 Git 常用命令指南。"
image: "https://assets.bytebytego.com/diagrams/0201-git-commands-cheat-sheet.png"
createdAt: "2024-02-25"
draft: false
categories:
  - devtools-productivity
tags:
  - Git
  - 版本控制
---

![](https://assets.bytebytego.com/diagrams/0201-git-commands-cheat-sheet.png)

## 入门

*   **git init**：初始化一个新的 Git 仓库。

*   **git clone [url]**：从远程 URL 克隆一个仓库。

## 提交变更

*   **git add [file]**：将文件添加到暂存区。

*   **git commit -m "[message]"**：提交变更并附上描述性信息。

*   **git status**：显示工作目录的状态。

*   **git diff**：显示工作目录与暂存区之间的差异。

## 分支与合并

*   **git branch**：列出所有本地分支。

*   **git branch [branch-name]**：创建一个新分支。

*   **git checkout [branch-name]**：切换到指定分支。

*   **git merge [branch-name]**：将指定分支合并到当前分支。

*   **git branch -d [branch-name]**：删除指定分支。

## 远程仓库

*   **git remote add origin [url]**：添加一个远程仓库。

*   **git push origin [branch-name]**：将变更推送到远程仓库。

*   **git pull origin [branch-name]**：从远程仓库拉取变更。

*   **git fetch**：从远程仓库获取变更但不合并。

## 撤销变更

*   **git reset [file]**：将文件移出暂存区。

*   **git checkout -- [file]**：丢弃对文件的修改。

*   **git revert [commit]**：创建一个新的提交，用于撤销指定提交的变更。

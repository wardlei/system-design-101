---
title: "图解 Linux 文件权限"
description: "理解 Linux 文件权限：所有者、用户组和其他用户。"
image: "https://assets.bytebytego.com/diagrams/0259-linux-permissions-copy.png"
createdAt: "2024-03-08"
draft: false
categories:
  - devtools-productivity
tags:
  - "Linux"
  - "文件管理"
---

![](https://assets.bytebytego.com/diagrams/0259-linux-permissions-copy.png)

## 所有权（Ownership）

每个文件或目录都分配了 3 种所有者：

*   **所有者（Owner）**：所有者是创建该文件或目录的用户。

*   **用户组（Group）**：一个用户组可以包含多个用户。组内的所有用户对文件或目录拥有相同的访问权限。

*   **其他用户（Other）**：其他用户是指既不是所有者、也不属于该用户组成员的用户。

## 权限（Permission）

文件或目录只有三种权限类型。

*   **读取（Read，r）**：读取权限允许用户读取文件。

*   **写入（Write，w）**：写入权限允许用户更改文件内容。

*   **执行（Execute，x）**：执行权限允许文件被执行。

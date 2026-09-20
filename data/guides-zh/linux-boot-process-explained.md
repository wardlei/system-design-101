---
title: "Linux 启动过程详解"
description: "探索 Linux 的启动过程，从 BIOS/UEFI 到用户登录。"
image: "https://assets.bytebytego.com/diagrams/0213-linux-boot-process-explained.png"
createdAt: "2024-03-11"
draft: false
categories:
  - software-architecture
  - software-development
tags:
  - "Linux"
  - "操作系统"
---

![](https://assets.bytebytego.com/diagrams/0213-linux-boot-process-explained.png)

几乎每位软件工程师都用过 Linux，但只有少数人了解它的启动过程是如何工作的。让我们深入了解。

## 步骤 1（Step 1）

当我们打开电源时，BIOS（基本输入/输出系统，Basic Input/Output System）或 UEFI（统一可扩展固件接口，Unified Extensible Firmware Interface）固件从非易失性存储器加载，并执行 POST（开机自检，Power On Self Test）。

## 步骤 2（Step 2）

BIOS/UEFI 检测系统中连接的设备，包括 CPU、内存和存储。

## 步骤 3（Step 3）

选择一个引导设备来启动操作系统。可以是硬盘、网络服务器或 CD-ROM。

## 步骤 4（Step 4）

BIOS/UEFI 运行引导加载程序（GRUB），它提供一个菜单，用于选择操作系统或内核功能。

## 步骤 5（Step 5）

内核准备好后，我们切换到用户空间。内核启动 systemd 作为第一个用户空间进程，它管理进程和服务、探测所有剩余硬件、挂载文件系统，并运行桌面环境。

## 步骤 6（Step 6）

系统启动时，systemd 默认激活 default.target 单元。其他分析单元也会被执行。

## 步骤 7（Step 7）

系统运行一组启动脚本并配置环境。

## 步骤 8（Step 8）

系统向用户呈现登录窗口。此时系统已准备就绪。

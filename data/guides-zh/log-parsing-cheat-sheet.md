---
title: "日志解析速查表"
description: "一份实用的日志解析命令指南，助你高效分析日志。"
image: "https://assets.bytebytego.com/diagrams/0263-log-parsing.png"
createdAt: "2024-03-12"
draft: false
categories:
  - devops-cicd
tags:
  - "日志分析"
  - "命令行"
---

![](https://assets.bytebytego.com/diagrams/0263-log-parsing.png)

下面的图列出了最常用的 6 个日志解析命令。

## 日志解析命令（Log Parsing Commands）

*   **GREP**

    GREP 搜索任何给定的输入文件，选出与一个或多个模式匹配的行。

*   **CUT**

    CUT 从每个文件的每一行中截取选定部分，并将其写入标准输出。

*   **SED**

    SED 读取指定文件，按照一系列命令指定的方式修改输入。

*   **AWK**

    AWK 扫描每个输入文件，找出与某一组模式中任意一个匹配的行。

*   **SORT**

    SORT 按行对文本和二进制文件进行排序。

*   **UNIQ**

    UNIQ 读取指定的输入文件，比较相邻的行，并将每条唯一的输入行写入输出文件。

这些命令通常组合使用，以便快速从日志文件中找到有用的信息。例如，下面的命令会在 xxService 出现异常时列出时间戳（第 2 列）。

```bash
grep “xxService” service.log | grep “Exception” | cut -d” “ -f 2
```

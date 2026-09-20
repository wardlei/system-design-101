---
title: "范式转变：开发者与测试人员比例"
description: "探索多年来开发者与测试人员比例发生的范式转变。"
image: "https://assets.bytebytego.com/diagrams/0170-dev-tester-ratio.png"
createdAt: "2024-02-21"
draft: false
categories:
  - devops-cicd
tags:
  - "软件测试"
  - "DevOps"
---

![](https://assets.bytebytego.com/diagrams/0170-dev-tester-ratio.png)

本文灵感来源于 [Carlos Arguelles](https://www.linkedin.com/in/ACoAAABj60kByWwNDRyWLdeCCmaKZYUHd4LynqQ) 的文章《The Paradigm Shifts with Different Dev:Test Ratios》。我强烈建议你阅读[原文](https://lnkd.in/ehbZzZck)。

## 1:1 比例（约 1997 年）

过去，软件被刻录到实体 CD 上交付给客户。开发流程是瀑布式的，构建需要经过认证，版本大约每三年发布一次。

如果你遇到了 bug，那个 bug 就会一直存在。直到多年后，公司才为软件增加了联网检查更新并自动安装的功能。

## 10:1 比例（约 2009 年）

大约在 2009 年，发布到生产环境的速度显著提高。补丁可以在几周内安装完成，敏捷运动以及迭代驱动开发改变了开发流程。

例如，在亚马逊，Web 服务主要由开发者开发和测试。他们还负责处理生产环境的问题，而测试资源则捉襟见肘（10:1 比例）。

## 100:1 比例（约 2020 年）

大约在 2015 年，Google 和 Microsoft 等大型科技公司取消了 SDET 或 SETI 职位，亚马逊也放缓了 SDET 的招聘。

但是，在测试方面，这对大型科技公司又将如何运作呢？

首先，软件的测试环节已转向高度可扩展、标准化的测试工具。这些工具已被开发者广泛采用，用于构建他们自己的自动化测试。

其次，测试知识通过教育和咨询得以传播。

这些因素共同促成了我们如今所见的 100:1 测试比例的平稳过渡。

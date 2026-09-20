---
title: "Google/Apple 地图如何在街景中模糊车牌和人脸"
description: "探索 Google/Apple 地图如何在街景中模糊敏感数据。"
image: "https://assets.bytebytego.com/diagrams/0347-street-view-blurring-system.png"
createdAt: "2024-03-02"
draft: false
categories:
  - how-it-works
tags:
  - "机器学习"
  - "图像处理"
---

![](https://assets.bytebytego.com/diagrams/0347-street-view-blurring-system.png)

下图展示了一个在面试场景中可行的解决方案。

整体架构分为三个阶段：

*   数据管道——准备训练数据集
*   模糊化管道——提取并分类对象，并对相关对象（例如车牌和人脸）进行模糊处理。
*   服务管道——向用户提供模糊后的街景图像。

## 数据管道

步骤 1：获取用于训练的标注数据集。对象以边界框（bounding box）的形式标记。

步骤 2-4：数据集经过预处理和增强，完成归一化和缩放。

步骤 5-6：然后使用标注数据集训练机器学习模型，该模型是一个两阶段（2-stage）网络。

## 模糊化管道

步骤 7-10：街景图像经过预处理，并检测图像中的对象边界。然后对敏感对象进行模糊处理，图像被存储到对象存储中。

## 服务管道

步骤 11：用户现在可以获取模糊后的图像。

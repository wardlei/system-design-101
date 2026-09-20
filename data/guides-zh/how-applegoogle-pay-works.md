---
title: "Apple Pay 和 Google Pay 是如何工作的？"
description: "了解 Apple Pay 和 Google Pay 实现安全交易的机制。"
image: "https://assets.bytebytego.com/diagrams/0002-apple-pay.jpg"
createdAt: "2024-03-12"
draft: false
categories:
  - payment-and-fintech
tags:
  - "支付系统"
  - "移动支付"
---

![](https://assets.bytebytego.com/diagrams/0002-apple-pay.jpg)

上图展示了两者的区别。这两种方式都非常安全，但实现方式不同。为了理解差异，我们将整个过程拆分为两个流程。

## 注册信用卡流程

## 基本支付流程

1.  两种情况的注册流程都由步骤 1~3 表示。区别在于：

*   **Apple Pay：** Apple 不存储任何卡片信息。它将卡片信息传递给银行。银行向 iPhone 返回一个称为 DAN（设备账号，device account number）的令牌。随后 iPhone 将 DAN 存储到专用的硬件芯片中。

*   **Google Pay：** 当你在 Google Pay 中注册信用卡时，卡片信息存储在 Google 服务器上。Google 向手机返回一个支付令牌（payment token）。

2.  当你在手机上点击“支付”按钮时，基本支付流程开始。两者的区别如下：

*   **Apple Pay：** 对于 iPhone，电商服务器将 DAN 传递给银行。

*   **Google Pay：** 在 Google Pay 的场景中，电商服务器将支付令牌传递给 Google 服务器。Google 服务器查找信用卡信息并将其传递给银行。

在图中，红色箭头表示信用卡信息经过了公共网络，尽管它是加密的。

参考资料：

[1] [Apple Pay 安全与隐私概览](https://support.apple.com/en-us/101554)

[2] [Google Pay for Payments](https://developers.google.com/pay/api/android/overview)

[3] [Apple Pay vs. Google Pay: How They Work](https://www.investopedia.com/articles/personal-finance/010215/apple-pay-vs-google-wallet-how-they-work.asp)

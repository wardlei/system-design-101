---
title: "二维码支付的 4 种方式"
description: "探索二维码支付的 4 种不同方式。"
image: "https://assets.bytebytego.com/diagrams/0310-qr-code.jpg"
createdAt: "2024-03-01"
draft: false
categories:
  - payment-and-fintech
tags:
  - 二维码
  - 支付
---

![](https://assets.bytebytego.com/diagrams/0310-qr-code.jpg)

扫码支付非常普遍，但你知道它一共有多少种方式吗？

无论你使用的是 PayPal、Stripe、Paytm、微信还是支付宝，一共有 4 种方式。这让你感到意外吗？为了理解这一点，我们来回答两个问题。

## 谁来出示二维码？

1.  你可以出示二维码，由商家扫码完成支付。这被称为“消费者出示模式（consumer-presented mode）”，商家所做的是从你的账户中直接扣款。

2.  显然，另一种方式是由商家出示二维码，你来扫码支付应付金额。这被称为“商家出示模式（merchant-presented mode）”，你授权从自己的账户直接付款。

## 二维码是动态的还是静态的？

1.  动态二维码意味着二维码在你出示时才生成，或者每隔几秒自动重新生成。因为它是动态生成的，所以可以包含丰富的信息，比如应付金额、交易类型等。

2.  静态二维码只生成一次，到处使用。通常它只包含账户信息。

所以一共有 2*2=4 种扫码支付方式，分别是：

*   消费者出示模式 + 静态二维码
*   消费者出示模式 + 动态二维码
*   商家出示模式 + 静态二维码
*   商家出示模式 + 动态二维码

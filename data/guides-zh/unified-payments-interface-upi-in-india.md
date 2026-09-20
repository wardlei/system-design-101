---
title: "统一支付接口（UPI）"
description: "探索印度 UPI 支付系统的架构与工作原理。"
image: "https://assets.bytebytego.com/diagrams/0400-upi-2.png"
createdAt: "2024-03-04"
draft: false
categories:
  - payment-and-fintech
tags:
  - "金融科技"
  - "UPI"
---

![](https://assets.bytebytego.com/diagrams/0400-upi-2.png)

印度用于实时交易的统一支付接口（UPI）是其他国家在支付领域值得借鉴的好案例。

## 什么是 UPI？

UPI 是由印度国家支付公司（National Payments Corporation of India）开发的即时实时支付系统。

如今，它占印度数字零售交易的 60%，且仍在持续增长。

UPI = 支付标记语言 + 互操作支付标准

让我们来看看它是如何运作的。

## 注册

*   Bob 想开立一个账户，并提供了他的手机号 +91 12345678

*   Bob 完成 OTP（一次性密码）手机验证

*   Bob 设置 VPA（虚拟支付地址）bob@axis

*   Bob 的支付应用在收单银行创建 VPA

*   收单银行返回 VPA

*   支付应用将 VPA 返回给 Bob

## 关联银行账户

*   Bob 想把自己的 SBI 银行账户与 VPA bob@axis 关联。该请求被转发给 NPCI（印度国家支付公司）。

*   NPCI 充当收单银行与发卡银行之间的交换机。它通过不同的发卡银行，从 VPA 解析出账户详情。

*   Bob 使用账户详情进行身份验证，并设置用于双重认证（2FA）的 PIN。这一过程一直传达到发卡银行。

## 直接支付

1.  Alice 输入 Bob 的 UPI ID bob@axis 以及金额 100 印度卢比（INR 100）

2.  PhonePe 进行验证，并通过 ICICI 银行将请求转发给 NPCI

3.  NPCI 请求 Axis Bank 解析 bob@axis 的详情

4.  NPCI 从 Alice 的 HDFC 银行账户中扣除 100 印度卢比

5.  NPCI 向 SBI 银行发送指令，将 100 印度卢比转入 Bob 在 SBI 银行的账户。

6.  成功后，NPCI 通过收单银行通知各支付应用。

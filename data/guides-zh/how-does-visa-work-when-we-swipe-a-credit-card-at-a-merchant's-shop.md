---
title: "刷卡时 VISA 是如何工作的"
description: "探究 VISA 支付流程，从授权到结算。"
image: "https://assets.bytebytego.com/diagrams/0403-visa-payment.jpg"
createdAt: "2024-03-13"
draft: false
categories:
  - payment-and-fintech
tags:
  - "VISA"
  - "支付处理"
---

![](https://assets.bytebytego.com/diagrams/0403-visa-payment.jpg)

VISA、Mastercard 和 American Express 作为卡组织（card network），负责资金的清算和结算。收单行（acquiring bank）与发卡行（issuing bank）可以是——而且通常是——不同的银行。如果银行之间不通过中介、逐笔结算交易，那么每家银行都必须与所有其他银行进行结算。这非常低效。

上图展示了 VISA 在信用卡支付流程中的角色。其中涉及两个流程。授权流程（Authorization flow）发生在顾客刷卡时。清算与结算流程（Capture and settlement flow）发生在商户想在一天结束时收款时。

## 授权流程

*   第 0 步：发卡行向其客户发行信用卡。

*   第 1 步：持卡人想购买商品，并在商户店铺的销售点（POS）终端上刷卡。

*   第 2 步：POS 终端将交易发送给收单行，该收单行提供了这台 POS 终端。

*   第 3 步和第 4 步：收单行将交易发送给卡组织（card network），也称为卡计划（card scheme）。卡组织将交易发送给发卡行进行审批。

*   第 4.1、4.2 和 4.3 步：如果交易被批准，发卡行会冻结这笔资金。批准或拒绝的结果会回传给收单行以及 POS 终端。

## 清算与结算流程

*   第 1 步和第 2 步：商户想在一天结束时收到钱，于是他们在 POS 终端上点击“capture”（请款）。交易会批量发送给收单行。收单行将包含交易的批量文件发送给卡组织。

*   第 3 步：卡组织对从不同收单行收集来的交易进行清算（clearing），并将清算文件发送给不同的发卡行。

*   第 4 步：发卡行确认清算文件的正确性，并将资金转给相应的收单行。

*   第 5 步：收单行随后将资金转给商户的银行。

*   第 4 步：卡组织对不同收单行的交易进行清算。清算是这样一个过程：相互抵消的交易被轧差（net），从而减少总交易笔数。

在此过程中，卡组织承担了与每家银行沟通的负担，并以此换取服务费。

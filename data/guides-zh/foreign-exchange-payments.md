---
title: "外汇支付"
description: "了解在国际买卖中外汇支付是如何运作的。"
image: "https://assets.bytebytego.com/diagrams/0194-foreign-exchange.png"
createdAt: "2024-03-10"
draft: false
categories:
  - payment-and-fintech
tags:
  - "支付"
  - "外汇"
---

![](https://assets.bytebytego.com/diagrams/0194-foreign-exchange.png)

买家用美元支付，而欧洲卖家收到欧元。这是如何实现的？

这个过程称为外汇兑换。

假设 Bob（买家）需要向 Alice（卖家）支付 100 美元，而 Alice 只能接收欧元。上图展示了这一过程。

1.  Bob 通过第三方支付服务提供商发送 100 美元。在我们的例子中是 Paypal。这笔钱从 Bob 的银行账户（Bank B）转入 Paypal 在 Bank P1 的账户。
2.  Paypal 需要将美元兑换成欧元。它借助外汇提供商（Bank E）来完成。Paypal 将 100 美元汇入它在 Bank E 的美元账户。
3.  这 100 美元被卖给 Bank E 的资金池。
4.  Bank E 的资金池用 88 欧元兑换这 100 美元。这笔钱被存入 Paypal 在 Bank E 的欧元账户。
5.  Paypal 在 Bank P2 的欧元账户收到 88 欧元。
6.  88 欧元被支付给 Alice 在 Bank A 的欧元账户。

现在让我们仔细看看外汇（forex）市场。它有 3 个层次：

*   零售市场。资金池是零售市场的一部分。为了提高效率，Paypal 通常会提前购买一定数量的外币。
*   批发市场。批发业务由投资银行、商业银行和外汇提供商组成。它通常处理从零售市场累积起来的订单。
*   顶层参与者。它们是持有来自不同国家大量资金的跨国商业银行。

当 Bank E 的资金池需要更多欧元时，它会向上到批发市场卖出美元、买入欧元。当批发市场累积了足够多的订单后，它会继续向上到达顶层参与者。步骤 3.1-3.3 和 4.1-4.3 解释了这一过程。

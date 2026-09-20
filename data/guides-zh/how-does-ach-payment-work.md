---
title: "ACH 支付是如何工作的"
description: "了解 ACH 支付在美国如何运作，包括工资直接存款。"
image: "https://assets.bytebytego.com/diagrams/0067-how-does-ach-payment-work.png"
createdAt: "2024-03-14"
draft: false
categories:
  - payment-and-fintech
tags:
  - ACH
  - 支付
---

![](https://assets.bytebytego.com/diagrams/0067-how-does-ach-payment-work.png)

你知道工资是怎么发到手的吗？在美国，科技公司通常通过自动清算所（Automatic Clearing House，**ACH**）发放工资。

ACH 处理零售交易，是美国零售支付体系的一部分。它以**批量**方式处理交易，而不是实时的。上图展示了 ACH 直接存款（direct deposit）如何配合工资发放运作。

### ACH 直接存款的工作流程

*   第 0 步：在使用 ACH 网络之前，发起交易的发起方（originator）需要在一家商业银行开立账户，因为只有银行才被允许直接发起 ACH 交易。这家银行称为 ODFI（发起存款金融机构，Originating Depository Financial Institution）。然后，交易接收方需要授权发起方进行某些类型的交易。

*   第 1 步：发起公司发起工资支付交易。这些交易被发送到像 Gusto 这样的第三方处理商。第三方处理商协助处理与 ACH 相关的服务，比如生成 ACH 文件等。

*   第 2 步：第三方处理商代表发起方生成 ACH 文件。文件被上传到 ODFI 建立的 SFTP 服务器。这必须在 ODFI 银行规定的晚上 7 点截止时间之前完成。

*   第 3 步：晚间正常营业时间结束后，ODFI 银行将 ACH 文件转发给 ACH 运营商进行清算和结算。ACH 运营商有两个：一个是美联储（FedACH），另一个是 EPN（电子支付网络，Electronic Payment Network，由一家私营公司运营）。

*   第 4 步：ACH 文件在午夜前后被处理，并提供给接收银行 RDFI（接收存款金融机构，Receiving Depository Financial Institution）。

*   第 5 步：RDFI 根据 ACH 文件中的指令对接收方的银行账户进行操作。在我们的例子中，接收方收到来自发起方的 100 美元。这一步在 RDFI 第二天早上 6 点开始营业时完成。

ACH 是一个次日结算系统。这意味着当天 7 点前发出的交易将在次日早上到账。

自 2018 年起，可以选择 Same Day ACH（当日 ACH），资金可以在同一个工作日内完成转账。

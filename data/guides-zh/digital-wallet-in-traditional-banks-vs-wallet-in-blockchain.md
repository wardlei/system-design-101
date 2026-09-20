---
title: "数字钱包：银行 vs. 区块链"
description: "探索银行数字钱包与区块链钱包之间的差异。"
image: "https://assets.bytebytego.com/diagrams/0087-blockchains.png"
createdAt: "2024-02-25"
draft: false
categories:
  - payment-and-fintech
tags:
  - "区块链"
  - "数字钱包"
---

区块链如何改变数字钱包的设计？为什么 VISA 和 PayPal 都在投资区块链？

![](https://assets.bytebytego.com/diagrams/0087-blockchains.png)

## 在银行系统中

*   存款流程：Bob 去美国银行（BoA）开户并存入 100 美元。钱包系统为 Bob 创建了一个新账户 B1234。现金进入银行金库，Bob 的钱包现在有了 100 美元。如果 Bob 想使用花旗银行（Citi）的服务，他需要重新走一遍同样的流程。

*   转账流程：Bob 打开 BoA 的 App，向 Alice 在 Citi 的账户转账 50 美元。这笔钱从 Bob 的账户 B1234 中扣除，并记入 Alice 的账户 C512。现金的实际转移并不是即时发生的，而是在 BoA 和 Citi 在当天结束时结算完所有交易之后才发生。

*   取款流程：Bob 从账户 B1234 中取出剩余的 50 美元。金额从 B1234 中扣除，Bob 拿到现金。

## 在区块链上

*   存入与取出：区块链支持加密货币，不涉及现金。Bob 需要生成一个地址作为转账接收方，并将私钥存储在像 Metamask 这样的加密钱包中。然后 Bob 就可以接收加密货币了。

*   转账：Bob 打开 Metamask，输入 Alice 的地址，向她发送 2 个 ETH。然后 Bob 用私钥对交易签名以授权这笔转账。当这笔交易在区块链上确认后，Bob 的地址上有 8 个 ETH，Alice 的地址上有 101 个 ETH。

👉 你能看出其中的区别吗？

区块链是分布式账本。它提供了一个统一的接口来处理我们对钱包执行的常见操作。我们不需要在不同的银行开设多个账户，只需要在区块链上开设一个账户，也就是一个地址。

所有转账都在区块链上以准实时的方式得到确认，使我们不必再等到日终对账。

有了区块链，我们可以把不同银行的钱包服务合并为一个全球化服务。

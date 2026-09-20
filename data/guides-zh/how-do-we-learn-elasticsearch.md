---
title: "如何学习 Elasticsearch"
description: "了解 Elasticsearch 的特性、使用场景和核心数据结构。"
image: "https://assets.bytebytego.com/diagrams/0182-elastic-search.jpeg"
createdAt: "2024-03-08"
draft: false
categories:
  - caching-performance
tags:
  - Elasticsearch
  - 搜索
---

![](https://assets.bytebytego.com/diagrams/0182-elastic-search.jpeg)

Elasticsearch 基于 Lucene 库提供搜索能力。它提供了一个分布式、支持多租户的全文搜索引擎，带有 HTTP Web 接口和无模式（schema-free）的 JSON 文档。上图展示了其概要。

## ElasticSearch 的特性：

* 实时全文搜索
* 分析引擎
* 分布式 Lucene

## ElasticSearch 使用场景：

* 电商网站上的商品搜索
* 日志分析
* 自动补全、拼写检查
* 商业智能分析
* 维基百科上的全文搜索
* StackOverflow 上的全文搜索

ElasticSearch 的核心在于数据结构和索引。理解 ES 如何使用 **LSM Tree**（Log-Structured Merge Tree，日志结构合并树）构建**词典（term dictionary）**非常重要。

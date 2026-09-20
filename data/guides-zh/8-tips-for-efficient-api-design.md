---
title: '高效 API 设计的 8 个技巧'
description: '通过这 8 个提升效率的必备技巧改进你的 API 设计。'
image: 'https://assets.bytebytego.com/diagrams/0385-top-8-tips-for-restful-api-design.png'
createdAt: '2024-02-08'
draft: false
categories:
  - api-web-development
tags:
  - API 设计
  - 最佳实践
---

![](https://assets.bytebytego.com/diagrams/0385-top-8-tips-for-restful-api-design.png)

*   **领域模型驱动**
    在设计 RESTful API 的路径结构时，可以参考领域模型。
*   **选择合适的 HTTP 方法**
    定义少数几个基本的 HTTP 方法可以简化 API 设计。例如，PATCH 常常会给团队带来困扰。
*   **正确实现幂等性**
    提前针对幂等性进行设计可以提升 API 的健壮性。GET 方法是幂等的，但 POST 需要经过恰当的设计才能做到幂等。
*   **选择合适的 HTTP 状态码**
    限定所使用的 HTTP 状态码数量，以简化应用开发。
*   **版本控制**
    提前为 API 设计版本号，可以简化升级工作。
*   **语义化路径**
    使用语义化路径能让 API 更易于理解，使用户能够在文档中找到正确的 API。
*   **批处理**
    使用 batch/bulk 作为关键字，并将其放在路径末尾。
*   **查询语言**
    设计一套查询规则可以让 API 更灵活。例如分页、排序、过滤等。

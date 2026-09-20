---
title: 构建安全 API 速查表
description: 构建安全 API 以保护你的应用的简明策略。
image: https://assets.bytebytego.com/diagrams/0064-a-cheatsheet-to-build-secure-apis.png
createdAt: '2024-02-23'
draft: false
categories:
  - api-web-development
tags:
  - API 安全
  - 安全
---

![](https://assets.bytebytego.com/diagrams/0064-a-cheatsheet-to-build-secure-apis.png)

一个不安全的 API 可能危及你的整个应用。遵循以下策略来降低风险：

## 使用 HTTPS

- 加密传输中的数据，防范中间人攻击。
- 这确保数据在传输过程中没有被篡改。

## 限流与节流
- 限流通过限制来自单个 IP 或用户的请求来防止 DoS 攻击。
- 目标是确保公平性并防止滥用。

## 输入校验
- 防御注入攻击和意外的数据格式。
- 校验请求头、输入和载荷（payload）。

## 认证与授权
- 不要使用 basic auth 进行认证。
- 改用标准的认证方式，比如 JWT
  * 使用难以猜测的随机密钥作为 JWT 密钥
  * 将 token 的过期时间设置得短一些
- 授权方面，使用 OAuth

## 使用基于角色的访问控制（RBAC）
- RBAC 简化了 API 的访问管理，降低了未授权操作的风险。
- 基于角色对用户权限进行细粒度控制。

## 监控
- 监控 API 是及早发现问题和威胁的关键。
  - 使用 Kibana、Cloudwatch、Datadog 和 Slack 等工具进行监控
  - 不要记录敏感数据，如信用卡信息、密码、凭证等。

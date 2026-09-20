---
title: "什么是 SSO（单点登录）？"
description: "了解单点登录（SSO）及其如何简化用户身份认证。"
image: "https://assets.bytebytego.com/diagrams/0342-how-does-sso-work.jpeg"
createdAt: "2024-03-12"
draft: false
categories:
  - security
tags:
  - "身份认证"
  - "SSO"
---

![](https://assets.bytebytego.com/diagrams/0342-how-does-sso-work.jpeg)

一位朋友最近经历了一段恼人的体验：他从每天使用的多个网站上被登出了。数百万网络用户都熟悉这种情况，而修复它是个繁琐的过程。它可能涉及尝试回忆多个早已遗忘的密码，或者输入童年时宠物的名字来回答安全问题。SSO 消除了这种不便，让线上生活更美好。但它究竟是如何工作的呢？

基本上，单点登录（SSO）是一种身份认证方案。它允许用户使用单个 ID 登录到不同的系统。

下图展示了 SSO 的工作原理。

## SSO 的工作原理

第 1 步：用户访问 Gmail 或任意邮件服务。Gmail 发现用户未登录，于是将其重定向到 SSO 认证服务器，而该服务器也发现用户未登录。结果，用户被重定向到 SSO 登录页面，在那里输入登录凭据。

第 2-3 步：SSO 认证服务器验证凭据，为用户创建全局会话，并生成一个令牌。

第 4-7 步：Gmail 在 SSO 认证服务器中验证该令牌。认证服务器注册 Gmail 系统，并返回"有效"。Gmail 将受保护的资源返回给用户。

第 8 步：用户从 Gmail 导航到另一个 Google 旗下的网站，例如 YouTube。

第 9-10 步：YouTube 发现用户未登录，于是请求认证。SSO 认证服务器发现用户已登录，并返回该令牌。

第 11-14 步：YouTube 在 SSO 认证服务器中验证该令牌。认证服务器注册 YouTube 系统，并返回"有效"。YouTube 将受保护的资源返回给用户。

流程就此完成，用户重新获得了对其账户的访问权限。

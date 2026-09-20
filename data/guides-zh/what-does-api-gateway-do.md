---
title: 'API 网关做什么？'
description: '探索在微服务中使用 API 网关的功能和好处。'
image: 'https://assets.bytebytego.com/diagrams/0072-what-does-api-gateway-do.png'
createdAt: '2024-03-07'
draft: false
categories:
  - api-web-development
tags:
  - API 网关
  - 微服务
---

![](https://assets.bytebytego.com/diagrams/0072-what-does-api-gateway-do.png)

上图展示了细节。

**第 1 步** - 客户端向 API 网关发送一个 HTTP 请求。

**第 2 步** - API 网关解析并校验 HTTP 请求中的属性。

**第 3 步** - API 网关执行允许列表/拒绝列表检查。

**第 4 步** - API 网关与身份提供方通信，进行身份认证与授权。

**第 5 步** - 对请求应用限流规则。如果超过限制，请求会被拒绝。

**第 6 步和第 7 步** - 现在请求已通过基础检查，API 网关通过路径匹配找到要路由到的相关服务。

**第 8 步** - API 网关将请求转换为适当的协议，并发送给后端微服务。

**第 9-12 步** - API 网关可以妥善处理错误，并在错误恢复时间较长时处理故障（熔断）。它还可以利用 ELK（Elastic-Logstash-Kibana）技术栈进行日志记录和监控。有时我们也会在 API 网关中缓存数据。

---
title: "CDN 是如何工作的？"
description: "探索内容分发网络（CDN）如何加速内容交付。"
image: "https://assets.bytebytego.com/diagrams/0230-how-cdn-works.png"
createdAt: "2024-03-03"
draft: false
categories:
  - caching-performance
tags:
  - "CDN"
  - "网络"
---

![](https://assets.bytebytego.com/diagrams/0230-how-cdn-works.png)

内容分发网络（CDN）指的是地理上分布式的服务器（也称为边缘服务器），它们能够快速地交付静态和动态内容。我们来看看它是如何工作的。

假设住在纽约的 Bob 想要访问一个部署在伦敦的电子商务网站。如果请求发往位于伦敦的服务器，响应会相当慢。因此，我们在 Bob 居住地附近部署 CDN 服务器，内容就会从附近的 CDN 服务器加载。

上图说明了这一过程：

## CDN 是如何工作的

*   Bob 在浏览器中输入 [www.myshop.com](http://www.myshop.com/)。浏览器在本地 DNS 缓存中查找该域名。

*   如果本地 DNS 缓存中不存在该域名，浏览器就会去 DNS 解析器解析该名称。DNS 解析器通常位于互联网服务提供商（ISP）中。

*   DNS 解析器递归地解析该域名（详情请参阅我之前的文章）。最后，它请求权威名称服务器来解析该域名。

*   如果我们不使用 CDN，权威名称服务器会返回 [www.myshop.com](http://www.myshop.com/) 的 IP 地址。但使用 CDN 时，权威名称服务器会有一个别名指向 [www.myshop.cdn.com](http://www.myshop.cdn.com/)（CDN 服务器的域名）。

*   DNS 解析器请求权威名称服务器解析 [www.myshop.cdn.com](http://www.myshop.cdn.com/)。

*   权威名称服务器返回 CDN 负载均衡器的域名 [www.myshop.lb.com](http://www.myshop.lb.com/)。

*   DNS 解析器请求 CDN 负载均衡器解析 [www.myshop.lb.com](http://www.myshop.lb.com/)。负载均衡器根据用户的 IP 地址、用户所在的 ISP、请求的内容以及服务器负载，选择一个最优的 CDN 边缘服务器。

*   CDN 负载均衡器返回 [www.myshop.lb.com](http://www.myshop.lb.com/) 所对应的 CDN 边缘服务器的 IP 地址。

*   现在我们终于拿到了要访问的实际 IP 地址。DNS 解析器将 IP 地址返回给浏览器。

*   浏览器访问 CDN 边缘服务器来加载内容。CDN 服务器上缓存着两种类型的内容：静态内容和动态内容。前者包括静态页面、图片、视频；后者包括边缘计算的结果。

*   如果边缘 CDN 服务器的缓存中没有该内容，它会向上到区域 CDN 服务器。如果仍然找不到内容，它会继续向上到中心 CDN 服务器，甚至到达源站——伦敦的 Web 服务器。这就是所谓的 CDN 分发网络，其中服务器按地理分布部署。

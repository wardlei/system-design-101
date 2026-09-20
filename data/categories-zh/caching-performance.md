---
title: '缓存与性能'
description: '通过这些可视化图解，学习如何通过缓存数据来提升系统性能。'
image: 'https://github.com/ByteByteGoHq/system-design-101/raw/main/images/oAuth2.jpg'
icon: '/icons/order.png'
sort: 150
---

缓存是一种技术：为某个资源保存一份副本，并在下次请求时直接返回这份副本。当 Web 服务器渲染一个网页时，它会把渲染结果存入缓存。下次再请求这个网页时，服务器直接返回缓存的页面，无需重新渲染。这样既减少了生成网页所需的时间，也降低了服务器的负载。

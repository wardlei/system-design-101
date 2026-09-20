---
title: "向 Amazon S3 上传文件时会发生什么？"
description: "详细探讨向 Amazon S3 上传文件的过程。"
image: "https://assets.bytebytego.com/diagrams/0169-design-s3.jpg"
createdAt: "2024-03-13"
draft: false
categories:
  - how-it-works
tags:
  - "Amazon S3"
  - "云存储"
---

![](https://assets.bytebytego.com/diagrams/0169-design-s3.jpg)

在深入设计之前，我们先定义一些术语。

**存储桶（Bucket）**。用于存放对象的逻辑容器。存储桶名称在全球范围内唯一。要向 S3 上传数据，我们必须先创建一个存储桶。

**对象（Object）**。对象是我们存储在存储桶中的单个数据。它包含对象数据（也称为有效载荷 payload）和元数据。对象数据可以是我们想存储的任意字节序列。元数据是一组描述对象的键值对。

一个 S3 对象由以下部分组成（图 1）：

*   元数据。它是可变的，包含 ID、存储桶名称、对象名称等属性。
*   对象数据。它是不可变的，包含实际的数据。

在 S3 中，对象存放在存储桶里。路径形如：/bucket-to-share/script.txt。存储桶只有元数据，对象则既有元数据又有实际数据。

下图（图 2）说明了文件上传的工作原理。在这个示例中，我们先创建一个名为 “bucket-to-share” 的存储桶，然后向该存储桶上传一个名为 “script.txt” 的文件。

1.  客户端发送 HTTP PUT 请求以创建名为 “bucket-to-share” 的存储桶。该请求被转发到 API 服务。

2.  API 服务调用身份与访问管理（IAM）以确保用户已获授权并具有 WRITE 权限。

3.  API 服务调用元数据存储，在元数据数据库中创建一条包含存储桶信息的记录。记录创建完成后，向客户端返回成功消息。

4.  存储桶创建完成后，客户端发送 HTTP PUT 请求以创建名为 “script.txt” 的对象。

5.  API 服务验证用户的身份，并确保用户对该存储桶具有 WRITE 权限。

6.  验证通过后，API 服务将 HTTP PUT 有效载荷中的对象数据发送到数据存储。数据存储将该有效载荷持久化为对象，并返回对象的 UUID。

7.  API 服务调用元数据存储，在元数据数据库中创建一条新记录。其中包含重要的元数据，例如 object\_id（UUID）、bucket\_id（对象属于哪个存储桶）、object\_name 等。

---
title: "直播详解"
description: "了解 YouTube 和 Twitch 等平台上的直播是如何工作的。"
image: "https://assets.bytebytego.com/diagrams/0260-live-streaming-updated.png"
createdAt: "2024-03-05"
draft: false
categories:
  - how-it-works
tags:
  - "直播"
  - "视频流"
---

![](https://assets.bytebytego.com/diagrams/0260-live-streaming-updated.png)

YouTube、TikTok 直播或 Twitch 上的视频直播是如何工作的？这项技术被称为直播（live streaming）。

直播与普通流媒体不同，因为视频内容是通过互联网实时发送的，通常只有几秒钟的延迟。

下面的图解释了在幕后发生了什么，使得这一切成为可能。

## 直播的步骤（Live Streaming Steps）

**步骤 1（Step 1）**：原始视频数据由麦克风和摄像头采集，数据被发送到服务器端。

**步骤 2（Step 2）**：视频数据被压缩和编码。例如，压缩算法将背景与其他视频元素分离。压缩后，视频被编码为 H.264 等标准。经过这一步，视频数据的大小会小很多。

**步骤 3（Step 3）**：编码后的数据被分割成更小的片段，通常只有几秒钟长，因此下载或流式传输所需的时间大大缩短。

**步骤 4（Step 4）**：分段后的数据被发送到流媒体服务器。流媒体服务器需要支持不同的设备和网络状况。这被称为“自适应比特率流（Adaptive Bitrate Streaming）”。这意味着在第 2 步和第 3 步中，我们需要以不同的比特率生成多个文件。

**步骤 5（Step 5）**：直播数据被推送到由 CDN（内容分发网络，Content Delivery Network）支持的边缘服务器。数百万观众可以从附近的边缘服务器观看视频。CDN 显著降低了数据传输延迟。

**步骤 6（Step 6）**：观众的设备对视频数据进行解码和解压缩，并在视频播放器中播放视频。

**步骤 7 和 8（Steps 7 and 8）**：如果视频需要存储以供回放，编码后的数据会被发送到存储服务器，观众之后可以向其请求回放。

## 直播的标准协议（Standard Protocols for Live Streaming）

直播的标准协议包括：

*   **RTMP（实时消息传输协议，Real-Time Messaging Protocol）**：它最初由 Macromedia 开发，用于在 Flash 播放器和服务器之间传输数据。现在它被用于在互联网上流式传输视频数据。请注意，像 Skype 这样的视频会议应用使用 RTC（实时通信，Real-Time Communication）协议，以获得更低的延迟。
*   **HLS（HTTP 实时流，HTTP Live Streaming）**：它需要 H.264 或 H.265 编码。Apple 设备只接受 HLS 格式。
*   **DASH（基于 HTTP 的动态自适应流，Dynamic Adaptive Streaming over HTTP）**：DASH 不支持 Apple 设备。

HLS 和 DASH 都支持自适应比特率流。

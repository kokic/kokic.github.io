
---
title: 文件互传
author: [kokic](/kokic.md)
!date: May 18, 2022
---

因为各种读者可以想象的原因, 基于网络的面对面文件互传其实是一件经常会遇到的事. 笔者先后尝试过依赖于特定品牌的互传功能, 但时不时会遇到因未知原因导致的传输无法开始的问题. 索性另求他法. 

我们假设有设备 $A$, $B$, 且 $A$ 将要发送文件 $F$ 给 $B$, 另可设文件 $F$ 充分大 (如 $\ge 1$ GB). 方案如下. 

$B$ 联网且开热点, $A$ 连接热点. 随后 $A$ 通过 [Termux](https://termux.dev) + [miniserve](https://github.com/svenstaro/miniserve) 或其他等效软件在文件 $F$ 所在目录开启本地 [HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP) 服务器, 记下 IP. $B$ 使用浏览器访问 IP, 下载文件即可, 此时下载速率依赖于 $B$ 连接到的网络. 

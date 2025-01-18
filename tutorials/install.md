
---
title: 如何安装 Kodama
author: kokic
date: 2024-12-31
---

你可以根据目标设备的架构直接从 [Github Release](https://github.com/kokic/kodama/releases) 页面下载二进制文件. 
在 Termux 等 Android 环境中使用请选择 `aarch64-unknown-linux-musl` 架构. 

- 确保 Kodama 位于可执行目录. 
- 确保 Kodama 有可执行权限. 
- 如果你乐意, 将 Kodama 添加到环境变量. 
- Kodama 不内置 [Typst](https://github.com/typst/typst), 因此如果你的内容涉及 Typst 文本, 你需要保证环境变量中有可用的 Typst 程序. 

当 [Github Release](https://github.com/kokic/kodama/releases) 页面缺少适合你设备的文件时, 你可以从 [源代码](https://github.com/kokic/kodama) 开始自己构建, 这也很容易. 

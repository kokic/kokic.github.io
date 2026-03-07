
---
title: Wolfram 引擎与 WLJS
date: July 29, 2024
author: [kokic](/trees/kokic.md)
---

Wolfram 把 Mathematica 的内核 [Wolfram Engine](https://www.wolfram.com/engine) 单独拆出来并作为免费软件 [^wolfram-engine-size] 提供已不是什么新鲜事. 如不考虑实际的交互体验, 至少对于开发者而言, 为最新版 Mathematica 付费这件事基本就意味着只购买了个带官方服务支持的 [Wolfram Notebook](https://www.wolfram.com/notebooks). 

Wolfram 引擎能直接使用 Homebrew 或 winget 等包管理器安装, 命令行功能由引擎自带的 [Wolfram Script](https://www.wolfram.com/wolframscript) 提供. 虽然能用, 但可想而知体验不会太好. 最早的一个方案是用 [Visual Studio Code](https://code.visualstudio.com) 和相关 Notebook 插件连接到 Wolfram 引擎, 这样一来比起纯命令行能好上不少, 但是对于习惯了 Mathematica 官方笔记本的用户来说还差点意思. 

要是用户不在乎多装一个浏览器以此换来更好的 Notebook 体验, 那么开源的 WLJS 会是一个可供考虑的选择. Augsburg 大学的物理学家 Kirill Vasin 在 2023 年 11 月 16 日发布了 [WLJS](https://github.com/JerryI/wolfram-js-frontend) 的第一个长期版本 [^immortal-edition]. WLJS 这几个字母是 Wolfram JS Frontend 的缩写, 从技术上说, 它是一个 [Electron](https://www.electronjs.org) APP, 如果用户的目的是对于 Mathematica 功能有高度依赖的科研用途, 那么多装一个浏览器的代价自然算不了什么. 另外 WLJS 的引导部分做的很不错, 也有不少很有意思但是 Wolfram Notebook 不具备的功能. 

[^wolfram-engine-size]: Windows 上的 Wolfram Engine 安装完成之后能占用大约 6.5GB 的磁盘空间. 比起 [Sagemath](https://www.sagemath.org) 还是大了不少. 

[^immortal-edition]: [The immortal edition](https://github.com/JerryI/wolfram-js-frontend/releases/tag/1.0.1). 

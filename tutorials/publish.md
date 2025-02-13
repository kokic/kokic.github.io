
---
title: 本地预览
author: kokic
!date: December 31, 2024
en-US: [en-US](/tutorials/publish-en-US.md)
---

如果你希望在本地查看生成页面 `publish/` 的效果, 通常你需要一个本地 http 服务器. 你可以使用任何你熟悉的工具完成这件事. 此处推荐 [miniserve](https://github.com/svenstaro/miniserve), 安装后在 Kodama 项目的根路径执行如下指令即可. 

```sh
miniserve ./publish --index index.html --pretty-urls
```


---
title: Kodama 编译指令
author: kokic
!date: January 4, 2025
en-US: [en-US](/tutorials/compile-en-US.md)
---

指令 `kodama compile` 或缩写为 `kodama c` 将根据输入的 Markdown 工作区路径构建出 HTML 文件. 
默认位于工作区路径的 [`publish`](/tutorials/compile-help.md) 文件夹下.  
尽管有 `--root` 参数, 但仍然建议所有用户在 `index.md` 文件所在的目录下执行 `kodama c`. 

[.](/tutorials/compile-help.md#:embed)

举例来说, 如果最终部署到的 URL 为 <https://www.example.com/blog>, 这并非该域名的根目录, 
为了保证生成链接的正确性, 用户应该指定 `--base` 这一编译参数, 即

```sh
kodama c -b=https://www.example.com/blog
```

注意. 当然, 如果用户只是在本地使用, 就不必考虑这个问题了. 

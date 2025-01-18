
---
title: Kodama 编译指令
author: kokic
date: 2025-1-4
---

指令 `kodama compile` 或缩写为 `kodama c` 将输入的 Markdown 文件构建成 HTML 文件. 
尽管有 `--root` 参数, 但仍然建议所有用户在 `index.md` 文件所在的目录下执行 `kodama c`. 

[.](/tutorials/compile-help.md#:embed)

举例来说, 如果最终部署到的 URL 为 <https://www.example.com/blog>, 并非该域名的根目录, 为了保证生成链接的正确性, 用户应该指定 `--base` 这一编译参数, 即

```sh
kodama c index.md -b=https://www.example.com/blog
```

注意. 当然, 如果用户只是在本地使用, 就不必考虑这个问题了. 

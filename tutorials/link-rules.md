
---
title: 链接规则
author: kokic
date: 2025-1-15
---

虽然 Kodama 所处理的 Markdown 文件从语法上说是完全符合 [CommonMark](https://commonmark.org) 标准的, 但是由于它实现了 CommonMark 之外的许多功能, 为了从语法上区分开来, 用户在使用这些额外的功能时, 请务必遵循下面的规则. 

首先需要强调的是, 无论是嵌入文件 [^embed-link] 还是内部链接 [^local-link] 的路径, 都应该是以 `/` 开头的相对于当前工作区的绝对路径. 

[](/tutorials/embed-syntax.md#:embed)

很多时候, 对于相当简单的 Typst 文本, 用户会希望有一种方式在展示上对应于 $\KaTeX$ 语境下的行内公式, 这就是内联 Typst. 

[](/tutorials/inline-syntax.md#:embed)

[^embed-link]: 被嵌入的文件是独立的 Markdown 或者 Typst, 嵌入这一操作会将被链接文件的内容合并到链接的位置, 对于 Markdown, 它将成为一个子 `section`. 

[^local-link]: 内部链接用于链接当前 Kodama 项目的其他 Markdown 文件, 与外部链接相比, 内部链接使用一种特殊的样式. 

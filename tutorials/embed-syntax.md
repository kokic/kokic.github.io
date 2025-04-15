
---
title: 嵌入语法
author: [kokic](/kokic.md)
!date: January 15, 2025
en-US: [en-US](/tutorials/embed-syntax-en-US.md)
---

嵌入语法和标准链接语法 `[text](url)` 的区别在于, 嵌入的 `url` 带有特殊的后缀, 并且只能是以下几种: 

- `.md#:embed`, 嵌入 Markdown. 
- `.typ#:block`, 嵌入 Typst 编译后的 SVG, 并居中展示为块级元素. 
- `.typ#:span`, 嵌入 Typst 编译后的 SVG, 并展示为行间元素 (不常用). 
- `.typ#:shared`, 在当前文件的上下文中导入该 Typst 文件, 此时 `text` 用于提供被导入的定义范围, 如所有定义 `*`. 配合内联 Typst 语法使用. 

这些特殊后缀采用这种语法的一个原因是, 许多 Markdown 编辑器 [^markdown-editor] 能够正确识别从而享受文件之间的跳转功能. 

大部分时候, 嵌入语法的 `text` 都是空着的, 不过由于只有 Markdown 的嵌入才会产生子 `section`, 此时 `text` 能用于设置 `section` 默认是否展开以及在目录中的状态. 这些设置由一系列特定字符构成, 它们对应的功能彼此独立, 因此书写的先后顺序可以任意.

- `+`, 表示当前 `section` 使用计数器. 
- `-`, 默认折叠当前 `section`. 相应的, 如果这个 `section` 也有一系列子 `section`, 这些子 `section` 将不会出现在当前页面的目录里. 
- `.`, 在当前页面的目录里隐藏这个 `section`. 

[^markdown-editor]: 如 [Visual Studio Code](https://code.visualstudio.com). 

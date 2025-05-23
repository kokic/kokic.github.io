
---
title: 内联语法
author: [kokic](/kokic.md)
!date: January 15, 2025
en-US: [en-US](/tutorials/inline-syntax-en-US.md)
---

内联 Typst 也许是 Kodama 真正的优势所在, 因为设计者做了许多努力使其表现的就和 $\KaTeX$ 行内公式一样或者至少非常接近, 从而不会让 Typst 的那部分行内公式在与 $\KaTeX$ 混合编排时显得廉价. 

内联 Typst 也采用 [链接类语法](/tutorials/embed-syntax.md), 但是此时不会有任何文件被链接. `url` 部分用于指定内联模式和 `margin` 参数, 绝大部分情况下, 用户都不需要自己手动设置 `margin` 参数便可以取得较好的呈现效果. 内联模式是一个为了方便 Markdown 编辑器本身的预览功能而设计的参数, 当用户填入 `math` 时, `text` 部分的内容就会被自动加上 `${}$` 再交给 Typst 编译. 以下是一些例子: 

- `[$x^2$](inline)`, `x^2` 同时是合法的 $\KaTeX$ 公式和 Typst 公式, 此时 Markdown 编辑器本身的预览功能可将它正确呈现为 $x^2$. 虽然这个例子简单到根本没有任何理由使用 Typst.  
- `#` 在 Typst 当中是一个高频率使用的字符, 此时如果依然手写 `${}$` 则会导致编辑器内 Markdown 预览的体验不佳, 这就是内联模式参数 `math` 的意义. 现在你可以将第一个例子写为 `[x^2](inline-math)`. 
- 各个参数的值之间使用 `-` 分隔. `math` 和 `margin` 的位置是固定的, 换言之, 如果这两个参数同时出现, 你只能将 `margin` 写在 `math` 之后. `margin` 由形如 `{x}-{y}` 的文本构成, `x` 和 `y` 是任何有效的 Typst 长度值, 如 `0pt-2pt`. 当 `y` 缺失时, `y` 会采用 `x` 的值. 

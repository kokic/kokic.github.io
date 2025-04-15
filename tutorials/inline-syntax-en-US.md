
---
title: Inline Syntax
author: [kokic](/kokic.md)
!date: January 15, 2025
zh-CN: [zh-CN](/tutorials/inline-syntax.md)
---

Inline Typst might be the true strength of Kodama, as the designers have made great efforts to make it behave just like or at least very close to $\KaTeX$ inline formulas, so that the inline formulas written in Typst do not appear inferior when mixed with $\KaTeX$.

Inline Typst also uses [link-like syntax](/tutorials/embed-syntax.md), but in this case, no file is actually linked. The `url` part is used to specify the inline mode and the `margin` parameter. In most cases, users do not need to manually set the `margin` parameter to achieve a good presentation. The inline mode is a parameter designed for the convenience of the Markdown editor's own preview feature. When the user enters `math`, the content of the `text` part is automatically enclosed with `${}$` before being compiled by Typst. Here are some examples:

- `[$x^2$](inline)`, `x^2` is a valid formula for both $\KaTeX$ and Typst. In this case, the Markdown editor's own preview feature can correctly display it as $x^2$. However, this example is so simple that there is no real reason to use Typst.

- `#` is a frequently used character in Typst. If you still write `${}$` manually, it would lead to a poor preview experience in the editor. This is where the inline mode parameter `math` comes into play. Now you can write the first example as `[x^2](inline-math)`.

- Values of parameters are separated by `-`. The positions of `math` and `margin` are fixed, which means that if both parameters are present, you can only write `margin` after `math`. The `margin` is composed of text in the form of `{x}-{y}`, where `x` and `y` are any valid Typst length values, such as `0pt-2pt`. When `y` is missing, `y` will adopt the value of `x`.

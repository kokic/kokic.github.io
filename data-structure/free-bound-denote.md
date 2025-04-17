
---
title: 自由--绑定记号
author: [kokic](/kokic.md)
taxon: definition
!date: April 17, 2025
---

$\gdef\spaces#1{~ #1 ~}$

此记号主要是为了简洁且清晰地表达一个自由变量以及与之相关的绑定, 特别是针对 $f(x)$ 这样的记号在同一个上下文中的混用. 如 $f: X \to Y, x \mapsto y(x)$ 在 ${\color{f97583}x}=x_\bullet$ 处的近似

$$
f({\color{c998f4}x}) \spaces\approx f(x_\bullet) + f'(x_\bullet)({\color{c998f4}x}-x_\bullet)
$$

这里的 ${\color{f97583}x}=x_\bullet$ 准确来说并不是在指替换 $f(x)$ 中所有的 $x$ 到 $x_\bullet$, 而是相对于 $f$ 而言取了一个定值 $x_\bullet \in X$, 并让 ${\color{f97583}x}: \square \to X$ 满足 ${\color{f97583}x}(-) = x_\bullet$. 而 $f({\color{c998f4}x})$ 又重新引入了一个自由变量 ${\color{c998f4}x}$ 用来区分被固定的 ${\color{f97583}x}$. 

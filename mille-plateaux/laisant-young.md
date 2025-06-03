
---
title: Laisant--Young 不等式
author: [kokic](/kokic.md)
taxon: exegesis
!date: May 19, 2019
---

$\gdef\d{\operatorname{d}}$
$\gdef\spaces#1{~ #1 ~}$

$\textbf{Remark.}$ 记 $F: t \mapsto (\int f(x) \d x)|_t$ 即 $f$ 的不定积分, 对 [Young 不等式](/mille-plateaux/young-inequality.md) 右侧使用 [Charles-Ange Laisant](https://en.wikipedia.org/wiki/Charles-Ange_Laisant) 的一个 [简单结论](https://en.wikipedia.org/wiki/Integral_of_inverse_functions): 

$$
\int f^{-1}(y) \d y \spaces= y f^{-1}(y) - (F \circ f^{-1})(y) + C
$$

我们得到 $\int_0^b f^{-1}(y) \d y \spaces= b f^{-1}(b) - \int_0^{f^{-1}(b)}f(x) \d x$, 也就是

$$
ab \spaces\le \int_0^a f(x) \d x + b f^{-1}(b) - \int_0^{f^{-1}(b)}f(x) \d x
$$

这是 [Young 不等式](/mille-plateaux/young-inequality.md) 的一个等价形式. 但是, $f(0) = 0$ 这个条件对于许多 $f$ 并不适用, 为此我们需要考虑不依赖于此的 Young 不等式.

$\textbf{Theorem.}$ 可以一般地观察在 $[a_0, a]$ 上可逆严格增函数 $f$ 的图像, 我们发现 $f$ 将区域 
$$ ([0, a] \times [0, b])  \spaces\smallsetminus ([0, a_0] \times [0, b_0]) $$ 

分割为两部分. 此时有

$$
ab - a_0b_0 \spaces\le 
\bigg| \int_{a_0}^a f(x) \d x \bigg| + \bigg| \int_{b_0}^b f^{-1}(y) \d y \bigg|
$$

$\textbf{Example.}$ 取 $f(x) = e^x$, $f: [0, a] \to [1, e^a]$, $f^{-1}: [1, b] \to [0, \log b]$. 我们有

$$
ab \spaces\le \int_0^a e^x \d x + \int_1^b \log y \d y \spaces= e^a + b\log b - b
$$

读者可以通过取 $b \in \{1, e\}$ 得到 $e^x - 1 \ge x$ 和 $e^x \ge ex$ 来意识到这个结果的作用. 不过尽管 $f$ 并不经过原点, 但是通过取 $f(x) = e^x-1$, 经典的 Young 不等式也能给出这个结果, 这一点可行是因为我们恰好选择了 $a_0 = 0$. 而对于一般的 $(a_0,b_0)$, 通过平移配合经典的 Young 不等式并不能得到上面 Laisant--Young 陈述的结果. 

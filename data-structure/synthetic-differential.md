
---
title: 综合微分法
author: kokic
taxon: exegesis
!date: May 9, 2024
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$
$\gdef\str#1{{\footnotesize #1}}$

$\gdef\R{\mathbf{R}}$
$\gdef\C{\mathbf{C}}$

我们首先观察朴素的数值微分的计算过程. 待微分函数为 $(x+3)^2$, 此处不妨取 $x=-2$, $h=10^{-5}$, 这一位置的导数 $A$ 近似为 

$$ 
A \quads\approx \frac{f(x+h)-f(x)}h \eqq \frac{(1 + 10^{-5})^2 - 1^2}{10^{-5}} \eqq 2.00001 
$$ 

并且如果试图得到与预期的 $A=2$ 更接近的结果, 则须将无穷小近似 $h$ 选取为更靠近 $0$ 的数值, 这对于浮点精度有限的计算机来说极为不利. 

而朴素的符号微分视表达式为树结构, 通过遍历树并对符合模式的节点应用求导规则. 即 

$$
\begin{aligned}
(x+3)^2 
& \spaces\to (x+3)'(x+3) + (x+3)(x+3)' \\
& \spaces\to 1 \cdot (x+3) + (x+3) \cdot 1 \\
& \spaces\to 2x+6 
\end{aligned}
$$ 

此时再应用 $x=-2$ 得到 $A=2$. 这个做法在结果上可行, 但处理复杂的表达式时, 中间过程本身会产生大量新的结点, 使递归遍历的实际时间达到指数级 $\mathcal{O}(2^N)$. 

有没有方法可以既避免递归又减少中间结点呢? 我们先看一个涉及复数域的观察. 

[复步微分法](/data-structure/complex-step.md#:embed)

选取同样的 $h=10^{-5}$, 以下计算表明 Cleve
方法相比前文基于有限差分的数值微分方法能够很好的避免精度损失. 

$$
\frac{\Im(1 + 10^{-5}i)^{2}}{10^{-5}} \eqq \frac{\Im(\square + 2 \times 10^{- 5}i)}{10^{- 5}} \eqq 2
$$

实际上此处 $h$ 的选取, 只要其非零, 从而带有 $i$ 的项不消失, 就不会影响到最终的结果. 换言之, 这个方法从根本上来说, 是无关于 $h \in \R\smallsetminus\{0\}$ 和 $i$ 的, 只是在数值计算时借由复数算术和复函数值可以免去一些幂零结构的讨论. 一旦意识到这一点, 我们便可以将

$$ \frac{\partial f}{\partial x} \quads\approx \frac{\Im f(x+ih)}{h} $$

当中的近似 "$\approx$" 修正为严格等于 "$=$", 这只需要将 $\{z \in \C : z^2 = -1\}$ 替换为 $D = \{x \in R : x^2 = 0\}$, 问题就来到了如何构造这样的 $R$ 使得 $D$ 中有非零的元素, 这样的结构实际上会动摇经典逻辑中对于排中律的看法. 

[](/data-structure/dual-number.md#:embed)

这样一来, 我们所说的 "将近似修正为严格等于" 就可以精确表示为

$$ \frac{\partial f}{\partial x} \quads= f(x+\epsilon) ~ \str{中} ~ \epsilon ~ \str{项的系数} $$

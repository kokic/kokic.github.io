
---
title: [复步微分法](./complex-step.md) 对数值微分误差的修正
date: May 9, 2024
author: [kokic](/trees/kokic.md)
taxon: exegesis
---

$\gdef\C{\mathbf{C}}$
$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$

选取同样的 $h=10^{-5}$, 以下计算表明 [Moler 的方法](./complex-step.md) 相比 [此处](./numerical.md) 基于有限差分的数值微分方法能够很好的避免精度损失. 

$$
\frac{\Im(1 + 10^{-5}i)^{2}}{10^{-5}} \eqq \frac{\Im(\square + 2 \times 10^{- 5}i)}{10^{- 5}} \eqq 2
$$

实际上此处 $h$ 的选取, 只要其非零, 从而带有 $i$ 的项不消失, 就不会影响到最终的结果. 换言之, 这个方法从根本上来说, 是无关于 $h \in \R\smallsetminus\{0\}$ 和 $i$ 的, 只是在数值计算时借由复数算术和复函数值可以免去一些幂零结构的讨论. 一旦意识到这一点, 我们便可以将 [复步微分法](./complex-step.md) 的

$$ \frac{\partial f}{\partial x} \quads\approx \frac{\Im f(x+ih)}{h} $$

中的近似 "$\approx$" [修正](./matrix-represent.md) 为严格等于 "$=$", 这只需要将 $\{z \in \C : z^2 = -1\}$ 替换为 $D = \{x \in R : x^2 = 0\}$, 问题就来到了如何构造这样的 $R$ 使得 $D$ 中有非零的元素, 这样的结构实际上会 [动摇](./dual-number.md) 经典逻辑中对于排中律的看法. 

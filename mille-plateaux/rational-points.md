
---
title: 有理点
author: kokic
date: 2024-12-26
---

$\gdef\ul#1{\underline{#1}}$
$\gdef\spaces#1{~ #1 ~}$
$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$
$\gdef\R{\mathbf{R}}$
$\gdef\Q{\mathbf{Q}}$

有两个正方体, 一个边长为 $1$, 另一个边长为 $2$. 请找到另外两个边长为有理数的正方体使它们的体积总和相同. 换言之, 求下述方程的一组 (正) 有理解: 

$$ x^3 + y^3 \eqq 9 \quad \color{gray}{(= \quad 1^3+2^3)} $$

我们先画出 $x^3 + y^3 = 9$. 然后由已知的 $P=(1,2)$ 出发做切线得到 $2P$, $4P$. 

[](/mille-plateaux/8P.typ#:block)

如图, 随后注意到 $8P$ 恰好位于 $x > 0,y > 0$ 的区域, 现在写出其坐标

$$ 8P = \left(\frac{1243617733990094836481}{609623835676137297449}, \frac{487267171714352336560}{609623835676137297449}\right) $$

[+](/mille-plateaux/canterbury.md#:embed)

反复利用 [该映射](/mille-plateaux/canterbury) 即可得到前文的 $8P$. 当然, 这也给出某个经典的恒等式 

$$ x^3 + y^3 \eqq \left(\frac{x(x^3 + 2y^3)}{x^3 - y^3}\right)^3 + \left(\frac{y(y^3 + 2x^3)}{y^3 - x^3}\right)^3 $$

我们称 $\Gamma$ 为 Canterbury 曲线, 因为这个问题来自一本名为 [The Canterbury Puzzles](https://en.wikipedia.org/wiki/The_Canterbury_Puzzles) 的书, 这是其中的 “The Puzzle of the Doctor of Physic”. 

考虑一般的三次曲线 $\Gamma$. 已知一有理点时, 我们可以过此点做切线. 已知两有理点 $P, Q$ 时, 连接两点得到直线 $\ell$ 交曲线 $\Gamma$ 于另一点 $S$, 这个时候 $\ell$ 和 $\Gamma$ 的交点方程仍然是一个三次方程. 根与系数的关系给出 

$$ x(P) \spaces + x(Q) \spaces + x(S) \spaces 
\in \Q $$ 

这使得 $x(S) \in \Q$. 我们也可以将这个想法直接应用到二次曲线上. 

[+](/mille-plateaux/circular-parameterization.md#:embed)

[+](/mille-plateaux/circular-curve.md#:embed)

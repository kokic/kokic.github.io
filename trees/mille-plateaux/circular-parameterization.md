
---
title: 圆的参数化
taxon: exegesis
author: [kokic](/kokic.md)
!date: December 28, 2024
---

$\gdef\quads#1{\quad #1 \quad}$
$\gdef\Q{\mathbf{Q}}$
$\gdef\R{\mathbf{R}}$

我们对于 $\R$ 上的单位圆周曲线 $C(\R):x^2+y^2=1$ 和它关于角度 $\theta$ 的参数化 $\theta \mapsto (\cos\theta, \sin\theta)$ 是不陌生的. 通过计算这类统称为三角函数或者圆函数的映射, 很容易就能发现圆上的一些不同寻常的点 

$$ (\tfrac1{\sqrt2}, \tfrac1{\sqrt2}), \quad (\tfrac{1+\sqrt5}4, \sqrt{\tfrac58 - \tfrac{\sqrt5}8}), \quad (\tfrac{\sqrt3}2, \tfrac12) $$

但是如果我们希望找到 $C(\Q)$ 上的点, 这个参数化就没有那么有用了. 考虑 $C(\Q):x^2+y^2=r^2$, 我们从点 $P(-r, 0)$ 出发, 任选一个 $t \in \R$ 作为过 $P$ 点直线的斜率, 即 $y = t(x+r)$, 随后联立之. 

$$ (1+t^2)x^2 + 2rt^2x + r^2t^2 - r^2 = 0 $$

由于我们已经知道它的一个根 $x_1 = -r$. 且根与系数的关系给出 

$$ x_1 + x_2 = -\frac{2rt^2}{1+t^2} $$

立得 $x_2 = r \cdot \frac{1-t^2}{1+t^2}$. 从而给出一个熟知的有理参数化

$$ t \quads\mapsto r \cdot \bigg(\frac{1-t^2}{1+t^2}, \frac{2t}{1+t^2}\bigg)$$ 

这样一种寻找点的方式, 通常被称为弦切法. 

[](/mille-plateaux/chord-tangent.typ#:block)


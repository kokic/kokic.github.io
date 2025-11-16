
---
title: Canterbury 曲线的切线与自身的交点
taxon: lemma
date: December 27, 2024
author: [kokic](/trees/kokic.md)
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$

对 $\Gamma: x^3+y^3=c$ 求导得 $3x^2 + 3y^2y^\prime = 0$, 故 $y^\prime = -\frac{x^2}{y^2}$. 任取 $\Gamma$ 上一个点 $P(x_\Box, y_\Box)$. 由此得到该点处的切线 $\ell_P: y - y_\Box = -\frac{x_\Box^2}{y_\Box^2}(x - x_\Box)$. 代入 $\Gamma$, 即

$$ x^3 + (y_\Box-\frac{x_\Box^2}{y_\Box^2}(x - x_\Box))^3 \spaces= x_\Box^3 + y_\Box^3 $$

注意这里有一个 $(\frac1{y_\Box^2})^3$, 我们将其提出其即可得到

$$ y_\Box^{-6}(x-x_\Box)^2(y_\Box^6x - x_\Box^6x + x_\Box^7 + 3x_\Box^4y_\Box^3+2x_\Box y_\Box^6) \spaces= 0 $$

随后解这个关于 $x,y$ 的方程. 注意这里 $(x-x_\Box)^2$ 当然来自于我们做的 $P$ 点切线, 也就是重根 $x_\Box$. $\Gamma$ 是一条三次曲线, 与直线的交点方程最多三个解, 因此最后一项关于 $x$ 是线性的, 故只需要解一个线性方程, 立刻得到

$$ 2P: (x_\Box, y_\Box) \quad \leadsto \quad \left(\frac{x_\Box(x_\Box^3 + 2y_\Box^3)}{x_\Box^3 - y_\Box^3}, \frac{y_\Box(y_\Box^3 + 2x_\Box^3)}{y_\Box^3 - x_\Box^3}\right) $$

反复利用映射 $2P$ 即可得到 [前文](./canterbury-2B.md) 的 $8P$. 当然, 这也给出如下经典的恒等式. 最早亦可追溯到 [Viète](https://en.wikipedia.org/wiki/Fran%C3%A7ois_Vi%C3%A8te) 和 Bacht. 

$$ x^3 + y^3 \eqq \left(\frac{x(x^3 + 2y^3)}{x^3 - y^3}\right)^3 + \left(\frac{y(y^3 + 2x^3)}{y^3 - x^3}\right)^3 $$

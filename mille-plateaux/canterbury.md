
---
title: Canterbury 曲线的切线与自身的交点
taxon: lemma
author: kokic
!date: December 27, 2024
---

对 $\Gamma: x^3+y^3=c$ 求导得 $3x^2 + 3y^2y^\prime = 0$, 故 $y^\prime = -\frac{x^2}{y^2}$. 我们任取 $\Gamma$ 上一个点 $P(x_\Box, y_\Box)$. 由此得到该点处的切线 $\ell_P: y - y_\Box = -\frac{x_\Box^2}{y_\Box^2}(x - x_\Box)$. 代入 $\Gamma$, 即

$$ x^3 + (y_\Box-\frac{x_\Box^2}{y_\Box^2}(x - x_\Box))^3 = x_\Box^3 + y_\Box^3 $$

注意这里有一个 $(\frac1{y_\Box^2})^3$, 我们将其提出其即可得到

$$ y_\Box^{-6}(x-x_\Box)^2(y_\Box^6x - x_\Box^6x + x_\Box^7 + 3x_\Box^4y_\Box^3+2x_\Box y_\Box^6) = 0 $$ 

解这个关于 $x,y$ 的方程. 这里 $(x-x_\Box)^2$ 当然来自于我们做的 $P$ 点切线, 也就是重根 $x_\Box$. $\Gamma$ 是一条三次曲线, 与直线的交点方程最多三个解, 因此最后一项关于 $x$ 是线性的, 只需要解这个线性方程, 故

$$ 2P: (x_\Box, y_\Box) \quad \leadsto \quad \left(\frac{x_\Box(x_\Box^3 + 2y_\Box^3)}{x_\Box^3 - y_\Box^3}, \frac{y_\Box(y_\Box^3 + 2x_\Box^3)}{y_\Box^3 - x_\Box^3}\right) $$

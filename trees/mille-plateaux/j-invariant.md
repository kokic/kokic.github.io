
---
title: $j$-不变量
page-title: j-不变量
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\Z{\mathbf{Z}}$
$\gdef\C{\mathbf{C}}$

$$
j(\tau) \spaces= \frac{(1+240\sum_{m > 0}\sum_{n > 0} m^3q^{mn})^3}{q(1-q)^{24}(1-q^2)^{24}(1-q^3)^{24} \cdots}, \quad q \spaces= e^{2\pi i \tau}
$$

这里 $q$ 是 [惯用记号](/mille-plateaux/q-denote.md), 分子是 Eisenstein 级数 $E_4(\tau)^3$, 分母为 Ramanujan $\Delta$ 函数, 满足 $1728 \Delta = E_4^3 - E_6^2$. 区别于 Weierstrass $\Delta = g_2^3 - 27g_3^2$, 所以此处的没有出现常见定义 $j(\tau) = 1728 \cdot \frac{g_2(\tau)^3}{\Delta(\tau)}$ 中的系数 $1728$. 现在注意 $j$ 作为模函数有

$$ j(\tau) \spaces= j(\tau + 1) \spaces= j(-\frac{1}{\tau}) $$

这里的 $\tau \mapsto \tau+1$ 和 $\tau \mapsto -\frac1{\tau}$ 是 $\operatorname{SL}(2, \Z)$ 的生成元, 而模群 $\operatorname{PSL}(2, \Z)$ 定义为其对中心的商 $\operatorname{SL}(2, \Z) / \{\pm I\}$, 注意 $\operatorname{PSL}(2, \Z)$ 和 $\operatorname{SL}(2, \Z)$ 通过 $\tau \mapsto \frac{a\tau+b}{c\tau+d}$ 作用于上半平面 $\mathcal{H} = \{z \in \C : \operatorname{Im}(z) > 0\}$ 时效果相同, 因此讨论 $j$ 的性质时往往只需考察 $\operatorname{PSL}(2, \Z)$. 

$j(\tau)$ 有渐进估计 

$$
j(\tau) \spaces\sim \frac{e^{4\pi\sqrt{n}}}{\sqrt2n^{3/4}} \cdot q^n
$$ 

和 Fourier 展开 

$$
\begin{aligned}
j(\tau) \spaces= q^{-1} &+ 744+196884q + 21493760q^{2} \\ &+ 864299970q^{3} + 20245856256q^{4} + \cdots
\end{aligned}
$$

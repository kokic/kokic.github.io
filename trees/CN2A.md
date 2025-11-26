
---
title: Cauchy--Aczél 论证
date: June 25, 2021
taxon: exegesis
author: [kokic](/trees/kokic.md)
tag: [](/trees/pearls.md)
---

$\gdef\spaces#1{~ #1 ~}$

[aczél-engel]: /trees/CN2E.md

[Cauchy--Aczél 论证](./CN2A.md) 是 [](./SL2A.md) 的一个直接应用. 凭此能够同时证明 [](./CN2B.md)、[](./CN2C.md)、[](./CN2D.md) 和 [][aczél-engel]. 具体步骤如下. 

<proof>

在 [](./SL2A.md) 中取 $f(x, \ell) = \frac{x^2}{\ell}$, 于是 [](./CN2C.md) $\iff$ [][aczél-engel], 又因为 [](./CN2B.md) 等价于 [](./CN2C.md), [](./CN2D.md) 等价于 [][aczél-engel]. 于是只需证明 [](./CN2B.md) 中 $n=2$ 的情况, 现在做差

$$ (a_1^2 + a_2^2)(b_1^2 + b_2^2) - (a_1b_1 + a_2b_2)^2 \spaces= (a_1b_2 - a_2b_1)^2 $$

右侧非负, 从而证毕.

</proof>

<observation>

读者也应留意到, 尝试直接说明 [](./CN2B.md) 和 [](./CN2D.md) 等价往往不容易看出, 而沿着下面的路径就要轻松的多. 

$$
\begin{CD}
\text{Cauchy} @>s>> \text{Titu} \\
@. @VV\text{次线性归纳}V \\
\text{Aczél} @<<s^{-1}< X_1
\end{CD}
$$

此处 $X_1$ 即 [][aczél-engel], $s$ 为 $(a_k, b_k) \mapsto (\frac{x_k}{\sqrt\ell_k},\sqrt\ell_k)$. 

</observation>

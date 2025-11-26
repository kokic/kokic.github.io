
---
title: Hölder--Popoviciu 论证
date: June 25, 2021
taxon: exegesis
author: [kokic](/trees/kokic.md)
tag: [](/trees/pearls.md)
---

$\gdef\spaces#1{~ #1 ~}$

[cauchy–aczél]: /trees/CN2A.md
[次线性归纳]: /trees/SL2A.md
[hölder]: /trees/HP2A.md
[radon]: /trees/HP2B.md
[aczél–popoviciu]: /trees/HP2C.md
[aczél–popoviciu-engel]: /trees/HP2D.md
[young]: /trees/YL3A.md

类似 [][cauchy–aczél], 也可以将 [][次线性归纳] 应用于 [][hölder] 和 [][aczél–popoviciu]. 

<proof>

<block taxon="Step 1">

在 [][次线性归纳] 中取 $f(x, \ell) = \frac{x^p}{\ell^{p-1}}$, 此时 $\eta_*: \sum_i x_i^p / \ell_i^{p-1} \ge (\sum_i x_i)^p / (\sum_i \ell_i)^{p-1}$ 即 [][radon], $\varphi_*: (x - \sum_i x_i)^p / (\ell - \sum_i \ell_i)^{p-1} \ge x^p / \ell^{p-1} - \sum_i x_i^p / \ell_i^{p-1}$ 即 [][aczél–popoviciu-engel]. 沿下图

$$
\begin{CD}
\text{Hölder} @>s>> \text{Radon} \\
@. @VV\text{次线性归纳}V \\
A_2 @<<s^{-1}< X_2
\end{CD}
$$

证得这四个命题等价于证明 [命题 $\eta$][次线性归纳], 此处 $A_2$ 为 [][aczél–popoviciu], $X_2$ 为 [][aczél–popoviciu-engel], $s$ 为 $(a_k, b_k) \mapsto (\frac{x_k}{\sqrt[q]\ell_k}, \sqrt[q]\ell_k)$, [命题 $\eta$][次线性归纳] 为

$$
(a_1^p + a_2^p)^{\frac{1}{p}}(b_1^q + b_2^q)^{\frac{1}{q}} \spaces\ge a_1b_1+a_2b_2
$$

</block>

<block taxon="Step 2">

以下证明是标准的, 可见于任何一本泛函分析课本. 记 

$$ x_i = a_i /(a_1^p + a_2^p)^{\frac{1}{p}}, \quad y_i = b_i / (b_1^q + b_2^q)^{\frac{1}{q}}$$

则 $x_1^p + x_2^p = 1, y_1^q + y_2^q = 1$. 欲证明 $x_1y_1 + x_2y_2 \le 1$, 只要对 $(x_i, y_i)$ 使用 [][young], 如此

$$
x_1y_1 + x_2y_2 \spaces\le \frac{x_1^p}{p} + \frac{y_1^q}{q} + \frac{x_2^p}{p} + \frac{y_2^q}{q}
$$

由加法交换律和 $\frac{1}{p} + \frac{1}{q} = 1$, 右侧当然 $=1$. 

</block>

</proof>

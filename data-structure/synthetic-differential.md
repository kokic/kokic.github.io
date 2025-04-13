
---
title: 综合微分法
author: kokic
!date: May 9, 2024
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$
$\gdef\str#1{{\footnotesize #1}}$

$\gdef\R{\mathbf{R}}$
$\gdef\C{\mathbf{C}}$

[+](/data-structure/synthetic-differential-000A.md#:embed)
[+复步微分法](/data-structure/complex-step.md#:embed)
[+误差修正](/data-structure/synthetic-differential-000C.md#:embed)
[+](/data-structure/dual-number.md#:embed)

这样一来, 我们所说的 "将近似修正为严格等于" 就可以精确表示为

$$ \frac{\partial f}{\partial x} \quads= f(x+\varepsilon) ~ \str{中} ~ \varepsilon ~ \str{项的系数} $$

[复步微分法](/data-structure/complex-step.md) 的来源是完全解析的, 但其得到的微分方法却能代数地刻画. 正如我们可以考虑复数的 $z = a+b\sqrt{-1} \in \C$ 矩阵表示

$$
A \spaces= \begin{pmatrix}
a & -b \\
b & ~~~a \\
\end{pmatrix}
,\quad
\det A \spaces= (a+b\sqrt{-1})(a-b\sqrt{-1}) 
$$

我们也可以构造 [](/data-structure/dual-number.md) $a + b \varepsilon \in R$ 的矩阵表示, 并自动得到微分运算的加法和乘法规则, 这可以被简单地视为 Moler 方法的矩阵版本. 

$$
A \spaces= \begin{pmatrix}
a & a' \\
0 & a \\
\end{pmatrix}
,\quad
\det A \spaces= (a+b\varepsilon)(a-b\varepsilon)
$$

[+-导出微分运算](/data-structure/synthetic-differential-000B.md#:embed)


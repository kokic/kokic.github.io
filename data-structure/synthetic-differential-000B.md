
---
title: 矩阵表示给出的微分运算
author: [kokic](/kokic.md)
!date: May 9, 2024
taxon: example
---

$\gdef\Mat{\operatorname{Mat}}$
$\gdef\d{\operatorname{d}}$
$\gdef\Z{\mathbf{Z}}$
$\gdef\spaces#1{~ #1 ~}$

设 $u, v \in R^R$, $n \in \Z$. 记 $A(u, u') = (\begin{smallmatrix} u & u' \\ 0 & u \end{smallmatrix})$. 从矩阵运算中立刻得到 

1. $A(u, u') + A(v, v') \spaces= A(u+v, u'+v')$
1. $A(u, u') - A(v, v') \spaces= A(u-v, u'-v')$
1. $A(u, u') \cdot A(v, v') \spaces= A(uv, u'v + uv')$
1. $A(u, u') \cdot (A(v, v'))^{-1} \spaces= A(uv^{-1}, (u'v - uv')v^{-2})$
1. $(A(u, u'))^n = A(u^n, nu^{n-1}u')$

对于 $e^{A(u,u')}$, 注意 $A(u, u') = A(u, 0) + A(0, u')$, 这里 $(A(0, u))^2 = 0$. 同样可以计算得到 $e^{A(u,u')} = A(e^u, 0) \cdot A(1, u') = A(e^u, e^u u')$. 而对于 $\log A(u,u')$ 我们直接展开为 $\sum_{k \ge 1}\frac{(-1)^{k+1}}{k} \cdot (A-1)^k$ 即可 [验证](/data-structure/synthetic-differential-000F.md). 

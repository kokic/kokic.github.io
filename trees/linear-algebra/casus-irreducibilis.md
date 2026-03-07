
---
title: Casus irreducibilis
date: April 11, 2025
author: [kokic](/trees/kokic.md)
taxon: exegesis
---

[分裂域]: /trees/linear-algebra/AD2A.md

$\gdef\spaces#1{~ #1 ~}$
$\gdef\Gal{\operatorname{Gal}}$
$\gdef\Q{\mathbf{Q}}$
$\gdef\R{\mathbf{R}}$

对于实三次方程 $x^3 + ax^2 + bx + c = 0$, 利用相应的 Tschirnhaus 变换 $x \mapsto y-\frac{a}{3}$ 可得缺项形式

$$ y^3 + py + q = 0, \quad p,q \in \R$$

其判别式为 $\Delta = -4p^3 - 27q^2$, 情况如下

|  |  |
| - | - |
| $\Delta > 0$ | 三个互异实根 |
| $\Delta = 0$ | 三个实根, 有重根 |
| $\Delta < 0$ | 一个实根, 两个共轭复根 |

<remark title="缺项形式验证" close>

$$
\def\x{(y-\tfrac{a}{3})}
\begin{aligned}
\square 
&\spaces= \x^3 + a\x^2 + b\x + c \\
&\spaces= y^3 + \underline{(b-\tfrac{1}{3}a^2)}y + \underline{\tfrac{2}{27}a^3 - \tfrac{ab}{3} + c} \\
&\spaces= y^3 + py + q
\end{aligned}
$$

</remark>

<remark title="计算判别式" close>

记全体根为 $r_i$, 结式 $\operatorname{res}(f,f')$ 即 Sylvester 矩阵的行列式. 判别式可按如下手续计算

$$
\begin{aligned}
\Delta &\spaces= \prod_{i < j} (r_i - r_j)^2 \\
&\spaces= (r_1-r_2)^2(r_1-r_3)^2(r_2-r_3)^2 \\
&\spaces= (-1)^{n(n-1)/2} \operatorname{res}(f,f') \\
&\spaces= - \det 
\begin{pmatrix}
1 & 0 & p & q & 0 \\
0 & 1 & 0 & p & q \\
3 & 0 & p & 0 & 0 \\
0 & 3 & 0 & p & 0 \\
0 & 0 & 3 & 0 & p \\
\end{pmatrix} \\
&\spaces= -(4p^3+27q^3)
\end{aligned}
$$

</remark>

<proposition>

拉丁语 Casus irreducibilis 意为 "不可约情形", 如今特指 $\Delta > 0$ 且多项式在 $\Q$ 上不可约的三次方程. 
设 $f(x) \in \Q[x]$ 是一个 Casus irreducibilis. 则 $f(x)$ 的任意一个根不能表示为仅含实数和实根式的表达式. 

<proof>

1. 记此多项式为 $f$, $f$ 的 [][分裂域] 为 $K$, 其 Galois 群 $G = \Gal(K/\Q)$. $f$ 不可约导致 $G$ 是 $S_3$ 的一个传递子群. 这就意味着 $G$ 只能是 $S_3$ 或者 $A_3$. 

1. 注意除 $1$ 以外, 实数中不能开奇数次单位根. 故任何实根式扩张的 Galois 群必为可解群且阶为 $2$ 的幂次. 同时, 为了解 $x^3 = a$, 则 $K$ 必须包含三次单位根 $e^{2\pi i/3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$. 

这就使得此时根的表达式必须包含复数.

</proof>

</proposition>

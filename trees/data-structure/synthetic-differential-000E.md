
---
title: 链式法则
date: May 9, 2024
author: [kokic](/kokic.md)
taxon: exegesis
---

$\gdef\Mat{\operatorname{Mat}}$
$\gdef\spaces#1{~ #1 ~}$
$\gdef\d{\operatorname{d}}$
$\gdef\eqdef{\overset{\scriptscriptstyle\text{def}}{=}}$

与 $\Mat_{2 \times 2}(R^R)$ 上的 [运算](/data-structure/synthetic-differential-000B.md) 不同, 复合运算是只位于 $R^R$ 上的, 或者说 $\Mat_{2 \times 2}(R^R)$ 上并没有周知的复合运算. 为了自然地给出 $A: J^1(R, R) \to \Mat_{2 \times 2}(R^R)$ 上的复合, 这里 $J^1$ 是一阶 [射流丛](https://ncatlab.org/nlab/show/jet+bundle). 记 $\square(x)$ 为 $\square_x $, $A(u)$ 为 $A(u,u')$, 考虑显式应用的 $A(u)$, 即

$$
A(u)_x \spaces\eqdef \begin{pmatrix} u_x & u'_x \\ 0 & u_x \end{pmatrix} \spaces\in \Mat_{2 \times 2}(R), \quad x \in R
$$

对于 $u: Y \to Z$, $v: X \to Y$. $A$ 上的复合 $A(u) \circ A(v)$ 可定义为 $A(u)_{v_x}$, $(v_x, v'_x) \in A(v)_x$. 我们来验证 $A(u) \circ A(v) = A(u \circ v)$. 

$$
\begin{aligned}
A(u)_{v_x} 
&\spaces= \Big(u \cdot \frac{\partial A}{\partial u} + \frac{\d u}{\d x} \cdot \frac{\partial A}{\partial u'}\Big)\Big|_{v_x} \\
&\spaces= u(v_x) \cdot \frac{\partial A}{\partial u} + \frac{\d u(v_x)}{\d v_x} \frac{\d v_x}{\d x} \cdot \frac{\partial A}{\partial u'} \\
&\spaces= A(u(v(x)), u'(v(x))v'(x)) \\
\end{aligned}
$$

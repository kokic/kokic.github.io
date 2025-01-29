
---
title: 自动机与矩阵求逆
author: kokic
taxon: exegesis
date: 2024-5-9
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\Mat{\operatorname{Mat}}$
$\gdef\R{\mathbf{R}}$
$\gdef\str#1{{\footnotesize #1}}$
$\gdef\sstr#1{~{\footnotesize #1}~}$

[+](/linear-algebra/regular-language.md#:embed)
[+](/linear-algebra/semiring.md#:embed)
[+](/linear-algebra/star-semiring.md#:embed)

记 $\R_{\ge 0}^* = \R_{\ge 0} \cup \{\infty\}$. 从现在起, 我们对于 $\R_{\ge 0}^* ~ (= \mathcal{Q})$ 当中的许多有用的观察可以安全地转移到 $\R ~ (= R)$. 根据 [半环注释](/linear-algebra/semiring.md), 我们优先考虑 $\Mat_{n \times n}(\mathcal{Q})$, 从最小的非平凡情况 $n=2$ 开始, 由于我们的目的是计算矩阵的逆, 故取这个半环的可逆子集也就是幺半群 $\Mat_{n \times n}(\mathcal{Q})^\times$,  其中的元素会形如

$$
M \spaces= \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \quad
ad - bc \spaces\neq 0
$$

请注意, 接下来应该考虑的是 $\square^*$. 因为我们要利用 $X^* = \frac1{1-X}$ 这个关系间接地计算 $M^{-1}$. 只要取 $X = 1-M$, 我们就得到了 

$$
(1-M)^* \spaces= \frac1M \quad (= ~ M^{-1})
$$

这个时候的 $1-M$ 非常微妙, 因为一般情况下它只能存在于 $\Mat_{n \times n}(R)$ 而不是 $\Mat_{n \times n}(\mathcal{Q})$.  如果我们暂时忽略这个问题, 那么根据 [半环注释](/linear-algebra/semiring.md), 由于矩阵的加法直接就是 $\mathcal{Q}$ 或者 $R$ 的加法, 而乘法来自线性空间. 而 $M$ 与 $M^*$ 之间存在一种直接的关系, 可以说成 $(M^*)_{ij} = $ 有向图 $G$ 中所有 $i \to j$ 的路径. 

[State diagram $G$ for $M \to M^*$](/linear-algebra/automata-matrix-0001.typ#:block)

具体的说, 固定 $i,j$, $(M^*)_{ij}$ 是以 $M$, $M^*$ 为结点, $M_{ij}$ 为箭头的 $G$ 中所有 $i \to j$ 的路径 $\hom(i,j)$. 从这些路径中我们能够写出 $\hom(i,j)$ 对应的正则表达式. 

$$\begin{aligned}
  1 \longrightarrow 1 &: \quad (a+b d^*c)^* \\
  1 \longrightarrow 2 &: \quad (a+b d^*c)^*b d^* \\
  2 \longrightarrow 1 &: \quad d^* c(a+b d^*c)^* \\
  2 \longrightarrow 2 &: \quad d^* + d^*c(a+b d^*c)^*b d^* \\
\end{aligned}$$

简单起见记 $\alpha = (a+b d^*c)^*$, 那么上一段的讨论就是在说

$$
M^* = \begin{pmatrix}
\alpha & \alpha b d^* \\
d^* c \alpha & \quad d^* + d^*c \alpha b d^*
\end{pmatrix}
$$


---
title: 矩阵闭包
date: May 10, 2024
author: [kokic](/kokic.md)
taxon: exegesis
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\Mat{\operatorname{Mat}}$
$\gdef\R{\mathbf{R}}$
$\gdef\str#1{{\footnotesize #1}}$
$\gdef\sstr#1{~{\footnotesize #1}~}$

记 $\R_{\ge 0}^* = \R_{\ge 0} \cup \{\infty\}$. 从现在起, 我们对于 $\R_{\ge 0}^* ~ (= \mathcal{Q})$ 当中的许多有用的观察可以安全地转移到 $\R ~ (= R)$. 根据 [半环注释](/linear-algebra/semiring.md), 我们优先考虑 $\Mat_{n \times n}(\mathcal{Q})$, 从最小的非平凡情况 $n=2$ 开始, 由于我们的目的是计算矩阵的逆, 故取这个半环的可逆子集也即幺半群 $\Mat_{n \times n}(\mathcal{Q})^\times$,  其中的元素会形如

$$
M \spaces= \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \quad
ad - bc \spaces\neq 0
$$

请注意, 接下来应该考虑的是 $\square^*$. 因为我们要利用 $X^* = \frac1{1-X}$ 这个关系间接地计算 $M^{-1}$. 只要取 $X = 1-M$, 我们就得到了 

$$
(1-M)^* \spaces= \frac1M \quad (= ~ M^{-1})
$$

此处的 $1-M$ 非常微妙, 因为一般情况下它只能存在于 $\Mat_{n \times n}(R)$ 而非 $\Mat_{n \times n}(\mathcal{Q})$.  如果我们暂时忽略这个问题, 那么根据 [半环注释](/linear-algebra/semiring.md), 由于矩阵的加法直接就是 $\mathcal{Q}$ 或者 $R$ 的加法, 而乘法来自线性空间. 此时 $M$ 与 $M^*$ 之间存在一种直接的关系, 可以说成 $(M^*)_{ij} = $ 有向图 $G$ 中所有 $i \to j$ 的路径. 

[State diagram $G$ for $M \to M^*$](/linear-algebra/automata-matrix-0001.typ#:block)

具体的说, 固定下标 $i,j$, 分量 $(M^*)_{ij}$ 的值会等于以 $M$, $M^*$ 为结点, $M_{ij}$ 为箭头的 $G$ 中所有 $i \to j$ 的路径 $\hom(i,j)$ 的正则表达式. 并且从这些路径中我们也能够写出 $\hom(i,j)$ 对应的正则表达式, 这就为计算 $(M^*)_{ij}$ 提供了可能. 

$$\begin{aligned}
  1 \longrightarrow 1 &: \quad (a+b d^*c)^* \\
  1 \longrightarrow 2 &: \quad (a+b d^*c)^*b d^* \\
  2 \longrightarrow 1 &: \quad d^* c(a+b d^*c)^* \\
  2 \longrightarrow 2 &: \quad d^* + d^*c(a+b d^*c)^*b d^* \\
\end{aligned}$$

简单起见记 $\alpha = (a+b d^*c)^*$, 那么上一段的讨论就是在说

$$
M^* \spaces= \begin{pmatrix}
\alpha & \alpha b d^* \\
d^* c \alpha & \quad d^* + d^*c \alpha b d^* \tag{1.1}
\end{pmatrix}
$$

这里有两个不应忽视的问题. 其一, 虽然我们考虑的是 $\Mat_{n \times n}(\mathcal{Q})$ 上的 Kleene 星运算 $\square^*$, 但右侧的表达式中涉及了 $\mathcal{Q} ~ (= \R_{\ge 0}^*)$ 上的 Kleene 星运算 $\square^*$, 根据之前的内容, 我们可以自然地确定它就是 $a \mapsto \frac1{1-a}$. 这允许我们从 $M$ 的各个分量 $M_{ij}$ 计算出 $M^*$. 更加重要的是, 由于 $\Mat_{n \times n}(\mathcal{Q})$ 也能通过这样的方式构成闭半环, 这实际上允许我们将 $(1.1)$ 的适用范围拓展到任意大小的方阵 $\Mat_{n \times n}(\mathcal{Q})$, 此时的 $a,b,c,d$ 能够选取为 $M$ 的分块矩阵. 其二, $d^* + d^*c \alpha b d^*$ 在一般的星半环中不能直接替换为 $(d+ca^*b)^*$, 可替换的前提被称为 [Conway 条件](/linear-algebra/conway-condition.md).

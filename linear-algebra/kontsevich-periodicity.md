
---
title: Kontsevich 周期性猜想
author: kokic
taxon: conjecture
!date: February 16, 2025
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\Mat{\operatorname{Mat}}$
$\gdef\Q{\mathbf{Q}}$

令 $(M_{ij})_{1 \le i,j \le 3}$ 是包含 $9$ 个非交换独立变量的矩阵. $I_1: M \to M^{-1}$ 是对矩阵求逆, $I_2: M_{ij} \to M_{ij}^{-1}$ 是对矩阵各分量求逆, $I_3: M \to M^T$ 是矩阵的转置. 则 Kontsevich 猜测, 存在两个 $3$ 阶对角矩阵 $L,R$ 使得

$$
(I_3 \circ I_2 \circ I_1)^3(M) \spaces= LMR
$$

且这里 $I,R$ 的分量是以 $M$ 的 $9$ 个分量 $M_{ij}$ 为变量的非交换有理函数. 

[Kontsevich 周期性猜想](/linear-algebra/kontsevich-periodicity) 已由 Natalia Iyudu 和 Stanislav Shkarin 于 2013 年 5 月 8 日 [证明](https://arxiv.org/abs/1305.1965v3), 因此这一猜想有时也被称作 Iyudu--Shkarin 定理. 不过这个证明过于暴力, 也没有对于一般的矩阵 $M \in \Mat_{n \times n}$ 回答 $n>3$ 时的 [Kontsevich 周期性猜想](/linear-algebra/kontsevich-periodicity) 

$$
(I_3 \circ I_2 \circ I_1)^n(M) \spaces= LMR
$$

为何不成立 [^kontsevich-hold].  

我们来观察对于交换环 $R$ 和对应的 $\Mat_{2\times 2}(R)$ 中的矩阵, $(I_3 \circ I_2 \circ I_1)^2$ 具体做了些什么. 令 $\varphi = I_3 \circ I_2 \circ I_1$, 则 $\varphi(M)$ 可以算出是

$$
\varphi: ~ M ~\leadsto~ \det M \cdot S I_2(M) S^T
$$

其中 $S = (\begin{smallmatrix}0 & -1 \\ 1 & ~~~0\end{smallmatrix})$ 是一个行列式为 $1$ 的反对称矩阵. 现在我们来计算 $\varphi^2(M)$. 

$$
\begin{aligned}
\varphi^2(M) 
&\spaces= \varphi(\det M \cdot SI_2(M)S^T) \\
&\spaces= \det(\det M \cdot SI_2(M)S^T) \cdot S I_2(\det M \cdot SI_2(M)S^T) S^T \\
&\spaces= (\det M)^2 \det(SI_2(M)S^T) \cdot (\det M)^{-1}M \\
&\spaces= \det M \det(SI_2(M)S^T) \cdot M \\
&\spaces= \det M \det(I_2(M)) \cdot M
\end{aligned}
$$

也就是说 $\varphi^2(M)$ 实际上会是 $M$ 的常数倍, 并且这个常数是 

$$
\det M \det(I_2(M)) \spaces= (ad-bc)\Big(\frac1{ad}-\frac1{bc}\Big)
$$ 

[^kontsevich-hold]: 如果矩阵的分量是交换元, 则 $n=1,2$ 情况很容易验证. Iyudu 和 Shkarin 在他们的论文中首先验证了 [Kontsevich 周期性猜想](/linear-algebra/kontsevich-periodicity) 对于 $n=2$ 非交换的情况也正确, 随后才讨论 $n=3$ 的版本. 

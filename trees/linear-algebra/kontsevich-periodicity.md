
---
title: Kontsevich 周期性猜想
date: February 16, 2025
author: [kokic](/kokic.md)
taxon: conjecture
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

[](/linear-algebra/kontsevich-periodicity-000A.md#:embed)

[^kontsevich-hold]: 如果矩阵的分量是交换元, 则 $n=1,2$ 情况很容易 [验证](/linear-algebra/kontsevich-periodicity-000A). Iyudu 和 Shkarin 在他们的 [论文](https://arxiv.org/abs/1305.1965v3) 中首先验证了 [Kontsevich 周期性猜想](/linear-algebra/kontsevich-periodicity) 对于 $n=2$ 非交换的情况也正确, 随后才讨论 $n=3$ 的版本. 

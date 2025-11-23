
---
title: Hölder 不等式
date: June 25, 2021
taxon: theorem
author: [kokic](/trees/kokic.md)
asref: true
---

$\gdef\spaces#1{~ #1 ~}$

[cauchy]: ./CN2B.md

共轭指数 $p,q \in \R_{> 0}$ 满足 $\frac{1}{p} + \frac{1}{q} = 1$, 则

$$
\Big(\sum_{k=1}^na_k^p\Big)^{\frac{1}{p}} \Big(\sum_{k=1}^nb_k^q\Big)^{\frac{1}{q}} \spaces\ge \sum_{k=1}^na_kb_k
$$

当 $p=q=2$ 时, 此即为 [][cauchy]. 类似 [][cauchy] 和 [](./CN2C.md) 的关系, [](./HP2A.md) 满足 [](./SL2A.md) 的形式称为 [](./HP2B.md). 用完全相同的证明方法可以得到多组变量的推广

$$
\prod_{j=1}^m \Big(\sum_{k=1}^n a_{jk}^{w_j} \Big)^{\frac{1}{w_j}} \spaces\ge \sum_{k=1}^n \prod_{j=1}^m a_{jk}
$$

这里 $\sum_j w_j = 1$. 

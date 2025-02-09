
---
title: 加权算术平均--几何平均不等式
author: kokic
taxon: corollary
!date: May 15, 2019
---

$\gdef\spaces#1{~ #1 ~}$

我们要证的结果可以写成下面的样子

$$
\Big(\prod_{i \in S}z_i^{w_i}\Big)^{(\sum_{i \in S}w_{i})^{-1}}
\spaces\le 
\Big(\sum_{i \in S}w_iz_i\Big) \Big(\sum_{i \in S}w_i\Big)^{-1}
$$

实际上可以利用对数的线性化对这个定理给出一个直接的证明, 不过这并非本文的重点. 我们在此处更关心如何将这些表达式调整为适合使用 [](/daily-surf/young-lemma.md) 的形式. 我们先引入一些记号, 用 $\Sigma_w$ 表示 $\sum_{i \in S}w_{i}$, 用 $\omega_i$ 表示 $w_i\Sigma_w^{-1}$. 这样目标就变成了   

$$ \prod_{i \in S}z_i^{\omega_i} \spaces\le \sum_{i \in S}\omega_iz_i $$

如果把这里的 $\omega_i$ 看作 $p_i$, $z_i$ 看作 $f_i$, $\sum_{i \in S}\omega_iz_i$ 看作 $g$. 那我们只要验证下面这件事 

$$
\sum_{i \in S}\omega_iz_i \spaces\le \sum_{i \in S}\omega_iz_i
$$

而这应该是很容易的. $\quad\Box$ 

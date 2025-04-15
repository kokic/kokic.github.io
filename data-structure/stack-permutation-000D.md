
---
title: 相交数
author: [kokic](/kokic.md)
taxon: proposition
!date: November 06, 2024
---

$\gdef\eqdef{\overset{\scriptscriptstyle\text{def}}{=}}$
$\gdef\spaces#1{~ #1 ~}$

所有 $n$ 节点二叉树的 Hille 编码构成的集合记为 $H_n$, 所有 $n$ 节点二叉树的栈编码构成的集合记为 $C_n$. 对于 $H_n \cap C_n$ 的大小 $a_n \eqdef |H_n \cap C_n|$, 我们有如下刻画. 

$$
a_n \spaces= \sum_{k = 0}^{n-1} \sum_{j = 0}^{n-k} \frac{1}{j+1}\binom{n-k-j}j \binom kj \binom{k+j+2}j
$$

记 $N = n+1$. 等式的证明可以通过分析一个半长为 $N$ 且不包含 `UUDD` 子序列的 Dyck 路径得到. 同时这也是从 $(0,0)$ 到 $(N,N)$ 不越过对角线且允许步长 $(1,k), (k,1), k \geqslant 1$ 的格路径的个数. 或者更简单地说, 是长度为 $N$ 的斜 Motzkin 路径的个数. 


---
title: 将 $p$ 视为 $E[x]$ 中的多项式
page-title: 将 p 视为 E[x] 中的多项式
taxon: remark
asref: true
---

$\gdef\spaces#1{~ #1 ~}$

由于域扩张 $i: k \to E$ 未必是包含映射, 此时无法简单地把 $k$ 系数看作 $E$ 中的元素, 但通过张量积可以完成这件事, 应用映射 $k[x] \cong k \otimes_k k[x] \xrightarrow{i \otimes 1} E \otimes_k k[x] \cong E[x]$. 这里 $i \otimes 1$ 使得多项式 $p(x) = \sum a_j x^j$ 在张量积中可写为 

$$
1 \otimes p(x) \spaces= \sum (1 \otimes a_j) \cdot (1 \otimes x^j)
$$

在此映射下变为 

$$
\sum (i(a_j) \otimes 1) \cdot (1 \otimes x^j) \spaces= \sum i(a_j) \otimes x^j
$$

这就使得原本的系数 $a_j \in k$ 通过 $i$ 变换到了 $E$ 中. 

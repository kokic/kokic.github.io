
---
title: Radon 不等式
date: June 25, 2021
taxon: theorem
author: [kokic](/trees/kokic.md)
asref: true
---

$\gdef\spaces#1{~ #1 ~}$

[hölder]: /trees/HP2A.md

此为 [][hölder] 的等价命题. 对于共轭指数 $p,q \in \R_{> 0}$, $\frac{1}{p} + \frac{1}{q} = 1$, 留意 

$$ \tfrac{p-1}{p} \spaces= 1-\tfrac{1}{p} \quad (= ~ \tfrac{1}{q}) $$

于是 $\frac{p}{q} = p-1$. 在 [](./HP2A.md) 中实行替换 $a_k \mapsto \frac{x_k}{\sqrt[q]\ell_k}$, $b_k \mapsto \sqrt[q]\ell_k$, 两边做 $\square^p$, 即得

$$
\Big(\sum_{k=1}^n\frac{x_k^p}{\ell_k^{p-1}}\Big) \Big({\sum_{k=1}^n{\ell_k}}\Big)^{p-1}
\spaces\ge \Big(\sum_{k=1}^nx_k\Big)^p
$$

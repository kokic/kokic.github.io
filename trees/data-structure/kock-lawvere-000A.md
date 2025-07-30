
---
title: 所有函数都光滑
date: May 13, 2024
author: [kokic](/kokic.md)
taxon: corollary
---

$\gdef\quads#1{\quad #1 \quad}$
$\gdef\spaces#1{~ #1 ~}$

对任意函数 $f:R \rightarrow R$, 存在唯一的函数 $f':R \rightarrow R$ 满足

$$
f(x + \varepsilon) \spaces= f(x) + f'(x)\varepsilon,\quad \forall ~ x \in R, ~ \forall ~ \varepsilon \in D
$$

这个通常作为 [Kock--Lawvere 公理](/data-structure/kock-lawvere) 的推论出现, 不过从 $\mathcal{E}$ 的定义来看, 这才是整套框架真正的目的之一. 即, 为全体函数恢复牛顿时期 "幂零无穷小量" 计算上的直观, 而不导致矛盾. 

[](/data-structure/kock-lawvere-0001.typ#:html)

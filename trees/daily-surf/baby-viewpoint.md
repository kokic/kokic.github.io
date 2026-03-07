
---
title: 日经观点
date: February 11, 2025
author: [kokic](/trees/kokic.md)
taxon: exegesis
---

$\gdef\Mat{\operatorname{Mat}}$
$\gdef\vol{\operatorname{vol}}$
$\gdef\diag{\operatorname{diag}}$
$\gdef\d{\operatorname{d}}$
$\gdef\R{\mathbf{R}}$
$\gdef\Q{\mathbf{Q}}$

1. 一个矩阵 $A \in \Mat_{n \times n}(\R)$ 所确定的线性映射 $\alpha: \R^n \to \R^n$ 作用在 $X \in \R^n$ 上, 此映射对 $X$ 的 (有向) 体积 $\vol(X)$ 的缩放量为 $\det A$. 即 $\vol(\alpha X) = \det A \cdot \vol(X)$. 特别地取 $A = \diag(a,b)$, 然后乘单位圆 $u^2+v^2=1$ 上一点构成的向量 $(u,v)$, 得到满足椭圆方程 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ 的 $(x,y)$, 这样便能看出椭圆的面积 $S = \det A \cdot \pi$. 

1. 设 $\omega$ 是一个 $k$-形式, 它的两次微分 $\d(\d \omega) = 0$. 另一方面, 考虑一个有向流形 $\Omega$ 和它的边缘 $\partial \Omega$, 我们知道 $\partial(\partial M) = \varnothing$. 这两件事相互对偶. 

1. 考虑数域 $K=\Q(\alpha_1, \cdots, \alpha_i)$ 的一个存在于上的历史原因是, 在适当的 $K$ 中考虑能够使原本在 $\Q$ 上无法分解的 Diophantus 方程因式分解.  如 $\Q(\sqrt{-7})$ 能使 Ramanujan--Nagell 方程 $x^2=2^n-7$ 改写为 $(x+\sqrt{-7})(x-\sqrt{-7})=2^n$. Fermat 方程 $x^n+y^n=z^n$ 能够在 $\Q(\zeta_n)$ 上分解成 $x^n=(z-y)(z-\zeta_n y) \cdots (z-\zeta_n^{n-1} y)$, 这是 [Kummer](/person/ernst-kummer) 提出理想数概念的一个原因. 

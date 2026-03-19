
---
title: Chowla 定理与 $e$-变换
page-title: Chowla 定理与 e-变换
date: July 25, 2020
author: [kokic](/trees/kokic.md)
tag: [](/trees/pearls/index.md)
---

$\gdef\Z{\mathbb{Z}}$
$\gdef\spaces#1{~ #1 ~}$

<theorem title="Cauchy-Davenport-Chowla">

设 $m\ge 1$，$A, B \subseteq \Z/m\Z$ 为非空集合. 且 $B$ 满足 $(i)$ $0 \in B$, $(ii)$ 对每个 $b \in B \setminus\{0\}$, 都有 $\gcd(b,m)=1$, 即互质. 则

$$ |A+B| \spaces\ge \min(m,\ |A| + |B| - 1) $$

此处加法为 Mincowski 和, 其定义为 $A+B=\{a+b:\ a\in A,\ b\in B\}$. 

</theorem>

<definition title="$e$-变换">

对任意 $e\in A$, 定义 

$$
A_{(e)} \spaces{:=} A\cup (B+e), \quad 
B_{(e)} \spaces{:=} B\cap (A-e)
$$

其中 $B+e=\{b+e:\ b\in B\}$, $A-e=\{a-e:\ a\in A\}$. 且注意 $A_{(e)}$ 和 $B_{(e)}$ 都 $\subseteq \mathbb Z/m\mathbb Z$. 

</definition>

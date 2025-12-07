
---
title: $(1-q)^{-m}$ 的系数
page-title: 特殊有理函数展开式的系数
taxon: lemma
asref: true
date: August 15, 2021
author: [kokic](/trees/kokic.md)
tag: [](/trees/pearls.md)
---

$\gdef\d{\operatorname{d}}$
$\gdef\spaces#1{~ #1 ~}$
$\gdef\quads#1{\quad #1 \quad}$

我们来证明

$$
\frac{1}{(1 - q)^{n}} 
\spaces= \sum_{u \geq 0}\binom{n + u - 1}{u}q^{u}
$$

对于 $(1-q)^{-m}$ 这类特殊的有理函数, 注意到
$((1-q)^{-1})' = (1 - q)^{- 2}$. 归纳地, 可以得到

$$
\frac{\d^{n}}{\d q^{n}}(1 - q)^{- 1} 
\spaces= \frac{n!}{(1 - q)^{n + 1}} 
\quads\Longrightarrow \frac{1}{(1 - q)^{n}} 
\spaces= \frac{1}{(n - 1)!} \cdot \frac{\d^{n - 1}}{dq^{n - 1}}(1 - q)^{- 1}
$$

另一方面, 我们知道几何级数满足
$\frac{1}{1 - q} = 1 + q + q^2 + \cdots = \sum_{u \geq 0}q^{u}$, 代入可得

$$
\frac{1}{(1 - q)^{n}} 
\spaces= \frac{1}{(n - 1)!} \cdot \frac{\d^{n - 1}}{\d q^{n - 1}}\sum_{u \geq 0}q^{u}
$$

现在我们再使用下面的观察 

$$ 
\frac{\d^n}{\d x^n} x^m
\spaces=
\begin{cases}
  x^{m-n} \prod_{0 \le k \le n-1}(m-k) & n \le m \\
  0 & \text{otherwise} 
\end{cases}
$$

就可以算出 $\frac{\d^{n - 1}}{\d q^{n - 1}}\sum_{u \geq 0}q^{u}$ 这一部分

$$
\begin{aligned}
\frac{1}{(1 - q)^{n}} 
&\spaces= \frac{1}{(n - 1)!} \cdot \sum_{u \geq n - 1}q^{u - (n - 1)}\prod_{0 \leq k \leq n - 2}(u - k) \\
&\spaces= \frac{1}{(n - 1)!} \cdot \sum_{u \geq 0}q^{u}\prod_{0 \leq k \leq n - 2}(u + n - k - 1) \\
&\spaces= \frac{1}{(n - 1)!} \cdot \sum_{u \geq 0}q^{u}(u + n - 1)(u + n - 2) \spaces\cdots (u + 1)
\end{aligned}
$$

$q^{u}$ 的系数从 $u = 0$ 开始, 则系数可再一次简化为组合数

[](./GF3B.typ#:block)

于是明所欲证. 

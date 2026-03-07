
---
title: Bernoulli 不等式
date: May 15, 2019
author: [kokic](/trees/kokic.md)
taxon: corollary
---

$\gdef\spaces#1{~ #1 ~}$

Bernoulli 不等式是说 $(1+x)^n \ge 1+nx$. 这里 $n \ge 1$, $x \ge -1$. 等价地, 我们来证明 

$$ x^n + n-1 \spaces\ge nx, \qquad (n \ge 1, x \ge 0) $$

在 [](./YL2B.md) 的条件中令 $p_i = \frac1n$, $(f_i)_{1\le i \le n}=(x^n, 1, 1, \cdots)$, $g = (x^n + n-1)n^{-1}$, 这个时候以下条件显然成立

$$
\frac1n x^n + \underbrace{\frac1n + \frac1n + \cdots + \frac1n}_{n-1 ~ \text{times}} \spaces= \frac{x^n + n-1}n
$$

于是可以得到 $(x^n)^{n^{-1}} \le (x^n + n-1)n^{-1}$. $\quad\Box$

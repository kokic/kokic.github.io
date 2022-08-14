
---
title: 辗转相除法步数估计
date: 2021-6-10
categories:
  - 数学
tag:
  - 数论
---

设 $a,b$ 两数辗转相除至余数为零所用步数为 $n$，证明：
$$n\le1+\log_\phi\min\\{a,b\\}$$ 其中 $\phi=\dfrac{1+\sqrt5}{2}$ 为黄金分割.

首先证明一个引理：$n\le\log_\phi\sqrt{5}\min\\{a,b\\}$

设 $a\gt b$ 有 $a=qb+r_1,r_{k-1}=q_kr_k+r_{k+1}$，其中 $1\le k\le n-1$，故 $r_n=0$.
$r_k$ 依次递减且有 $r_k-r_{k+1}\ge1$，则 $r_{k-1}=q_kr_k+r_{k+1}\ge r_k+r_{k+1}$.
将下标取反即 $s_{k+1}\ge s_k+s_{k-1}$，其中 $s_k=r_{n-k}$.

故考虑斐波那契数列，知 $s_k\ge\text{fib}(k)$，即 $b\ge\text{fib}(n)$，又 $\text{fib}(n)\sim\dfrac{\phi^n}{\sqrt5}$，证完.

注意到此估计与待证估计之差为 $$\begin{aligned}\log_{\phi}\sqrt5-1 &=\dfrac{\log\sqrt5}{\log\dfrac{1+\sqrt5}{2}}-1\\\ &=\dfrac{1}{2}\cdot\dfrac{\log5}{\log(1+\sqrt5)-\log2}-1\\\ &\lt2\cdot\dfrac{\log5}{\log5}-1 \\\ &=1\end{aligned}$$ 其中最后一个不等号是因为 $$\begin{aligned}\log(1+\sqrt5)-\log2 &\gt\log(2\cdot5^{1/4})-\log2\\\ &=\dfrac{1}{4}\cdot\log5\end{aligned}$$ 故 $n\le\log_{\phi}b+1$，证完.


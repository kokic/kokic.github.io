
---
title: 辗转相除法步数估计
date: June 10, 2021
author: [kokic](/trees/kokic.md)
tag: [](/trees/pearls.md)
---

$\gdef\spaces#1{~ #1 ~}$

1844 年, 49 岁的法国数学家 [Gabriel Lamé](https://en.wikipedia.org/wiki/Gabriel_Lam%C3%A9) 发现, 设 $a,b$ 两数辗转相除至余数为零所用步数为 $n$, 则

$$ n \spaces\le 1 + \log_\phi \min(a,b) $$

其中 $\phi = \frac{1+\sqrt5}{2}$ 为黄金分割. 当然, 这也给出用递归实现 $\gcd$ 函数的时间复杂度. 如今认为, 此结果标志着计算复杂度理论的开始. 

我们首先来证明 $n\le\log_\phi\sqrt{5}\min(a,b)$. 
不妨设 $a\gt b$, 于是有 $a=qb+r_1,r_{k-1}=q_kr_k+r_{k+1}$, 其中 $1\le k\le n-1$, 显然一定有 $r_n=0$.
还注意 $r_k$ 依次递减且有 $r_k-r_{k+1}\ge1$, 则 $r_{k-1}=q_kr_k+r_{k+1}\ge r_k+r_{k+1}$.
将下标取反 $(s_k=r_{n-k})$ 即 $s_{k+1}\ge s_k+s_{k-1}$. 故考虑 Fibonacci 数列 $F_n$, 知 $s_k\ge F_k$, 即 $b\ge F_n$, 又 $F_n \sim \frac{\phi^n}{\sqrt5}$, 证毕. 

现在, 注意到此估计与待证估计之差为 

$$
\begin{aligned}
\log_{\phi}\sqrt5-1 \
&\spaces= \dfrac{\log\sqrt5}{\log\dfrac{1+\sqrt5}{2}}-1 \\ 
&\spaces= \dfrac{1}{2}\cdot\dfrac{\log5}{\log(1+\sqrt5)-\log2}-1\\ 
&\spaces\lt 2\cdot\dfrac{\log5}{\log5}-1 \\ 
&\spaces= 1
\end{aligned}
$$ 

其中最后一个不等号是因为, 根据基本不等式 $1+\sqrt5 \ge 2\cdot5^{1/4}$, 于是 

$$
\log(1+\sqrt5) - \log2 
\spaces\gt\log(2\cdot5^{1/4})-\log2 
\spaces=\tfrac{1}{4}\log5
$$

故 $n \le \log_{\phi}b+1$.

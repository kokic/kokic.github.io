
---
title: Distribution of Prime Numbers I
date: 2022-07-10
categories:
  - 数学
tag:
  - 分析
  - 数论
---

命 $p_n$ 是第 $n$ 个素数, 从 Euclide 对素数无限的证明中可以知道 $$p_{n+1}\le1+\prod_{1\le j\le n}p_j$$ 断言 $p_n\le2^{2^n}$ 并归纳 
$$\begin{aligned}p_{n+1}\le1+\prod_{1\le j\le n}2^{2^n}&=1+2^{2^{n+1}-2} \\\ &\le1+2^{2^{n+1}-1}\le2^{2^{n+1}}\end{aligned}$$ 倒数第二个不等式成立是因为 $x+y\le2\max(x,y)$.

因此 $$\begin{aligned}\pi(x) &\ge\max\\{n\in\N:2^{2^n}\le x\\} \\\ &=\left\lfloor\frac{\log(\log x/\log2)}{\log2}\right\rfloor \\\ &\ge\frac{\log\log x}{\log2}-\frac{\log\log2}{\log2}-1 \\\ &\ge\frac{\log\log x}{\log2}-\frac12 \qquad (x\ge2) \end{aligned}$$

---

Nair 将目光置于 $\text{lcm}$, 其证明了对 $n\ge7$ 有 $$\ell_n\overset{\text{def}}{=}\text{lcm}(1,2,\cdots,n)\ge2^n$$ 考虑积分 
$$J=\int_0^1x^{m-1}(1-x)^{n-m}\text{d}x\quad (1\le m\le n)$$ $(1-x)^{n-m}$ 的二项展开式表明 $$J=\sum_{0\le j\le n-m}(-1)^j{n-m\choose j}\frac1{m+j}\in\frac1{\ell_n}\Z$$ 另一方面, 取 $t\in[0,1]$ $$\begin{aligned}\sum_{1\le m\le n}{n-1\choose m-1}t^{m-1}J&=\int_0^1(1-st+t)^{n-1}\text{d}s\\\ &=\frac1{n}\sum_{1\le m\le n}t^{m-1}\end{aligned}$$ 这推出 $J=\frac1n{n-1\choose m-1}=\frac1m{n\choose m}$, $m{m\choose n}\\,|\\,\ell_n$ 由此知 $n$ ${2n\choose n}\\,|\\,\ell_{2n}$ 与 $(2n+1){2n\choose n}\\,|\\,\ell_{2n+1}$, 故 $\ell_{2n+1}\ge n4^n$.
$$\ell_{2n+1}\ge2\cdot2^n=2^{2n+1} \quad (n\ge2) \\\ \ell_{2n+2}\ge\ell_{2n+1}\ge4^{n+1} \quad (n\ge4)$$ 因此对于 $n\ge9$, $\ell_n\ge2^n$, 而 $n=7,8$ 的情形经单独验证可知也是对的.

---

接着, 可以证明一个更好的下界 $$\pi(n)\ge\frac{\ell_n}{\log n}$$ 来自于以下观察: 若 $p^v\\,\\|\\,\ell_n$, 那么存在 $m\le n$ 使 $p^v\\,|$ $m$, 所以 $p^v\le n$, 并且
$$\ell_n=\prod_{p\le n,p^v\\|\ell_n}p^v\le\prod_{p\le n}n=n^{\pi(n)}$$


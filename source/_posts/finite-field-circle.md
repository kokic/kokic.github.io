
---
title: 有限域与圆法 - Extend & Conquer
date: 2021-11-27
categories:
  - 数学
tag:
  - 不等式
---

设素数 $p\ge3$，而 $A,B\subseteq\mathbb{F}\_p$，试证
$$\bigg|\sum_{j\in A}\sum_{k\in B}\exp\bigg(\dfrac{2\pi ijk}{p}\bigg)\bigg|\le \sqrt{p|A||B|}$$ 
**引理** &emsp; 置 $q:=\exp\bigg(\dfrac{2\pi ij}N\bigg)$，其中 $j\in\Z_{[1,\\,N-1]}$ 则 $$\sum_{0\le k\le N-1}q^k=\frac{1-q^N}{1-q}=0\qquad \text{if}\\;q\neq1$$ 证：证毕. 
现在回到最初的问题上，记 $q=\exp\bigg(\dfrac{2\pi ij}{p}\bigg)$，有 $\big|\sum\_{j\in A}\sum\_{k\in B}q^k\big|\le\sum\_{j\in A}|\sum\_{k\in B}q^k|$，这也就是说

<div class="scroll" style="margin-bottom: -0.8em;"> $$\begin{aligned}
\bigg|\sum_{j\in A}\sum_{k\in B}q^k\bigg|^2
&\le|A|\sum_{j\in A}\bigg|\sum_{k\in B}q^k\bigg|^2 \\
&\le|A|\sum_{j\in\mathbb{F}_p}\bigg|\sum_{k\in B}q^k\bigg|^2 \\
&=|A|\sum_{j\in\mathbb{F}_p}\sum_{k_1,k_2\in B}q^{k_1-k_2} \\
&=|A|\sum_{k_1,k_2\in B}\sum_{j\in\mathbb{F}_p}q^{k_1-k_2} \\
&=p|A|\sum_{k_1,k_2\in B}\delta(k_1-k_2) \\
&=p|A||B|
\end{aligned}$$</div> 明所欲证.

其中 $\delta$ 满足 $\delta(x)=1$ 当且仅当 $x=0$，否则 $\delta(x)=0$. 这是所谓的 Dirac $\delta$ 函数.

---

注：某些步骤并不是必要的，包括对 $\delta$ 函数的使用，仅仅是为了使过程更清晰，如果不考虑这一点，写成下面的步骤也无妨
<div class="scroll" style="margin-bottom: -0.8em;"> $$\begin{aligned}
\bigg|\sum_{j\in A}\sum_{k\in B}q^k\bigg|^2
&\le|A|\sum_{j\in\mathbb{F}_p}\bigg|\sum_{k\in B}q^k\bigg|^2 \\
&=|A|\sum_{j\in\mathbb{F}_p}\sum_{k,\ell\in B}q^\frac{k+\ell}j\cdot q^j \\
&=|A|\sum_{j\in\mathbb{F}_p}q^j\sum_{k,\ell\in B}q^\frac{k+\ell}j \\
&=p|A||B|
\end{aligned}$$</div> 








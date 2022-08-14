
---
title: 序列的 AM-GM 之比
date: 2021-11-1
categories:
  - 数学
tag:
  - 分析
---

### 算术级数

对任意（无限项的）正系数 $[a,d\gt0]$ 算术级数 $$a,a+d,\cdots,a+(n-1)d,\cdots$$ 其算术平均$-$几何平均之比

<div class="scroll">
$$\begin{aligned}\lim_{N\to\infty}\dfrac{\dfrac{1}{N}\displaystyle\sum_{1\le k\le N}{a+(k-1)d}}{\displaystyle\bigg(\prod_{1\le k\le N}a+(k-1)d\bigg)^{1/N}}
&=\lim_{N\to\infty}\dfrac{\dfrac{a}{Nd}+\dfrac{1}{2}\cdot\dfrac{N-1}{N}}{\dfrac{1}{N}\displaystyle\bigg(\prod_{1\le k\le N}\dfrac{a}{d}+(k-1)\bigg)^{1/N}} \\
&=\dfrac{1}{2}\cdot\lim_{N\to\infty}\dfrac{N}{\displaystyle\bigg(\prod_{1\le k\le N}\dfrac{a}{d}+(k-1)\bigg)^{1/N}} \quad \\
&=\dfrac{1}{2}\cdot\lim_{N\to\infty}\dfrac{N}{\sqrt[N]{N!}} \quad \\
&=\dfrac{1}{2}\cdot\lim_{N\to\infty}\dfrac{1}{\dfrac{1}{N}\cdot\sqrt[N]{N!}} \quad \\
&=\dfrac{1}{2}\cdot\lim_{N\to\infty}\dfrac{1}{\exp\left(\dfrac{1}{N}(\log N!-N\log N)\right)} \quad \\
&=\dfrac{1}{2}\cdot\dfrac{1}{\exp\bigg(\lim\limits_{N\to\infty}\dfrac{1}{N}\displaystyle\sum_{1\le k\le N}\log\frac{k}{N}\bigg)} \quad \\
&=\dfrac{1}{2}\cdot\dfrac{1}{\exp\displaystyle\int_0^1\log x\,\mathrm{d}x} \quad \\
&=\dfrac{e}{2}\end{aligned}$$
</div>

### 有限项的刻画
如果考虑更一般的正项序列 $x_1\le x_2\le\cdots\le x_N$ 并满足 
$$x_1\le\dfrac2{x_2}\le\cdots\le\dfrac{N}{x_N}$$ 由 Chebyshev 总和不等式 
$$A_N\mathfrak{A}=\left(\dfrac{1}{N}\displaystyle\sum_{1\le k\le N}x_k\right)\left(\dfrac{1}{N}\displaystyle\sum_{1\le k\le N}\dfrac{k}{x_k}\right)\le\dfrac{N+1}{2}$$ 由算术平均$-$几何平均不等式
$$\mathfrak{A}=\dfrac{1}{N}\displaystyle\sum_{1\le k\le N}\dfrac{k}{x_k}\ge\bigg(\dfrac{N!}{x_1x_2\cdots x_N}\bigg)^{1/N}=\dfrac{\sqrt[N]{N!}}{G_N}$$ 由此可得
$$\dfrac{A_N}{G_N}\le\dfrac{N+1}{2\sqrt[N]{N!}}$$ 此时仍有
$$\lim_{N\to\infty}\dfrac{A_N}{G_N}=\dfrac{e}{2}$$





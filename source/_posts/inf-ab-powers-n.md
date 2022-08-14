---
title: 一般的幂和下界
date: 2021-08-24
categories:
  - 数学
tag:
  - 不等式
---

设正实数 $x,y$ 和正整数 $n$ 满足 $x^n+y^n=1$，证明 $$\log(x^x+y^y)\ge\bigg(1-\dfrac{1}{n\cdot\sqrt[n]{2}}\bigg)\log2$$
对左侧使用算术平均 — 几何平均不等式，考虑证明 $$x\log(x)+y\log y\ge\bigg(\dfrac{1}{2}-\dfrac{1}{n\cdot\sqrt[n]{2}}\bigg)\log2$$ 故考虑函数 $x\log x+(1-x^n)^{1/n}\log(1-x^n)^{1/n}$

求导并令其等于零，有 $$1+\log x=x^{n-1}y^{1-n}+x^{n-1}y^{1-n}\log y$$ 也即 $$\dfrac{1+\log x}{x^{n-1}}=\dfrac{1+\log y}{y^{n-1}}$$ 注意 $x,y\in(0,1]$，通过对阶的分析，容易知道上述形式的函数 $\dfrac{1+\log x}{x^{n-1}}$ 当 $n\le 2$ 时单调，由双射知 $x=y$，下证 $n\ge3$ 时的情况，由于
$$f(x)=\dfrac{1+\log x}{x^{n-1}}\le f\left(\exp\\,-\dfrac{n-2}{n-1}\right)$$ 故 $f(x)$ 在 $\left(\exp\\,-\dfrac{n-2}{n-1},1\right]$ 上单调. 

若假设 $x<y$，则 $$\exists\\,\varepsilon\in(0,1)\text{ s.t. }f(x+\varepsilon)=f(y)$$ 此时第二个不等号无法取等，亦无法取得最小值，故一定有 $x=y=\dfrac{1}{\sqrt[n]{2}}$，证完.


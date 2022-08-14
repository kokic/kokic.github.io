
---
title: Scholze 不等式
date: 2021-08-04
categories:
  - 数学
tag:
  - 不等式
---

Peter Scholze 在 Lectures on Condensed Mathematics 中使用了如下结果：

对任意正实数 $x_1,x_2$ 存在正常数 $C$ 使得
$$\\|\ell(x_1+x_2)-\ell(x_1)-\ell(x_2)\\|\le C(\\| x_1\\|+\\|x_2\\|)$$ 成立，其中 $\ell:x\mapsto x\log|x|$.

如果考虑 $\\|\cdot\\|$ 为绝对值 $|\cdot|$，则由初等方法便可证明 $C=\log2$，下面给出一种朴素的证明.

由对称性，可设 $x_1,x_2$ 中的一者为定值且大于零，故令 
$$f(x)=\dfrac{|\ell(x+c)-\ell(x)-\ell(c)|}{|x|+c}$$

i. 若 $x\in\R_{(0,+\infty)}$，$f^\prime(x)=\dfrac{c\log\dfrac{c}{x}}{(c+x)^2}$，即知
$$f(x)\le f(c)=\log2$$

ii. 若 $x\in\R_{(-c,0)}$，$f^\prime(x)=\dfrac{c\log-\dfrac{c}{(c+x)^2}}{(c-x)^2}$，于是
$$f(x)\le f(\phi^{-2}c)=\log\phi$$

iii. 若 $x\in\R_{(-\infty,-c)}$，$f^\prime(x)=-\dfrac{c\log\dfrac{-c}{(c+x)^2}}{(c-x)^2}$，
$$f(x)\le f(-\phi^{2}c)=\log\phi$$

其中 $\phi=\dfrac{1+\sqrt5}{2}$ 为黄金分割，证完.
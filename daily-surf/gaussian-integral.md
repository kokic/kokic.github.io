
---
title: 极坐标出现前人们怎样计算高斯积分
author: kokic
!date: November 2, 2024
---

这一证明最早似乎来自 Michael Rozman. 除此之外 MSE 上也有极类似的回答, 见 [此处](https://math.stackexchange.com/questions/390850/integrating-int-infty-0-e-x2-dx-using-feynmans-parametrization-trick). 

> M. Rozman, Evaluate Gaussian integral using differentiation under the integral sign, Course notes for Physics 2400 (UConn), Spring 2016. 

$\gdef\R{\mathbf{R}}$
$\gdef\spaces#1{~ #1 ~}$
$\gdef\d{\operatorname{d}}$

核心技巧来自一个函数 $F(t)$ 的构造. 对 $t \in \R$ 定义如下函数

$$
F(t) \spaces= \int_0^\infty \frac{e^{-t^2(1+x^2)}}{1+x^2} \d x
$$

容易验证 $F(t)$ 满足 $F(0)=\frac{\pi}{2}$, $F(\infty) = 0$, 以及最关键的

$$
F'(t) 
\spaces= \int_0^\infty -2te^{-t^2(1+x^2)} \d x 
\spaces= -2te^{-t^2} \int_0^\infty e^{-(tx)^2} \d x
$$

记高斯积分为 $I$. 这就有 $F'(t) = -2Ie^{-t^2}$, 此时再求 $F'(t)$ 于 $[0, \infty)$, 上的积分, 就能得到

$$
F(\infty)- F(0) \spaces= -2I \int_0^\infty e^{-t^2} \d t \spaces= -2I^2
$$

于是这给出 $I = \frac{\sqrt\pi}2$.  

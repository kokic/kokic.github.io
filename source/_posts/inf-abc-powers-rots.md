---
title: 幂的轮换和下界
date: 2021-07-23
categories:
  - 数学
tag:
  - 不等式
---

求最大的常数 $k$ 使得对任意正实数 $x,y,z$ 都有 $$x^y+y^z+z^x\gt k$$

实际上只要证明对任意正实数 $x,y$ 有 $x^y+y^x\gt1$ 即可

只需考虑 $x,y$ 均小于 $1$ 的情况，取变换
$$(x,y)\longmapsto\left(\dfrac{1}{1+a},\dfrac{1}{1+b}\right)$$
此时有 $a\gt0,b\gt0$，于是得到 
$$\begin{aligned}x^y+y^x&=\left(\dfrac{1}{1+a}\right)^{(1+b)^{-1}}+\left(\dfrac{1}{1+b}\right)^{(1+a)^{-1}}\\\ &=\dfrac{1}{(1+a)^{(1+b)^{-1}}}+\dfrac{1}{(1+b)^{(1+a)^{-1}}}\\\ &\ge\dfrac{1}{1+\dfrac{a}{1+b}}+\dfrac{1}{1+\dfrac{b}{1+a}}\\\ &=1+\dfrac{1}{1+a+b}\\\ &\gt1\end{aligned}$$ 其中第一个不等号利用了 Bernoulli 不等式，证完.

考虑原命题，不妨假设 $y=\max\\{x,y,z\\}$，于是 $$x^y+y^z\ge x^y+x^z\gt x^z$$ 这立即推出 $x^y+y^z+z^x\gt x^y+y^x\gt1$，证完.

---
<font color=grey>2021-08-17 补充</font>

另有一形式相仿的问题，求最大的常数 $k$ 使得对任意满足 $x+y=1$ 的正实数 $x,y$ 都有 $x^x+y^y\ge k$

由基本不等式立得 $4x^xy^y\ge k^2$，又由已知得 $x\in(0,1)$ $$\begin{aligned}x^xy^y&=x^x(1-x)^{(1-x)} \\\ &=\exp\bigg(x\log x+(1-x)\log(1-x)\bigg) \\\ &=\exp\bigg(-\int\log(x^{-1}-1)\mathrm{d}x\bigg) \\\ &\ge \exp\left(\log\dfrac{1}{2}\right) \\\ &=\dfrac{1}{2}\end{aligned}$$ 故 $k=\sqrt2$.
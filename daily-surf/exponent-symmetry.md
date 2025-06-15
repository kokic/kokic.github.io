
---
title: 经典对称幂指数不等式
author: [kokic](/kokic.md)
taxon: example
!date: June 20, 2019
---

$\gdef\spaces#1{~ #1 ~}$

设 $0 < x_1, x_2, \cdots, x_n < 1$. 试证

$$
x_1^{x_2} + x_2^{x_3} + \cdots + x_n^{x_1} > 1
$$

利用 [Bernoulli 不等式](/daily-surf/young-lemma-000B.md), $(1+\frac{x}{y})^{\frac{1}{x}} \geqslant 1+\frac{1}{y} > \frac{1}{y}$ 得到 $1+\frac{x}{y} > \frac{1}{y^x}$, 即 $y^x > \frac{1}{1+\frac{x}{y}}$. 

$$
\begin{aligned}
x_1^{x_2} + x_2^{x_3} + \cdots + x_n^{x_1} 
&\spaces> \sum_{1 \leqslant i \leqslant n} \frac{1}{1+\frac{x_1}{x_{i+1}}} \\
&\spaces> \sum_{1 \leqslant i \leqslant n} \frac{x_{i+1}}{x_1 + x_2 + \cdots + x_n} \\
&\spaces= 1
\end{aligned}
$$

此处 $i+1$ 按照 $\Z/n\Z$ 处理. 

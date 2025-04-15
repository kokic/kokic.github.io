
---
title: 曲线弧长计算
author: [kokic](/kokic.md)
!date: January 12, 2025
---

$\gdef\d{\operatorname{d}}$
$\gdef\spaces#1{~ #1 ~}$

由于弧长积分 $ s = \int_a^b \d s$, 此处 $\d s = \sqrt{(\d x)^2 + (\d y)^2}$ 是对参数曲线 $x=x(t)$, $y=y(t)$ 长度的微分. 

- 当 $y = f(x)$, $x \in [a,b]$ 时, $\d s = \sqrt{1+(f'(x))^2}\d x$. 
- 当 $t \in [\alpha, \beta]$ 时, $\d s = \sqrt{(x'(t))^2 + (y'(t))^2}\d t$. 
- 当曲线由极坐标方程 $\rho = \rho(\theta)$ 描述时, $\d s = \sqrt{(\rho(\theta))^2 + (\rho'(\theta))^2} \d \theta$. 

最后一个是因为 

$$
\begin{aligned}
\d s 
&\spaces= \sqrt{\bigg(\frac{\d x}{\d \theta}\bigg)^2 + \bigg(\frac{\d y}{\d \theta}\bigg)^2} \d \theta \\
&\spaces= \sqrt{(\rho'\cos \theta - \rho\sin \theta)^2 + (\rho'\sin \theta + \rho \cos \theta)^2} \d \theta \\
&\spaces= \sqrt{(\rho(\theta))^2 + (\rho'(\theta))^2} \d \theta \\
\end{aligned}
$$

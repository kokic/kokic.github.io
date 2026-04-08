
---
title: 三角参数化
author: [kokic](/trees/kokic.md)
taxon: exegesis
date: February 24, 2019
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\atan2{\operatorname{atan2}}$

<example title="二元 Cauchy 不等式">

考虑实曲线 $\Gamma: x^2 + y^2 = r^2$ 上的点 $(x, y)$. 由于存在参数化 $(r\cos \alpha, r\sin \alpha)$, 关于坐标分量 $x, y$ 的实多项式 $R[x,y]$ 在某些情况下可以化为单参数有界函数. 

如考虑 $ax + by = r(a \cos \alpha + b \sin \alpha)$, 记 $s^2 = a^2 + b^2$, $\varphi = \atan2(b,a)$, 对 $(a,b)$ 也使用三角参数化 $(s\cos\varphi, s\sin\varphi)$. 于是

$$
ax + by \spaces= s\cos\varphi \cdot r\cos \alpha + s\sin\varphi \cdot r\sin \alpha \spaces= rs \cos(\alpha - \varphi)
$$

这表明 $ax + by = \sqrt{a^2+b^2} \cdot \sqrt{x^2+y^2} \cdot \cos(-) \le \sqrt{a^2+b^2} \cdot \sqrt{x^2+y^2}$. 

</example>

<example title="一般情况的 Cauchy 不等式">

现在来看 $x^2 + y^2 + z^2 = r^2$ 和 $a^2 + b^2 + c^2 = s^2$, 要处理的多项式为 $ax + by + cz$. 同样三角参数化.

$$
\begin{aligned}
ax + by + cz 
&\spaces= a \underline{r\cos \alpha_1} + b \underline{r\cos \alpha_2 \sin \alpha_1} + c \underline{r \sin \alpha_1 \sin \alpha_2} \\
&\spaces= \underline{s \cos \varphi_1} x + \underline{s \cos \varphi_2 \sin \varphi_1} y + \underline{s \sin \varphi_1 \sin \varphi_2} z \\
&\spaces= rs (\cos\varphi_1\cos\alpha_1
+\sin\varphi_1\sin\alpha_1 \cos(\alpha_2-\varphi_2)) \\
&\spaces\le rs (\cos\varphi_1\cos\alpha_1
+\sin\varphi_1\sin\alpha_1) \\
&\spaces= rs \cos(\alpha_1 - \varphi_1) \\
&\spaces\le \sqrt{a^2 + b^2 + c^2} \cdot \sqrt{x^2 + y^2 + z^2}
\end{aligned}
$$

使用 $n$ 维球坐标系, 可以类似得到一般情况.

</example>


<example title="Titu 引理">

我们现在来证明 

$$
\frac{x_1^2}{\ell_1^2} + \frac{x_2^2}{\ell_2^2} + \frac{x_3^2}{\ell_3^2} \spaces\ge \frac{(x_1+x_2+x_3)^2}{\ell_1^2+\ell_2^2 + \ell_3^2}
$$

记 $k^2 = \frac{x_1^2}{\ell_1^2} + \frac{x_2^2}{\ell_2^2} + \frac{x_3^2}{\ell_3^2}$. 可设 $x_1 = k \ell_1 \cos \theta_1$, $x_2 = k \ell_2 \cos \theta_2 \sin \theta_1$, $x_3 = k \ell_3 \sin \theta_1 \sin \theta_2$, 全部相加得

$$
\begin{aligned}
x_1 + x_2 + x_3 
&\spaces= k (\ell_1 \cos \theta_1 + \ell_2 \underline{\cos \theta_2} \sin \theta_1 + \ell_3 \sin \theta_1 \underline{\sin \theta_2}) \\
&\spaces= k (\ell_1 \cos \theta_1 + \sqrt{\ell_2^2 + \ell_3^2} \sin \theta_1 \cos(-)) \\
&\spaces\le k (\ell_1 \cos \theta_1 + \sqrt{\ell_2^2 + \ell_3^2} \sin \theta_1) \\
&\spaces= k \sqrt{\ell_1^2 + \ell_2^2 + \ell_3^2} \cos(-) \\
&\spaces\le k \sqrt{\ell_1^2 + \ell_2^2 + \ell_3^2}
\end{aligned}
$$

这表明 $(x_1 + x_2 + x_3)^2 \le k^2 (\ell_1^2 + \ell_2^2 + \ell_3^2)$, 证明结束. 类似地, 使用 $n$ 维球坐标系, 可以得到一般情况. 

</example>

<example title="算术平均–几何平均不等式">

还是使用 $(x, y, z) = (r\cos \alpha_1, r\cos \alpha_2 \sin \alpha_1, r \sin \alpha_1 \sin \alpha_2)$, 但是处理多项式 $xyz$. 

$$
\begin{aligned}
xyz 
&\spaces= r^3 \cdot \sin \alpha_1 \cdot \cos \alpha_1 \sin \alpha_1 \cdot \cos \alpha_2 \sin \alpha_2 \\
&\spaces= r^3 \cdot \cos \alpha_1 \sin^2 \alpha_1 \cdot \cos \alpha_2 \sin \alpha_2 \\
&\spaces\le r^3 \cdot (\tfrac{2^2}{3^3} \cdot \tfrac{1}{2^2})^{\frac{1}{2}} \\
&\spaces= \tfrac{r^3}{3\sqrt{3}}
\end{aligned}
$$

因此 $(xyz)^2 \le \frac{1}{27} (x^2+y^2+z^2)^3$, 也就是算术平均--几何平均不等式 $$ xyz \spaces\le \Big(\frac{x+y+z}{3}\Big)^3 $$ 一般情况可以类似证得.

</example>

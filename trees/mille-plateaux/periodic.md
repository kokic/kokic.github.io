
---
title: 周期函数的构造
date: December 31, 2024
author: [kokic](/trees/kokic.md)
---

$\gdef\R{\mathbf{R}}$
$\gdef\Z{\mathbf{Z}}$
$\gdef\spaces#1{~ #1 ~}$

我们的目的是构造某些完备域上的非常值周期函数. 对于实数域 $\R$, [圆函数](/trees/mille-plateaux/circular-curve) 告诉我们这当然是可行的, 不过我们的构造过程应当不依赖于对圆函数的印象. 

<exegesis title="Weierstraß 的灵感来源">

$\gdef\spaces#1{~ #1 ~}$

对于周期 $1$. 下面这个观察因为 Weierstraß 的使用而变得广为人知. 具体来说, 可以从这样一个级数出发

$$ f(x) \spaces= \sum_{n \in \Z} \frac1{(n-x)^2}, \quad x \notin \Z $$

因为 $n$ 取遍了所有整数, $f(x)$ 在映射 $n \mapsto n + k$, $k \in \Z$ 下不变. 这样一来, 如果 $x$ 被选定为任意一个整数, 总会存在 $n-x$ 为零的项使整个级数发散, 这就要求 $x \notin \Z$. 同样的, $f(x)$ 在映射 $x \mapsto x + k$, $k \in \Z$ 下不变, 这就意味着 $f(x)$ 以 $1$ 为周期. 现在我们当然知道这个 $f(x)$ 其实就是 $\pi^2\csc^2(\pi x)$. 

由于 $(n-x)^2 \ge x^2-n^2$, 这使得如下级数也是收敛的 

$$ \sum_{n \in \Z\setminus\{0\}} \frac{x}{x^2-n^2} \quad (= ~ \pi\cot(\pi x)) $$

可以将 $\pi\cot(\pi x))$ 稍作整理. 视为, 在一维晶格 $\Z$ 上, 把每个格点处放一个简单极点, 再减去发散项使级数收敛. 

$$ \pi\cot(\pi z) \spaces= \frac1z + \sum_{n \in \Z\setminus\{0\}}\left(\frac1{z+n} - \frac1n\right) $$

至此, Weierstraß $\wp$ 立刻成为 $\pi\cot(\pi x))$ 的高次翻版.

$$ \wp(z, \Lambda) \spaces= \frac1{z^2} + \sum_{\omega\in\Lambda\setminus\{0\}} \left(\frac1{(z-\omega)^2}-\frac1{\omega^2}
\right) $$

</exegesis>

<exegesis title="双周期应线性无关">

$\gdef\R{\mathbf{R}}$
$\gdef\Q{\mathbf{Q}}$
$\gdef\Z{\mathbf{Z}}$
$\gdef\spaces#1{~ #1 ~}$

我们要求两个周期 $T_1,T_2$ 是 $\Q$-线性无关的, 否则周期之比 $\frac{T_1}{T_2} = \frac{p}{q} \in \Q$, $\gcd(p,q) = 1$, 这意味着 $T_i$ 生成的周期集合退化

$$
\begin{aligned}
\{ nT_1 + mT_2 : n,m \in \Z \} 
&\spaces= \left\{ \left(\frac{np}{q} + m \right) T_2 : n,m \in \Z \right\} \\
&\spaces= \left\{ (np + mq) \cdot \frac{T_2}{q} : n,m \in \Z \right\}
\end{aligned}
$$

此时 $np + mq \in \Z$, 所以该集合被周期 $\frac{T_2}{q}$ 生成, 矛盾.

</exegesis>

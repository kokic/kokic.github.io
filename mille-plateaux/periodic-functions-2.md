
---
title: 双周期函数
taxon: exegesis
---

$\gdef\R{\mathbf{R}}$
$\gdef\Q{\mathbf{Q}}$
$\gdef\Z{\mathbf{Z}}$
$\gdef\spaces#1{~ #1 ~}$

我们要求两个 $\R$-周期 $T_1,T_2$ 是 $\R$-线性无关的, 否则周期之比 $\frac{T_1}{T_2} = \frac{p}{q} \in \Q$, $\gcd(p,q) = 1$, 这意味着 $T_i$ 生成的周期集合退化

$$
\begin{aligned}
\{ nT_1 + mT_2 : n,m \in \Z \} 
&\spaces= \left\{ \left(\frac{np}{q} + m \right) T_2 : n,m \in \Z \right\} \\
&\spaces= \left\{ (np + mq) \cdot \frac{T_2}{q} : n,m \in \Z \right\}
\end{aligned}
$$

此时 $np + mq \in \Z$, 所以该集合被周期 $\frac{T_2}{q}$ 生成, 矛盾.


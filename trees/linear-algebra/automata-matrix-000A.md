
---
title: 二阶矩阵的逆
date: May 9, 2024
author: [kokic](/kokic.md)
taxon: example
---

$\gdef\spaces#1{~ #1 ~}$

作为热身运动, 我们现在来恢复一个经典的事实, 即二阶矩阵的逆. 对于二阶可逆矩阵 $M$, 其逆 $M^{-1}$ 可以由它的四个分量 $a,b,c,d$ 经由 $M \to 1-M \to (1-M)^*$ 这样的过程得到, 这里 $1$ 当然是单位矩阵. 

$$
\begin{aligned}
M^{-1}
&\spaces= (1-M)^* \\
&\spaces= \begin{pmatrix}1 - a & -b \\ -c & 1 - d\end{pmatrix}^* \\
&\spaces= \begin{pmatrix}
  (1 - a + b(1-d)^*c)^* & \quad \cdots \quad \\ 
  \quad \cdots \quad & \quad \cdots \quad
  \end{pmatrix} \\
&\spaces= \frac{1}{a d - b c} \begin{pmatrix}d & -b \\ -c & a\end{pmatrix}
\end{aligned}
$$

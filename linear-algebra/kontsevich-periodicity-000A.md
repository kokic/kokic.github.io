
---
title: $n=2$ 交换版本
page-title: 二阶矩阵交换版本
author: kokic
taxon: exegesis
!date: February 18, 2025
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\Mat{\operatorname{Mat}}$

我们来观察对于交换环 $R$ 和对应的 $\Mat_{2\times 2}(R)$ 中的矩阵, $(I_3 \circ I_2 \circ I_1)^2$ 具体做了些什么. 令 $\varphi = I_3 \circ I_2 \circ I_1$, 则 $\varphi(M)$ 可以算出是

$$
\varphi: ~ M ~\leadsto~ \det M \cdot S I_2(M) S^T
$$

其中 $S = (\begin{smallmatrix}0 & -1 \\ 1 & ~~~0\end{smallmatrix})$ 是一个行列式为 $1$ 的反对称矩阵 [^skew-adjoint], 记 $\tau: M \leadsto SI_2(M)S^T$, 可以验证 $\tau \circ \tau = \text{id}$. 现在我们来计算 $\varphi^2(M)$. 

$$
\begin{aligned}
\varphi^2(M) 
&\spaces= \varphi(\det M \cdot SI_2(M)S^T) \\
&\spaces= \det(\det M \cdot SI_2(M)S^T) \cdot S I_2(\det M \cdot SI_2(M)S^T) S^T \\
&\spaces= (\det M)^2 \det(SI_2(M)S^T) \cdot (\det M)^{-1}M \\
&\spaces= \det M \det(SI_2(M)S^T) \cdot M \\
&\spaces= \det M \det(I_2(M)) \cdot M
\end{aligned}
$$

也就是说 $\varphi^2(M)$ 实际上会是 $M$ 的常数倍, 并且这个常数是 

$$
\det M \det(I_2(M)) \spaces= (ad-bc)\Big(\frac1{ad}-\frac1{bc}\Big)
$$ 

[^skew-adjoint]: 当我们把 $S$ 看作线性映射 $A$ 的表示时, 在定义上 $A$ 就被称为反自伴算子. 

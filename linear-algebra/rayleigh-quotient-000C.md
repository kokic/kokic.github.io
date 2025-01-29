---
author: kokic
taxon: example
date: 2024-11-5
---

$\gdef\spaces#1{~ #1 ~}$

我们要求解问题可以叙述成下面的形式

$$
F \spaces= \frac{3a^2 + 4ab + 3b^2}{4a^2 + 12ab + 34b^2}, \quad \min_\R F, \quad \max_\R F
$$

这里相应的 $A = \scriptsize\begin{pmatrix} 3 & 2 \\ 2 & 3 \end{pmatrix}$, $B = \scriptsize\begin{pmatrix} 4 & ~~6 \\ 6 & 34 \end{pmatrix}$. 我们首先对 $B$ 进行 Cholesky 分解, 得到 $C = \scriptsize\begin{pmatrix} 2 & 0 \\ 3 & 5 \end{pmatrix}$ 使得 $B = CC^*$. 接下来通过 $C^{-1} A C^*{}^{-1}$ 求出 $D$ 及其对角化 $E$, 这样就结束了此问题.

$$
\begin{aligned}
D \spaces= \frac14 \begin{pmatrix} ~~~3 & -1 \\ -1 & ~~~\frac35 \end{pmatrix}, ~~
E \spaces= & \begin{pmatrix} 9-\sqrt{61} & 0 \\ 0 & 9+\sqrt{61} \end{pmatrix} \cdot \frac1{20}  \\ \spaces= &\begin{pmatrix} \min_\R F & 0 \\ 0 & \max_\R F \end{pmatrix} 
\end{aligned}
$$

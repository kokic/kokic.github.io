
---
title: Rayleigh 商定理
author: kokic
taxon: theorem
date: 2024-11-5
---

$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$

设矩阵 $M$ 是 $n$ 阶对角矩阵, 即 

$$
M \eqq \begin{pmatrix}
\lambda_{1} \\
  & \ddots \\
  & & \lambda_{n}
\end{pmatrix}
$$

则对非零向量 $x$ 和 $x$ 的共轭转置 $x^*$
有如下结果:  

$$
\min\limits_{1 \leqslant i \leqslant n}\lambda_{i}
\quads\leqslant \frac{x^{\ast}Mx}{x^{\ast}x} 
\quads\leqslant \max\limits_{1 \leqslant i \leqslant n}\lambda_{i}
$$

其中 $\max\limits_{1 \leqslant i \leqslant n}\lambda_{i}$ 常被称作谱半径. 

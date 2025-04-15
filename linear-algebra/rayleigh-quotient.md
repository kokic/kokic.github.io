
---
title: Rayleigh 商定理
author: [kokic](/kokic.md)
taxon: theorem
!date: November 5, 2024
---

$\gdef\spaces#1{~ #1 ~}$

设矩阵 $M$ 是 $n$ 阶对角矩阵, 即 

$$
M \spaces= \begin{pmatrix}
\lambda_{1} \\
  & \ddots \\
  & & \lambda_{n}
\end{pmatrix}
$$

则对非零向量 $x$ 和 $x$ 的共轭转置 $x^*$
有如下结果:  

$$
\min\limits_{1 \leqslant i \leqslant n}\lambda_{i}
\spaces\leqslant \frac{x^{\ast}Mx}{x^{\ast}x} 
\spaces\leqslant \max\limits_{1 \leqslant i \leqslant n}\lambda_{i}
$$

其中 $\max\limits_{1 \leqslant i \leqslant n}\lambda_{i}$ 常被称作谱半径. 

[+ 某类二次型的商](/linear-algebra/rayleigh-quotient-000A.md#:embed)

Rayleigh 商定理中的对角矩阵 $M$ 可推广到 Hermite 矩阵 [^hermite-matrix], 也即 $M$ 是共轭对称的方阵 $M^* = M$, 对实数而言这当然就是对称矩阵. 稍稍回忆线性代数, 有限维谱定理说: 

- 任何实对称矩阵都可以由正交矩阵对角化. 
- 任何复对称矩阵都可以由酉矩阵对角化, 即 Autonne--Takagi 分解. 

具体而言, 对于每个实对称矩阵 [resp., 复对称矩阵] $A$, 都存在一个实正交矩阵 [resp., 酉矩阵] 使得 $Q^* A Q$ 是对角矩阵. 

[+ 二阶情形](/linear-algebra/rayleigh-quotient-000B.md#:embed)

广义 Rayleigh 商 $\frac{x^* A x}{x^* B x}$ 可以通过变换 $D = C^{-1} A C^*{}^{-1}$ 简化为 Rayleigh 商 $\frac{x^* D x}{(C^*x)^*(C^*x)}$, 其中 $C C^*$ 是 Hermite 正定矩阵的 Cholesky 分解. 对此, 我们也给出一例. 

[+ 一般二次型的商](/linear-algebra/rayleigh-quotient-000C.md#:embed)

<!-- [+ 含一次项的情况](/linear-algebra/rayleigh-quotient-000D.md#:embed) -->

[^hermite-matrix]: 自伴随矩阵, 复对称矩阵. 

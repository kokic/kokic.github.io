
---
title: 分块矩阵的逆
date: May 10, 2024
author: [kokic](/trees/kokic.md)
taxon: example
---

$\gdef\spaces#1{~ #1 ~}$

我们下面来处理 $n \times n$ 矩阵 ($n \ge 3$) 的逆, 将其分块并假定后续要取逆的矩阵都是非奇异的

$$
M \spaces= \begin{pmatrix} A & B \\ C & D \end{pmatrix}, \quad 1-M \spaces= \begin{pmatrix} 1-A & -B \\ -C & 1-D \end{pmatrix}
$$

我们还是直接计算 $(1-M)^*$, 实际上这非常容易. 回顾 $M^*$

$$
M^* \spaces= \begin{pmatrix}
(A+BD^*C)^* & (A+BD^*C)^*BD^* \\ 
D^*C(A+BD^*C)^* & D^* + D^*C(A+BD^*C)^*BD^* 
\end{pmatrix}
$$

类似的记 $\alpha_\square$ 为方阵 $\square$ 分为 $4$ 块后的左上角第 $1$ 部分. $\alpha_{M^*} = (A+BD^*C)^*$, $\alpha_{M^{-1}} = \alpha_{(1-M)^*}$, 则 

$$
\begin{aligned}
\alpha_{M^{-1}}
&\spaces= (1 - A + B(1-D)^*C)^* \\
&\spaces= (1 - A + BD^{-1}C)^* \\
&\spaces= (1 - (A - BD^{-1}C))^* \\
&\spaces= (A - BD^{-1}C)^{-1}
\end{aligned}
$$ 

同样, 考虑分块的其他部分  

$$
\begin{CD}
M @>>> 1-M \\
@VVV  @VVV \\
M^* @>>> (1-M)^*
\end{CD}
$$

在 $M \to 1-M$ 这个箭头下, $M$ 当中所有的 $D$ 会被替换为 $1-D$, 因此 $M^*$ 当中所有的 $D^*$ 可以直接替换为 $D^{-1}$. 而 $B, C$ 在 $M \to 1-M$ 下替换为 $-\square$, 于是现在立刻有

$$
\begin{aligned}
M^{-1}
&\spaces= \begin{pmatrix} \alpha_{M^{-1}} & -\alpha_{M^{-1}} BD^{-1} \\ -D^{-1}C \alpha_{M^{-1}} & D^{-1} + D^{-1}C \alpha_{M^{-1}} BD^{-1} \end{pmatrix} \\
&\spaces= \begin{pmatrix} (A - BD^{-1}C)^{-1} & -(A - BD^{-1}C)^{-1} BD^{-1} \\ -D^{-1}C (A - BD^{-1}C)^{-1} & D^{-1} + D^{-1}C (A - BD^{-1}C)^{-1} BD^{-1} \end{pmatrix} \\
\end{aligned}
$$

在这里, 我们得到了一个相当经典且重要的结果, 即分块求逆. 

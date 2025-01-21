
---
title: 置换矩阵构造
author: kokic
taxon: exegesis
date: 2025-1-16
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$
$\gdef\str#1{{\footnotesize #1}}$
$\gdef\sstr#1{~{\footnotesize #1}~}$
$\gdef\Mat{\operatorname{Mat}}$

置换矩阵基本上可以认为是置换群的矩阵构造, 或者说矩阵表示. 这也可以为 [此处](/mille-plateaux/bubble-compose.md) 的结论及证明提供直观. 

首先, 显然所有的置换矩阵都是单位矩阵 $I_n$ 的重新排列. 我们先从置换群 $S_2$ 也就是对换开始. 只考虑其中的非单位元 $\sigma = (1 ~~ 2)$.

$$
\begin{pmatrix} 0 & 1 \\ 1 & 0 \\ \end{pmatrix}
\begin{pmatrix} x_1 \\ x_2 \\ \end{pmatrix}
\spaces=
\begin{pmatrix} x_2 \\ x_1 \\ \end{pmatrix}
, \quad
\begin{pmatrix} 0 & 1 \\ 1 & 0 \\ \end{pmatrix} 
\spaces\hookrightarrow 
(1 ~~ 2)
$$

现在来考虑对换的复合, 为了通过矩阵去计算 $(2 ~~ 3)(1 ~~ 2)$, 我们实际上需要先对齐这两个方阵的阶. 换一种角度说, 对换记号 $(i ~~ j)$ 对应的并不是某个固定的方阵, 而是全体如下形式方阵当中的一个 [^horizontal-exchange]. 

$$ I_n \sstr{交换水平方向的} i ~ j \sstr{列得到的方阵} $$

当然, 如果我们固定 $n$, 这样的对应就是唯一的了. 
我们在这里强调水平方向是因为台湾等地区关于行列的称呼与大陆是相反的. 具体到矩阵乘法时, 从 $(i ~ ~ j)$ 对应的方阵中选取同阶方阵进行运算.  

$$
\underbrace{\begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}}_{(2 ~ 3) ~ \curvearrowright ~ I_3}
\spaces\cdot
\underbrace{\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}}_{(1 ~ 2) ~ \curvearrowright ~ I_3}
\eqq
\underbrace{\begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}}_{(3 ~ 1 ~ 2) ~ \curvearrowright ~ I_3}
$$

将矩阵乘法得到的结果翻译回置换，这当然就是 $(3 ~~ 1 ~~ 2)$, 与我们直接计算置换的复合相符. 也就是说 

$$
\sigma_2\sigma_1 \quads\cong (\sigma_2 \curvearrowright I) \cdot (\sigma_1 \curvearrowright I)
$$

<!-- 
$$ 
\sigma \curvearrowright \vec x \eqq (\sigma \curvearrowright I_{|\vec x|}) \cdot \vec x
$$ 
-->

[^horizontal-exchange]: 规定为垂直方向当然也可行, 但这样会使得 $A\vec x$ 当中的 $A$ 必须记为它的转置 $A^T$. 

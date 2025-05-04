
---
title: Stern -- Brocot 树
author: [kokic](/kokic.md)
taxon: definition
!date: May 4, 2025
---

$\gdef\Q{\mathbf{Q}}$
$\gdef\N{\mathbf{N}}$
$\gdef\spaces#1{~ #1 ~}$

Stern -- Brocot 树是用于生成全体正有理数 $\Q_{\gt 0}$ 的二叉搜索树. 生成过程如下: 考虑 $\N^2$ 中的元素 $(a, b)$ 并形式地记为 $\frac{a}{b}$, 定义分量加法 

$$ \frac{a}{b} + \frac{c}{d} \spaces= \frac{a+c}{b+d} $$ 

放置 $\frac{0}{1}$ 和 $\frac{1}{0}$ 于水平线两侧充分远处, 相加给出 $\frac{1}{1}$, 这是二叉树的根节点. 随后按邻近的两个上层节点值通过分量加法给出当前层的各节点值, 如图所示. 

$$
\def\arraystretch{1.5}
\begin{array}{c|ccccc|c}
\frac{0}{1} & & & & & & \frac{1}{0} \\
& & & \frac{1}{1} & & & \\
& & \frac{1}{2} & & \frac{2}{1} & & \\
& \frac{1}{3} & & \frac{2}{3} \quad \frac{3}{2} & & \frac{3}{1} & \\
& & & \vdots & & &
\end{array}
$$

不难发现, 此树的每一层连同两侧的值正是 Farey 序列 $\mathcal{F}_n$. 与连分数类似, Stern -- Brocot 树也可用于找到一个数的最佳有理近似. 

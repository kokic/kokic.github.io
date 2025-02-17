
---
title: 闭半环的 Conway 条件
author: kokic
taxon: exegesis
!date: January 29, 2025
---

$\gdef\Q{\mathbf{Q}}$

Conway 证明了星半环矩阵可替换的条件为, 至少满足以下三个等式

$\quad 1.$ $a \cdot 0 = 0 \cdot a = 0$. \
$\quad 2.$ $(ab)^* = 1 + a(ba)^*b$. \
$\quad 3.$ $(a+b)^* = (a^* b)^* a^*$. 

闭半环和 Conway 半环都自然地满足这些条件. 实际上这也是星半环构成 Conway 半环的条件, 这些条件可以等价地叙述为: 

$\quad (i).~$ 对于星半环 $S$, 星半环矩阵 $a \in S^{2\times 2}$ 满足不动点方程 $1+aa^* = a^*$. 并且这里实际上只需要对上三角或下三角矩阵验证即可. \
$\quad (ii).$ 对于星半环 $S$ 和每个 $n \ge 0$, 星半环矩阵 $a \in S^{n\times n}$ 满足不动点方程 $1+aa^* = a^*$. 

每个闭半环都是 Conway 半环, 反过来则未必, 如 Conway 半环 $\Q_{\ge 0}\cup \{\infty\}$ 就不是闭半环.  

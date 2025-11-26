
---
title: 删除--收缩公式
date: July 21, 2024
taxon: theorem
author: [kokic](/trees/kokic.md)
tag: [](/trees/pearls.md)
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\quads#1{\quad #1 \quad}$
$\gdef\without{\setminus}$

对于简单图 $G$, 其色多项式 $\pi(G)$ 成立如下关系 

$$ \pi(G) \spaces= \pi(G \without e) \spaces- \pi(G / e), \quad \forall ~ e \in \text{Edge}(G) $$

<proof>

$\gdef\str#1{{\footnotesize #1}}$
$\gdef\sstr#1{~{\footnotesize #1}~}$

假定边 $e$ 的两个端点分别为 $A,B$, 不难发现

$$
\begin{aligned} 
\pi(G \without e) 
&\spaces= \pi(G \without e \sstr{中} A,B ~\str{同色的部分}) ~ + ~ \pi(G \without e \sstr{中} A,B ~\str{异色的部分}) \\
&\spaces= \pi(G / e) ~ + ~ \pi(G)
\end{aligned}
$$

此处, $G \without e$ 是将 $G$ 的边 $e$ 删去, $G/e$ 是将 $e$ 两侧的顶点合并为一个. 

</proof>

这个结果可等价地叙述成连接的版本, 可称为 "连接--收缩公式". 对于简单图 $G = (V, E)$

$$ \pi(G) \spaces= \pi(G + uv) \spaces+ \pi(G / uv), \quad \forall ~ uv \notin E $$

这里, $G+e$ 是指将 $e$ 两侧的顶点连接, $u v$ 是指顶点 $u, v$ 连接得到的边. 

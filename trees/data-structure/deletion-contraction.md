
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

[.](./deletion-contraction-pf.md#:embed)

这个结果可等价地叙述成连接的版本, 可称为 "连接--收缩公式". 对于简单图 $G = (V, E)$

$$ \pi(G) \spaces= \pi(G + uv) \spaces+ \pi(G / uv), \quad \forall ~ uv \notin E $$

这里, $G+e$ 是指将 $e$ 两侧的顶点连接, $u v$ 是指顶点 $u, v$ 连接得到的边. 

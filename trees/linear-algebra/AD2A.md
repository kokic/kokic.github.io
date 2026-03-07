
---
title: 分裂域
taxon: definition
---

$\gdef\spaces#1{~ #1 ~}$

设 $k$ 为一个域, $p \in k[x]$ 为 $n$ 次首一多项式. $p$ 的一个分裂域是一个域扩张 $i : k \hookrightarrow E$, 使得在 [将 $p$ 视为 $E[x]$ 中的多项式](./AD2B.md) 时, 该多项式可分解为可重复的一次因式之乘积：

$$ p(x) = (x - r_1)(x - r_2) \cdots (x - r_n) $$

其中所有根 $r_i$ 均属于 $E$, 且包含 $k$ 和这些根的最小子域就是 $E$ 本身, 也即 $E$ 被这些根生成 

$$ E \spaces= k(r_1, \dots, r_n) $$

换言之, 不存在任何 $E$ 的真子域包含所有根 $r_i$. 

更一般地, 给定一个集合 $S = \{ {\footnotesize 首一多项式} ~ p : p \in k[x] \}$. 若一个域扩张 $E/k$ 使得每个 $p \in S$ 在 $E$ 上均可分解, 并且 $E$ 作为域是由这些伴随根在 $k$ 上生成的, 则称 $E$ 为 $S$ 的分裂域. 

[](./AD2C.md#:embed)


---
title: 有效长度的上下界
author: [kokic](/kokic.md)
taxon: exegesis
!date: November 06, 2024
---

$\gdef\spaces#1{~ #1 ~}$

一个可供探究的问题是, 给定 $n$ 节点二叉树, 询问其 Hille 编码 $H_n$ 有效长度 $\ell(H_n)$ 的范围. 这里的有效不外乎是指去除末尾连续的 `0`. 我们将对此问题给出确切的回答.

任意 $n$ 节点二叉树的 Hille 编码的有效长度满足下面的不等式

$$n \spaces\leqslant \ell_{n} \spaces\leqslant \max(0,2n - 1,3n - 4)$$

下界 $n$ 的验证是容易的, 构造一棵 $n$ 节点二叉树最少也需要 $n$ 个 `1`.
由于 [此处](./stack-permutation-000A.md) 的讨论, 我们只需要验证 $n \geqslant 3$ 时 Hille 编码的有效长度至多是 $3n - 4$. 

[.](./stack-permutation-000G.md#:embed)

反过来, 从树 $M$ 出发, 也可以验证任何使得节点总数不变的操作都不会增加其 Hille 编码的有效长度. 更进一步, 我们可以断言任何使得节点总数不变的操作都将严格减小其 Hille 编码的有效长度. 换言之, 使得 $\ell(B) = 3n-4$ 的二叉树 $B$ 的结构是唯一的, 即 $M$. 

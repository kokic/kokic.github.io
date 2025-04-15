
---
title: 栈编码与 Hille 编码的等价性
author: [kokic](/kokic.md)
taxon: proposition
!date: November 06, 2024
---

首先容易验证的是, 中序遍历总是能够给出二叉树 $b \in B$ 到栈置换 $s \in S$ 的映射, 而对于每一个栈置换 $s \in S$, 都能够写出唯一的二进制序列, 即栈编码 $c \in C$. 不考虑末尾连续的 `0`, 当栈编码 $c$ 与二叉树 $b$ 的 Hille 编码 $h \in H$ 相同时, 对 $B$ 直接进行中序遍历便能得出正确的 Hille 编码. 

$$
\begin{CD}
B @>>> S \\
  @VVV @VVV \\
H @>>> C
\end{CD}
$$

[.](/data-structure/stack-permutation-000C.md#:embed)

现在, Hille 原文所使用的 `encode` 算法就是 $h \circ g: B \to C$, 而预期的正确实现则是 $f$, 因此两者在结果上相差一个同构.  

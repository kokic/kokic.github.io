
---
title: 栈编码与 Hille 编码的等价性
author: kokic
taxon: proof
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

记 $B \to H$ 为 $f$, 根据 [Hille 编码](/data-structure/hille-encode.md) 的定义, $f$ 是一个双射. 根据二叉树的性质, $g: B \to S$ 是中序遍历, 前文已经固定栈置换的入栈顺序为 $123\cdots n$, 这样一来就固定了 $B$ 的层序遍历, 因此 $g$ 也是双射. 现在来看 $h: S \to C$, 这显然也是一个双射. 最后, 我们能够从 $h \in H$ 当中恢复出 $c \in C$ 的信息, 只要将 $h$ 序列视为栈编码, 并且忽略空栈的弹出, 这就意味着 $H \to C$ 是满射, 随后利用 $C \to S \to B \to H$, 这样就得到了 $H \cong C$. 

现在, Hille 原文所使用的 `encode` 算法就是 $h \circ g: B \to C$, 而预期的正确实现则是 $f$, 因此两者在结果上相差一个同构.  

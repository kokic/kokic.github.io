
---
author: kokic
taxon: proof
!date: November 06, 2024
---

记 $B \to H$ 为 $f$, 根据 [Hille 编码](/data-structure/hille-encode.md) 的定义, $f$ 是一个双射. 根据二叉树的性质, $g: B \to S$ 是中序遍历, 前文已经固定栈置换的入栈顺序为 $123\cdots n$, 这样一来就固定了 $B$ 的层序遍历, 因此 $g$ 也是双射. 现在来看 $h: S \to C$, 这显然也是一个双射. 最后, 我们能够从 $h \in H$ 当中恢复出 $c \in C$ 的信息, 只要将 $h$ 序列视为栈编码, 并且忽略空栈的弹出, 这就意味着 $H \to C$ 是满射, 随后利用 $C \to S \to B \to H$, 这样就得到了 $H \cong C$. 

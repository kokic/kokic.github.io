
---
title: 栈置换--二叉树同构
!date: November 06, 2024 --- November 08, 2024 
author: [kokic](/kokic.md)
license: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en)
---

[*](/data-structure/stack-permutation-0003.typ#:shared)

[+](/data-structure/stack-permutation.md#:embed)

不难发现, $A$ 的所有栈置换其实就是 $A$ 的所有出栈可能. 熟知 $n$ 元素栈共有 $\frac1{n+1}{2n \choose n}$ 种出栈情况. 另一方面, $n$ 个节点能构成 $\frac1{n+1}{2n \choose n}$ 种二叉树, 两者的计算都可以在 Catalan 数的相关条目中找到. 这表明两者作为集合同构, 一个可以考虑的问题是, 如何实现该同构? 即, 具体地写出这个双射. 这方面的 [开创性工作](/bib/hille1982stack.md) 来自 R. F. Hille. 

[+](/data-structure/hille-encode.md#:embed)

相应的, 可以据此定义 Hille 编码的解析规则, 用于将这样一段有效的二进制序列转换为构造一颗二叉树的若干操作. 我们使用一种类 BNF 文法来定义这个解析器, 仅供读者理解. 

[](/data-structure/stack-permutation-0004.typ#:block)

由于我们的讨论不涉及具体元素, 不失一般性, 可以固定栈置换的入栈顺序为 $123\cdots n$. 同时这些数字也是二叉树节点的标签. 影响出栈序列的只有压入和弹出两个操作, 而构建二叉树允许的操作粗看起来要多一些. 因此首先需要通过一些技巧将二叉树构建操作的表示简化. 我们将栈的压入和弹出分别编码为 `1` 和 `0`, 并将栈置换对应的二进制序列称为栈编码. 对应的, 以 [Hille 编码](/data-structure/hille-encode.md) 刻画二叉树的构建. 

[+](/data-structure/stack-permutation-000A.md#:embed)

这个过程的反向实际上并不平凡, 如果只考虑 $n=3$ 也就是上图的情况, 敏锐的读者可以发现, 这些栈置换其实就是二叉树按节点添加顺序 [^hille-order] 编号后的中序遍历序列 [^inorder-sequence]. 我们接下来将解释其中的不平凡之处, 以及这一巧合发生的 [具体条件](/data-structure/stack-permutation-000B.md). 首先是对原始文献的一个观察, [Hille 原始文献](/bib/hille1982stack.md) 当中提出的算法实际上存在错误, 将之改写成 Lean4 语言, 即

[](/data-structure/stack-permutation-0002.typ#:code)

只要考虑下面这个例子即可发现, 将一棵二叉树转化为它的 Hille 编码并非是简单的中序遍历. 

[](/data-structure/stack-permutation-0003.typ#:block)

可以验证, 从 `110100100` 这个编码出发, 无法直接恢复原本的 [#scale(40%, reflow: true, tree4(0.25))](inline-1pt-1pt), 其正确的 Hille 编码应该为 `1101000100`. 但是另一方面, 如果将序列 `110100100` 解释为栈的压入弹出操作, 即栈编码, 则可以得到正确的栈置换 `2314`. 这就意味着, 当二叉树的节点个数 $n > 3$ 时, 存在二叉树使得其栈编码与 Hille 编码不同. 回忆二叉树和栈置换之间的双射关系, 这表明必然存在一套手续允许我们在两者之间互相转换, 下面我们将构造性地给出这个结果. 见 [](/data-structure/stack-permutation-000B.md). 随后通过 [](/data-structure/stack-permutation-000E.md) 解释, 为何中序遍历在 $n$ 不大情况下能够频繁得到正确的 Hille 编码. 

[+](/data-structure/stack-permutation-000B.md#:embed)

[+](/data-structure/stack-permutation-000D.md#:embed)

[+](/data-structure/stack-permutation-000E.md#:embed)

[+](/data-structure/stack-permutation-000F.md#:embed)

[^hille-order]: 即按照 Hille 编码逐步添加节点的顺序. 

[^inorder-sequence]: 如二叉树 `1101000100` 按添加顺序对节点编号, 然后做中序遍历得到的是 `2314`. 

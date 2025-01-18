
---
title: 二叉树类型
author: kokic
taxon: definition
date: 2024-9-24
---

$\gdef\spaces#1{~ #1 ~}$

二叉树意味树的每个结点最多两个子树. 其类型由两个构造器归纳给出

[](/data-structure/tree-def.typ#:block)

叶结点构造器 `leaf` 用于构造出一棵空树, 空树作为某个结点的所有子结点时, 该结点正是叶结点. 相应的, 二叉树的值存储在非叶结点中. 每个 (非空, 无标记) 二叉树类型的值要么是一个单结点 $\{\text{pt}\} = 1$, 要么等价于二叉树的有序配对 $B \times B = B^2$. 即 $B \xrightarrow{\sim} \{\text{pt}\} \sqcup B^2$. 

[](/data-structure/binary-tree.typ#:block)

换言之, 二叉树可定义为某种满足 $B=1+B^2$ 的 (代数) 结构. 回顾 $6$ 次分圆多项式 $$ \Phi_6(x) \spaces= x^2-x+1 $$ 其复根 $\zeta_6$, $\zeta^{-1}_6$ 是所谓的 $6$ 次本原单位根. 

<!-- 记二叉树上所有度为 $d$ 的结点为集合 $N_d$, $n_d = |N_d|$. 对于每个叶结点 $\ell \in N_0$, 它总是有一个双亲节点, 而非叶结点 $N_{>0} = N_1 \cup N_2$ 至少有一个子节点.   -->

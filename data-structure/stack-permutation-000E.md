
---
title: 相交率
author: kokic
taxon: corollary
!date: November 06, 2024
---

记 Catalan 数为 $c_n$, 也即 $H_n$ 或 $C_n$ 的个数. 自然要问 $|H \cap C_n|$ 在全体 $n$ 节点二叉树个数中所占的比例与 $n$ 的关系. 根据 [](/data-structure/stack-permutation-000D.md) 与 Catalan 数的渐进估计 $a_{n} \sim \frac{\sqrt{2 + r}}{2\sqrt{\pi}n^{3/2}r^{n}}$, $c_n \sim \frac{4^n}{\sqrt\pi n^{3/2}}$ 可以知道 $\lim\limits_{n\to\infty} \frac{a_n}{c_n} = 0$. 并且事实上只要二叉树的节点个数 $n$ 大于 $8$, $H_n$ 与 $C_n$ 相同的部分就会少于整体的一半. 

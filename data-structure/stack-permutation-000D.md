
---
title: 有效长度估计
author: kokic
taxon: exegesis
!date: November 06, 2024
---

$\gdef\spaces#1{~ #1 ~}$

另一个可供探究的问题是 Hille 编码的有效长度 $L$, 这里有效长度指的是 Hille 编码去除末尾连续的 `0` 后所得的字符串长度. 
固定二叉树的节点个数 $n$, 这 $\frac1{n+1}{2n \choose n}$ 棵树的有效长度最短当然是 $n$. 当 $n=0$ 时 $L=0$, 当 $1 \le n \le 3$ 时 $L \le 2n-1$, 而当 $3 \le n$ 时 $L \le 3n-4$, 即 

$$
n \spaces\le L_n \spaces\le \max(0, 2n-1, 3n-4)
$$   

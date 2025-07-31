
---
title: 代数数可数
date: July 25, 2020
author: [kokic](/kokic.md)
---

$\gdef\Q{\mathbf{Q}}$
$\gdef\N{\mathbf{N}}$
$\gdef\Z{\mathbf{Z}}$
$\gdef\C{\mathbf{C}}$
$\gdef\A{\mathbb{A}}$
$\gdef\spaces#1{~ #1 ~}$

代数数即 $\Q$-系数首一多项式的根, 容易看出这也是任意整系数多项式方程的根. 1874 年, Cantor 在文章 ["Ueber eine Eigenschaft des Inbegriffes aller reellen algebraischen Zahlen"](https://en.wikipedia.org/wiki/Cantor's_first_set_theory_article) 中运用多项式高度的概念证明了实代数数的可数性. 

Cantor 的思路很大程度上可以视为一种数论策略. 他首先想的是对多项式 $P$ 定义一个恰当的高度概念 $H(P) \in \N$, 使得一旦我们固定了正整数 $h$, 则只会存在有限个多项式 $P$ 满足 $H(P) = h$, 且任意多项式都能被某个高度覆盖. 即用高度分类全体多项式的同时又控制了多项式的复杂程度. 随后, 代数基本定理保证给定 $n$ 次多项式, 其根在 $\C$ 上至多只有 $n$ 个, 全体代数数便可以写为可数个有限集的并, 如此证得. 

遵循着这种思路, Cantor 给出的高度定义为: 

$$
H(P) \spaces= \deg P - 1 + \sum_{0 \le i \le n} |a_i|
$$

反过来, 任给一个整系数多项式 $P$, 我们都能计算他的 $H(P) \in \N$. 

$\textbf{Lemma.}$ 固定 $h \in \N$, 则集合 $P_h = \{ P \in \Z[x] : H(P) = h \}$ 有限. 

$\textit{proof.}$ 注意到此时多项式的次数最多是 $H$, 因为至少有一个非零整系数 $a_i$ 使得 $|a_i| \ge 1$. 另一方面, 每个 $a_i$ 也满足 $|a_i| \le H$, 因此一个多项式的所有信息都被正整数 $H$ 控制, 故 $P_h$ 有限. 

$\textbf{Lemma.}$ 固定 $h \in \N$, 集合 $R_h = \{ z \in \C : P(z) = 0, P \in P_h \}$ 有限. 

$\textit{proof.}$ 对 $P \in P_h$ 处每一个固定的 $P$ 使用代数基本定理, 便可得到此时的 $z$ 也只有有限多个. 

$\textbf{Theorem.}$ 代数数只有可数多个. 根据代数数域 $\A$ 的定义之一, 我们知道

$$
\A \spaces= \bigcup_{h \in \N} R_h
$$

所以 $|\A| = |\N|$, 即可数.  

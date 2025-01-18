
---
title: 
author: kokic
taxon: proof
date: 2024-7-21
---

$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$
$\gdef\without{\setminus}$

$\gdef\str#1{{\footnotesize #1}}$
$\gdef\sstr#1{~{\footnotesize #1}~}$

假定边 $e$ 的两个端点分别为 $A,B$, 不难发现
$$\begin{aligned} 
\pi(G \without e) 
&\eqq \pi(G \without e \sstr{中} A,B ~\str{同色的部分}) ~+ \\
& \kern{3.3em} \pi(G \without e \sstr{中} A,B ~\str{异色的部分}) \\
&\eqq \pi(G / e) + \pi(G)
\end{aligned}$$

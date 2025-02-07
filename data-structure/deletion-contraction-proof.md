
---
title: 
author: kokic
taxon: proof
!date: July 21, 2024
---

$\gdef\quads#1{\quad #1 \quad}$
$\gdef\spaces#1{~ #1 ~}$
$\gdef\without{\setminus}$

$\gdef\str#1{{\footnotesize #1}}$
$\gdef\sstr#1{~{\footnotesize #1}~}$

假定边 $e$ 的两个端点分别为 $A,B$, 不难发现
$$\begin{aligned} 
\pi(G \without e) 
&\spaces= \pi(G \without e \sstr{中} A,B ~\str{同色的部分}) ~ + ~ \pi(G \without e \sstr{中} A,B ~\str{异色的部分}) \\
&\spaces= \pi(G / e) ~ + ~ \pi(G)
\end{aligned}$$

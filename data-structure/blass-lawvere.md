
---
title: Blass--Lawvere 定理
author: [kokic](/kokic.md)
taxon: theorem
!date: September 24, 2024
---

$\gdef\N{\mathbf{N}}$
$\gdef\Z{\mathbf{Z}}$

记 $B$ 是二叉树类型, 则存在一个 ["极精确的双射"](/bib/blass1995seven.md) $B \xrightarrow{\sim} B^7$. 

显然并非所有 $\zeta_6$ 满足的等式都能提升到 $B$ 之间的同构, 如 $B^6 \ncong 1$. 自然的问题是, 哪些等式能提升到同构? 这个问题由下面的 [Fiore--Leinster 定理](/data-structure/fiore-leinster.md) 回答. 

[.](/data-structure/fiore-leinster.md#:embed)

特别的, 取 $f(x)=1+x^2$, [Fiore--Leinster 定理](/data-structure/fiore-leinster) 表明, 若在 $\N[x]/(x=1+x^2)$ 中成立  $f(x) = g(x)$, 则存在 "极精确的双射" $f(B) \cong g(B)$. 在 $\N[x]/(x=1+x^2)$ 中可以演绎得到 $x=x^7$ 但无法给出 $1=x^6$. 对于前者 $x^7-x = (x^2-x+1)(x^5+x^4-x^2-x) = 0$. 再看 $x^4 + x^2 + 1 = (x^2 + x + 1)(x^2 - x + 1)$, 这给出 $B^4+B^2+1 \ncong 0$, $B^4+B^2+B+1=B$. 

这套想法亦可应用于其他树结构, 如有根平面树, 其每个结点有 $0$, $1$ 或 $2$ 个子结点, 即 $T \cong 1+T+T^2$. 由 [Fiore--Leinster 定理](/data-structure/fiore-leinster.md), 存在 "极精确的双射" $T \cong T^5$.


---
title: Kock–Lawvere
author: kokic
taxon: axiom
date: 2024-5-13
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\R{\mathbf{R}}$

首先需要强调的是, 这个公理所涉及到的结构的有效性全都依赖于意象理论, 而相关基础的严格性保证基本上在 1970 年之前就已经由 [William Lawvere](/person/william-lawvere) 完工. 记 $\mathcal{E}$ 是光滑空间之间的光滑映射构成的范畴, 同时假定 $\mathcal{E}$ 还是笛卡尔闭范畴, 也就是 $\mathcal{E}$ 中的箭头对笛卡尔积封闭. 

我们可以从 $\mathcal{E}$ 中选出一条几何直线 $R$, 通过指定 $R$ 上两点 $0$ 和 $1$ 之间的距离作为单位长度来确定其他线段的长度. 发挥一些古希腊精神, 线段的移动可以给出 $R$ 上的加法, 尺规作图所构造的相似三角形能给出 $R$ 上的乘法 $\gamma = \alpha\beta$. 

[Methods in Algebra - Volume 1, p. 369](/data-structure/similar-triangle.typ#:block)

因此 $R$ 带有交换环结构, 并且允许经典数学中的对象实数环 $\R$ 成为 $R$ 的模型. 

Kock--Lawvere 公理说的是, 对任意映射 $f: D \to R$, 存在唯一的 $a,b \in R$, 使得 

$$ 
f(\epsilon) \spaces= a + b \epsilon, \quad \forall \epsilon \in D 
$$ 

将这里的 $a$ 换成 $f(0)$, 并完全使用量词叙述, 则是

$$ 
\forall ~ f \in R^D, ~ \exists! ~ b ~ \text{s.t.} ~ \forall ~ d \in D \quad (f(d) = f(0) + b d) 
$$

如果说这个公理的形式还不足以暗示它的目的, 那么下面这个推论就完全能做到了. 

[.](/data-structure/kock-lawvere-000A.md#:embed)

> Axiom is incompatible with the law of excluded middle.
Either the one or the other has to leave the scene. 
In Part I of this book, the law of excluded middle has to leave, 
being incompatible with the natural synthetic reasoning 
on smooth geometry to be presented here. 
In the terms which the logicians use, this means that 
the logic employed is ‘constructive’ or ‘intuitionistic’. 
We prefer to think of it just as ‘that reasoning 
which can be carried out in all sufficiently good 
cartesian closed categories’. <p style="text-align: right;">--- Anders Kock, Synthetic Differential Geometry</p>

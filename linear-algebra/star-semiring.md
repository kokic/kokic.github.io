
---
title: 星半环
author: kokic
taxon: definition
!date: May 9, 2024
wiki: 
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\quads#1{\quad #1 \quad}$

$\gdef\Q{\mathbf{Q}}$
$\gdef\R{\mathbf{R}}$

仅仅只是为半环添加闭包或者说 Kleene 星运算, 所得到的结构称为星半环. 与 [Kleene 代数](/linear-algebra/regular-language.md) 类似, 星半环也通过递归公理定义星运算. 但是 [Kleene 代数](/linear-algebra/regular-language.md) 所要求的幂等加法对于很多数字系统如 $\Q, \R$ 而言都难以实现, 因为这破坏了 Archimedes 性. 如果我们取消幂等加法这一点, 此时所得到的结构是完备星半环或称为闭半环, 因为 [Kleene 代数](/linear-algebra/regular-language.md) 本身还允许了无穷和 $\sum_{i \ge 0}a^i$ 以及 $a^*$ 的存在性, 这就是称它 "完备" 或者 "闭" 的原因.  

下面来介绍一个重要的例子. 非负扩展实数集 $\R_{\ge 0} \cup \{\infty\}$ 连同实数的通常加法和乘法构成闭半环, 其中 $a \lt 1$ 时 $a^* = \frac1{1-a}$, 否则 $a^* = \infty$. 注意这个结构中不存在非零的加法逆 $-a$, 而乘法逆 $a^{-1}$ 则是未必存在. $\frac1{1-a}$ 应当被认为是一个整体记号, 或者说它实际上是无穷和 $1 + a + a^2 + \cdots$ 在 $\R_{\ge 0}$ 被添入全体非零加法逆 $\R_{\lt0}$ 后所得的环 $\R$ 中于 $(-1,1)$ 处收敛的结果. 然后由于 

$$
\R_{\ge 0} ~ \cap ~ \{a < 1 : a \in \R_{\ge 0}\} \quads= [0, 1) \spaces\subset (-1,1)
$$

从而在闭半环的 $a<1$ 处继续沿用这个记号. 这样, 一旦当我们扩大到环 $\R$ 时, 闭半环 $\R_{\ge 0} \cup \{\infty\}$ 当中得出的结果仍然有效. 

我们的论证可以直接拓展到一般的闭半环 $(\mathcal{Q}, +, \times, \square^*)$. 当其中的半环 $(\mathcal{Q}, +, \times)$ 被替换为环 $(R, +, \times)$ 时, 如果 $R$ 当中的 $\frac1{1-a}$ 在 $\mathcal{Q}$ 当中存在, 则 $\mathcal{Q}$ 当中的 $a^*$ 对应于 $R$ 当中的 $\frac1{1-a}$. 当然, 隐含的条件是, $R$ 的加法和乘法与 $\mathcal{Q}$ 兼容. 


---
title: 素数无限多与 Furstenberg 拓扑
date: August 31, 2025
author: [kokic](/trees/kokic.md)
---

<link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC&display=swap" rel="stylesheet">

<style>
.kaiti {
  font-family: "LXGW WenKai TC", serif;
  font-style: normal;
}
</style>

$\gdef\Z{\mathbf{Z}}$
$\gdef\PP{\mathbf{P}}$

此证明来自 [Proofs from THE BOOK](../bib/pftb.md) 第 5 页, 由 [Hillel Furstenberg](https://en.wikipedia.org/wiki/Hillel_Furstenberg) 于 1955 年提出 [^furstenberg]. 这一页配图的说明文字也很有意思, 其写道 

> Pitching flat rocks, infinitely. $\quad$ <span class="kaiti">(掷扁石, 至无穷远.) </span>

对 $a,b \in \Z, b > 0$, 令 $N_{a,b} = \{ a + nb : n \in \Z \}$. 每个集合 $N_{a,b}$ 都是正负无界的算术级数. 如果集合 $O \subseteq \Z$ 满足以下条件之一: 

1. $O$ 是空集. 
1. 对任意的 $a \in O$ 存在 $b > 0$ 使得 $N_{a,b} \subseteq O$. 

则称 $O$ 是开集. 这些条件保证 $O$ 在 $a$ 点附近 "稠密". 显然, 开集的并总是开集. 另外, 如果 $O_1$ 和 $O_2$ 开, 则对任意的 $a \in O_1 \cap O_2$, $N_{a,b_1} \subseteq O_1$ 及 $N_{a,b_2} \subseteq O_2$, 都有 $a \in N_{a,b_1b_2} \subseteq O_1 \cap O_2$. 所以开集的有限交也开. 从而此处定义的开集族的确导出了 $\Z$ 上的一个拓扑. 随后, 我们注意:

&emsp;&emsp; $(\text{A})$ 每个非空的开集都是无界的, 显然. \
&emsp;&emsp; $(\text{B})$ 每个 $N_{a,b}$ 都是既开又闭的. 因为 $N_{a,b} = \mathbb{Z} \setminus \bigcup_{i=1}^{b-1} N_{a+i,b}$, 这说明 $N_{a,b}$ 是开集的补, 因而闭. 

现在我们引出素数. 对于每个整数 $n \neq 1,-1$ 都有某个素因子 $p$ 使得 $n \in N_{0,p}$ 以及 $\Z \setminus \{\pm1\} = \bigcup_{p \in \PP} N_{0,p}$. 如果 $\PP$ 是有限的, 那么根据 $(\text B)$, $\bigcup_{p \in \PP} N_{0,p}$ 将是有限个闭集的并, 所以是闭的. 进而可以导出 $\{\pm1\}$ 是一个开集, 这与 $(\text A)$ 矛盾, 证毕. 

我们回顾证明, 不难发现核心是用拓扑解释 "每个整数都有素因子" 这件事, 进而 $\bigcup_{p \in \PP} N_{0,p} = \Z \setminus \{\pm1\}$ 在 $\Z$ 上稠密, 于是 $\PP$ 绝不可能有限. 此方法实质利用了算术级数的性质, 而非拓扑内涵. 所以也可以翻译成不使用拓扑的版本, 见 Idris D. Mercer 写的 [On Furstenberg’s Proof of the
Infinitude of Primes](http://www.idmercer.com/monthly355-356-mercer.pdf). 

[^furstenberg]: Furstenberg 当时是 Yeshiva 大学的本科生, 其在美国数学月刊上发表了 ["On the infinitude of primes"](https://en.wikipedia.org/wiki/Furstenberg%27s_proof_of_the_infinitude_of_primes), 这才有了 [Proofs from THE BOOK](../bib/pftb.md) 对此证明的收录. 

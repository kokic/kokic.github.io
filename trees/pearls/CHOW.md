
---
title: Chowla 定理与 $e$-变换
page-title: Chowla 定理与 e-变换
date: July 25, 2020
author: [kokic](/trees/kokic.md)
tag: [](/trees/pearls/index.md)
---

$\gdef\Z{\mathbb{Z}}$
$\gdef\spaces#1{~ #1 ~}$

<theorem title="Cauchy-Davenport-Chowla">

设 $m\ge 1$，$A, B \subseteq \Z/m\Z$ 为非空集合. 且 $B$ 满足 $(i)$ $0 \in B$, $(ii)$ 对每个 $b \in B \setminus\{0\}$, 都有 $\gcd(b,m)=1$, 即互质. 则

$$ |A+B| \spaces\ge \min(m,\ |A| + |B| - 1) $$

此处加法为 Mincowski 和, 其定义为 $A+B=\{a+b:\ a\in A,\ b\in B\}$. 

</theorem>

<exegesis title="$e$-变换及其性质">

对任意 $e\in A$, 定义 $A_{(e)} := A\cup (B+e)$, $B_{(e)} \spaces{:=} B\cap (A-e)$. 
其中 $B+e=\{b+e:\ b\in B\}$, $A-e=\{a-e:\ a\in A\}$. 
且注意 $A_{(e)}$ 和 $B_{(e)}$ 都 $\subseteq \mathbb Z/m\mathbb Z$. 

<proposition catalog="false">

1. 显然 $e \in A_{(e)}$, 因此 $0 \in A-e$, 故 $0 \in B_{(e)}$. 
2. 基数和保持不变, 即 $A_{(e)} + B_{(e)} = |A| + |B|$. 注意平移 $x\mapsto x+e$ 是双射. 
   $$ |B_{(e)}| \spaces= |(A-e)\cap B| \spaces= |((A-e) \cap B) + e| \spaces= A \cap (B+e) $$
   对 $A_{(e)}$ 使用容斥原理 $A_{(e)} = |A| + |B+e| - |A \cap (B+e)|$ 即可结束证明. 
3. 和集不增大 $A_{(e)} + B_{(e)} \subseteq A+B$. 取任意 $x \in A_{(e)} + B_{(e)}$, 存在 $a' \in A_{(e)}, b' \in B_{(e)}$ 使 $x = a' + b'$. 据 $A_{(e)} := A \cup (B+e)$ 分类讨论: 
   1. $a' \in A$, $b' \in B_{(e)} \subseteq B$, 所以 $x = a' + b'\in A+B$. 
   2. $a'\in B+e$, 则存在 $b'' \in B$ 使得 $a^\prime = b^{\prime\prime} + e$. 又因 $b' \in B_{(e)} \subseteq A-e$, 存在 $a'' \in A$ 使得 $b' = a'' - e$. 于是 $x = a' + b' = (b''+e) + (a''-e) = a'' + b'' \in A+B$. 

</proposition>
</exegesis>


<proof catalog="false">

假设结论不成立. 则存在非空集合 $A, B \subseteq \Z/m\Z$, 满足: 

1. $0 \in B$, $B \setminus \{0\}$ 中每个元素都与 $m$ 互素. 
1. $|A+B| < \min(m, |A| + |B| - 1)$

由于 $|A+B| \le m$, 上式只能说明 $|A+B| < |A|+|B| - 1$, 且必有 $|A+B| < m$. 
故 $A+B \ne \Z/m\Z$. 在所有这样的反例中, 取一个使 $|B|$ 最小的反例 $(A, B)$. 
由于 $0 \in B$ 可知 $|B| = 1$ 时 $|A+B| = |A| = |A| + |B| - 1$, 矛盾. 
所以 $|B| \ge 2$, 于是可取某个 $b' \in B\setminus\{0\}$, 根据假设 $\gcd(b',m)=1$. 

> [!note]
> 因为 $b'$ 与 $m$ 互素, 映射 $x\mapsto x+b'$ 在 $\Z/m\Z$ 上生成整个循环群. 特别地, 如果一个非空集合 $X$ 满足 $X+b'\subseteq X$, 那么实际上 $X = \Z/m\Z$. 

现在 $A$ 非空. 若对每个 $e \in A$ 都有 $e+b'\in A$, 则 $A+b'\subseteq A$. 
由于平移是双射, 这就推出 $A+b' = A$. 于是 $A$ 在加 $b'$ 下不变, 从而 $A=\Z/m\Z$. 
此时 $A+B =\Z/m\Z$, 与反例条件 $|A+B|<m$ 矛盾. 

所以必存在某个 $e\in A$ 使得 $e+b'\notin A$. 
固定这样的 $e$, 考虑 $A_{(e)}$, 根据 $e$-变换的性质知 $|A_{(e)} + B_{(e)}| \le |A+B|$. 
下面说明 $(A_{(e)}, B_{(e)})$ 是更小的反例. 

$b' \notin A-e$ 而 $b'\in B$, 因此 $b'\notin B\cap (A-e) = B_{(e)}$. 
另一方面, $b'\in B$. 所以 $b'$ 原来在 $B$ 中, 但不在 $B'$ 中, 故 $|B_{(e)}| < |B|$, 
又由 $0\in B_{(e)}$, 知 $B_{(e)}$ 仍是非空集. 
这与我们选取 $(A, B)$ 时 $|B|$ 极小相矛盾, 因此反例不存在, 得证. 

</proof>

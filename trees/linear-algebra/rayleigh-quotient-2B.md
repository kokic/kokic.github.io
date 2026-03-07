
---
taxon: example
date: November 5, 2024
author: [kokic](/trees/kokic.md)
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$

考虑 $M = \scriptsize\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$, 
将 $M$ 对角化得到 $D = \scriptsize\begin{pmatrix} 3 & ~~~0 \\ 0 & -1 \end{pmatrix}$, 
相应的正交矩阵是 $\frac1{\sqrt{2}}\scriptsize\begin{pmatrix} 1 & ~~~1 \\ 1 & -1 \end{pmatrix}$. 
注意, $(uP)^*M(uP) = u^{2}P^*MP$, 因此我们通过 $P^*MP$
来计算 $Q^*MQ$ [^rayleigh-quotient-2B-1]:

$$
\frac12 \begin{pmatrix} 1 & ~~~1 \\ 1 & -1 \end{pmatrix}^*\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} 1 & ~~~1 \\ 1 & -1 \end{pmatrix} \spaces= \frac12 \begin{pmatrix} 6 & ~~~0 \\ 0 & -2 \end{pmatrix} \spaces= \begin{pmatrix} 3 & ~~~0 \\ 0 & -1 \end{pmatrix}
$$

那么, 这就得到了 $M$ 的 Rayleigh 商之值域

$$
\frac{a^{2} + 4ab + b^{2}}{a^{2} + b^{2}}
\quads\to
\frac{3a^{2} - b^{2}}{a^{2} + b^{2}}
\quads\in \lbrack - 1,3\rbrack
$$

下面讨论 $A = \scriptsize\begin{pmatrix} p & q \\ q & p \end{pmatrix}$ 的对角化问题. 
依然取正交矩阵 $Q = \frac1{\sqrt2} \scriptsize\begin{pmatrix} 1 &~~~1 \\ 1 & -1 \end{pmatrix}$, 相应的
$Q^*AQ = \scriptsize\begin{pmatrix} p + q & 0 \\ 0 & p - q \end{pmatrix}$. 故

$$
\begin{aligned}
\frac{pa^{2} + 2qab + pb^{2}}{a^{2} + b^{2}} \quads\to &
\frac{(p + q)a^{2} + (p - q)b^{2}}{a^{2} + b^{2}} \\
\quads\in & [p-q, p + q]
\end{aligned}
$$

最后, 对于对称矩阵 $\scriptsize\begin{pmatrix} a & b \\ b & c \end{pmatrix}$ 也就是二次形 $ax^2 + 2bxy + cy^2$. 其对角化为

$$
\begin{pmatrix} a & b \\ b & c \end{pmatrix}
\quads\mapsto
\frac12 \begin{pmatrix}
r - \sqrt{s} & 0 \\
0 & r + \sqrt{s}
\end{pmatrix}
$$

这里 $r = a + c$, $s = (a-c)^2 + 4b^2$. 

[^rayleigh-quotient-2B-1]: 由此, 其实不需要真的找一个正交矩阵 $Q$ 使得 $M = Q^*MQ$, 只需让 $P$ 满足 $MP = PD$.

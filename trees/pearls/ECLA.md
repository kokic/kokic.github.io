---
title: 格点三元组计数
date: May 17, 2020
taxon: proposition
author: [kokic](/trees/kokic.md)
tag: [](/trees/pearls/index.md)
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\defeq{\overset{\text{def}}{=}}$


设 $n$ 是非负整数. $\mathcal{A}_n$ 是满足 $a+b,a+c,b+c \le n+1$ 的正整数三元组 $(a, b, c)$. 则 

$$ |\mathcal{A}_n| \spaces= \frac{n}{8}(2n^2 + 3n + 2) + \frac{\delta_n}{8} $$

此处 $n$ 为偶数时 $\delta = 0$, $n$ 为奇数时 $\delta = 1$. 

<block taxon="思路">

先差分, 考虑 $h(n) \defeq |\mathcal{A}_n| - |\mathcal{A}_{n-1}|$, 于是 $|\mathcal{A}_n| = |\mathcal{A}_0| + \sum_{k=1}^{n} h(k)$. 分奇偶讨论, 我们需要计算 $h(2m), h(2m+1)$. 考虑使用容斥原理, 将 $h(-)$ 的计算化为

$$
\begin{aligned}
h(-) &\spaces= |X_1 \cup X_2 \cup X_3| \\
&\spaces= |X_1| + |X_2| + |X_3| \\
&\hspace{3.6em} - (|X_1 \cap X_2|+|X_1 \cap X_3|+|X_2 \cap X_3|) \\
&\hspace{3.6em} + (|X_1 \cap X_2 \cap X_3|)
\end{aligned}
$$

分情况求和, 最终得到 $|A_{2m}|, |A_{2m+1}|$. 

</block>

<exegesis title="计算差分">

记 $s_1 = a+b, s_2 = a+c, s_3 = b+c$. $h(2m)$ 就是满足 $\max(s_1,s_2,s_3) = 2m+1$ 的 $(a,b,c)$ 的个数. 据容斥原理, 定义 $(X_i)_{1 \le i \le 3}$ 是满足 $s_i = 2m+1, s_{j \ne i} \le 2m+1$ 的集合. 于是 $h(2m) = |X_1 \cup X_2 \cup X_3|$. 

<block taxon="$|X_i|$">

对于 $|X_1|$, $a, b \ge 1$, 故 $(a, b)$ 可取 $(1, 2m), (2, 2m-1), \cdots, (2m, 1)$ 共 $2m$ 种可能. 固定 $a,b$, 此时 $c$ 应该满足 $c \le (2m+1)-a$ 且 $c \le (2m+1)-b$, 即 $1 \le c \le 2m+1-\max(a,b)$. 
  
  1. 当 $a \le m$ 时, $b \ge m+1, \max(a,b) = 2m+1-a$, $c$ 有 $a$ 种选择, 求和 $\sum_{a=1}^m a = \frac{m(m+1)}{2}$. 
  
  1. 当 $a > m$ 时, $\max(a,b) = a$, $c$ 有 $2m+1-a$ 种选择, 记 $k=2m+1-a$, $a$ 从 $m+1$ 变到 $2m$. 求和 $\sum_{k=1}^m = \frac{m(m+1)}{2}$. 

所以, $|X_1| = 2 \cdot \frac{m(m+1)}{2}= m(m+1)$. 由对称性, $|X_2| = |X_3| = |X_1|$. 

</block>

<block taxon="$|X_i \cap X_j|$">

条件 $a+b = 2m+1$ 且 $a+c = 2m+1$, 这要求 $b=c$. 另外 $b + c \le 2m + 1$, 这推出 $b \le m$, 因为 $b, m$ 需是整数. 这表明 $b$ 可以取 $1,2,\cdots,m$, 所以 $|X_1 \cap X_2| = m$, 其他 $|X_i \cap X_j|$ 同理.   

</block>

<block taxon="$|X_i \cap X_j \cap X_k|$">

此时 $a+b = a+c = b+c = 2m+1$, 三式相加 $2(a+b+c) = 3(2m+1)$, 故 $a+b+c = 3m + \frac{3}{2}$, 无解. 即 $|X_1 \cap X_2 \cap X_3| = 0$. 

</block>

如此, $h(2m) = 3m(m+1) - 3m = 3m^2$. 而对于 $h(2m+1)$, 对应的 $|Y_i|$ 可类似算得 

$$
\begin{aligned}
|Y_1| 
&\spaces= \tfrac{(m+1)(m+2)}{2} + \tfrac{m(m+1)}{2} \\
&\spaces= \tfrac{m+1}{2} \cdot (2m+2) \\
&\spaces= (m+1)^2
\end{aligned}
$$

其两两交集为 $|Y_i \cap Y_j| = m+1$. 与 $|X_i \cap X_j \cap X_k|$ 不同, $|Y_1 \cap Y_2 \cap Y_3|$ 时有一个整数解 $m+1$, 故 $h(2m+1) = 3(m+1)^2 - 3(m+1) + 1 = 3m(m+1)+1$.

</exegesis>

<proof>

当 $n=2m$ 为偶数时 $|A_{2m}| = \sum_{k=1}^{2m} h(k) \spaces= \sum_{j=1}^m h(2j-1) + h(2j)$. 也即

$$
\begin{aligned}
|A_{2m}|
&\spaces= \sum_{j=1}^m 3j(j-1)+1 + 3j^2 \hspace{1.5em} \Big(= \sum_{j=1}^m 6j^2 - 3j + 1 \Big) \\
&\spaces= m(m+1)(2m+1) - \tfrac{3}{2}m(m+1) + m \\
&\spaces= \tfrac{m}{2}(4m^2 + 3m + 1)
\end{aligned}
$$

于是 $|A_n| = \frac{n}{8}(2n^2 + 3n + 2)$. 当 $n=2m+1$ 为奇数时

$$
|A_{2m+1}| \spaces= |A_{2m}| + h(2m+1) \spaces= \tfrac{m+1}{2} (4m^2 + 9m + 2)
$$

$A_n = \frac{n}{8}(2n^2 + 3n + 2) + \frac{1}{8}$, 综合得到

$$ |\mathcal{A}_n| \spaces= \frac{n}{8}(2n^2 + 3n + 2) + \frac{\delta_n}{8} $$

</proof>

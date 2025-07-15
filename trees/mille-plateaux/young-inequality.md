
---
title: 增函数的 Young 不等式
author: [kokic](/kokic.md)
taxon: exegesis
!date: May 19, 2019
---

$\gdef\spaces#1{~ #1 ~}$
$\gdef\d{\operatorname{d}}$

若 $f$ 是 $[0, c \in \R_{> 0}]$ 上的实值连续严格增函数, 且满足 $f(0) = 0$, $f$ 的反函数记为 $f^{-1}$, 则对于 $a \in [0, c]$, $b \in [0, f(c)]$, 总有

$$
ab \spaces\le \int_0^a f(x) \d x + \int_0^b f^{-1}(y) \d y
$$

当且仅当 $b=f(a)$ 时取等号. 从图像上看, 这就是说矩形区域 $[0, a] \times [0, b]$ 被 $f$ 分割为上下两部分 $D_1, D_2$. 一般的 $f$ 可能在点 $(a,b)$ 上方或下方, 此时要么满足

$$
\text{Area}(D_1) \spaces= \int_0^b f^{-1}(y) \d y
\quad \land \quad 
\text{Area}(D_2) \spaces\le \int_0^a f(x) \d x
$$

要么满足

$$
\text{Area}(D_1) \spaces\le \int_0^b f^{-1}(y) \d y
\quad \land \quad 
\text{Area}(D_2) \spaces= \int_0^a f(x) \d x
$$

无论哪种情况, $\text{Area}(D_i)$ 相加都可以得到 Young 不等式. 而当 $b = f(a)$ 时, $\text{Area}(D_i)$ 与相应方向的积分总是相等.  

$\textbf{Example.}$ 取 $f(x) = x^{p-1}$, $f: [0, a] \to [0, a^{p-1}]$, $f^{-1}: [0, b] \to [0, b^{\frac1{p-1}}]$. 我们有离散版本的 [Young 不等式](/daily-surf/young-lemma-000A.md): $ab \le \frac{a^p}{p} + \frac{b^q}{q}$. 

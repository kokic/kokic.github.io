
---
title: Young 引理
author: kokic
taxon: lemma
!date: May 14, 2019
---

$\gdef\spaces#1{~ #1 ~}$

Young 不等式有许多风格迥然的证明, 最常见的办法可能是使用定积分. 
我们在此介绍一种充分利用对数线性化 $\log x \le x -1 $ 的方法, 即 Young 引理. 
并展示 Young 不等式与其他常见不等式如何作为此结果的直接推论. 

对数函数 $\log$ 最为特殊的性质可以说就是 $\log a^b = b\log a$ 和 $\log a b = \log a + \log b$. 另一方面, 我们知道对于非负的 $X,Y$, 不等式 $X \le Y$ 等价于 $\log \frac XY \le 0$. 如果我们希望充分利用这三点, 那么就可以试着去考虑

$$ \log \frac{f_1^{p_1}f_2^{p_2}}{g^{p_1+p_2}} \spaces= p_1\log\frac{f_1}g \spaces+ p_2\log\frac{f_2}g $$

现在对右侧使用对数的线性化, 得到

$$ 
\begin{aligned}
\log \frac{f_1^{p_1}f_2^{p_2}}{g^{p_1+p_2}} 
&\spaces\le p_1\Big(\frac{f_1}g-1\Big) \spaces+ p_2\Big(\frac{f_2}g-1\Big) \\
&\spaces= g^{-1}(p_1f_1+p_2f_2) - (p_1+p_2)
\end{aligned}
$$

我们当然希望 $\log\frac\Box\Box \le 0$. 这就是说, 如果有关于加法和乘法的条件 

$$
p_1f_1+p_2f_2 \spaces\le (p_1+p_2)g
$$

那么可以推出 $f_1^{p_1}f_2^{p_2} \le g^{p_1+p_2}$ 这样一个指数上的结果. 有时我们也写成

$$
p_1 \log f_1 + p_2 \log f_2 \spaces\le (p_1+p_2)\log g 
$$

用完全相同的步骤, 也可以证明任意多个 $p_i$ 和 $f_i$ 时的情况. 

[+](/daily-surf/young-lemma-000A.md#:embed)
[+](/daily-surf/young-lemma-000B.md#:embed)
[+](/daily-surf/young-lemma-000C.md#:embed)


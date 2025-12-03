
---
title: 加减乘除不能解二次方程
date: October 23, 2021
taxon: theorem
author: [kokic](/trees/kokic.md)
tag: [](/trees/pearls.md)
---

$\gdef\spaces#1{~ #1 ~}$

只通过系数的加减乘除不能解一般的二次方程, 换言之, 二次方程的根不是系数的有理函数.  

<proof>

$k$ 是域, 首一多项式 $f(x) = x^2 + t_1x + t_0 \in k[x]$. $k$ 关于 $t_0,t_1$ 的有理函数域 $k(t_0,t_1)$ 记为 $F$. 

<block taxon="Step 1" title="$\sqrt{\Delta} \in F$">

假设存在 $r \in F$ 使得 $f(r) = 0$, 由 Viète 定理 $x_1+x_2 = -t_1$, 另一个根为 $-t_1-r \in F$. 于是 

$$ f(x) \spaces= (x-r)(x+t_1+r) \spaces\in F[x] $$

其判别式 $\Delta = (x_1-x_2)^2 = (2r+t_1)^2 \in F$ 是 $F$ 中的平方元. 另一方面, 借助 Viète 定理, 判别式可完全表示为系数的函数 

$$
\begin{array}{c|c}
\begin{aligned}
\Delta 
&\spaces= (x_1-x_2)^2 \\
&\spaces= (x_1+x_2)^2 - 4x_1x_2 \\
&\spaces= t^2 - 4t_0
\end{aligned} 
\quad & \quad
\begin{aligned}
x_1 + x_2 &\spaces= -t_1 \\
x_1x_2 &\spaces= t_0
\end{aligned}
\end{array}
$$

这就表明 $t^2 - 4t_0$ 是 $F$ 中的平方元. 

</block>

<block taxon="Step 2" title="$\sqrt{\Delta} \notin F$">

由于 $F$ 是有理函数域 $k(t_0,t_1)$, 所以知道一定存在一组关于 $t_0,t_1$ 的互质多项式 $p,q \in k[t_0,t_1]$ 使得

$$ \bigg(\frac{p}{q}\bigg)^2 \spaces= t_1^2 - 4t_0 $$

也就是 $p^2 = (t_1^2 - 4t_0)q^2$, 等式两边是 $k[t_0,t_1]$ 中的多项式, 所以 $\Delta$ 整除 $p^2$. 注意 $k[t_0,t_1]$ 是唯一分解整环, 由 $\Delta$ 是不可约多项式知 $\Delta$ 整除 $p$, 因此存在多项式 $p_1 \in k[t_0,t_1] $ 使得 $p = \Delta p_1$. 代入 $p^2 = \Delta q^2$, 因为 $\Delta \ne 0$, 可在整环中消去 $\Delta$, 得

$$ (\Delta p_1)^2 = \Delta q^2 \spaces\implies \Delta p_1^2 = q^2 $$

所以 $\Delta$ 整除 $q^2$. 类似知道 $\Delta$ 整除 $q$. 综上, 非常数多项式 $\Delta$ 整除 $p$ 且 $\Delta$ 整除 $q$, 但这与 $p,q$ 互质矛盾. 故 $\sqrt{\Delta} \notin F$.

</block>

<remark title="$t_1^2 - 4t_0$ 不可约">

如果可约, 则存在两个一次 $k[t_0,t_1]$-多项式, 其乘积为 $\Delta$, 即 

$$
\begin{aligned}
\Delta 
&\spaces= (\alpha_1 t_0 + \alpha_2 t_1 + \alpha_3)(\beta_1 t_0 + \beta_2 t_1 + \beta_3) \\
&\spaces= \alpha_1\beta_1 t_0^2 + \alpha_2\beta_2 t_1^2 + (\alpha_1\beta_2 + \alpha_2\beta_1) t_0t_1 + \\
&\kern{1.8em} (\alpha_1\beta_3 + \alpha_3\beta_1)t_0 + (\alpha_2\beta_3 + \alpha_3\beta_2)t_1 + \alpha_3\beta_3 \\
&\spaces= t_1^2 - 4t_0
\end{aligned}
$$

于是系数必须满足以下方程组

$$
\begin{equation*}
\begin{align}
\alpha_1\beta_1 &\spaces= 0 \\
\alpha_2\beta_2 &\spaces= 1 \\
\alpha_1\beta_2 + \alpha_2\beta_1 &\spaces= 0 \\
\alpha_1\beta_3 + \alpha_3\beta_1 &\spaces= -4 \kern{3em} \\
\alpha_2\beta_3 + \alpha_3\beta_2 &\spaces= 0 \\
\alpha_3\beta_3 &\spaces= 0
\end{align}
\end{equation*}
$$

公式 $(1)$ 表明 $\alpha_1, \beta_1$ 中必有一个是 $0$. 讨论之: 

- 若 $\alpha_1 = 0$, $(3)$ 化简为 $\alpha_2\beta_1 = 0$, 而 $(2)$ 推出 $\alpha_2 \ne 0$, 故只能是 $\beta_1 = 0$, 代入 $(4)$ 得 $0 = -4$, 矛盾.  
- 若 $\beta_1 = 0$, $(3)$ 化简为 $\alpha_1\beta_2 = 0$, 而 $(2)$ 推出 $\beta_2 \ne 0$, 故只能是 $\alpha_1 = 0$. 代入 $(4)$ 得 $0 = -4$, 矛盾.  

所以假设的两个一次多项式不存在, $t_1^2 - 4t_0$ 不可约. 

</remark>

</proof>
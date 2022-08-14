---
title: 实根隔离
date: 2022-3-16
categories:
  - 数学
tag:
  - 代数
  - 多项式
---

一个经典的问题是，如何确定多项式实根的位置，即对于 $$F=\sum_{0\le k\le N}c_kx^k\in\R[x]$$ 考虑以下估计：
&emsp;$(i)$ 有效区间，求 $M\gt0$ 使 $|x|\ge M$ 时 $|F(x)|$ $\gt$ $0$.
&emsp;$(ii)$ 隔离区间，求 $(L_1,R_1),\cdots,(L_N,R_N)$ 使 $F(x)$ 的所有实根都满足 $x\in(L_k,R_k)$.

---

$(i)$ 置 
$$\sigma=\max\bigg\\{1,\sum_{0\le k\le N-1}\dfrac{c_k}{c_N}\bigg\\} \\\ \tau=1+\max\bigg\\{\dfrac{c_0}{c_N},\cdots,\dfrac{c_{N-1}}{c_N}\bigg\\}$$

下面证明 $M\ge\min\\{\sigma,\tau\\}$. 首先假定一个根 $|x|\gt1$，由
$$|c_N||x|^N\le\sum_{0\le k\le N-1}|c_k||a|^k\lt\sigma|c_N||x|^{N-1}$$ $$\begin{aligned}|c_N||x|^N&\lt|c_N|(N-1)\sum_{0\le k\le N-1}|x|^k\\\ &=\dfrac{(N-1)|c_N||x|^N}{|x|-1}\end{aligned}$$ 证完.

---

$(ii)$ 这方面早有先例，最广为人知的莫过于 Laguerre 定理，其直接断言
$$(h_k-\ell_k,h_k+\ell_k)\subseteq(L_k,R_k)$$ 其中 $$h_k=-\dfrac{c_{k-1}}{kc_k}$$ $$\ell_k=\dfrac{k-1}{k}\sqrt{\left(\dfrac{c_{k-1}}{c_k}\right)^2-\dfrac{2kc_{k-2}}{(k-1)c_k}}$$ 看到此结果其实也容易反推证明，其估计自然来源于二次方程求根公式. 不失一般性，可以只考虑首一 $(c_N=1)$的情形，先假定一个根 $u$，区别于此，其余的根记作 $u_1,\cdots,u_{N-1}$ 因此
$$F=(x-u)\prod_{1\le k\le{N-1}}(x-u_k)$$ 可以看出系数关系 $$-c_{N-1}=u+\sum_{1\le k\le{N-1}}u_k \\\ c_{N-2}=u\sum_{1\le k\le{N-1}}u_k+\sum_{j\lt k}u_ju_k$$ 这推出 $$c_{N-1}^2-2c_{N-2}-u^2=\sum_{1\le k\le{N-1}}u_k^2$$ 又由于以下估计 $$\begin{aligned}(c_{N-1}+u)^2&=\bigg(\sum_{1\le k\le{N-1}}u_k\bigg)^2\\\ &\le(n-1)\sum_{1\le k\le{N-1}}u_k^2\end{aligned}$$ 也即是说 
<div class="scroll">
$$u^2+\dfrac{2c_{N-1}u}{N}+\dfrac{2(N-1)c_{N-2}}{N}\le\dfrac{(N-2)c_{N-1}^2}{N}$$
</div> 证毕.



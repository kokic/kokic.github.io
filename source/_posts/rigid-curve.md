---
title: Rigidity of Elliptic Curve
date: 2022-6-9
categories:
  - 数学
tag:
  - 代数
  - 数论
  - 几何
---

**定理** &emsp; 令 $k$ 是特征不为 $2$ 的域, 取 $\tau\in k^\times$, $X,Y\in k(t)$ 为有理函数 (即, 两个多项式的商) 满足
$$\Gamma: Y^2=X(X-1)(X-\tau)$$ 则 $X,Y\in k$. 这等价于说, 不存在由有理函数给出的非常数映射 $\R^1\longrightarrow\Gamma$.

$proof$. &emsp; 首先 $k[t]$ 是唯一分解整环, 这允许我们假定两组互素对 $(p,q)$ 与 $(r,s)$ 使得 $X=\frac{p}q,Y=\frac{r}s$, 无需多言, 自然 $p,q,r,s\in k[t]$. 整理得到
$$\Gamma:r^2q^3=s^2p(p-q)(p-\tau q)$$ 由于 $r,s$ 互素, 这表明 $s^2\\,|\\,q^3$, 同理 $p,q$ 互素 $\implies$ $q^3\\,|\\,s^2$ 因此 $\exist\\,\alpha$ 作为 $k[t]$ 的单位 $\in k$ $\text{ s.t. }$ $s^2=\alpha q^3$. 故 $\alpha q=(\frac{s}q)^2$ $$r^2=\alpha p(p-q)(p-\tau q)$$ 实际上, 由无穷递降法可以证明此处 $p,q$ 必然是常数, 具体而言, 以 $\bar k$ 表示 $k$ 的代数闭域, $p,q\in\bar k[t]$ 互素, 假定四种不同的线性组合 $ap+bq$ 在 $\bar k[t]$ 中完全平方, $(a:b)$ $\in$ $\mathbb{P}^1\bar k$, 则 $p,q$ $\in\bar k$. 完全类似地, 也可以应用于 $r,s$, 故证毕.

---

再次叙述证明最后一步所用的结果, 若有四组 $(a:b)$ $\in$ $\mathbb{P}^1\bar k$ 使 $ap+bq$ 在 $\bar k[t]$ 中完全平方, 则 $p,q$ $\in$ $k$.

$proof$. &emsp; 考虑线性变换 $\ell$
$$\begin{pmatrix}p \\\ q\end{pmatrix}\text{—}\kern-0.36em\leadsto\begin{pmatrix}\alpha & \beta \\\ \gamma & \delta \end{pmatrix}\begin{pmatrix}p \\\ q\end{pmatrix},\quad \begin{pmatrix}\alpha & \beta \\\ \gamma & \delta \end{pmatrix}\in\text{GL}_2(k)$$ 若此结果不成立, 从反例当中选取 $p,q$ 使 
$$h:\max\\{\deg p,\deg q\\}$$ 最小, 借由 $\ell$ 使 $p,q,p-q,p-\tau q$ 为平方, 记 $(u^2,v^2)$ $=$ $(p,q)$, 自然 $u,v$ 互素. 故 
$$\max\\{\deg u,\deg v\\}\lt\max\\{\deg p,\deg q\\}$$ 但同时我们知道 
$$(\Box^2=)\\;p-\tau q=(u+\omega v)(u-\omega v)\\;(=\Box^2\Box^2)$$ 而 $u\pm v,u\pm\omega v$ 的存在与 $h$ 的最小性矛盾, 证毕. 

---

尾声: 尽管这表明将 $\Gamma$ 有理参数化的希望破灭了, 但在 $\mathbb{C}$ 上仍然可以通过某个著名的双周期亚纯函数 $\wp(z)$ $——$ [Weierstrass 椭圆函数](/2021/08-22-elliptic-curve.html) 来参数化, 这件事成为当今众交叉领域最初的火种之一.







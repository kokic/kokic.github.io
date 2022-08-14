---
title: 多项式的 Fermat 大定理
date: 2021-08-11
categories:
  - 数学
tag:
  - 数论
  - 多项式
---

证明：方程 $[f(x)]^n+[g(x)]^n=[h(x)]^n$ 在整数 $n\ge3$ 时无互素的非常值实多项式解.

方便起见，临时地记 $[f(x)]^n\cdot f^{\prime}(x)$ 为 $\\mathscr{O}_f^n$.
两边求导，得 $$\mathscr{O}_f^{n-1}+\mathscr{O}_g^{n-1}=\mathscr{O}_h^{n-1}$$ 也即 $$\mathscr{O}_f^n+f(x)\mathscr{O}_g^{n-1}=f(x)\mathscr{O}_h^{n-1} \\\ g(x)\mathscr{O}_f^{n-1}+\mathscr{O}_g^n=g(x)\mathscr{O}_h^{n-1} \\\ h(x)\mathscr{O}_f^{n-1}+h(x)\mathscr{O}_g^{n-1}=\mathscr{O}_h^n$$ 利用方程依次消去 $[f(x)]^n,[g(x)]^n,[h(x)]^n$ 整理得
$$\mu(g,f)=\mu(h,f) \\\ \mu(f,g)=\mu(h,g) \\\ \mu(f,h)=-\mu(g,h)$$ 其中 $\mu(g,f)$ 暂记 
$$[g^\prime(x)f(x)-f^\prime(x)g(x)]\cdot[g(x)]^{n-1}$$
由互素立得 $$[f(x)]^{n-1}\\,|\\,g^\prime(x)h(x)-h^\prime(x)g(x) \\\\\ [g(x)]^{n-1}\\,|\\,h^\prime(x)f(x)-f^\prime(x)h(x) \\\\\ [h(x)]^{n-1}\\,|\\,f^\prime(x)g(x)-g^\prime(x)f(x)$$ 且知整除号右端均不为零. 

设 $\deg f(x)=\max\deg\big\\{f(x),g(x),h(x)\big\\}$, 有 $$\begin{aligned}\deg\\,[f(x)]^{n-1}&=(n-1)\deg f(x) \\\ &\le\deg\big(g^\prime(x)h(x)-h^\prime(x)g(x)\big) \\\ &\le\deg\big(g^\prime(x)h(x)\big) \\\ &=\deg g^\prime(x)+\deg h(x) \\\ &\le2\deg f(x)-1\\\ &\lt2\deg f(x) \end{aligned}$$ 故 $n-1\lt2,n\lt3$，证完.

---

注：恰如 abc 猜想蕴含 Fermat 大定理，多项式的 abc 定理（即 Mason-Stothers 定理）亦蕴含多项式的费马大定理.

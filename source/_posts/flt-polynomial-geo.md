
---
title: 多项式的 Fermat 大定理 - 几何工具
date: 2021-10-28
categories:
  - 数学
tag:
  - 代数
  - 几何
---

构造 $\mathbb{P}^2\supset Y=\\{[x:y:z]|x^n+y^n=z^n\\}$ 并且令 $\phi:Y\xrightarrow{\quad}\mathbb{P}^1,\\;[x:y:z]\xmapsto{\quad}[x:y]$ 这样一来就有
$$Y_{[s:t]}=Y\cap\phi^{-1}([s:t])=\\{z|z^n=s^n+t^n\\}$$ 由于在 $\mathbb{C}$ 上必有 $n$ 个统一的根，若 $s^n+t^n$ 非零则有 $|Y_{[s:t]}|=n$. 令 $Z=\\{[s:t]|s^n+t^n=0\\}$，注意到 $[0:0]\notin\mathbb{P}^1$，若 $[s:t]\in Z$ 则必有 $s,t\neq0$，因此 $[s:t]=[1:t^\prime]$ 其中 $t^\prime=\frac{t}s$，故 $Z$ 只是一 $n$ 点集 $[1:\rho^i]$，其中 $\rho$ 是 $-1$ 的 $n$ 次本原根，所以 $\chi(Z)=n$.

现考察 $\phi:Y\backslash\phi^{-1}(Z)\xrightarrow{\quad}\mathbb{P}^1\backslash Z$，示性数之乘性给出
$$\begin{aligned}\chi(Y\backslash\phi^{-1}(Z))&=n\cdot\chi(\mathbb{P}^1\backslash Z)\\\ &=n(\chi(\mathbb{P}^1)-\chi(Z))\\\ &=n(2-n)\end{aligned}$$ 注意到 $\phi:\phi^{-1}(Z)\xrightarrow{\quad}Z$ 是双射，这表明 $$\chi(\phi^{-1}(Z))=\chi(\phi(Z))=n$$ 示性数之加性给出
$$\begin{aligned}\chi(Y)&=\chi(Y\backslash\phi^{-1}(Z))+\chi(\phi^{-1}(Z))\\\ &=n(2-n)+n\\\ &=n(3-n)\end{aligned}$$ 由 $2-2g=\chi$ 计算得到 
$$g(Y)=\dfrac{(n-2)(n-1)}{2}$$ 又由于 $$0=g(\mathbb{P}^1)\ge g(Y)=\dfrac{(n-2)(n-1)}{2}$$ 这表明只能有 $n=1,2$，证完. 
<p style="margin-left:98%;margin-top:-2.6em;">$\Box$</p>



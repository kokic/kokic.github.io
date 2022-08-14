
---
title: 由 Fermat 点问题导出的恒等式
date: 2022-1-1
categories:
  - 数学
tag:
  - 几何
  - 分析
---

<style type="text/css">
small {
  color: grey;
}
</style>

<small>这些内容是去年算的，结果拖到现在才发……</small>

一个古老的平面几何问题是，求多边形内一点使各顶点到此点距离之和最小. 考虑平面上 $N$ 个点 $A_k$ $(x_{1,k},x_{2,k})$，下标集 $K=\mathbb{Z}/N\mathbb{Z}\ni k$ 满足 $|K|=N$，下面讨论的内容皆默认此点 $\mathcal{O}(\mathcal{O}_1,\mathcal{O}_2)$ 存在而言.

依解析几何的知识，这就是要求 $$L=\sum\_{k\\,\in\\,K}\sqrt{(\mathcal{O}\_1-x\_{1,\\,k})^2+(\mathcal{O}\_2-x\_{2,\\,k})^2}$$ 之 $\min L$.

由其偏微分
<div class="scroll">
$$\dfrac{\partial L}{\partial\mathcal{O}_i}
=\sum_{k\,\in\,K}\dfrac{\mathcal{O}_i-x_{i,\,k}}{\sqrt{(\mathcal{O}_1-x_{1,\,k})^2+(\mathcal{O}_2-x_{2,\,k})^2}},\quad i\in\{1,2\}$$
</div>

使 $\dfrac{\partial L}{\partial\mathcal{O}_i}=0$，整理可得
<div class="scroll">
$$\dfrac{\mathcal{O}_i-x_{i,\,j}}{\sqrt{(\mathcal{O}_1-x_{1,\,j})^2+(\mathcal{O}_2-x_{2,\,j})^2}}
=\sum_{k\,\in\,K\backslash\{j\}}\dfrac{\mathcal{O}_i-x_{i,\,k}}{\sqrt{(\mathcal{O}_1-x_{1,\,k})^2+(\mathcal{O}_2-x_{2,\,k})^2}},\quad j\in K$$
</div>

以此形式罗列，取遍全部的 $i,j$，平方之后相加，整理可得
<div class="scroll">
$$\begin{aligned}
1-\dfrac{|K|}2
&=\sum_{i\,\in\,\{1,2\}}\sum_{k\,\in\,K\backslash\{j\},\,\ell\,\in\,K\backslash\{j,k\}}\dfrac{(\mathcal{O}_i-x_{i,\,k})(\mathcal{O}_i-x_{i,\,\ell})}{\sqrt{(\mathcal{O}_1-x_{1,\,k})^2+(\mathcal{O}_2-x_{2,\,k})^2}\sqrt{(\mathcal{O}_1-x_{1,\,\ell})^2+(\mathcal{O}_2-x_{2,\,\ell})^2}}
\\\\
&=\sum_{k\,\in\,K\backslash\{j\},\,\ell\,\in\,K\backslash\{j,k\}}\cos\lang\mathcal{O}A_k,\mathcal{O}A_\ell\rang
\end{aligned}$$
</div>

给出如下引理，以保证之后的计算顺利进行.

**引理** 仍是上述平面中的多边形，若存在一点 $\mathcal{O}$ 使全部的 $k\in K$ 皆有 $\angle A_k\mathcal{O}A_{k+1}=\angle A_{k+1}\mathcal{O}A_{k+2}$，此时即为 $\min L$.

$proof. $ 我们来说明对复平面内任意一点 $P$ 都有 $$\displaystyle\sum_{k\\,\in\\,K}|PA_k|\ge\sum_{k\\,\in\\,K}|OA_k|$$ 置 $\zeta=\exp\left(\dfrac{2\pi i}N\right)$，由 $$\begin{aligned}\sum_{k\\,\in\\,K}|PA_k|&=\sum_{k\\,\in\\,K}|\overrightarrow{OA_k}-\overrightarrow{OP}|\\\ &=\sum_{k\\,\in\\,K}|\overrightarrow{OA_k}\zeta^k-\overrightarrow{OP}\zeta^k|\\\ &\ge\bigg\|\sum_{k\\,\in\\,K}\overrightarrow{OA_k}\zeta^k-\overrightarrow{OP}\zeta^k\bigg\|\\\ &=\sum_{k\\,\in\\,K}|OA_k|\end{aligned}$$ 证完.

我们继续加强条件，默认引理中的点 $\mathcal{O}$ 也是存在的，综合前文，就有
<div class="scroll">
$$\begin{aligned}
1-\dfrac{|K|}2&=\sum_{i\,\in\,\{1,2\}}\sum_{k\,\in\,K\backslash\{j\},\,\ell\,\in\,K\backslash\{j,k\}}\dfrac{(\mathcal{O}_i-x_{i,\,k})(\mathcal{O}_i-x_{i,\,\ell})}{\sqrt{(\mathcal{O}_1-x_{1,\,k})^2+(\mathcal{O}_2-x_{2,\,k})^2}\sqrt{(\mathcal{O}_1-x_{1,\,\ell})^2+(\mathcal{O}_2-x_{2,\,\ell})^2}}
\\
&=\sum_{k\,\in\,K\backslash\{j\},\,\ell\,\in\,K\backslash\{j,k\}}\cos\lang\mathcal{O}A_k,\mathcal{O}A_\ell\rang
\\\\
&=\sum_{1\le d\le|K|-2}\sum_{k\,\in\,K\backslash\{j\},\,\ell\,\in\,K\backslash\{j,k\},\,|k-\ell|\,=\,d}\cos\lang\mathcal{O}A_k,\mathcal{O}A_\ell\rang
\\\\
&=\sum_{1\le d\le|K|-2}(N-d-1)\cos\dfrac{2d\pi}{|K|}
\end{aligned}$$
</div>
其给出一恒等式 $$\dfrac{N}2+\sum_{1\le d\le N-2}(N-d-1)\cos\dfrac{2d\pi}N=1$$ 作为副产物.

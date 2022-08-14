
---
title: 简单图的色多项式分解
date: 2022-2-23
categories:
  - 数学
tag:
  - 组合
---

<script src="../lib/graphs.js"></script>

简单图意谓既无平行边 $[$同一条边$]$ 亦无自环 $[$顶点到自身的边$]$ 的图，现取一简单图 $G$ 与其上一边 $e$，$\pi(G)$ 表以 $q$ 种颜色着 $G$ 上顶点的总着色数 $[$即，色多项式$] ($自然，着色要求被边相连的顶点不重色$)$，则有如下等式
$$\pi_G(q)=\pi_{G\\,-\\,e}(q)-\pi_{G\\,\cdot\\,e}(q)$$ 这被称作 删除收缩公式 $[$deletion-contraction formula$]$ 其中 $G-e$ 是从 $G$ 中删去边 $e$ 所剩图 $G-\\{e\\}$ 的简记, $G\cdot e$ 则表示将 $G$ 中边 $e$ 的两个端点合并为一个点后所得的图, 而原先的 $e$ 自动消失.

证明：显然. 可以假定边 $e$ 的两个端点分别为 $A,B$，由于在证明此结果时，关注点集中在图本身，因此将 $\pi_G(q)$ 记作 $\pi(G)$，不难发现 
<div class="scroll">$$\gdef\st#1{\footnotesize\text{ #1 }} \begin{aligned}
\pi(G-e)&=\pi(G-e{\st{中}}A,B{\st{同色的部分}})\,+ \\
&\kern{0.3em}\quad\pi(G-e{\st{中}}A,B{\st{异色的部分}}) \\
&=\pi(G\cdot e)+\pi(G) \\
\end{aligned}$$
</div> 证完.

---
<div style="overflow: hidden;"><iframe src="../lib/quiver/index.html?q=
WzAsNixbMCwxLCJHIl0sWzEsMSwiPSJdLFsyLDAsIlxcYnVsbGV0Il0sWzIsMiwiXFxidWxsZXQiXSxbNCwyLCJcXGJ1bGxldCJdLFs0LDAsIlxcYnVsbGV0Il0sWzIsMywiIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFszLDQsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMiw1LCIiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV0sWzUsNCwiIiwyLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dXQ==&embed"
width="100%" style="transform: scale(1.3); pointer-events: none; border-radius: 2px; border: none;"></iframe></div>

然而，即便是对于这样简单的图，若不借助上述结果，想要计算其着色数 $[$色多项式$]$ 也不是一件容易的事. 但是对于端点数更少的图, 是容易计算的, 譬如：

<div style="overflow: hidden;"> <iframe src="../lib/quiver/index.html?q=
WzAsNSxbMiwwLCJcXGJ1bGxldCJdLFsyLDIsIlxcYnVsbGV0Il0sWzQsMiwiXFxidWxsZXQiXSxbMSwxLCI9Il0sWzAsMSwiR1xcY2RvdCBlIl0sWzAsMSwiIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFswLDIsIiIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMSwyLCIiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV1d&embed"
width="100%" style="transform: scale(1.3); margin: 0 auto; pointer-events: none; border-radius: 2px; border: none;"></iframe></div>

几乎可以一眼看出其各个端点的着色数

<div style="overflow: hidden;"> <iframe src="../lib/quiver/index.html?q=
WzAsMyxbMCwwLCJxIl0sWzAsMiwicS0xIl0sWzIsMiwicS0yIl0sWzAsMSwiIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFsxLDIsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMCwyLCIiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV1d&embed"
width="100%" style="transform: scale(1.3); margin: 0 auto; pointer-events: none; border-radius: 2px; border: none;"></iframe></div>

这样就得出 $\pi_{G\\,\cdot\\,e}(q)=q(q-1)(q-2)$，而对于 $\pi_{G\\,-\\,e}(q)$，尽管其端点数未变，但其边数仍少去一条，也变得容易计算：


<div style="overflow: hidden;"><iframe src="../lib/quiver/index.html?q=
WzAsNCxbMCwwLCJxIl0sWzAsMiwicS0xIl0sWzIsMiwicS0xIl0sWzIsMCwicS0xIl0sWzAsMSwiIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFsxLDIsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMiwzLCIiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV1d&embed"
width="100%" style="transform: scale(1.3); margin: 0 auto; pointer-events: none; border-radius: 2px; border: none;"></iframe></div>

于是 $\pi_{G\\,-\\,e}(q)=q(q-1)^3$，可知 
$$\pi_G(q)=q(q-1)(q^2-3q+3)$$

现在来考虑一个 $n$ 边形的着色数 $——$ 或者等价的，可以看成是将圆分成 $n$ 个扇形，然后对扇形着色，而相邻扇形不重色. 对于着色数而言，边的弯曲与否无需关注，因此绘制成弧亦无影响，故以下图来表示一 $n$ 边形.

<div style="overflow: hidden;"><iframe src="../lib/quiver/index.html?q=
WzAsNSxbMCwwLCJcXGJ1bGxldF8xIl0sWzIsMCwiXFxidWxsZXRfMiJdLFswLDIsIlxcYnVsbGV0X24iXSxbMiwyLCJcXGJ1bGxldF8zIl0sWzEsMiwiXFxjZG90cyJdLFsxLDAsIiIsMCx7ImN1cnZlIjoyLCJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV0sWzAsMiwiIiwwLHsiY3VydmUiOjIsInN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMSwzLCIiLDIseyJjdXJ2ZSI6LTIsInN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XV0=&embed"
width="100%" style="margin-top: 1.2em; transform: scale(1.3); pointer-events: none; border: none;"></iframe></div>

或者更正式地，这被称之为环图 $C_n$. 显然，有 
<div class="scroll">
$$\begin{aligned}\pi_{C_n}(q)
&=q(q-1)^{n-1}-\pi_{C_{n-1}}(q) \\
&=q\sum_{4\le k\le n}(-1)^{n-k}(q-1)^{k-1}+(-1)^{n-3}\pi_{C_3}(q) \\ 
&=(q-1)^n+(-1)^n(q-1)^3-(-1)^nq(q-1)(q-2) \\
&=(q-1)^n+(-1)^n(q-1)
\end{aligned}$$
</div>

证明也可以考虑归纳，假定 $$\pi_{C_n}(q)=(q-1)^n+(-1)^n(q-1)$$ 则
<div class="scroll">
$$\begin{aligned}\pi_{C_{n+1}}(q)
&=q(q-1)^n-\pi_{C_n}(q) \\
&=q(q-1)^n-(q-1)^n-(-1)^n(q-1) \\
&=(q-1)^{n+1}+(-1)^{n+1}(q-1)
\end{aligned}$$
</div>




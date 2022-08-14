
---
title: 调和分析的有限离散逼近
date: 2022-5-13
categories:
  - 数学
tags:
  - IUTT
---

译自 [from Gaussian Integrals to Inter-universal Teichmüller](http://www.kurims.kyoto-u.ac.jp/~motizuki/Alien%20Copies,%20Gaussians,%20and%20inter-universal%20Teichmuller%20Theory.pdf) § 2.14.

最后, 我们通过暂停来更详细地检查实际上的转换来结束当前的 §2, 实际上, 在当前 §2 的前面部分, 从导数 [在字面意义上, 如在 §2.5 的讨论中] 到 **Galois 群 / étale 基本群** [即, 譬如在 §2.6 及之后的讨论中]. 这种转变与 [HASurI]、[HASurII] 的 [scheme-theoretic] Hodge-Arakelov 理论中的许多思想密切相关.

**例 2.14.1. 微分演算在实线上的有限离散逼近.** 我们首先回顾 [比如说, 无限可微] 函数在实线上的微分演算允许有限离散近似, 即, 通过替换
<div class="scroll">
$$\frac{\text{d}f(x)}{\text{d}x}=\lim_{\delta\to0}\frac{f(x+\delta)-f(x)}{\delta}\quad\leadsto\quad f(X+1)-f(X)$$
</div>

导数的微分算子 [在古典意义上]. 如果 d 是一个正整数, 那么可以在次数 $\lt d$ 且系数 $\in\mathbb{Q}$ 的多项式函数的情况下考虑这样的差分算子来轻松验证. 在元素 $0,$ $1,$ $\dots,$ $d-1$ $\in\Z$ $\subseteq\mathbb{Q}$ 处的 **求值** 产生维数为 $d$ 的 $\mathbb{Q}$-向量空间的自然同构
$$\mathbb{Q}[X]^{\lt d}\\;\bigg(\overset{\text{def}}{=}\bigoplus_{j=0}^{d-1}\mathbb{Q}\cdot X^j\bigg)\quad\overset{\sim}{\rarr}\quad\bigoplus_0^{d-1}\mathbb{Q}$$ $——$ 例如, 参见 [Harts] 第一章 §7 中著名的 Hilbert 多项式经典理论的讨论, 了解更多细节. 事实上, 明确计算使这种求值同构成为有限自由 $\Z$-模的同构所必需的 “分母” 并不难. 这种 “离散函数论” [cf. 也可以将下面的示例 2.14.2] 视为 Hodge-Arakelov 理论的各种构造的 **基本原型**.

**例 2.14.2. 单位圆上 Fourier 分析的有限离散逼近.** 本着例 2.14.1 讨论的精神, 我们回顾了经典函数论 $——$ 实际上, 于 **单位圆上** $\mathbb{S}^1$ 的 **Fourier 分析** 承认一个著名的有限离散近似, 如果 $d$ 是一个 $[$为简单起见$]$ 奇正整数, 因此 $d^\*\overset{\text{def}}{=}\frac12(d-1)$ $\in\Z$, 然后可以很容易地验证, 在 $\mathbb{G}\_m$ 的  **$d$-挠点** (译注: torsion points) 的子概型 $\bm{\mu}\_d\subseteq\mathbb{G}\_m$ 的 $[$比如说, 概型理论$]$ 点上, 对乘法群概型 $\mathbb{G}\_m$ $\overset{\text{def}}{=}$ $\text{Spec}$ $(\Z[U,$ $U^{-1}])$ 上次数 $\in\\{$ $-d^\*,$ $-d^\*+1,$ $\dots,$ $-1,$ $0,$ $1,$ $d^\*-1,$ $d^\*$ $\\}$ 系数 $\in\Z$ 的多项式函数和 $\Z$ 系数的 **求值** 产生阶为 $d$ 有限自由 $\Z$-模的自然同构
$$\bigoplus\_{j=-d^*}^{d^*}\Z\cdot U^j \quad\overset{\sim}{\rarr}\quad\mathcal{O}\_{\bm{\mu}\_d}$$ $——$ 其中, 通过滥用符号, 我们将 $\mathcal{O}\_{\bm{\mu}\_d}$ 写为仿射概型 $\bm{\mu}\_d$ 结构层的环的整体部分. 如果一个换基 (译注: base-changes) 通过自然包含 (译注: inclusion) $\Z\hookrightarrow\mathbb{C}$ 变化到复数域 $\mathbb{C}$ 中, 那么, 当 $d$ 足够 “大” 时, 可以想到这些 $d$-挠点 的整体
<div class="scroll">
$$\exp(2\pi i\cdot\tfrac1d\Z)=\bigg\{\exp(2\pi i\cdot\tfrac0d),\exp(2\pi i\cdot\tfrac1d),\dots,\exp(2\pi i\cdot\tfrac{(d-1)}d)\bigg\}\subseteq\mathbb{S}^1$$
</div>

---

<span style="color: grey;">update: 2022-5-15 &emsp; (接上文)</span>

作为 $\mathbb{S}^1$ 的一种 **有限离散近似**, 因此,特别是将相邻对 (译注: adjacent pairs) 的 $d$-挠点作为 $\mathbb{S}^1$ 上的 **“切向量”**. 也就是说, 由于这种挠点的 $[$逆系统$]$ 产生了 $\mathbb{G}_m\times_\Z\mathbb{C}$ 的 étale 基本群, 正是这张 $\mathbb{S}^1$ 挠点的 **“图”** 激发 (译注: motivates) 了这样一种想法: 
<p style="margin: 0 2em 0 2em;"> <b>Galois 群 / étale 基本群</b> 应该被看作是经典几何概念 <b>切丛</b> 的一种 <b>算术类似物</b> </p>

$——$ §2.6. 的讨论. 此外,如果将 $\mathbb{G}_m$ 视为 $[$在某个未指定的“空间”上$]$ 的非零函数的陪域, 那么这个非常经典的 “**分圆物** (译注: cyclotome, 日语: 円分物) 的图形表示” $[$即 $\mathbb{S}^1$ 的挠点$]$ 也可以从“图形点 观点”,在 §2.6, §2.7. 节的讨论中, **分圆** 和 **Kummer 类** 的重要性. 也即 
<p style="margin: 0 2em 0 2em;"> <b>函数的 Kummer 类</b>, 可以说, 通过函数在定义函数的空间中由 “算术无穷小运动” 引起的 “算术无穷小运动” 记录在 $\mathbb{G}_m$ 中, 可以认为是一种 “函数的 <b>算术对数导数</b>” </p>

$——$ 一种与通常观点一致的观点, 即 étale 上同调中的 Kummer 正合列 $[$即, 它在计算函数的 Kummer 类的上同调中引发连接同态 $]$ 应该被认为是一种于复空间上全纯函数层的层上同调理论中出现的指数正合列 $1$ $\\;\rarr\\;$ $2\pi i\cdot\Z$ $\\;\rarr\\;$ $\mathbb{C}$ $\\;\rarr\\;$ $\mathbb{C}^\times$ $\\;\rarr\\;$ $1$ 的算术类似物.


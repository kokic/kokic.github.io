
---
title: 小数部估计
date: 2021-7-11
categories:
  - 数学
tag:
  - 数论
---

设 $m$ 为一正整数，证明: $$\left|\langle\sqrt{m}\rangle-\dfrac{1}{2}\right|\gt\dfrac{1}{8\sqrt{m}+1}$$ 其中 $\langle x\rangle\overset{\text{def}}{=}x-\lfloor x\rfloor$ 表取小数部.

必然存在 $n$ 使得 $n^2\le m\lt (n+1)^2$，故可设 $m=n^2+k,k\in[0,2n]\subset[0,2n+1)$

考虑 $k\ge n+1$，此时 $$\begin{aligned}\left|\langle\sqrt{m}\rangle-\dfrac{1}{2}\right|&=\sqrt{n^2+k}-n-\dfrac{1}{2} \\\ &=\dfrac{n^2+k-\bigg(n-\dfrac{1}{2}\bigg)^2}{\sqrt{n^2+k}+n+\dfrac{1}{2}} \\\ &=\dfrac{k-n-\dfrac{1}{4}}{\sqrt{n^2+k}+n+\dfrac{1}{2}} \\\ &\ge\dfrac{3}{4}\cdot\dfrac{1}{\sqrt{n^2+k}+n+\dfrac{1}{2}} \\\ &\gt\dfrac{1}{8\sqrt{n^2+k}+1} \end{aligned}$$

考虑 $k\le n$，此时 $$\begin{aligned}\left|\langle\sqrt{m}\rangle-\dfrac{1}{2}\right|&=\dfrac{1}{2}+n-\sqrt{n^2+k} \\\ &=\dfrac{\bigg(\dfrac{1}{2}+n\bigg)^2-(n^2+k)}{\sqrt{n^2+k}+n+\dfrac{1}{2}} \\\ &=\dfrac{\dfrac{1}{4}+n-k}{\sqrt{n^2+k}+n+\dfrac{1}{2}} \\\ &\ge\dfrac{1}{4}\cdot\dfrac{1}{\sqrt{n^2+k}+n+\dfrac{1}{2}} \\\ &\gt\dfrac{1}{8\sqrt{n^2+k}+1} \end{aligned}$$ 

证完.

---

容易发现，上述结果可以加强到取等，即 $$\left|\langle\sqrt{m}\rangle-\dfrac{1}{2}\right|\ge\dfrac{1}{2}\cdot\dfrac{1}{4\sqrt{m}+3-2\sqrt{2}}$$ 
只考虑 $k\le n$，设一实数 $c$ 满足 $$\dfrac{1}{4}\cdot\dfrac{1}{\sqrt{n^2+k}+n+\dfrac{1}{2}}\ge\dfrac{1}{8\sqrt{n^2+k}+c}$$ 整理得 $$n^2+k\ge\left(n+\dfrac{1}{2}-\dfrac{c}{4}\right)^2$$
再设 $\alpha=\dfrac{1}{2}-\dfrac{c}{4}$，有 $k\ge\alpha^2+2\alpha n$，又因为 $n\ge k\ge1$，$1\ge\alpha^2+2\alpha n\ge\alpha^2+2\alpha$.

综上，得 $c\ge 6-4\sqrt{2}$.

证完.

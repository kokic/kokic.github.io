
---
title: Star of David
date: 2022-6-14
categories:
  - 数学
tag:
  - 组合
---

这居然是个带名字 ([Star of David](https://mathworld.wolfram.com/StarofDavidTheorem.html)) 的结论...
<div class="scroll">
$${n-1\choose r-1}{n\choose r+1}{n+1\choose r}={n-1\choose r}{n\choose r-1}{n+1\choose r+1}$$
</div>
<br>
<div style="overflow: hidden;"><iframe src="../lib/quiver/index.html?q=
WzAsNyxbMSwwLCJ7bi0xXFxjaG9vc2Ugci0xfSJdLFsyLDEsIntuXFxjaG9vc2Ugcn0iXSxbMSwyLCJ7bisxXFxjaG9vc2Ugcn0iXSxbMywwLCJ7bi0xXFxjaG9vc2Ugcn0iXSxbMywyLCJ7bisxXFxjaG9vc2UgcisxfSJdLFswLDEsIntuXFxjaG9vc2Ugci0xfSJdLFs0LDEsIntuXFxjaG9vc2UgcisxfSJdLFswLDYsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbNiwyLCIiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV0sWzMsNSwiIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFs1LDQsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMCwyLCIiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV0sWzMsNCwiIiwyLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dXQ==&embed"
width="100%" style="transform: scale(1.3); pointer-events: none; border: none;"></iframe></div>

$proof$. &emsp; 
<div class="scroll">
$$\def\a{\textcolor{EF477E}}
\def\b{\textcolor{1AAA65}}
\def\c{\textcolor{00A6F4}}
\begin{aligned}
\text{lhs}&=
\frac{\a{(n-1)!}}{\b{(r-1)!}\c{(n-r)!}} \cdot
\frac{\b{n!}}{\c{(r+1)!}\a{(n-r-1)!}} \cdot
\frac{\c{(n+1)!}}{\a{r!}\b{(n-r+1)!}} \\ &=
\frac{(n-1)!}{r!(n-r-1)!} \cdot
\frac{n!}{(r-1)!(n-r+1)!} \cdot
\frac{(n+1)!}{(r+1)!(n-r)!} \\ &=
\text{rhs}
\end{aligned}$$
</div>

有鉴于这个证明, 笔者提议将其称之为 "榫卯引理" (雾). D. Singmaster、Hitotumatu & Sato 等人的推广版本似乎不太漂亮.

---

上述证明并不依赖于常数 $1$, 因此可以做形式替换 $$1\\;\xmapsto{\qquad\qquad}\\;s$$ 
<div class="scroll">
$${n-s\choose r-s}{n\choose r+s}{n+s\choose r}={n-s\choose r}{n\choose r-s}{n+s\choose r+s}$$
</div>

这可以改写为
<div class="scroll">
$$\begin{aligned}
\frac{\dbinom{n+s}{r+s}}{\dbinom{n+s}r\dbinom{n}{r+s}}
&=\frac{\dbinom{n-s}{r-s}}{\dbinom{n-s}{r}\dbinom{n}{r-s}} \\
&=(n-r+s)!(n-r-s)!\dbinom{n}{r}_\text{d}
\end{aligned}$$
</div>

其中 $n\ge r\ge0$ $$\dbinom{n}{r}_\text{d}\overset{\text{def}}{=}\frac{r!}{n!(n-r)!}$$

---

(随便画个图, 与正文无关)

<div style="overflow: hidden;"><iframe src="../lib/quiver/index.html?q=
WzAsMTYsWzQsMCwiWCJdLFszLDEsIlkiXSxbMiwwLCJYJyJdLFsxLDEsIlknIl0sWzMsMywiWSJdLFsxLDMsIlknIl0sWzIsMiwiWCciXSxbMCwxLCIwIl0sWzQsMiwiWCJdLFswLDMsIjAiXSxbNiwwLCJYJyciXSxbNSwxLCJZJyciXSxbNSwzLCJZJyciXSxbNiwyLCJYJyciXSxbNywwLCIwIl0sWzcsMiwiMCJdLFswLDFdLFsyLDBdLFszLDFdLFsyLDNdLFsxLDRdLFszLDVdLFsyLDYsIiIsMSx7Im9mZnNldCI6MSwic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzYsNSwiIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzcsM10sWzAsOCwiIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzgsNCwiIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzksNV0sWzYsOCwiIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzUsNF0sWzAsMTBdLFsxLDExXSxbNCwxMl0sWzEwLDExXSxbMTEsMTJdLFsxMCwxM10sWzEzLDEyXSxbOCwxMywiIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzEwLDE0XSxbMTMsMTVdXQ==&embed"
width="100%" style="transform: scale(1.2); pointer-events: none; border: none;"></iframe></div>


---
title: Complex step 微分法
author: kokic
taxon: exegesis
date: 2024-5-13
---

$\gdef\quads#1{\quad #1 \quad}$
$\gdef\spaces#1{~ #1 ~}$

考虑光滑函数 $f(x)$, 其在 $x=a$ 处可表为关于 $X$ 的 Taylor 级数 [^distinguish] $f(a) + f'(a)(X-a) + \text{etc.}$, Mathworks 的创始人 Cleve Moler 约 60 年 [^publish-time] 前考虑了借用虚数单位 $i$ 的数值微分, 相关文献称为 [complex step 微分法](https://blogs.mathworks.com/cleve/2013/10/14/complex-step-differentiation/) [^complex-step], 注意

$$
f(a+i h) \spaces= f(a) + i h f'(a) - \frac{h^2}{2!}f''(a) - \frac{ih^3}{3!}f'''(a) + \cdots
$$

这个其实就是将 Taylor 级数的每一项完全展开, 在 [后续](/data-structure/kock-lawvere) 的计算中也会继续用到. 如此便有 
$$ 
\frac{\partial f}{\partial x} \spaces= \frac{\Im f(x+ih)}{h} + \mathcal{O}(h^2) \quads\implies 
\frac{\partial f}{\partial x} \quads\approx \frac{\Im f(x+ih)}{h} 
$$

这个方法最初被设计用于处理数值微分问题, 但稍加思考就能发现, 该过程也适用于符号微分. 与前一个问题所改进的结果的精度不同, 用于 [符号微分](/data-structure/dual-number) 时, 所取得的优势是更精简的中间表达式和非递归的计算过程. 

[^distinguish]: 习惯上会混淆 $x$ 与 $X$, 这里做出区分. 
[^publish-time]: 即 1967 年. 不过这个名字要等到 1998 年, William Squire 和 George Trapp 才正式提出.
[^complex-step]: 按方法的内容来说, "complex step 微分" 可以翻译为 "复步微分". 

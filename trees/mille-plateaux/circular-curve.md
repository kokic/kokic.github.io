
---
title: 圆曲线
taxon: exegesis
date: December 30, 2024
author: [kokic](/trees/kokic.md)
---

$\gdef\quads#1{\quad #1 \quad}$
$\gdef\spaces#1{~ #1 ~}$
$\gdef\d{\operatorname{d}}$
$\gdef\E{\operatorname{E}}$
$\gdef\arc{\text{arc}}$
$\gdef\R{\mathbf{R}}$
$\gdef\Q{\mathbf{Q}}$

考虑半径为 $r$ 的实圆周 $x^2+y^2=r^2$，其在上半平面的轨迹可表为函数 $y=\sqrt{r^2-x^2},x\in[-r,r]$，[长度](/mille-plateaux/arc-length) 为 

$$
L 
\spaces= \int_{-r}^r\dfrac{r}{\sqrt{r^2-x^2}}\d x
\spaces= r\arcsin\dfrac{x}{r}\bigg|_{-r}^r
\spaces= \pi r
$$

因而圆的弧长定义了反正弦函数，即 

$$
\arcsin x \spaces= \int_0^x\dfrac{1}{\sqrt{1-t^2}}\d t
$$ 

其反函数被称为正弦函数，统称圆函数或者三角函数. 

现在, 注意到 $\cot(x)$ 和 $\cot^\prime(x)$ 满足   $\cot^2(x) + \cot^\prime(x) = 1$, 令 $(\cot(x), \cot^\prime(x)) \mapsto (x,y)$, 即 $y=c-x^2$. 

其他三角函数及其导数也有类似的关系, 以下列出.

$$\def\arraystretch{2}\begin{array}{|c|c|c|c|} 
\hline
u & (u, u^\prime) \mapsto (x,y) & g & \int \frac{\d x}{y} \\
\hline
\cot & y = -x^2-1 & 0 & -\tan^{-1} x \\ 
\hline
\tan & y = x^2 + 1 & 0 & \tan^{-1} x \\ 
\hline
\cos, \sin & y^2 = 1-x^2 & 0 & \tan^{-1}\dfrac{x}{\sqrt{1-x^2}} \\
\hline
\sec, \csc & y^2 = x^4-x^2 & 0 & \dfrac{x\sqrt{x^2-1} \tan^{-1}(\sqrt{x^2-1})}{\sqrt{x^4-x^2}} \\
\hline
\end{array}$$

现在取 $C(\Q): y=x^2+1$ 上一定点 $(0, 1)$, 固定斜率 $t$ 从而有直线 $\ell(\Q): y=tx+1$, 类似地求曲线 $\ell(\Q) \cdot C(\Q) = 0$ 的交点, 得到 $(t, t^2+1)$.  

如果我们对抛物线 $C(\R)$ 求弧长, 所得到的将是 $\log$ 或 $\sinh^{-1}$ 的代数函数. 当然, $\sinh^{-1}$ 实际上也是 $\log$ 的代数函数. 
$$
\begin{aligned} 
s
&\spaces= \int\sqrt{1+(2x)^2}\d x \\
&\spaces= \frac12 \sqrt{1+4x^2} + \frac14\sinh^{-1}(2x)
\end{aligned}
$$

现在重新回顾 

$$
\int\dfrac{\d x}{y}, \quad y = \sqrt{r^2-x^2}
$$ 

积分号内的项是 $x,y$ 的有理函数, $y$ 是 $x$ 的代数函数, 同时我们已经知道 $x,y$ 满足的代数方程有一个 [有理参数化](/mille-plateaux/circular-parameterization), 也就是说

$$
\begin{aligned}
\int\dfrac{\d x}{y} 
&\spaces= \int \frac{\d{(\frac{1-t^2}{1+t^2})}}{\frac{2t}{1+t^2}} \\
&\spaces= \int -\frac{4t}{(1+t^2)^2} \cdot \frac{1+t^2}{2t} \d t \\
&\spaces= \int -\frac{2}{1+t^2} \d t \\
&\spaces= -2\tan^{-1} t
\end{aligned}
$$

这是 [切线半角换元](https://en.wikipedia.org/wiki/Tangent_half-angle_substitution) 或者按俄罗斯与国内更流行的称呼则是万能三角换元. 另一方面, 我们知道 $t = \pm\frac{\sqrt{1-x}}{\sqrt{1+x}}$. 这就意味着 $\arcsin x$ 和 $-2\tan^{-1} t$ 之间最多只相差一个常数, 容易计算这个常数正是 $\frac{\pi}2$, 则有

$$
\arcsin x \spaces= \frac{\pi}2-2\arctan\frac{\sqrt{1-x}}{\sqrt{1+x}}
$$

双曲线时的情况略有不同. 考虑 $C(\R):x^2-y^2=1$, 如果朴素地计算平面直角坐标系上的积分, 将得到一个会被归类为椭圆积分的表达式

$$ 
\int \sqrt{\frac{2x^2-1}{x^2-1}} \d x 
\spaces= \int \frac{4x^4-1}{\sqrt{x^2-1}\sqrt{2x^2+1}} \d x
$$

由于分子部分的 $4x^4-1$ 是多项式函数, 因此整个积分的核心就在于下面这一项 

$$
\int \frac1{\sqrt{(x^2-1)(2x^2+1)}} \d x
\tag{1}
$$

[椭圆积分的经验](/mille-plateaux/elliptic-integral) 很容易让我们认为最后的结果当中势必会出现 [椭圆函数](/mille-plateaux/elliptic-functions). 事实正是如此, 注意这个时候 $y^2 = (x^2-1)(2x^2+1)$ 的 $g$ 是 $1$, 而且实际上在引入椭圆函数后, $(1)$ 的表达式要远比弧长的表达式复杂. 

现在考虑双曲线 $C(\R)$ 的一个参数化 
$$ (x,y) \quads\mapsto (\cosh t, \sinh t) $$ 

相应的, 关于 $x \in [a,b]$ 弧长积分变为 $t \in [\cosh^{-1}a, \cosh^{-1}b]$ 的积分 

$$
\begin{aligned}
\int \sqrt{\sinh^2 t + \cosh^2 t} \d t
&\spaces= \int \sqrt{\cosh 2t} \d t \\
&\spaces= -i \E(it \mid 2) \\
&\spaces= -i \E(i \cosh^{-1}x \mid 2) \\
&\spaces= \E(\sin^{-1}x \mid 2) \\
\end{aligned}
$$ 


---
title: Gaussian integral 计算综述
date: 2020-10-02
categories:
  - 数学
tags:
  - IUTT
---

Mochizuki 在 2020 年 4 月 4 日的 [更新](http://www.kurims.kyoto-u.ac.jp/~motizuki/Alien%20Copies,%20Gaussians,%20and%20inter-universal%20Teichmuller%20Theory.pdf)中修正了旧文 [2016 年 12 月] 的（单词拼写）错误、改善了排版并添加了一些新的文字叙述，本文是对其中一小部分（1.）的翻译. 作者举高斯积分为例，并以 “高中生” 的视角来看待，使读者能在具体直观上了解 IUT 理论中的一个基础概念 $—$ alien copies，本文虽已将其蹩脚地译作「相异拷贝」，却仍觉词不达意、有失风雅，为不曲解原意加之本人水平有限，本文大体采取直译，如此云云，望读者见谅. 

## 1.1. inter-universal Teichmüller 理论与高斯积分
本文的目的是为读者铺平道路，从对 inter-universal Teichmüller 理论完全无知的状态到对理论 “方案” 的一般理解，重新考虑了众所周知的高斯积分的计算 $$\displaystyle\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x=\sqrt{\pi}$$
从一个假想的高中生的角度来看，他学习过一元微积分和极坐标，但还没有接触过多元微积分. 也就是说，我们将从本文的第一节开始，回顾高斯积分的计算，讨论如何将这种计算解释给这个高中学生. 在随后的's中，我们将继续讨论如何将对此高中生的解释中的各种关键步骤翻译成更复杂的抽象算术几何语言，从而基于 IUT 理论和高斯积分计算之间的深层结构相似性，给出 IUT 理论的总体轮廓. 

## 1.2. 通过坐标变换或分部积分的朴素方法
在一元微积分中，乍一看似乎很难处理的定积分通常借助适当的坐标变换或分部积分简化为更简单的定积分. 因此：

### 第一步
我们假想的高中生最初可能会被诱导着去进行坐标变换：
$$e^{-x^2}\rightsquigarrow u$$
然后 [错误地] 计算：

<div class="scroll">
$$\displaystyle\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x=2\cdot\int_0^\infty e^{-x^{2}}\mathrm{d}x=-\int_{x=0}^{x=\infty}\mathrm{d}(e^{-x^{2}})=\int_0^1\mathrm{d}u=1$$
</div>

 $—$ 不久后才意识到这个计算是错误的，因为在进行坐标变换时对无穷小量 $\mathrm{d}x$ 的错误处理. 

### 第二步
这一认知可能会引导学生尝试通过各种迭代的分部积分来修复第一步的计算：

<div class="scroll">
$$\displaystyle\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x=-\int_{x=-\infty}^{x=\infty}\dfrac{1}{2x}\mathrm{d}(e^{-x^{2}})=\int_{x=0}^{x=\infty}e^{-x^{2}}\mathrm{d}\bigg(\dfrac{1}{2x}\bigg)=\dots$$
</div>

 $—$ 当然，这行不通. 

## 1.3. 引入相同但相对的相异拷贝 [alien copies]
在这一点上，我们可以向假想的高中生建议这样一种计算高斯积分的想法，首先将积分平方，然后取积分平方值的平方根. 也就是说，实际上： 

### 第三步
我们可以向此高中生建议，高斯积分实际上可以通过考虑两个相同 $—$ 但相互独立的乘积来计算！ $—$ 高斯积分的拷贝
$$\displaystyle\bigg(\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x\bigg)\cdot\bigg(\int_{-\infty}^\infty e^{-y^{2}}\mathrm{d}y\bigg)$$  $—$ 即相对于高斯积分的单一拷贝

在这里，让我们回忆一下，我们的高中生已经处于极度挫败的心理状态，这是由于学生在第二步中的频繁而英勇的尝试，这只会导致无意义的无尽迷宫和越来越复杂的数学表达式. 这段经历给我们的高中生留下了这样的印象：高斯积分毫无疑问是学生所遇到的最困难的积分. 鉴于这一经历，第三步的建议引起了学生强烈的愤慨和怀疑. 也就是说，认为仅仅通过考虑两个相同的积分 $—$ 即与单个拷贝相对 $—$ 就可以在计算这样一个非常困难的积分方面取得有意义的进展，这一想法让学生觉得非常可笑. 换句话说，第三步的建议根本不是学生想听到的那种建议. 相反，学生对看到一些巧妙的分部积分或坐标变换非常感兴趣，包括 “$\text{sin}(-)$” 、 “$\text{cos}(-)$” 、 “$\text{tan}(-)$” 、 “$\text{exp}(-)$” 、 “$\dfrac{1}{1+x^2}$” 等，即学生习惯在熟悉的单变量微积分的论述中看到的那种. 

## 1.4. 二维欧氏空间上的积分
只有在劝说获得了实质性的效果之后，我们假想的高中生才真正同意进行下一步的解释：

### 第四步
如果考虑第三步高斯积分的两个拷贝的乘积中出现的坐标的 “整体” 或 “整体空间” ，则可以将该积分的乘积视为单个积分
$$\displaystyle\int_{\mathbb{R}^2}e^{-x^{2}}\cdot e^{-y^{2}}\mathrm{d}x\mathrm{d}y=\int_{\mathbb{R}^2}e^{-(x^2+y^2)}\mathrm{d}x\mathrm{d}y$$
 $—$ 在欧氏平面 $\mathbb{R}^2$上

当然，我们的高中生在使用第四步时可能会遇到一些麻烦，因为它需要我们接受空间上积分的概念，即不是实数轴间隔的欧氏平面 $\mathbb{R}^2$. 然而，这可以通过回顾黎曼积分（一种应该被熟悉的单变量微积分的哲学）概念背后的基本哲学来解释：

### 第五步
我们可以考虑更一般空间上的积分，例如欧氏平面 $\mathbb{R}^2$ 上的计算

<div class="scroll">
$$net\;mass=\lim\sum(\text{inﬁnitesimals of }zero\;mass)$$
</div>

 “net mass” 是指考虑 inﬁnitesimals 的和的极限，例如  “$\mathrm{d}x\\;\mathrm{d}y$” ，人们可以认为它具有 “zero mass” 

## 1.5. 坐标变换的影响
正如单变量微积分一样，在更一般的空间上积分的计算可以通过适当的坐标变换来简化. 任何 [指的是连续可微的] 坐标的变化都会在被积函数中产生一个由 Jacobian 给出的新因子.  这个因子由 Jacobian 构成，即偏导数矩阵的行列式，对于我们假设的高中生来说，这似乎有点神秘，因为他只知道单变量微积分中的坐标变换.  另一方面，Jacobian 矩阵的样子可以用如下的计算方式来定义： 

### 第六步
令 $U,V\sube\mathbb{R}^2$ 是 $\mathbb{R}^2$ 的开子集，且 $$U\ni(s,t)\mapsto(x,y)=(f(s,t),g(s,t))\in V$$ 一种连续可微的坐标变换形如 Jacobian
$$J\overset{\text{def}}{=}\text{det}\begin{pmatrix} \frac{\partial f}{\partial s} & \frac{\partial f}{\partial t} \\\\\\\\ \frac{\partial g}{\partial s} & \frac{\partial g}{\partial t} \end{pmatrix}$$  $—$ 可被认为是 $U$ 上的一个连续实值函数 $—$ 在整个 $U$ 上都不为零. 然后对任意连续实值函数 $\phi:U\to\R,\psi:V\to\R$ 有 $\psi(f(s,t),g(s,t))=\phi(s,t)$，上述坐标变换对 $V$ 上 $\psi$ 积分计算的影响可能如下：
$$\int_V\psi\mathrm{d}x\mathrm{d}y=\int_U\phi\cdot J\mathrm{d}s\mathrm{d}t$$

### 第七步
在第六步的情况下，坐标变化对 “inﬁnitesimals”  $\mathrm{d}x\\;\mathrm{d}y$ 和 $\mathrm{d}s\\;\mathrm{d}t$ 的影响可以理解为以下内容： 第一，一个定域到 $U$ 点的一个非常小的开邻域，在这个邻域上，$f$ 和 $g$ 的各种偏导数是粗略恒定的，这意味着由 $f$ 和 $g$ 确定的坐标变化大致是线性的. 那么这种线性变换对区域的影响 $—$ 即在第五步的语言中，用线性变换的行列式乘以最小的球面平行四边形的 “masses” . 
事实上，为了验证这一点，我们观察到，在可能的前后组合旋转后 [这显然不影响此类面积的计算]，可以假设所考虑的平行四边形的一个侧面是 $s$ 轴上的一条线段，其左端点等于原点 $(0,0)$，此外，线性变换可以写成形式的完全扩张和幂次线性变换的组合
$$(s,t)\mapsto(a\cdot s, b\cdot t);\qquad(s,t)\mapsto(s+c\cdot t,t)$$

其中 $a,b,c\in\R$ 且 $ab\neq0$，另一方面，在这种 “上三角” 线性变换的情况下，线性变换对所考虑的平行四边形面积的影响在高中平面几何水平上是一种简单的计算. 

## 1.6. 从平面笛卡尔坐标到极坐标的通道
一旦步骤五、六和七 “无害” 的概述被认同，我们就可以进行下一步操作： 

### 第八步
将第六步应用于第四步的积分，在欧氏平面上负 $x$ 轴的补 $\R^2\backslash(\R_{\le0}\times\\{0\\})$ 上对坐标变换进行积分

<div class="scroll">
$$\R_{\gt0}\times(-\pi,\pi)\ni(r,\theta)\mapsto(x,y)=(r\cos(\theta),r\sin(\theta))\in\R^2\backslash(\R_{\le0}\times\{0\})$$
</div>

其中，以 $\R_{\gt0}$ 表示正实数集合并以 $(-\pi,\pi)$ 表示在 $−\pi$ 到 $\pi$ 之间的实开区间.  

### 第九步
第八步的坐标变换允许如下计算：

<div class="scroll">
$$\begin{aligned} \displaystyle\bigg(\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x\bigg)\cdot\bigg(\int_{-\infty}^\infty e^{-y^{2}}\mathrm{d}y\bigg) &=\int_{\mathbb{R}^2}e^{-x^{2}}\cdot e^{-y^{2}}\mathrm{d}x\mathrm{d}y \\ &=\int_{\mathbb{R}^2}e^{-(x^2+y^2)}\mathrm{d}x\mathrm{d}y \\ &=\int_{\R^2\backslash(\R_{\le0}\times\{0\})}e^{-(x^2+y^2)}\mathrm{d}x\mathrm{d}y \\ &=\int_{\R_{\gt0}\times(-\pi,\pi)}e^{-r^2}r\mathrm{d}r\mathrm{d}\theta \\ &=\bigg(\int_0^{\infty}e^{-r^2}\cdot2r\mathrm{d}r\bigg)\cdot\bigg(\int_{-\pi}^{\pi}\frac{1}{2}\cdot\mathrm{d}\theta\bigg) \end{aligned}$$
</div>

$—$ 其中，我们观察到最后的等式值得注意，它表明在计算所考虑的积分时，径向 [即  “$r$” ] 和角度 [即  “$\theta$” ] 坐标可以解耦 [decoupled]，即考虑中的积分可以写成径向积分和角积分的乘积. 

### 第十步
尝试计算第九步的径向积分
$$\int_0^{\infty}e^{-r^2}\cdot2r\mathrm{d}r=\int_0^1\mathrm{d}(e^{-r^2})=\int_0^1\mathrm{d}u=1$$
借由坐标变换
$$e^{-x^2}\rightsquigarrow u$$
这，本质上，出现在第一步错误的初始计算中！ 

### 第十一步
尝试计算第九步的角积分：
$$\int_{-\pi}^{\pi}\frac{1}{2}\cdot\mathrm{d}\theta=\pi$$
这里，我们注意到，如果我们把第四步的欧氏平面 $\R^2$ 看做一个复平面，即如果我们把第八步的坐标变化写成 $x+iy=r\cdot e^{i\theta}$，那么，相对于第四步的欧几里德坐标 $(x,y)$，上述角积分的计算可以被认为是由于考虑自然对数的虚数部分而给出的坐标变换引起的
$$\log(r\cdot e^{i\theta})=\log(r)+i\theta$$

### 第十二步
因而，综上所述，我们得到

<div class="scroll">
$$\begin{aligned} \displaystyle\bigg(\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x\bigg)^2 &=\bigg(\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x\bigg)\cdot\bigg(\int_{-\infty}^\infty e^{-y^{2}}\mathrm{d}y\bigg) \\ &=\bigg(\int_0^{\infty}e^{-r^2}\cdot2r\mathrm{d}r\bigg)\cdot\bigg(\int_{-\pi}^{\pi}\frac{1}{2}\cdot\mathrm{d}\theta\bigg)=\pi \end{aligned}$$
</div>

即得 $\displaystyle\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x=\sqrt\pi$，这里，有兴趣观察到，尽管在上述计算高斯积分的方法中 [即，从第三步开始到现在的第十二步结束]， 第十步和第十一步的径向和角积分在当前的第十二步的最终计算中非常自然地出现，如果我们只看原始的高斯积分 $\displaystyle\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x$，那么在实轴上确定原始高斯积分 $\displaystyle\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x$ 的 “明确的部分” ，在某种意义上，精确地 “对应” 第十步和第十一步的径向积分和角积分，这基本上是一项无望的任务. 

## 1.7. 根据 “错误因子” 对朴素方法的辩护
换言之，以上讨论的内容可以概括为以下： 如果某个人考察相同 $—$ 但相对的！ $—$ 高斯积分的拷贝，即与单个拷贝相对，借由 “错误因子”  $\sqrt{\pi}$，使得第一步错误计算的朴素动机的坐标变换可能是合理的. 

在这种情况下，值得注意的是，在上述讨论中应用的技术来计算高斯分布 “$e^{-x^2}$” 的积分，在本质上，不能适用于除高斯分布以外的函数的积分. 事实上，上述讨论的技术和高斯分布之间的这种本质上独特的关系可以理解为，本质上，指数函数决定了实数的 “加法李群” 和实数的 “乘法李群” 之间李群同构的一个推论. 更多细节请参考 [Bell]、[Dawson]. 

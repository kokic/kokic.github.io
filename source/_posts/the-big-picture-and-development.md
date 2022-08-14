
---
title: the big picture & development
date: 2020-09-13
categories:
  - 数学
tag:
  - 连分数
---

## 连分数

前半部分是对 [Continued Fractions - History](http://archives.math.utk.edu/articles/atuyl/confrac/history.html) 的翻译（略有修改），并参考了 
  1) [Continued fraction - Wikipedia](https://en.m.wikipedia.org/wiki/Continued_fraction) 
  2) [Continued fraction - Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Continued_fraction)
  3) [Continued fractions - OeisWiki](http://oeis.org/wiki/Continued_fractions)
  4) 欧拉《无穷分析引论》的第十八章
  5) 高斯《Werke》
  6) 哈代《数论导引》的第十九章
  7) 哈代《拉马努金：关于他生平和工作的十二篇演讲》
  8) 斯蒂尔切斯《连分数的研究》
  9) 莫里斯·克莱因《古今数学思想》的第十三章第 2 节、第二十章第 6 节、第四十四章第 2 节、第四十七章第 4 节
  10) 卢昌海《黎曼猜想漫谈》的第六章

以及我个人所了解到的信息补充了后半部分. 

--- 

连续分数的起源很难确定. 在过去 2000 年中，我们可以在整个数学中找到连分数的例子，但直到 17 世纪末、18 世纪初才奠定了其真正的基础. 

传统上，连续分数的起源是在创建 Euclid 算法时进行的. 公元前 300 年，在 Euclid 所著的《Elements》中，Euclid 使用一种算法来寻找两个数字的最大公因数，连分数作为这一算法的副产物而出现. Euclid 或他的前辈们是否真的使用了这种算法来产生连分数令人怀疑，但是由于其与连续分数的密切关系，Euclid 算法的创建标志着连续分数的初步发展. 

一千多年以来，任何使用连分数的工作都仅限于特定示例. 499 年，印度数学家 Aryabhata 使用连续分数求解线性不定方程，在希腊和阿拉伯的数学作品中，我们也可以找到连分数的例子和痕迹，但同样，它的使用仅限于特例. 

意大利数学家 Rafael Bombelli (1526-1572) 在他的《L'Algebra Opera》里第一个用连分数来逼近平方根（1572）. 为求 $\sqrt2$ 的近似值，他写出 $\sqrt2=1+\dfrac{1}{y}$ 由此得到 $y=1+\sqrt2$，于是 $y=2+\dfrac{1}{y}$，并最终得出 
$$\sqrt2=1+\dfrac{1}{2+\dfrac{1}{2+\dfrac{1}{2+\ddots}}}$$
Bombelli 又给出其他例子如 $\sqrt{13}$，但他并不考虑这展开式是否会收敛于它所打算表示的那个数. 

同样来自意大利的 Pietro Cataldi (1548-1626) 对 $\sqrt{18}$ 进行了连分数展开，并在《Trattato del modo brevissimo di trovar la radice quadra delli numeri》中提出了第一种连分数的记号. 但是，除了这些示例，没有一个数学家研究连分数的性质. 

1655 年，英国数学家 John Wallis (1616-1703) 在《Arithemetica Infinitorium》提出了恒等式
$$\dfrac{4}{\pi}=\dfrac{3\times3\times5\times5\times7\times7\cdots}{2\times4\times4\times6\times6\times8\cdots}$$
在书中 John Wallis 说英国皇家学会的第一任会长 William Brouncker（1620-1684）能将此恒等式变换为
$$\dfrac{4}{\pi}=1+\dfrac{1^2}{2+\dfrac{3^2}{2+\dfrac{5^2}{2+\ddots}}}$$
遗憾的是，Brouncker 没有对这种形式作进一步的应用. 

尽管 Brouncker 并不关注连分数，但 Wallis 采取了主动行动，并开始了推广连分数理论的第一步. 1695 年，Wallis 在他的《Opera Mathematica I》一书中，为连分数奠定了一些基础. 他解释了如何计算第 $n$ 个收敛，并发现了一些现在熟悉的收敛性质. 也是在这项工作中，首先使用了术语“连分数”. 

他提出，若 $\dfrac{p_n}{q_n}$ 是 $$\dfrac{b_1}{a_1+\dfrac{b_2}{a_2+\dfrac{b_3}{a_3+\ddots}}}$$ 的第 $n$ 次收敛，则有 $$\dfrac{p_n}{q_n}=\dfrac{a_np_{n-1}+b_np_{n-2}}{a_nq_{n-1}+b_nq_{n-2}}$$ 但关于 $\dfrac{p_n}{q_n}$ 是否收敛于连分数所表示的那个数，当时还没有得到明确的结果. 

荷兰数学家 Christiaan Huygens (1629-1695) 率先证明了连续分数的实际应用. Huygens 写了一篇论文，解释了如何使用连续分数的收敛来找到齿轮比的最佳有理近似值，这些近似值使他能够选择正确的档位齿数（他的工作是出于他对建造机械天文馆的渴望）. 

当 Wallis 和 Huygens 开始进行连分数的工作时，Leonard Euler（1707-1783）、Johan Heinrich Lambert（1728-1777）和 Joseph Louis Lagrange（1736-1813）也接受了这个话题，于是连分数的领域开始蓬勃发展.  

1737 年，Euler 在 《De Fractionlous Continious》中奠定了许多现代理论，他表明，每个有理数都可以表示为有限简单连分数. 他还给出了 $e$ 的一个连分数形式的表达式. 实际上，此表达式还证明了 $e$ 和 $e^2$ 是无理数. 
<div class="scroll">
$$e-1=1+\dfrac{1}{1+\dfrac{1}{2+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{4+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{6+\ddots}}}}}}}}$$
</div>
$$\dfrac{e+1}{e-1}=2+\dfrac{1}{6+\dfrac{1}{10+\dfrac{1}{14+\ddots}}}$$

（注意 $\text{tanh}{\dfrac{1}{2}}=\dfrac{e-1}{e+1}$）

1748 年，Euler 在《Introductio in analysin infinitorum》中证明了某种形式的连续分数和广义无穷级数的等价性，证明了每个有理数都可以写成一个有限的连续分数，并证明了一个无理数的连续分数是无限的. 
<div class="scroll">
$$\sum_{i=0}^n\prod_{j=0}^ix_j=\dfrac{x_0}{1-\dfrac{x_1}{1+x_1-\dfrac{x_2}{1+x_2-\dfrac{x_3}{\cdots\dfrac{\ddots}{1+x_{n-1}-\dfrac{x_n}{1+x_n}}}}}}$$
</div>
实际上，这个式子并未在原书中直接给出，《Introductio in analysin infinitorum》第十八章的主要内容是 Euler 将一般的交错级数化为连分式形式，上式可以看作 Euler 所得结论的一个推论. 

Lambert 是 Euler 和 Lagrange 的在柏林科学院的一位同事，他推广了 Euler 在 $e$ 上的工作，证明了如果 $x$ 是有理数，则 $e^x$ 和 $\text{tan}(x)$ 都是无理数，基于前者，证明了所有有理数都有着无理的自然对数，而由后者，证明了 $\tan(x)$ 的连分式展开的收敛性. 在 1761 年，Lambert 通过 $\text{tan}(x)$ 的连分数展开式给出了的首个 $π$ 是无理数的证明. 

Lagrange 用连分式找到了求方程无理根的近似方法，在同一杂志的另一篇文章中，他用连分式的形式给出了微分方程的近似解. 在 1768 年，Lagrange 使用类似于 Bombelli 的连分数提供了 Pell 方程的一般解，同年的文章中，拉格朗日证明了欧拉在 1744 年文章中证明的一个定理的反定理，这个反定理说：二次方程的实根是周期连分式. 

十九世纪被称为连分数的黄金时代. Claude Brezinski 在《History of Continued Fractions and Padé Approximants》中写道 “可以说十九世纪是连分数的流行时期. ” 那时是 “每个数学家都知道该主题的时期. ” 结果，有关这一领域的内容出现了爆炸式增长，连分数的理论得到了极大的发展，特别是关于收敛性的理论，还研究了以复变量为项的连分数. 在该领域做出贡献的一些杰出的数学家包括德国数学家 Carolus Fridericus Gauss (1777-1855)、Carl Gustav Jacob Jacobi (1804-1851)、Oskar Perron (1880-1975)、法国数学家 Charles Hermite (1822-1901)、Augustin Louis Cauchy (1789-1857) 和荷兰数学家 Thomas Joannes Stieltjes (1856-1894). 到20世纪初，该学科已从 Wallis 的最初工作中得到了极大发展. 

1813 年，Gauss 在《Werke》中通过巧妙的超几何函数恒等式推导出了一般的复连分式展开（在现代，这被称作 Gauss's continued fraction —— 高斯连分式），同时，高斯还发明了一种新的记号（Gauss’ Kettenbruch notation，Kettenbruch 为连分数的德语单词）用来表示一般的连分数.  
$$\underset{k=1}{\overset{\infty}{\raisebox{-0.5em}{\huge\rm{K}}}}\~{\dfrac{a_k}{b_k}}:={\cfrac{a_1}{b_{1}+{\cfrac{a_2}{b_{2}+{\cfrac{a_3}{b_{3}+\ddots}}}}}}$$

事实上，我们不妨直接定义
$$\underset{k=1}{\overset{n}{\raisebox{-0.5em}{\huge\rm{K}}}}\~{\dfrac{a_k}{b_k}}:={\cfrac{a_1}{b_{1}+{\cfrac{a_2}{b_{2}+{\dfrac{\ddots}{\ddots+\dfrac{a_n}{b_n}}}}}}}$$
于是自然地引出无限形式 $\underset{k=1}{\overset{\infty}{\raisebox{-0.5em}{\huge\rm{K}}}}\~{\dfrac{a_k}{b_k}}:=\lim\limits_{n\to\infty}{\underset{k=1}{\overset{n}{\raisebox{-0.5em}{\huge\rm{K}}}}}\~{\dfrac{a_k}{b_k}}$，在不致引起歧义的情况下，将 $\underset{k=1}{\overset{n}{\raisebox{-0.5em}{\huge\rm{K}}}}\~{\dfrac{a_k}{1}}$ 形式地记为 $\underset{k=1}{\overset{n}{\raisebox{-0.5em}{\huge\rm{K}}}}\~{a_k}$. 

不难发现，Kettenbruch 记号在表示连分式上仍有不足之处，且记号本身也不是良定义的，遗憾的是，即使是现在，也没有一个足够好的记号来表示. 

重新回到 1768 年，Lambert 发表了高斯连分式的几个例子，Euler 和 Lagrange 都研究了类似的结构，但是 Gauss 在 1813 年推导出了这种连分数的一般形式. 

尽管 Gauss 给出了这种连分数的形式，但他没有给出其收敛性的证明，之后德国数学家 Bernhard Riemann (1826-1866) 等人获得了部分结果，直到 1901 年，美国数学家 Edward Burr Van Vleck (1863-1943) 才给这种连分数的收敛问题画上了句号. 

Riemann 研究了形如 $a+\underset{k=1}{\overset{\infty}{\raisebox{-0.5em}{\huge\rm{K}}}}\~{b_kx}$ 的连分式，并证明了 $\dfrac{P^\alpha\left(\begin{matrix} \alpha & \beta & \gamma \\\\ \alpha^\prime & \beta^\prime & \gamma^\prime \end{matrix}\quad x\right)}{P^\alpha\left(\begin{matrix} \alpha & \beta+1 & \gamma \\\\ \alpha^\prime-1 & \beta^\prime & \gamma^\prime \end{matrix}\quad x\right)}$ 可以展开成这一形式（同时也证明了其收敛性）. 

在复分析中，高斯连分式是从超几何函数派生的一类特殊的连分数. 它是数学已知的第一个解析连续分数之一，可以用来表示几个重要的基本函数，以及一些更复杂的超越函数. 
一个经典的关系是
<div class="scroll">
$$\dfrac{1}{c}\cdot\dfrac{_2F_1(a+1,b;c+1;z)}{_2F_1(a,b;c;z)}=\cfrac{1}{c+\cfrac{\lambda_0z}{c+1+\cfrac{\lambda_1z}{c+2+\ddots}}}$$
</div>
其中 <div class="scroll">
$$\lambda_{2k-1}=(a+k)(b-c-k),\lambda_{2k}=(b+k)(a-c-k)$$
</div>

1828 年，法国数学家（当时还不是）Évariste Galois (1811-1832) 在他的第一篇论文《Démonstration d'un théorème sur les fractions continues périodiques》中简单总结了 Euler、Lagrange 等人关于连分数的工作并证明了一个关于周期连分数的结论，这是他数学研究的初次尝试. 我们猜测，Galois 会研究连分数（包括后来对高次方程可解性的研究）很可能是受到 Lagrange 的《Réflexions sur la résolution algébrique des équations》的影响. 

1892 年，法国数学家 Henri Eugène Padé (1863-1953) 受德国数学家 Georg Frobenius (1849-1917) 的工作启发，根据经典的连续分数理论提出了 Padé approximation. 

1894 年，Stieltjes 发表了论文《Recherches sur les fractions continues》，这个工作（实际上是两篇论文）是连分式解析理论的开端，它研究了收敛性问题以及定积分与发散级数的联系，正因如此，Stieltjes 被誉为“连分数分析之父”. 在这篇论文中，Stieltjes 为了表示一个解析函数序列的极限，被迫引进了一种新的积分（确切来说，是对黎曼积分进行了推广），这种积分（也就是我们现在所知的 Riemann-Stieltjes integral）后来成为研究一般测度上的积分的开端. 

1913 年，印度数学家（当时还不是）Srinivasa Ramanujan (1887–1920) 在写给英国数学家 Godfrey Harold Hardy (1877-1947) 的信中记录着这样一些恒等式（只选择了有关连分数的那部分）
<div class="scroll">
$$\int_0^ae^{-x}\mathrm{d}x=\cfrac{\sqrt\pi}{2}-\cfrac{e^{-a^2}}{2a+\cfrac{1}{a+\cfrac{2}{2a+\cfrac{3}{a+\cfrac{4}{2a+\cdots}}}}}$$
</div>
<div class="scroll">
$$4\int_0^\infty\dfrac{xe^{-x\sqrt5}}{\text{cosh}x}\mathrm{d}x=\cfrac{1}{1+\cfrac{1^2}{1+\cfrac{1^2}{1+\cfrac{2^2}{1+\cfrac{2^2}{1+\cfrac{3^2}{1+\cfrac{3^2}{1+\cdots}}}}}}}$$
</div>
$$v^5=u\cdot\dfrac{1-2u+4u^2-3u^3+u^4}{1+3u+4u^2+2u^3+u^4}$$
其中 <div class="scroll">
$$u=\cfrac{x}{1+\cfrac{x^5}{1+\cfrac{x^{10}}{1+\cfrac{x^{15}}{1+\cfrac{x^{20}}{1+\cdots}}}}},v=\cfrac{x^\frac{1}{5}}{1+\cfrac{x}{1+\cfrac{x^2}{1+\cfrac{x^3}{1+\cdots}}}}$$
</div><br>
<div class="scroll">
$$\cfrac{1}{1+\cfrac{e^{-2\pi}}{1+\cfrac{e^{-4\pi}}{1+\cfrac{e^{-6\pi}}{1+\cdots}}}}=\left(\sqrt{\dfrac{5+\sqrt5}{2}}-\dfrac{\sqrt5+1}{2}\right)\sqrt[5]{e^{2\pi}}$$
</div>
<br>
<div class="scroll">
$$\cfrac{1}{1+\cfrac{e^{-2\pi\sqrt5}}{1+\cfrac{e^{-4\pi\sqrt5}}{1+\cdots}}}=\left(\dfrac{\sqrt5}{1+\sqrt[5]{5^\frac{3}{4}(\frac{\sqrt5-1}{2})^\frac{5}{2}-1}}-\dfrac{\sqrt5+1}{2}\right)e^{\frac{2\pi}{\sqrt5}}$$
</div>

Hardy 曾在演讲中这样评价它们：“……事实上第一个式子是经典的，它是拉普拉斯的一个公式，最早由雅可比证明……第二个出现在罗杰斯 1907 的一篇论文里……后三个完全难倒了我，我从未见过与它们有丝毫相像的公式. 单单瞧一眼就足以明白这些公式只能出自最高级的数学家之手. 它们一定是对的，否则的话，没人能具有这样的想象力去发明它们……”



自二十世纪初以来，连分数已出现在其他领域. 为了举例说明它们的多功能性，Rob Corless 最近发表了一篇论文，研究了连分数与混沌理论之间的联系. 连分数也已用于计算机算法中，以计算对实数的有理逼近和求解不定方程. 



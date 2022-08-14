
---
title: 不等式一论
date: 2021-2-25
categories:
  - 数学
tag:
  - 不等式
  - 凸函数
---

首先介绍一个显见的结论：$\dfrac{a+b}{2}\ge\sqrt{ab}$.
**证**：这里所用的一种比较迂回的方式有助于读者理解后文.
注意到恒等式 $(a+b)^2+(a-b)^2=2(a^2+b^2)$，于是立即得到
$$a^2+b^2\ge2^{-1}(a+b)^2=2^{-1}(a^2+b^2)+ab$$
对每一次展开中的 $a^2+b^2$ 反复使用左侧的不等式，可得
$$a^2+b^2\ge2^{-n}(a^2+b^2)+2(1-2^{1-n})ab$$
当 $n\to\infty$ 时右侧收敛到 $2ab$，证毕.

---

下面的引理易于证明而又不可或缺.

设 $I,J\subset\R$，$f:I\to J$ 为 $3$ 次可微的实值函数，且 $f^{\prime-1}$（$f$ 导函数之逆）存在，任取 $a,b\in I$，则
$$\dfrac{a+b}{2}\sim\dfrac{ff^{\prime-1}(a)-ff^{\prime-1}(b)}{f^{\prime-1}(a)-f^{\prime-1}(b)}$$
中 $\sim\in\\{\ge,\le\\}$ 由 $\dfrac{\mathrm{d}^3}{\mathrm{d}x^3}f(x)\sim 0$ 确定.

注：容易看出此即为 Hadamard 不等式的一部分.

**证**：此处给出一个较为初等的证明. 上式等价于证明 
$$\dfrac{f\'(a)+f\'(b)}{2}\ge\dfrac{f(a)-f(b)}{a-b}$$
故不妨令

<div class="scroll">
$$g(x)=(x-c)\bigg(f\\'(x)+f\\'(c)\bigg)-2\bigg(f(x)-f(c)\bigg)$$
</div>

得 $g\'\'(x)=\dfrac{\mathrm{d}^3}{\mathrm{d}x^3}f(x)(x-c)$，又可设 $x\gt c$，证毕.

---
注：下面的推导依赖于必要的分析学内容.

利用引理，取 $f(x)=e^x$ 得到常见的 
$$\dfrac{a+b}{2}\ge\dfrac{a-b}{\log a-\log b}$$

注：为了填补右侧曲面上的一系列可去间断点，往往会规定 $a=b$ 时右侧的值为 $a$，若将其视作单变量函数曲线，则此点唯一.

若取 $f(x)=x^n$，稍作整理可得 
$$\dfrac{a+b}{2}\ge\dfrac{1}{n}\sum_{k=1}^n\left(a^{n-k}b^{k-1}\right)^{(n-1)^{-1}}$$
注：其中用到了 $a^n-b^n=(a-b)\displaystyle\sum_{k=1}^na^{n-k}b^{k-1}$，这可由多项式的除法得到.

右侧表达式所能取到的范围随着 $n$ 的增大而减小，与前文类似，由此可以得到此不等式的一系列子链（即 $n$ 分别取 $\Z_{\ge2}$ 中的元素所构成的不等式链）.

同样考虑 $n\to\infty$ 时的情况，出乎意料地得到
$$\lim\limits_{n\to\infty}\dfrac{1}{n}\sum_{k=1}^n\left(a^{n-k}b^{k-1}\right)^{(n-1)^{-1}}=\dfrac{a-b}{\log a-\log b}$$

换言之，如果记 $\varDelta(f)=\dfrac{ff^{\prime-1}(a)-ff^{\prime-1}(b)}{f^{\prime-1}(a)-f^{\prime-1}(b)}$
实际上就得到了
$$\lim\limits_{n\to\infty}\varDelta(x^n)=\varDelta(e^x)$$

---

承上，有下列不等式链成立
$$A=\varDelta(x^2)\ge\varDelta(x^3)\ge\cdots\ge\lim\limits_{n\to\infty}\varDelta(x^n)=L$$
并以 $\underset{n=2}{\overset{\infty}{\raisebox{-0.2em}{\huge ≥}}}\varDelta(x^n)$ 记之，其中 $A$ 是熟知的算术平均，而 $L$ 即 $\varDelta(e^x)$. 

类似地，考虑是否有另一条链会形如 $\underset{n}{\raisebox{-0.2em}{\huge≤}}\varDelta(f_n)$. 通过分析 $\varDelta(x^n)$ 得到
$$\lim_{n\to1}\varDelta(x^{-n})\le\varDelta(x^{-2})\le\cdots\le\lim\limits_{n\to\infty}\varDelta(x^{-n})=L$$
记作 $\underset{n\to1}{\overset{n\to\infty}{\raisebox{-0.2em}{\huge ≤}}}\varDelta(x^{-n})=L$，也即 $L=\underset{n\to\infty}{\overset{n\to1}{\raisebox{-0.2em}{\huge ≥}}}\varDelta(x^{-n})$.

注意其中 $\displaystyle\lim_{n\to1}\varDelta(x^{-n})$ 在 $a=b$ 处未定义，同上文将这些可去间断点补上，从而有 $\displaystyle\lim_{n\to1}\varDelta(x^{-n})=G$，其中 $G$ 是熟知的几何平均.

注：$\displaystyle\varDelta(x^{-n})=\dfrac{1}{n}\sum_{k=1}^n\left(a^{n-k}b^{k-1}\right)^{(n+1)^{-1}}$

综上，有 $A=\underset{n=2}{\overset{\infty}{\raisebox{-0.2em}{\huge ≥}}}\varDelta(x^n)=L=\underset{n\to\infty}{\overset{n\to1}{\raisebox{-0.2em}{\huge ≥}}}\varDelta(x^{-n})=G$


---

待续.












---
title: 克莱登附中质检试题答案
date: 2021-3-31
categories:
  - 虚构创作
---

## 参考答案与提示

一、选择题

1. A &emsp;显然当 $n\ge2$ 时 $S_n$ 中只有两个元素.
2. B &emsp;考虑为椭圆即可.
3. C &emsp;略.
4.C &emsp;充分性显然，必要性可利用反证法.
5.B &emsp;参数方程.
6.C &emsp;椭圆曲线背景，显然 $y\gt0$ 时仅交 $y$ 轴于一点.
7.D &emsp;1950 年高考题（华北甲组），到角公式.
8.A &emsp;略.
9.B &emsp;可用伸缩变换处理.
10.D &emsp;最小值为 $\dfrac{9}{8}$.
11.C &emsp;源于课本习题.
12.D &emsp;依题给条件得 $ab=2077$.

二、填空题

13. $\dfrac{5}{2}$ &emsp; 检验取等条件.
14. $0$ &emsp; 完全平方.
15. $0$ &emsp; 源于课本习题.
16. $-1$ &emsp; 基本不等式（求导分析亦可）.

三、解答题

17. $f(x)=1-\log_2x$ &emsp; 由严格单调和取值的任意性知 $f(x)+\log_2x$ 为常数.
18. $5!=120$ &emsp; 1963 年高考题，除去 $2$ 后 $3\\;|\\;24$.
19. 证明略 &emsp; 1965 年高考题，直接展开即可.
20. 见解析 &emsp; 可用伸缩变换处理，面积比为此变换下的不变量. 直接计算亦可（椭圆面积需要积分，内容不超出高中范围）.
21. (1) 显然 &emsp; (2) 依样画葫 &emsp; 题干无非是虚张声势.
22. (1) $\sqrt[4]{7}$ &emsp; (2) $\dfrac{\sqrt[4]{7}}{2}$ &emsp;参数方程（由对称仅考虑第一象限）配合 Cauchy 不等式即可.
23. 证明略 &emsp; (1) $F:xy=1$，对右边使用调和-平方不等式. (2) 联立 (3) 几何意义（对称点）、二次判别式或三角换元均可.

加试部分

24. $\dfrac{\sqrt{3}\sqrt[3]{2}}{\sqrt[6]{5^{5}}}$ &emsp; 椭圆曲线背景，与 22 题类似地考虑使用参数方程并由基本不等式得出.
---
$($2022-01-26$)$ 24. 按题目的意思，矩形的最大面积应当是 $\frac{31}{54}$，出题人原本的想法要多加一条限制 $——$ 矩形完全位于第二象限，更进一步的讨论见解析.

## 部分试题解析

9.将坐标系中的每一个点 $(x,y)$ 都映射成 $\bigg(\dfrac{x}{a},\dfrac{y}{b}\bigg)$，椭圆在此映射下成为单位圆.
故 $|AB|=2\sqrt{x^2+y^2}$，$d_{F\to AB}=\dfrac{cx^2}{a\sqrt{x^2+y^2}}$
$$S=ab\cdot S^\prime=bcx^2\le3$$ 其中 $S^\prime$ 为映射后三角形的面积，而 $S$ 自然是所求三角形的面积，考虑到 $x\in[-1,1]$（单位圆），知 $bc\le3$，故 $a^2\ge6$，长轴长最小即为 $2\sqrt{6}$.

12.首先容易得到 $af(a)=2077$，$b=f\bigg(\dfrac{2077}{b}\bigg)$，由严格单调知 $\exists\\;f^{-1}$，所以第二个条件即 $bf^{-1}(b)=2077$. 两条件对比即得 $a=f^{-1}(b)$，故 $ab=2077$.

16.由观察法知，当 $x\gt 0$ 时 $$\begin{aligned} \text{expr}&=-x^{2076}(2077-2076x) \\\\ &=-\prod^{2076}x\cdot(2077-2076x) \\\\ &\ge-\bigg(\dfrac{\displaystyle\sum^{2076}x+2077-2076x}{2077}\bigg)^{2077} \\\\ &=-1 \end{aligned}$$
而其导数即 $2076\cdot2077\cdot x^{2075}(x-1)$，故当 $x$ 在 $(-\dfrac{1}{2},0)$ 时函数递增，则 $f(x)\gt f\bigg(-\dfrac{1}{2}\bigg)\longrightarrow0$.

20.同 T-9 所取映射，故只需证明对圆成立即可，设 $A,B$ 为圆上两点，设 $\angle OAB=\theta$，则 $|AB|=2r\cos\theta$，$h=r\sin\theta$，于是三角形的面积 $S=\dfrac{r^2}{2}\sin2\theta\le\dfrac{r^2}{2}$，证毕.

另解：
椭圆上两点 $A(a\cos\alpha,b\sin\alpha),B(a\cos\beta,b\sin\beta)$
与中心连线所成三角形的面积即为 $$S=\dfrac{1}{2}\left|\begin{vmatrix} a\cos\alpha & b\sin\alpha \\\\ a\cos\beta & b\sin\beta \end{vmatrix}\right|=\dfrac{1}{2}ab|\sin(\beta-\alpha)|\le\dfrac{ab}{2}$$ 只须考虑积分 $$I=\displaystyle\int_0^ab\sqrt{1-\dfrac{x^2}{a^2}}=\dfrac{b}{a}\int_0^a\sqrt{a^2-x^2}=\dfrac{ab\pi}{4}$$ 知椭圆面积 $S=4I=ab\pi$，于是证毕.

24.$($矩形完全位于第二象限时$)$ 化简得 $y^2=x^3+1$，故设 $P(-\cos^{2/3}\theta,\sin\theta)$，则
$$\begin{aligned} S&=|\cos^{2/3}\theta\cdot\sin\theta| \\\\ &=\left|\bigg(\dfrac{3}{2}\cos^{4/3}\theta\cdot\dfrac{2}{3}\sin^2\theta\bigg)^{1/2}\right| \\\\ &\le\left|{\bigg(\frac{3}{2}\cdot\frac{\frac{2}{3}\cos^2\theta+\frac{2}{3}\sin^2\theta}{\frac{2}{3}+1}\bigg)^{\frac{2}{3}+1}}\right|^{1/2} \\\\ &=\dfrac{\sqrt{3}\sqrt[3]{2}}{\sqrt[6]{5^{5}}} \end{aligned}$$ 另：如果我们尝试求导, 考虑 $f(x)=x$ $\sqrt{x^3+1}$
$$\begin{aligned} f^\prime(x)&=\sqrt{x^3+1}+\dfrac{3x^3}{2\sqrt{x^3+1}}\\\\ &=\dfrac{5x^3+2}{2\sqrt{x^3+1}} \end{aligned}$$ 得到 $f(x)\le\left|f\bigg(-\sqrt[3]{\dfrac{2}{5}}\bigg)\right|=\dfrac{\sqrt{3}\sqrt[3]{2}}{\sqrt[6]{5^{5}}}$.

---

$($2021-01-26$)$ 实际上面积最大的情形，是以 $OP$ 为对角线的正方形，其面积为
$$\begin{aligned}S&=\dfrac{|OP|^2}2\\\ &=\dfrac{\max\limits_{x\\,\le\\,0}(x^2+x^3+1)}2\\\ &=\dfrac{\max\limits_{x\\,\le\\,0}(|x|^2-|x|^3)+1}2\\\ &=\dfrac{\max\limits_{x\\,\le\\,0}|x|\cdot |x|\cdot(2-2|x|)}4+\dfrac12\\\ &=\dfrac14\cdot\bigg(\dfrac{2}{3}\bigg)^3+\dfrac12\\\ &=\dfrac{31}{54}\end{aligned}$$




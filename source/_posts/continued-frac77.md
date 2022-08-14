---
title: 七夕与旧事与连分数
date: 2021-08-14
categories:
  - 数学
tag:
  - 组合
  - 连分数
---

考虑正整数集编码的序列 $$\Z_{\ge1}\longleftrightarrow\bigg\\{a,a+\dfrac{b}{a},a+\dfrac{b}{a+\dfrac{b}{a}},\cdots\bigg\\}$$
我们断言 $\underbrace{a+\dfrac{b}{a+\dfrac{b}{a+\ddots}}}\_{n}=\dfrac{\sigma(n)}{\sigma(n-1)}$，其中 $\sigma(n)=\displaystyle\sum\_{0\le k\le\lfloor n/2\rfloor}{n-k\choose k}a^{n-2k}b^k$

通过归纳法，只需证明 $n\implies n+1$ 成立. 由
$$\begin{aligned}\underbrace{a+\dfrac{b}{a+\dfrac{b}{a+\ddots}}}\_{n+1}&=a+\dfrac{b}{\underbrace{a+\dfrac{b}{a+\ddots}}\_{n}} \\\ &=\dfrac{a\cdot\sigma(n)+b\cdot\sigma(n-1)}{\sigma(n)} \end{aligned}$$ 只要证明 $\sigma(n+1)=a\cdot\sigma(n)+b\cdot\sigma(n-1)$，即

<div class="scroll">
$$\sum_{0\le k\le\lfloor (n+1)/2\rfloor}{n+1-k\choose k}a^{n+1-2k}b^k=\sum_{0\le k\le\lfloor n/2\rfloor}{n-k\choose k}a^{n+1-2k}b^k+\sum_{0\le k\le\lfloor (n-1)/2\rfloor}{n-1-k\choose k}a^{n-1-2k}b^{k+1}$$
</div>

此处只考虑 $n$ 为偶数，奇数的情形是相仿的，注意到此时 $\left\lfloor(n+1)/2\right\rfloor=n/2,\left\lfloor(n-1)/2\right\rfloor=n/2-1$，将同类项合并，由 Pascal 恒等式知 $\displaystyle{n+1-k\choose k}-{n-k\choose k}={n-k\choose k-1}$，又由哑指标变换
$$\begin{aligned}\text{rhs}\_2&=\sum_{0\le k\le n/2-1}{n-1-k\choose k}a^{n-1-2k}b^{k+1} \\\ &=\sum_{0\le k-1\le n/2-1}{n-k\choose k-1}a^{n+1-2k}b^{k} \\\ &= \sum_{1\le k\le \lfloor n/2\rfloor}{n-k\choose k-1}a^{n+1-2k}b^{k}\end{aligned}$$ 由此得到左端，证完.

---
<font color=grey>2021-08-17 补充</font>

根据已知的结果 $\sigma(n+1)=a\cdot\sigma(n)+b\cdot\sigma(n-1)$，可以由特征方程 $x^2-ax-b$ 解得 $\sigma(n)$ 的解析形式.
$$\sigma(n)=\dfrac{1}{2^{n+1}}(\alpha_1\zeta_1^n+\alpha_2\zeta_2^n)$$ 其中 $\alpha_1=1+\dfrac{a}{\sqrt\Delta},\zeta_1=a+\sqrt\Delta,\Delta=a^2+4b$, 而 $\alpha_2$ 与 $\zeta_2$ 取前与之对应者共轭.

因而可定义 $$\Lambda(n)=\dfrac{\sigma(n)}{\sigma(n-1)}=\dfrac{1}{2}\cdot\dfrac{\alpha_1\zeta_1^n+\alpha_2\zeta_2^n}{\alpha_1\zeta_1^{n-1}+\alpha_2\zeta_2^{n-1}}$$ 经过较冗长的整理后可得 $$2\Lambda(N)=a+\sqrt{\Delta}\ell\left(\left[\ell(a/\sqrt\Delta)\right]^N\right)$$ 其中 $\ell(x)=\begin{pmatrix}1 &\\;\\;\\,1 \\\ 1 & -1\end{pmatrix}\cdot x=\dfrac{x+1}{x-1}$.

容易发现 $\ell(x)=\ell^{-1}(x)$，利用这一点，可以得到 $$\Re\log\ell\left(\dfrac{2\Lambda(N)-\mathcal{O}}{\sqrt{\Delta}}\right)=N\log\ell(\mathcal{O}^{-1})$$ 其中 $\mathcal{O}=\dfrac{a}{\sqrt{\Delta}}$，由此解得 $$\Lambda^{-1}(s)=\Re\log_{\ell(\mathcal{O}^{-1})}{\ell\left(\dfrac{2s}{\sqrt{\Delta}}-\mathcal{O}\right)}$$ 综上，有 $$\Lambda^{-1}\bigg\\{a,a+\dfrac{b}{a},a+\dfrac{b}{a+\dfrac{b}{a}},\cdots\bigg\\}=\Z_{\ge1}$$






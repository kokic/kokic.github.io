
---
title: Umbral Calculus
date: 2021-08-30
categories:
  - 数学
tag:
  - 分析
  - 组合
  - 代数
---

本文中出现的所有 __影元__ [umbral element] 均使用 $\mathfrak{fraktur}$ 字体以供区分.

__本影映射__ [umbral mapping] $\mathcal{U}:\mathfrak{s}^k\longmapsto s_k$ 将带上标的影元 $\mathfrak{s}^k$ 映为序列 $\\{s_n:n\in\N\\}$ 中的元素 $s_k$，以 $\mathfrak{s}$ 表 $\mathfrak{s}^1$，影元本身并无意义，仅用作形式演算的媒介，只有在合适的本影映射下成为序列中的元素才可发挥作用.

注：“影元”、“本影映射” 等词是笔者为方便而生造出的.

影元在本影映射下成为常数，而本影映射可以看作双射，因此影元在形式演算中也具有部分常数的性质.

注：$\mathcal{U}$ 对于不含影元的对象不产生作用，例如可以自然地对复数 $z$ 使用 $\mathcal{U}(\mathfrak{a}^k\cdot z)=\mathcal{U}(\mathfrak{a}^k)\cdot z$ 这样的性质.

---

影元的动机来自于（形式幂级数）的 Cauchy 乘积与二项式定理，考察如下结果  $$\sum_{j\in\Z_{\ge0}}a_jx^j\cdot\sum_{k\in\Z_{\ge0}}b_kx^k=\sum_{\ell\in\Z_{\ge0}}\sum_{0\le m\le\ell}a_mb_{\ell-m}x^\ell$$

注意到右侧 $x^\ell$ 的系数与二项式展开颇为接近，更进一步地，考虑一个与之等价的命题 
<div class="scroll">
$$\sum_{j\in\Z_{\ge0}}\dfrac{a_jx^j}{j!}\cdot\sum_{k\in\Z_{\ge0}}\dfrac{b_kx^k}{k!}
=\sum_{\ell\in\Z_{\ge0}}\left(\sum_{0\le m\le\ell}{\ell \choose m}a_mb_{\ell-m}\right)\cdot\dfrac{x^\ell}{\ell!}$$</div>
其系数俨然就是二项式展开，本影映射的观点便自然产生.

宛若天成，注意到 $$\sum_{j\in\Z_{\ge0}}\dfrac{a_jx^j}{j!}=\mathcal{U}\bigg(\sum_{j\in\Z_{\ge0}}\dfrac{\mathfrak{a}^jx^j}{j!}\bigg)=\mathcal{U}(e^{\mathfrak{a}x})$$
而 $\mathcal{U}(e^{\mathfrak{a}x})\cdot\mathcal{U}(e^{\mathfrak{b}x})=\mathcal{U}\big(e^{\mathfrak{(a+b)}x}\big)$，将右侧展开得
<div class="scroll">
$$\begin{aligned}\mathcal{U}\bigg(\sum_{\ell\in\Z_{\ge0}}(\mathfrak{a+b})^\ell\cdot\dfrac{x^\ell}{\ell!}\bigg)
&=\mathcal{U}\bigg(\sum_{\ell\in\Z_{\ge0}}(\mathfrak{a+b})^\ell\cdot\dfrac{x^\ell}{\ell!}\bigg) \\\ 
&=\sum_{\ell\in\Z_{\ge0}}\mathcal{U}((\mathfrak{a+b})^\ell)\cdot\dfrac{x^\ell}{\ell!} \\\ 
&=\sum_{\ell\in\Z_{\ge0}}\bigg(\sum_{0\le m\le\ell}{\ell \choose m}a_mb_{\ell-m}\bigg)\cdot\dfrac{x^\ell}{\ell!} 
\end{aligned}$$</div>

因此，形式上的计算 $\mathcal{U}(e^{\mathfrak{a}x})\cdot\mathcal{U}(e^{\mathfrak{b}x})=\mathcal{U}\big(e^{\mathfrak{(a+b)}x}\big)$ 是合理的. 但需注意，由于上述（对影元的操作）过程中仅仅是使用了 $\mathfrak{a}^kx^k=(\mathfrak{a}x)^k$ 这条性质，换言之，只是定义了影元与复数的乘法，所以 $$\mathfrak{a+a}\neq 2\mathfrak{a}$$ 

其左端无法再简化，而右端只能等于 $2^1\cdot\mathfrak{a}^1$，可知对影元而言，乘法对加法的分配律 $(1+1)\cdot\mathfrak{a}=1\cdot\mathfrak{a}+1\cdot\mathfrak{a}$ 是不成立的.

注：定义 $\mathfrak{a}\cdot\mathfrak{a}=\mathfrak{a}^2$ 并不会带来问题，这是由于自始至终对影元运算的定义都是基于 $\mathcal{U}(e^\mathfrak{a})$ 进行的，换言之 $$\mathcal{U}(A)\cdot\mathcal{U}(B)=\mathcal{U}(A\cdot B)$$ 这样的性质仅对形如 $e^{\mathfrak{a}x}$ 的 $A,B$ 成立，如若不然，$$a_2=\mathcal{U}(\mathfrak{a}^2)=\mathcal{U}(\mathfrak{a\cdot a})=\mathcal{U}(\mathfrak{a})\cdot\mathcal{U}(\mathfrak{a})=a_1^2$$ 立即引出矛盾.

---

即便如此，影元在合适的条件下仍能发挥出极大的作用，譬如推导 Ramanujan 主定理：
<div class="scroll">
$$\begin{aligned}\int_0^\infty x^{s-1}\sum_{k\in\Z_{\ge0}}a_k\cdot\dfrac{(-x)^k}{k!}\text{d}x
&=\int_0^\infty x^{s-1}\sum_{k\in\Z_{\ge0}}\mathcal{U}(\mathfrak{a}^k)\cdot\dfrac{(-x)^k}{k!}\text{d}x \\\
&=\mathcal{U}\bigg(\int_0^\infty x^{s-1}\sum_{k\in\Z_{\ge0}}\dfrac{(-\mathfrak{a}x)^k}{k!}\text{d}x\bigg) \\\
&=\mathcal{U}\bigg(\mathfrak{a}^{-s}\int_0^\infty (\mathfrak{a}x)^{s-1}\sum_{k\in\Z_{\ge0}}\dfrac{(-\mathfrak{a}x)^k}{k!}\text{d}\mathfrak{a}x\bigg) \\\
&=\mathcal{U}\bigg(\mathfrak{a}^{-s}\int_0^\infty (\mathfrak{a}x)^{s-1}e^{-\mathfrak{a}x}\text{d}\mathfrak{a}x\bigg) \\\
&=\mathcal{U}(\mathfrak{a}^{-s}\Gamma(s)) \\\
&=a_{-s}\Gamma(s)
\end{aligned}$$</div>

可谓是梦幻般的演算过程.

另一个（对影元而言）重要的对象是 Bernoulli 数 $B_k$，其可被定义为 $$\sum_{0\le k\le n-1}{n\choose k}B_k=n$$ 

由此出发，注意到 $$\sum_{0\le k\le n}{n\choose k}B_k-B_n=n$$ 将左端第一项视为本影映射作用下的二项式展开，而第二项可以自然地纳入，即
$$\mathcal{U}\big((\mathfrak{B}+1)^n-\mathfrak{B}^n\big)=n$$

---

一个经典的结果是 Faulhaber 公式，指出等幂和与 Bernoulli 数之间的关系 
<div class="scroll">
$$\begin{aligned}\sum_{1\le m\le n}m^k&=\dfrac{1}{k+1}\sum_{0\le j\le k}{k+1\choose j}B_jn^{k+1-j} \\\
&=\dfrac{1}{k+1}\sum_{0\le j\le k}{k+1\choose j}\mathcal{U}(\mathfrak{B}^j)n^{k+1-j} \\\
&=\mathcal{U}\bigg(\dfrac{1}{k+1}\sum_{0\le j\le k}{k+1\choose j}\mathfrak{B}^jn^{k+1-j}\bigg) \\\
&=\mathcal{U}\left(\dfrac{(\mathfrak{B}+n)^{k+1}-\mathfrak{B}^{k+1}}{k+1}\right) \\\
&=\mathcal{U}\left(\int_0^n(\mathfrak{B}+x)^kdx\right)
\end{aligned}$$</div>

将此结果稍作整理可得 $$\mathcal{U}\big((\mathfrak{B}+n)^k-\mathfrak{B}^k\big)=k\sum_{1\le j\le n}m^{k-1}$$ 这推出 $\mathcal{U}((\mathfrak{B}+n)^k-(\mathfrak{B}+n-1)^k)=kn^{k-1}$，注意到，在此结果中 $n$ 的选取可以不再受限于 $\Z_{\ge1}$，因此可取 $n$ 为零，这给出
$$B_k=\mathcal{U}\big(\mathfrak{B}^k\big)=\mathcal{U}\big((\mathfrak{B}-1)^k\big)$$ 而 $\mathcal{U}\big((\mathfrak{B}-1)^k\big)=(-1)^k\mathcal{U}\big((1-\mathfrak{B})^k\big)$，当 $k$ 为偶数时，$\mathcal{U}\big((\mathfrak{B}-1)^k\big)=\mathcal{U}\big((1-\mathfrak{B})^k\big)$，当 $k$ 为奇数时，左端为零，故对所有自然数 $k$ 都有
$$B_k=\mathcal{U}\big((\mathfrak{B}-1)^k\big)=\mathcal{U}\big((1-\mathfrak{B})^k\big)$$

---

参考: 

- FFjet，[本影演算法导论-1](https://zhuanlan.zhihu.com/p/139602265)
- 云非非，[本影演算法的另一种表述方法](https://zhuanlan.zhihu.com/p/139680607)
- 唐乾，[谈哑运算在分析学中的应用](https://zhuanlan.zhihu.com/p/127333344)

待续.





---
title: 新观点下的不等式
date: 2021-6-25
categories:
  - 数学
tag:
  - 不等式
---

## 动机
三角函数由于对加法和乘法有性质良好的合成结果，常常用于证明带有某类结构的不等式，以下举例一二. 

### AM–GM
取 $f(x)=(1-x^2)x^{2n},n\in\R_{\ge0}$ 易得 $f(x)\le\dfrac{n^n}{(n+1)^{n+1}}$.
不妨设 $x_k^{n/2}=\begin{cases}\cos\theta_k\displaystyle\prod_{j=1}^{k-1}\sin\theta_j &\text{if }k\neq n \\\ \displaystyle\prod_{j=1}^{n-1}\sin\theta_j &\text{if }k=n\end{cases}$
于是 $\displaystyle\prod_{k=1}^nx_k^{n/2}=\prod_{k=1}^{n-1}\cos\theta_k(\sin\theta_k)^{n-k}\le\dfrac{1}{\sqrt{n^n}}$
证完，这即为算术平均-几何平均不等式.

注：考虑到便于换元，其中假设了 $\displaystyle\sum_{k=1}^nx_k=1$，这与待证命题等价，以下同理.

### Cauchy
证明 $$\displaystyle\sum_{k=1}^n\dfrac{x_k^2}{\ell_k^2}\ge\bigg(\displaystyle\sum_{k=1}^nx_k\bigg)^2\bigg({\sum_{k=1}^n{\ell_k^2}}\bigg)^{-1}$$
不妨设 $$\dfrac{x_k}{\ell_k}=\begin{cases}\cos\theta_k\displaystyle\prod_{j=1}^{k-1}\sin\theta_j &\text{if }k\neq n \\\ \displaystyle\prod_{j=1}^{n-1}\sin\theta_j &\text{if }k=n\end{cases}$$
于是 <div class="scroll"> 
$$\begin{aligned}\displaystyle\sum_{k=1}^nx_k&\le\ell_1\cos\theta_1+\cdots+\sqrt{\ell^2_{n-1}+\ell^2_n}\prod_{j=1}^{n-2}\sin\theta_j \\\ &\le\ell_1\cos\theta_1+\cdots+\sqrt{\ell^2_{n-2}+\ell^2_{n-1}+\ell^2_n}\prod_{j=1}^{n-3}\sin\theta_j \\\ &\\;\\;\vdots \\\ &\le\ell_1\cos\theta_1+\bigg(\sum_{k=2}^n\ell_k^2\bigg)^{1/2}\sin\theta_1 \\\ \&\le\bigg(\displaystyle\sum_{k=1}^n\ell_k^2\bigg)^{1/2} \end{aligned}$$
</div>
证完.

### Aczél
证明 $$\dfrac{x_1^2}{\ell_1^2}-\displaystyle\sum_{k=2}^n\dfrac{x_k^2}{\ell_k^2}\le\bigg(x_1-\displaystyle\sum_{k=2}^nx_k\bigg)^2\bigg(\ell^2_1-{\sum_{k=2}^n{\ell_k^2}}\bigg)^{-1}$$
不妨设 <div class="scroll">$$\dfrac{x_k}{\ell_k}=\begin{cases}\cosh\theta_1 &\text{if }k=1\\\ \sinh\theta_1\cosh\theta_k\displaystyle\prod_{j=2}^{k-1}\sin\theta_j &\text{if }2\le k\le n-1 \\\ \displaystyle\sinh\theta_1\prod_{j=2}^{n-1}\sin\theta_j &\text{if }k=n\end{cases}$$ </div>
于是 <div class="scroll"> 
$$\begin{aligned}x_1-\displaystyle\sum_{k=2}^n x_k&\ge\ell_1\cosh\theta_1-\cdots-\sqrt{\ell^2_{n-1}+\ell^2_n}\sinh\theta_1\prod_{j=2}^{n-2}\sin\theta_j \\\ &\ge\ell_1\cosh\theta_1-\cdots-\sqrt{\ell^2_{n-2}+\ell^2_{n-1}+\ell^2_n}\sinh\theta_1\prod_{j=2}^{n-3}\sin\theta_j \\\ &\\;\\;\vdots \\\ &\ge\ell_1\cosh\theta_1-\bigg(\sum_{k=2}^n\ell_k^2\bigg)^{1/2}\sinh\theta_1 \\\ &\ge\bigg(\ell^2_1-\displaystyle\sum_{k=2}^n\ell_k^2\bigg)^{1/2}\end{aligned}$$
</div>
证完.

### Cauchy 与 Aczél 等价的证明
观察上例，将 Aczél 证明中以负号起始的右项左移，于是二者等价.

### Young & (二元)加权 AM–GM 不等式
证明 $\omega_1x+\omega_2y\ge x^{\omega_1}y^{\omega_2}$. 
取变换 $$(x,y)\longmapsto(\omega_1^{-1}\cos^2\theta,\omega_2^{-1}\sin^2\theta)$$
于是 $$\begin{aligned}x^{\omega_1}y^{\omega_2}&=\omega_1^{-\omega_1}\omega_2^{-\omega_2}(\sin\theta\cos^{\omega_1/\omega_2}\theta)^{2\omega_2}\\\ &\le\omega_1^{-\omega_1}\omega_2^{-\omega_2}\dfrac{(\omega_1/\omega_2)^{\omega_1}}{\omega_1/\omega_2+1}\\\ &=1\end{aligned}$$
证完.

注：最后一个不等号是因为 $\sin\theta\cos^N\theta\le\left(\dfrac{N^N}{(N+1)^{N+1}}\right)^{1/2}$，而这是显然的.

## 不证自明的形式
易知 $|x|+|y|\ge |x+y|\implies\displaystyle\sum|x_k|\ge \left|\sum x_k\right|$，利用这一点，自然想到下面的证明 

### Cauchy
命 <div class="scroll">
$$\begin{aligned}P_n&:\bigg(\sum_{k=1}^na_k^2\bigg)\bigg(\sum_{k=1}^nb_k^2\bigg)\ge\bigg(\sum_{k=1}^na_kb_k\bigg)^2 \\\ Q_n&:\sum_{k=1}^n\dfrac{x_k^2}{\ell_k^2}\ge\bigg(\sum_{k=1}^nx_k\bigg)^2\bigg({\sum_{k=1}^n{\ell_k^2}}\bigg)^{-1}\end{aligned}$$
</div>
由 <div class="scroll">$$P_2\iff Q_2\implies Q_3\implies\cdots\implies Q_n\iff P_n$$</div> 证完.

### Aczél
命 <div class="scroll">
$$\begin{aligned}P_n&:\bigg(a_1-\sum_{k=2}^na_k^2\bigg)\bigg(b_1-\sum_{k=2}^nb_k^2\bigg)\le\bigg(a_1b_1-\sum_{k=2}^na_kb_k\bigg)^2 \\\Q_n&:\dfrac{x_1^2}{\ell_1^2}-\displaystyle\sum_{k=2}^n\dfrac{x_k^2}{\ell_k^2}\le\bigg(x_1-\displaystyle\sum_{k=2}^nx_k\bigg)^2\bigg(\ell^2_1-{\sum_{k=2}^n{\ell_k^2}}\bigg)^{-1}\end{aligned}$$
</div>
由 <div class="scroll">$$P_2\iff Q_2\implies Q_3\implies\cdots\implies Q_n\iff P_n$$</div> 证完.

同时，考虑 $|x|+|y|\sim |x+y|,\sim\in\\{\ge,\le\\}$，自然，当上式恒等时，$|\cdot|$ 是线性变换.

---

现仍考察 $$|x|+|y|\sim |x+y|\tag{1}$$ 且命其中 <div class="scroll">$$|\cdot|:\\;\R_{\ge0}\times\R_{\gt0}\ni(u,v)\longmapsto \dfrac{u^p}{v^{p-1}}\in\R_{\ge0},\\;X\subset\R_{\ge0}$$
</div>

当 $p$ 取 $0,1$ 时，显然 $(1)$ 式恒等，此即 $u^p,v^{p-1}$ 依次为常数 $1$ 时的情形. 换言之，其一为常数，另一变量尚可固定，因而线性.
当 $p\in(-\infty,0)\cup(1,+\infty)$ 时，$\sim$ 成为 $\ge$，此即所谓的 Radon 不等式（中等数学里常称为权方和不等式）.
当 $0\lt p\lt1$ 时，$\sim$ 成为 $\le$.

固定一变量，此时不妨令 $f(x)=\dfrac{x^p}{\ell^{p-1}}$，形式上有 $f^{-1}(x)=\ell^{1-p^{-1}}x^{p^{-1}}$. 由 $$(f,\\;\cdot\\;,\sim) \xrightarrow{\text{inv}\\;f} (f^{-1},\\;\cdot\\;,\sim^{-1})$$ 立即得到
<div class="scroll">$$\ell_1^{1-p^{-1}}x_1^{p^{-1}}+\ell_2^{1-p^{-1}}x_2^{p^{-1}}\le(\ell_1+\ell_2)^{1-p^{-1}}(x_1+x_2)^{p^{-1}}$$</div>

再设 $p^{-1}+q^{-1}=1$，于是 $$\ell_1x_1+\ell_2x_2\le(\ell_1^q+\ell_2^q)^{1/q}(x_1^p+x_2^p)^{1/p}$$ 这即是常见的 Hölder 不等式.

类似 Cauchy 与 Aczél 的对偶，有 $$\displaystyle\sum_{x\in X^2}|x|\ge\big|\sum_{x\in X^2}x\big|\iff\sum_{x\in X^2}^{\text{op}}|x|\le\big|\sum_{x\in X^2}^{\text{op}}x\big|$$
后者（Hölder 的对偶）被称作 Aczél-Popoviciu 不等式
其中 $$\sum_{i\in I}^{\text{op}}x_i\overset{\text{sign}}{=}x_{\min I}-\sum_{i\in I\backslash\{\min I\}}x_i$$

---

## 草稿
因为 $$f\sim g\xrightarrow{\quad f^{-1}\quad}\text{id}\sim g\cdot f^{-1}\xrightarrow{\quad g^{-1}\quad}g^{-1}\sim f^{-1}$$
取 $$f\xrightarrow{\varphi}f^{-1} \qquad\qquad \varphi\cdot\varphi=\text{id}$$
并且 $$(\sim,\sim^{-1})\\;\cong\text{id}$$
考虑 $$“\ge”\quad\overset{\text{form}}{=}\quad“\gt”\\;\text{glue}\\;“\text{ id }”\quad\overset{\text{form}}{=}\\;(\succ,\text{id})$$
又 <div class="scroll">$\textbf{Ineq}:(\mathcal{S},\\,\cdot\\,)\hookrightarrow(\mathscr{P}(\mathcal{S}),\\,\cdot\\,)\qquad \mathcal{S}^\prime\ni s\mapsto \{t:\mathcal{S}\ni t\sim s\}$
$f:\mathcal{S}\to(\mathcal{S}^\prime\subset\mathcal{S},\\,\sim\\,)\qquad\sim:\mathcal{S}^\prime\to\mathcal{S}^\prime \qquad f(x\cdot y)\sim f(x)\cdot f(y)$
</div>

给出 $$(f,\\;\cdot\\;,\sim) \xrightarrow{\text{inv}\;f} (f^{-1},\\;\cdot\\;,\sim^{-1})$$
$$(f^{-1},\\;\cdot\\;,\sim^{-1}) \xrightarrow{\text{inv}\;\cdot} (f^{-1},\\;\cdot^{-1}\\;,\sim)$$
$$(f,\\;\cdot\\;,\sim) \xrightarrow{\text{inv}\\;\cdot} (f,\\;\cdot^{-1}\\;,\sim^{-1})$$
$$(f,\\;\cdot^{-1}\\;,\sim^{-1}) \xrightarrow{\text{inv}\;f} (f^{-1},\\;\cdot^{-1}\\;,\sim)$$

---

参考：无.

待续.


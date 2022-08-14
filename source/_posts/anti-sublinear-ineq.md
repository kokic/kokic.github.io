---
title: 次线性不等式
date: 2021-10-3
categories:
  - 数学
tag:
  - 不等式
---

映射 $f:X\longrightarrow Y$ 的次可加性意谓 $\forall\\,a,b\in X$ $$f(a+b)\le f(a)+f(b)\tag{1}$$ 若再赋予其正齐次性 $f(T\cdot a)=T\cdot f(a)$ 其中 $T\in$ 域 $K,K\times\cdots\times K\subseteq X$，则称 $f$ 为次线性映射，而当 $(1)$ 中不等号反向时，称其为反次线性映射.

一些常见的不等式，如 三角、Minkowski、Hölder 等，均可视为对范数 $\\|\cdot\\|$ 的合适选取. 在泛函的语言中，次可加性索性就被称作三角不等式. 通过构造范数反过来引出三角不等式的做法如今并不鲜见，常见的操作往往是考虑指数的分配. 

注：取可数测度、离散形式.

<div class="scroll">
$$\begin{array}{|c|c|}
\hline \text{Norm} & \text{Inequality} \\ 
\hline \\ 1,\displaystyle\sum_{1\le j\le k}|x_j| & \text{Triangle},\;|x+y|\le|x|+|y| \\ \\ 
\hline \\ p,\bigg(\displaystyle\sum_{1\le j\le k}|x_j|^p\bigg)^{1/p} & \text{Minkowski},\;\|x+y\|_p\le\|x\|_p+\|y\|_p \\ \\ 
\hline \\ \omega,\displaystyle\prod_{\substack{1\le j\le k \\ \underline{\omega_1}^\times+\cdots+\underline{\omega_k}^\times=1}}|x_j|^{\omega_j} & \text{Hölder},\;(\underline{\underline{x}}+\underline{\underline{y}})^\omega\ge\underline{\underline{x}}^\omega+\underline{\underline{y}}^\omega \\ \\
\hline \end{array}$$
</div>

下面将指出表中 Hölder 不等式其形式上的自洽性. 二项式定理给出自然的不等式 $(x+y)^n\ge x^n+y^n$，Hölder 不等式表明这个不等号在映射 $$(x,y)\xmapsto{\qquad}(\underline{\underline{x}},\underline{\underline{y}}) \\\ n\xmapsto{\qquad}\omega$$ 下被保持. 而上述自然不等式又给出了 Bernoulli 不等式 $(1+x)^\alpha\le 1+\alpha x$，借由 $x\longmapsto xy^{-1}-1$ 立即得出
$$x^\alpha y^\beta\le\alpha x+\beta y,\quad\alpha+\beta=1$$ 注：考虑如下图表，$\pi:x\longmapsto x-1,\\;\alpha\ge1$
<div class="scroll">$$\begin{CD}
(1+x)^\alpha\;\ge\;1\;+\;\alpha x @>\qquad\!?\!\qquad>> (1+x)^{1/\alpha}\;\le\;1\;+\;\alpha^{-1}x \\ 
            @V\pi VV                                  @AA\pi^{-1}A \\
x^\alpha\;\ge\;1\;+\;\alpha(x-1) @>\enspace\;f^{-1}\;\curvearrowright\;x\;\enspace>> x^{1/\alpha}\;\le\;1\;+\;\alpha^{-1}(x-1)
\end{CD}$$
</div>

因而此自然不等式可以诱导出加权算术平均$-$几何平均不等式，如果定义 $$\omega\underline{\underline{x}}\overset{\text{def}}{=}\sum_{\substack{1\le j\le k \\\ \underline{\omega_1}^\times+\cdots+\underline{\omega_k}^\times=1}}\omega_j|x_j|$$ 显见 $\underline{\underline{x}}^\omega\le\omega\underline{\underline{x}}$，这样就有
$$\begin{aligned}\underline{\underline{x}}^\omega+\underline{\underline{y}}^\omega\le(\underline{\underline{x}}+\underline{\underline{y}})^\omega\le\omega\underline{\underline{x}}+\underline{\underline{y}}^\omega\le\omega(\underline{\underline{x}}+\underline{\underline{y}})\end{aligned}$$ 从以下演算也可看出其形式的合理性 
$$\begin{aligned}\log\omega\underline{\underline{x}} &=\log\sum_{\substack{1\le j\le k \\\ \underline{\omega_1}^\times+\cdots+\underline{\omega_k}^\times=1}}{\omega_j}|x_j| \\\ &\le k^{-1}\sum_{\substack{1\le j\le k \\\ \underline{\omega_1}^\times+\cdots+\underline{\omega_k}^\times=1}}\log k{\omega_j}|x_j| \\\ &=k^{-1}\log k\omega\underline{\underline{x}} \\\ \\\ \log\underline{\underline{x}}^\omega &=\sum_{\substack{1\le j\le k \\\ \underline{\omega_1}^\times+\cdots+\underline{\omega_k}^\times=1}}\log|x_j|^{\omega_j} \\\ &=\sum_{\substack{1\le j\le k \\\ \underline{\omega_1}^\times+\cdots+\underline{\omega_k}^\times=1}}{\omega_j}\log|x_j| \\\ &=\omega\log\underline{\underline{x}} \end{aligned}$$
<center> $\omega\log\underline{\underline{x}}\le\log\omega\underline{\underline{x}}\le k^{-1}\log k\omega\underline{\underline{x}}$ </center>









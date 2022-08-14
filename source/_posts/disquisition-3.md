---
title: 形式化构造
date: 2022-3-24
categories:
  - 数学
tag:
  - 不等式
---

**温馨提示**&emsp; 本文中考虑的所有态射皆属 $\textsf{D}\_\text{Abel}$，即

<div class="scroll">
$$\textsf{D}_\text{Abel}\ni F:F((X_i)_{i\in I}) = F(X_{\sigma(i)}),\;\forall\,\sigma\in\text{Aut}(I)$$ 
</div>

不至混淆时常将 $F:((X_i)\_{i\in I})\mapsto\Box$ 简记为 $F:\Box$，由定义可知任意 $\sigma\in\text{Aut}(I)$ 下 $\Box$ 不变，而原本 $((X_i)\_{i\in I})$ 上的运算 $X_i\cdot X_{i+1}\cdot X_{i+2}\cdots$ 被 $F$ 保持，因此以 $\mapsto\Box$ 代 
$$\mapsto(\Box(X_i),\Box(X_{i+1}),\Box(X_{i+2}),\cdots)$$ 考虑 $\textsf{D}\_\text{Abel}$ 中一些简单的元素，显然 $|I|=1$ 时仅有平凡的 $\text{id}:X$.&emsp;$|I|=2$ 时，交换的加法表明最简单的情形为 $F:X_1+X_2$.&emsp;通常仅需取$^{[1]}$ 其一个特殊的子集 $\mathsf{A}$，$\mathsf{A}$ 中元素 $\mathsf{A}\ni F$ 满足 $F((X_i)\_{i\in I})=X$ 当且仅当对所有的 $i\in I$ 都有 $X_i=X$.&emsp;同时也不难看出，任意关于 $X_i$ 的对称多项式 $\in\textsf{D}\_\text{Abel}$，$\mathsf{A}\cap\textsf{D}\_\text{Abel}=\text{id}:X$ 以及
$$\forall\\,F\in\mathsf{A}:F((X_i)\_{i\in I})\succeq X_i\lor X_i\succeq F((X_i)\_{i\in I})$$ 类似地在 $\mathsf{A}$ 中考虑 $|I|=2$ 时最简单的元素，其有着特殊的地位，习惯上通常称之为算术平均 $U_\text{arit}:\frac{X_1+X_2}2$，此时从 $\textsf{D}\_\text{Abel}$ 到 $\mathsf{A}$ 的映射正是 $\frac{X}{|I|}$，同理，毋庸置疑的是，对于一般的 $|I|$ 可以有 $U_{\text{arit-}|I|}=\frac1{|I|}\sum\_{i\in I}X_i$.

---

**定义**&emsp; 态射 $F$ 对 $U\in\mathsf{A}$ 的 **修饰** $F\ltimes U$ 是指如下运算
<div>$$\begin{aligned}
\ltimes:\quad(\textsf{D}_\text{Abel},\mathsf{A})&\;\xrightarrow{\qquad\qquad}\;\mathsf{A} \\
(F,U)&\;\xmapsto{\qquad\qquad}\;F^{-1}UF
\end{aligned}$$</div> 

在此，考虑自然导出一些常见的例子，直接以 $\Box$ 在合适的位置代替 $F:\Box$, 于是 
$$X^p\ltimes U_\text{arit}=(\frac{X_1^p+X_2^p}2)^{\frac1p}$$ 这是一个简单但非平凡的构造，倘若这里考虑的是 $X\mathfrak{p}$，由于形式上的接壤其直接退化为 $U_\text{arit}$，故称 $\text{id}:X\mathfrak{p}$ 为 $U_\text{arit}$ 的单位修饰，更进一步地，可以验证其单位修饰只能形如 $\text{id}:X\mathfrak{p}+\ell$.&emsp;$|I|=2$ 时的退化已无可挽回, 对一般的 $|I|$ 犹可追 $——$ 只需破坏 $X_i$ 对称性使 $X\mathfrak{p}$ 在其上非退化, 由此在 $U\_{\text{arit}-|I|}$ 中考虑其 $(X\_i)\_{i\in I}$, 将 $X_i$ 分成 $\mathcal{R}$ 组使得每组元素所成集合 $\{X_r\}$ 仅有一个元素, 换言之, $(X\_i)$ 中有 $\mathcal{R}$ 个元素相异, 显然 $\sum_{1\le i\le\mathcal{R}}\mathfrak{p}\_i=|I|$, 因此有 $X\mathfrak{p}\ltimes U\_{\text{arit-}|I|}\sqsupseteq X\mathfrak{p}\ltimes U\_{\text{arit-}\mathcal{R}}=\frac1{|I|}\sum\_{1\le i\le\mathcal{R}}X_i\mathfrak{p}\_i$.

现在考虑 $\mathcal{R}=2$ 得到 $\frac{X_1\mathfrak{p}\_1+X\_2\mathfrak{p}\_2}{\mathfrak{p}\_1+\mathfrak{p}\_2}$.&emsp;如果记 $|\mathfrak{p}|=\mathfrak{p}\_1$ $+$ $\mathfrak{p}\_2$ $+$ $\cdots$ 那么就有 $U\_{\text{arit-}|\mathfrak{p}|}\sqsubseteq U\_{\mathfrak{p}\text{-arit}}\overset{\text{def}}{=}$ $\frac1{|\mathfrak{p}|}$ $\sum$ $\_{1\le i\le|\\{p\_i\\}|}$ $X\_i\mathfrak{p}\_i$. 熟知 $e^X\succeq X+1$ 等价于 $X-1\succeq\log X$，这种关系将自然地保持到 $F:\Box$ 作用之后的情景，由 $U_\text{arit}$ 的单位修饰 $\text{id}\_\ltimes(U_\text{arit}):X\mathfrak{p}+\ell$，$(X-1)\ltimes U\_\text{arit}=U\_\text{arit}$，$\succeq$ 的另一侧无非是 $\log$ $\ltimes $ $U_\text{arit}=\sqrt{X_1X_2}$，这样就自然导出了算术平均与几何平均之间 $U_\text{geo}$ 的关系.&emsp;考虑 $e^X\ltimes U_\text{arit}$ 则有 $\log$ $(e^X_1+e^X_2)-\log2\succeq U_\text{arit}$. 将其统一记作 $e^X\ltimes U_\text{arit}\longrightarrow U_\text{arit}\longrightarrow\log X\ltimes U_\text{arit}(=U_\text{geo})$. 可以类似地考虑 $\text{id}\_\ltimes(U_\text{geo}):X^\mathfrak{p}\ell$，这最终将引导我们发现 
$$\text{id}\_\ltimes(U\_\text{arit})|\_{X,\ell\rightsquigarrow\log(-)}=\log(\text{id}\_\ltimes(\log\ltimes U\_\text{arit}))$$ 当然，这来自于 $U\_{\text{arit}}=\log(U\_{\text{geo}})|\_{\log X\rightsquigarrow X}$. 

---

通过之前的讨论，可以清晰地发现 $U_\text{arit}\longrightarrow U_\text{geo}$ 以及 $U\_{\mathfrak{p}\text{-arit}}\longrightarrow U\_{\mathfrak{p}\text{-geo}}$ 其中 
$$U\_{\mathfrak{p}\text{-geo}}\overset{\text{def}}{=}(\prod_iX_i^{\mathfrak{p}\_i})^{\frac1{|\mathfrak{p}|}}$$ 皆说明从算术平均到几何平均的变化无非是 $X\longrightarrow\log X$，这就解释了为何取对数在此类不等式的证明上可以发挥相当有效的作用.&emsp;现在不妨限制 $U\_{\mathfrak{p}\text{-arit}}\succeq U\_{\mathfrak{p}\text{-geo}}$，具体而言，使 $\mathcal{R}=2$ 得到 $\frac{X\_1\mathfrak{p}\_1+X_2\mathfrak{p}\_2}{\mathfrak{p}\_1+\mathfrak{p}\_2}\succeq (X\_1^{\mathfrak{p}\_1}X\_2^{\mathfrak{p}\_2})^{\frac1{\mathfrak{p}\_1+\mathfrak{p}\_2}}$ 这正是所谓的 Young 不等式，一个经典的应用体现在 $p$ 范数 $|X|\_p=(\sum_jX_j^p)^{\frac1p}$ 上，其理所应当给出 $\prod\_i|X\_i|\_{\mathfrak{p}\_i}\succeq|\prod\_iX\_i|\_{|\mathfrak{p}^{-1}|^{-1}}$.&emsp;证明考虑两边乘 $|\mathfrak{p}^{-1}|^{-1}=\frac1{\mathfrak{p}^{-1}\_1+\mathfrak{p}^{-1}\_2+\cdots}$ 次方，再对局部项 $(\frac{\prod_iX_{ij}}{\prod\_i|X\_i|\_{\mathfrak{p}\_i}})^{|\mathfrak{p}^{-1}|^{-1}}$ 中的 $\frac{X\_{ij}^{|\mathfrak{p}^{-1}|^{-1}}}{|X\_i|\_{p_i}^{|\mathfrak{p}^{-1}|^{-1}}}$，使用一般的 Young 不等式稍作变形 $\prod\_iX\_i\preceq\sum\_i\frac{X\_i^{\mathfrak{p}\_i|\mathfrak{p}^{-1}|}}{\mathfrak{p}\_i|\mathfrak{p}^{-1}|}$，可以得到 $(\frac{\prod\_iX\_{ij}}{\prod\_i|X\_i|\_{\mathfrak{p}\_i}})^{|\mathfrak{p}^{-1}|^{-1}}\preceq|\mathfrak{p}^{-1}|^{-1}\sum\_i\frac{X\_{ij}^{\mathfrak{p}\_i}}{\mathfrak{p}\_i|X\_i|\_{\mathfrak{p}\_i}^{\mathfrak{p}\_i}}$，对 $j$ 求和，立刻得到右侧 $=|\mathfrak{p}^{-1}|^{-1}\sum_i\mathfrak{p}_i^{-1}=1$.

---

退回到第二段，此前已验证 
$$U_{\text{arit}}=\log(U_{\text{geo}})|\_{\log X\rightsquigarrow X}$$ 而 $U_\text{geo}=\log\ltimes U_\text{arit}$，现在考虑 $\exp X\ltimes U_\text{arit}$ 的情形，首先可以确定的是 
$$\exp(\exp X\ltimes U\_\text{arit})|\_{\exp X\rightsquigarrow X}=U\_{\text{arit}}$$ 当然，即便考虑 $F\ltimes U=F^{-1}UF$，也可以轻易验证 
$$F(F\ltimes U)|\_{F(X)\rightsquigarrow X}=U_{\text{arit}}$$ 比这更为重要的是如何计算 $\text{id}\_\ltimes(-)$，好在先前的尝试已经给出足够多的启示，原封不动地将 $\log(-)\rightsquigarrow\exp(-)$，现在只需去验证 $\text{id}_\ltimes(U_\text{arit})|_{X,\ell\rightsquigarrow\exp(-)}=\exp(\text{id}_\ltimes(\exp\ltimes U_\text{arit}))$，这当然极其容易.&emsp;命 $f:X,\ell\rightsquigarrow\log(-)$，常用下图来总结这件事. 

<div>$$\begin{gathered}
\exp X\ltimes U_\text{arit}\longrightarrow U_\text{arit}\longrightarrow\log X\ltimes U_\text{arit} \\
\darr\kern5.5em\darr\kern5.5em\darr \\
\exp(\text{id}_\ltimes(-))\xrightarrow{f}\text{id}_\ltimes(-)\xrightarrow{f}\log(\text{id}_\ltimes(-)) \\
\end{gathered}$$</div> 

但是此图包含的信息实则不超过下图
<div class="scroll">$$\begin{CD}
   F\,\ltimes\,U @>>> \log\,\ltimes\,F\,\ltimes\,U \\
@V{\normalsize{\cdots\;\subseteq}}\qquad VV @VV{\normalsize{\kern2.5em\overset{\text{def}}{=:}}\;\mathcal{G}^{\log}|_{U,\,F}}V \\
   F\,\cdot\,\text{id} @>>> \log\,\cdot\,F\,\cdot\,\text{id}
\end{CD}$$</div>

换言之，等价的描述是 $\mathcal{G}^{\log}|_{U_\text{arit},\\,\exp}\rightrightarrows\mathcal{G}^{\log}|_{U_\text{arit},\\,\mathbf{1}}$.

---

$[1]$：这由 $\mathsf{A}\cong\textsf{D}_\text{Abel}$ 保证.









---
title: Amann の Analysis I の 浮光掠影
date: 2022-07-31
categories:
  - 数学
tag:
  - 分析
---

<span style="color: grey;">本文主要目的在于记录 Analysis I 中使用的符号体系. </span>

## Sets

### Elementary Facts ~ Complement
集合 $X$ 的空集定义为 $\varnothing_X\overset{\text{def}}{=}\\{x\in X:x\neq x\\}$, 若 $X,Y$ 是集合, 则 $\varnothing_X\subseteq\varnothing_Y\supseteq\varnothing_X$, 故 $\varnothing_X=\varnothing_Y$, 这表明空集的唯一性. $X$ 的幂集定义为 $\mathcal{P}(X)\overset{\text{def}}{=}\\{Y:Y\subseteq X\\}$. 设 $A\subseteq X\supseteq B$, 集合 $B$ 在 $A$ 中的补集 $A\backslash B$ 是指 $\\{x\in X:(x\in A)\land(x\notin B)\\}$, 若 $X$ 在上下文中自明, 则简记 $A^c\overset{\text{def}}{=}X\backslash A$.

### Products
取 $x=(x_1,\cdots,x_n)\in X_1\times\cdots\times X_n$, 称 $x_j$ 为 $x$ 的第 $j$ 组件, 也即 $x$ 的第 $j$ 项投影 $\text{pr}_j(x)$. 设 $\mathsf{A}$ 是非空集, 对每个 $a\in\mathsf{A}$, $A_a$ 也是集合, 则 $\\{A_a:a\in\mathsf{A}\\}$ 被称作集族而 $\mathsf{A}$ 是此集族的指标集.

## Functions
对于函数或映射 $f:X\to Y$, $X$ 称为定义域, 记为 $\text{dom}(f)$, $Y$ 称为陪域. $f$ 的像是 $$\text{im}(f)\overset{\text{def}}{=}\\{y\in Y:\exists x\in X\text{ s.t. }y=f(x)\\}$$ 若 $f$ 是函数, 则可以定义 $f$ 的图 $$\begin{aligned}\text{graph}(f)\overset{\text{def}}{=}&\\,\\{(x,y)\in X\times Y:y=f(x)\\}\\\ =&\\,\\{(x,f(x))\in X\times Y:x\in X\\}\end{aligned}$$

### Examples
- 函数 $\text{id}_X:X\to X$, $x\mapsto x$ 被称作 $X$ 的恒等函数, 若 $X$ 在上下文中自明, 则记为 $\text{id}_X$.

- 若集合 $X\subseteq Y$, 则 $i:X\to Y$, $x\mapsto x$ 被称作 $X$ 到 $Y$ 的包含或嵌入. 注意 $i=\text{id}_X$ 当且仅当 $X=Y$.

- 若集合 $X,Y$ 非空, $b\in Y$, 则 $X\to Y$, $x\mapsto b$ 为常数函数.

- 若 $f:X\to Y$ 且 $A\subseteq X$, 则 $f|_A:A\to Y$, $x\mapsto f(x)$ 称作 $f$ 在 $A$ 上的限制.

- 令集合 $A\subseteq X$, 函数 $g:A\to Y$, 那么任何满足 $f|_A=g$ 的 $f:X\to Y$ 都称作 $g$ 的扩张, 写作 $f\supseteq g$.

- 令 $f:X\to Y$ 是满足 $\text{im}(f)\subseteq U\subseteq Y\subseteq V$ 的函数, 诱导函数 $f_1:X\to U$, $f_2:X\to V$ 被定义为 $f_j(x)\overset{\text{def}}{=}f(x)$ 对于 $x\in X$, $j=1,2$. 滥用记号, 这些诱导函数都记为 $f$, 因此考察 $f$ 时也将按需考察其诱导函数.

- 若集合 $X$ 非空, $A\subseteq X$, $A$ 的特征函数定义为 $$\chi_A:X\to\\{0,1\\},x\mapsto\begin{cases}1,& x\in A \\\ 0, & x\in A^c\end{cases}$$

- 若集合 $X_1\times\cdots\times X_n$ 非空, 那么投影 $$\text{pr}\_k:\prod\_{j=1}^nX\_j\to X\_k,\quad (x_1,\cdots,x_n)\mapsto x_k$$ 都是函数.

---

<span style="color: grey;">update: 2022-8-1 &emsp; (接上文)</span>

### Inverse Functions

设函数 $f:X\to Y$, $A\subseteq X$, 则 $$f(A)\overset{\text{def}}{=}\\{f(a)\in Y:a\in A\\}$$ 被称作 $A$ 在 $f$ 下的像. 对每个 $C\subseteq Y$, $$f^{-1}(C)\overset{\text{def}}{=}\\{x\in X:f(x)\in C\\}$$ 被称作 $C$ 在 $f$ 下的原像. $f$ 在 $y$ 处的纤维是指 $f^{-1}(y)\subseteq X$.

### Set Valued Functions

从 $X$ 到 $Y$ 的函数所组成的集合记为 $\text{Funct}(X,Y)$ 或 $Y^X$, 有自然的包含 $Y^X\subseteq\mathcal{P}(X\times Y)$. 取 $U\subseteq Y\subseteq V$, 有 $U^X\subseteq Y^X\subseteq V^X$. 可以证明对每个非空集合 $X$, 函数 $\mathcal{P}(X)\to\\{0,1\\}^X$, $A\mapsto\chi_A$ 是双射.

## Relations ~ Natural Numbers

设 $X$ 是集合, $\sim$ 是 $X$ 上的等价关系, $X/\sim$ 读作 $X$ 模 $\sim$, 有自然的包含 $X/\sim\\;\subseteq\mathcal{P}(X)$. (典范) 商函数正是指此良定的满射 $X\to X/\sim$, $x\mapsto[x]$. 而 $\tilde{f}:X/\sim\\;\to Y$, $[x]\mapsto f(x)$ 为良定的单射, 更进一步, 若 $f$ 满则 $\tilde{f}$ 成为双射.

### Permutations
设 $X$ 是有限集, 双射 $f\in X^X$ 被称作 $X$ 的置换. $X$ 的所有置换记为 $\mathsf{S}_X$, 设 $|X|=n$, 则这些置换共有 $n!$ 个. 

## The Complex Numbers

约定 $\mathbb{K}$ 表示 $\R,\mathbb{C}$ 二者之一. 对 $a\in\mathbb{K}$, $r\gt0$, 将 $$\mathbb{B}(a,r)\overset{\text{def}}{=}\mathbb{B}\_{\mathbb{K}}(a,r)\overset{\text{def}}{=}\\{x\in\mathbb{K}:|x-a|\lt r\\}$$ 称作 $\mathbb{K}$ 中半径为 $r$ 中心为 $a$ 的开球, 若 $\mathbb{K}=\mathbb{C}$, $\mathbb{B}\_{\mathbb{C}}(a,r)$ 成为坐标平面上的开圆盘, 若 $\mathbb{K}=\R$, $\mathbb{B}\_{\R}(a,r)$ 成为实数轴上的开区间. 同理可以定义闭球 $$\overline{\mathbb{B}}(a,r)\overset{\text{def}}{=}\overline{\mathbb{B}}\_{\mathbb{K}}(a,r)\overset{\text{def}}{=}\\{x\in\mathbb{K}:|x-a|\le r\\}$$ 通常用 $\mathbb{D}(a,r),\overline{\mathbb{D}}(a,r)$ 表示 $\mathbb{B}\_{\mathbb{C}}(a,r),\overline{\mathbb{B}}\_{\mathbb{C}}(a,r)$, $\mathbb{C}$ 中的单位开圆盘 $\mathbb{D}(0,1)$ 和单位闭圆盘 $\overline{\mathbb{D}}(0,1)$ 简记为 $\mathbb{D},\overline{\mathbb{D}}$. 

### Exercises
乘法群 $(\mathbb{C}^\times,\cdot)$ 的一个子群 $\\{z\in\mathbb{C}:|z|=1\\}$ 被称作圆周群 $S^1$.

## Vector Spaces

以下 $K$ 表示任意的域, $K$-向量空间是指三元组 $(V,+,\cdot)$ 其带有一个非空集合 $V$, 一个 $V$ 上称作加法的内部运算 $+$, 一个称作标量乘法的外部运算 $K\times V\to V$, $(\lambda,v)\mapsto\lambda\cdot v$ 并满足: 1. $(V,+)$ 是交换群 2. 乘法对加法的分配律 3. 乘法的结合律.

### Remarks
$V$ 中的元素称作向量, 而 $K$ 中的元素称作标量. 约定, 对于线性函数 $T:V\to W$ 当 $v\in V$ 且不至混淆时, 以 $Tv$ 表示 $T(v)$.

## Convergence of Sequences

对于度量空间 $(X,d)$, 也可以定义开球与闭球, 只需将条件换为 $d(a,x)\lt r$ 及 $d(a,x)\le r$. 设 $\mathbb{K}$ 是度量空间, 带有自然度量 $\mathbb{K}\times\mathbb{K}\to\mathbb{R}^+$, $(x,y)\mapsto|x-y|$. 取度量空间 $X$ 的子集 $U$, $a\in X$, 若存在 $r\gt0$ 使 $\mathbb{B}(a,r)\subseteq U$ 则称 $U$ 为 $a$ 的邻域. 点 $a$ 的所有邻域组成的集合记为 $\mathcal{U}(a)$ 或 $\mathcal{U}_X(a)$, 有自然的包含 $\mathcal{U}_X(a)\subseteq\mathcal{P}(X)$

### Norms ~ Bounded Functions
对于赋范向量空间 $(E,\\|\cdot\\|)$ 有范数诱导的度量 $d:E\times E\to\R^+$, $(x,y)\mapsto\\|x-y\\|$. 同上定义开球与闭球, 将条件换为 $\\|a-x\\|\lt r$ 及 $\\|a-x\\|\le r$. 有自然记号 $a+r\mathbb{B}=\mathbb{B}(a,r)$. 对向量空间 $E^X$, $X$ 到 $E$ 的有界函数空间即 $$B(X,E)\overset{\text{def}}{=}\\{u\in E^X: u \text{ is bounded} \\}$$ 作为 $E^X$ 的子空间.

### Euclidean Spaces
以 $\mathbb{B}^m$ 表示实开 Euclidean 单位球 $\mathbb{B}_{\R^m}$, $\mathbb{B}_1^m$ 与 $\mathbb{B}_\infty^m$ 分别代表 $(\R^m,|\cdot|_1)$ 及 $(\R^m,|\cdot|_\infty)$ 中的单位球.
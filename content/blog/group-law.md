+++
title = "椭圆曲线的群结构"
date = 2021-09-12

[taxonomies]
categories = ["Mathematics"]
tags = ["elliptic curve"]

[extra]
lang = "en"
toc = true
comment = true
copy = true
math = "katex"
display_tags = true
truncate_summary = false
featured = false
+++

椭圆曲线是一条亏格 $g=1$ 的光滑射影 $[$即, 非奇异$]$ 曲线 $E$ 配上一有理点 $[$作单位元, 常取无穷远点$]$ $\mathcal{O}$ 所成的二元组 $(E,\mathcal{O})$. 若 $E$ 是域 $K$ 上的曲线, $\mathcal{O}\in E(K)$ 是 $E$ 上的 $K\\!$—有理点, 则称 $(E,\mathcal{O})$ 是 $K$ 上的椭圆曲线 $E/K$. 

注：换言之, 曲线光滑 $\iff$ 处处有良定的切线.

注：可以证明, $\mathbb{P}^2$ 中的三次光滑曲线 $E$ $\Longrightarrow$ 其亏格 $g_E=1$.

每一条椭圆曲线都能够被嵌入为 $\mathbb{P}^2$ 中的光滑三次曲线, 其由如下形式的方程 $[E$ 的 **仿射 Weierstrass 方程**$]$ 给出
$$E:y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6$$ “零点” $\mathcal{O}$ 自然是无穷远点 $(0:1:0)$, 而 $E/K$ 则意味着 $a_k$ $[k=1,2,3,4,6]$ 可取自 $K$ 中. 射影 Weierstrass 方程无非是仿射版本的齐次化 $[$分别乘上 $z]$.

注：射影平面 $\mathbb{P}^2$ 可视作 平面 $[$“仿射部分”$]$ $\sqcup$ $\\{(x:y:0):x,y\in K,|x|+|y|\gt0\\}$ $[$“无穷远点”$]$, 平面借由 $(x,y)\longmapsto(x:y:1)$ 嵌入 $\mathbb{P}$.

对于一条由 Weierstrass 方程定义的椭圆曲线 $E$, 记 
$$\begin{aligned}b_2&:=a_1^2+4a_2 \\\ b_4&:=2a_4+a_1a_3 \\\ b_6&:=a_3^2+4a_6 \\\ b_8&:=a_1^2a_6+4a_2a_6-a_1a_3a_4+a_2a_3^2-a_4^2 \\\ c_4&:=b_2^2-24b_4 \\\ c_6&:=-b_2^3+36b_2b_4-216b_6 \\\ \Delta&:=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6 \\\ j&:=\dfrac{c_4^3}{\Delta},\quad\text{if}\\;\Delta\neq0\end{aligned}$$ 
注：**判别式** $[$discriminant$]$ $\Delta\neq0$ $[$可逆$]$ 是由于椭圆曲线的光滑性要求无重根, $j$ 即为所谓的 $j$ **不变量** $[j$-invariance$]$.

考虑两条由 Weierstrass 方程定义的椭圆曲线
$$E:y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6 \\\ E^\prime:y^2+a_1^\prime xy+a_3^\prime y=x^3+a_2^\prime x^2+a_4^\prime x+a_6^\prime$$ 其 **同构** $E\cong E^\prime$ 是指 $\exists\\,\psi$ $[$多项式映射$]$ 使得 $E=u^{-6}\cdot\psi(E^\prime)$, 其中
$$\psi:\begin{pmatrix}x \\\ y\end{pmatrix}\longmapsto\begin{pmatrix}u^2 & 0 \\\ su^2 & u^3 \end{pmatrix}\begin{pmatrix}x \\\ y\end{pmatrix}+\begin{pmatrix}r \\\ t\end{pmatrix}$$ $r,s,t,u\in K$ 且 $u$ 可逆 $[$ 即, $u\in K^\times]$, $\psi$ 称 **容许的变换**.

若 $K$ 的特征 $\text{char}(K)\neq2,3$, 则 $K$ 在容许的变换下可化为
$$E:y^2=x^3+Ax+B$$ 也即 $a_k$ $[k=1,2,3]$ 可取为 $0$. 对于此种形式, 有
$$\begin{aligned}b_2&=0 \\\ b_4&=2A \\\ b_6&=4B \\\ b_8&=-A^2 \\\ c_4&=-48A \\\ c_6&=-864B \\\ \Delta&=-16(4A^3+27B^2) \\\ j&=-1728\cdot\dfrac{64A^3}{\Delta} \\\ &=1728\cdot\dfrac{4A^3}{4A^3+27B^2},\quad\text{if}\\;\Delta\neq0\end{aligned}$$
注：$[$一般的$]$ 三次方程 $x^3+Ax+B=0$ 根的判别式可表为 $\Delta=4A^3+27B^2$, 而 $\Delta=0$ 时此方程有重根, 对应的椭圆曲线退化, 其上恰有一个奇点.

取 $\psi:(x,y)\longmapsto(u^2x,u^3y)$ $[$Weierstrass 坐标变换, $r,s,t$ 为 $0]$, 在此同构映射下 $j$ 仍是不变的, 故 $j$-不变量完整分类了 $[$代数闭域 $K$ 上的$]$ 椭圆曲线, 即 $$j(E)=j({E^\prime})\iff E\cong E^\prime$$
若在椭圆曲线上（自然地）定义群结构, 则多项式映射 $\psi$ 自动成为群同态.

单值化定理 $[$Uniformization Theorem$]$ 表明 $\Complex$ 上任意的椭圆曲线 $E:y^2=x^3+Ax+B$ 都一一对应到一个复格 $\Lambda$ 使
$$\begin{aligned}\psi:\Complex/\Lambda&\xrightarrow{\qquad} E \\\ z&\xmapsto{\qquad}(\wp(z),\wp^\prime(z))\end{aligned}$$ 是复李群同构, 即 $E\cong\Complex/\Lambda$ $[$解析同构$]$. 故椭圆曲线之间的态射 $\psi$ 可以一一对应到复环面 $\Complex/\Lambda$ 间的全纯映射

其中 $\alpha\in\Complex$ 满足 $\alpha\Lambda_1\subseteq\Lambda_2$, 复乘 $$\text{Hom}(\Lambda_1,\Lambda_2)=\\{\alpha\in\Complex:\alpha\Lambda_1\subseteq\Lambda_2\\}$$

注：$[$复数域 $\mathbb{C}$ 上的$]$ 椭圆曲线 $(E,\mathcal{O})$ $\iff$ 亏格 $1$ 带基点 $\mathcal{O}\in E$ 的紧 Riemann 曲面 $E$ 典范同构于 $(\mathbb{C}/\Lambda,0)$. 

注：全体 $[$复数域 $\mathbb{C}$ 上的$]$ 椭圆曲线构成范畴 $\mathsf{Ell}_\mathbb{C}$, 范畴间的态射 $(E,\mathcal{O})\longrightarrow(E^\prime,\mathcal{O}^\prime)$ 定义为满足 $f(\mathcal{O})=\mathcal{O}^\prime$ 的 Riemann 曲面态射 $f:E\longrightarrow E^\prime$.

事实上, Weierstrass 证明了对所有 $P,Q,R\in E$, 存在直线 $\ell\in\mathbb{P}^2$ 交 $E$ 于 $P,Q,R$ 等价于 $P+Q+R=\mathcal{O}$.

设 $P(x_1,y_1),Q(x_2,y_2)\in E:y^2=x^3+Ax+B$, 几何直观给出两点加法公式 
<div class="scroll">
$$x(P+Q)=\begin{cases} \bigg(\dfrac{y_2-y_1}{x_2-x_1}\bigg)^2-x_1-x_2 &\text{if } P\neq Q \\\ \\\ \dfrac{x_1^4-2Ax_1^2-8Bx_1+A^2}{4(x_1^3+Ax_1+B)} &\text{if } P=Q \end{cases}$$
</div>

注: 所谓的几何直观是指, $P+Q=-R$ 应视作点 $P,Q$ 连线与点 $E$ 交于点 $R$, $R,\mathcal{O}$ 连线交 $E$ 于点 $-R$. 这里 $-R$ 当然是 $R$ 关于 $x$-轴的对称点.




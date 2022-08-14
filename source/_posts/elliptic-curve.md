
---
title: 圆函数与椭圆曲线
date: 2021-08-22
categories:
  - 数学
tag:
  - 分析
  - 几何
---

考虑半径为 $r$ 的圆周 $x^2+y^2=r^2$，其在上半平面的轨迹可表为函数 $y=\sqrt{r^2-x^2},x\in[-r,r]$，长度为 $$L=\int_{-r}^r\dfrac{r}{\sqrt{r^2-x^2}}\mathrm{d}x=r\arcsin\dfrac{x}{r}\bigg|_{-r}^r=\pi r$$ 因而圆的弧长定义了反正弦函数，即 $$\arcsin x=\int_0^x\dfrac{1}{\sqrt{1-t^2}}\mathrm{d}t$$ 其反函数被称为正弦函数，统称圆函数 (三角函数).

现考虑椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$，$y=\dfrac{b}{a}\sqrt{a^2-x^2}$，故
$$\begin{aligned}L&=\int_{-a}^a\bigg(\dfrac{a^4-(a^2-b^2)x^2}{a^2(a^2-x^2)}\bigg)^{1/2}\mathrm{d}x\\\ &=\int_{-a}^a\bigg(\dfrac{1-k^2t^2}{1-t^2}\bigg)^{1/2}\mathrm{d}x\\\ \frac{L}{a}&=\int_{-1}^1\dfrac{1-k^2t^2}{\sqrt{(1-t^2)(1-k^2t^2)}}\mathrm{d}t \end{aligned}$$ 其中 $t=\dfrac{x}{a},k^2=1-\dfrac{b^2}{a^2}$ ($k$ 即离心率).

由此引出了所谓的 __第二类不完全椭圆积分__ $$\text{E}(x,k)=\int_0^x\dfrac{1-k^2t^2}{\sqrt{(1-t^2)(1-k^2t^2)}}\mathrm{d}t,\\;x\in[0,1]$$ 其中 $k$ 称作椭圆函数的模，不定积分的版本被称作第二类 Legendre 正规形式.

Jacobi (及 Abel) 发现了问题的关键所在，考察椭圆积分的反函数，定义 $$\text{sn}^{-1}(x)=\int_0^x\dfrac{\mathrm{d}t}{\sqrt{(1-t^2)(1-k^2t^2)}}$$ 而 $\text{sn}(x)$ 被称作椭圆正弦函数.

通过对一大类 (定义在复平面上的) 椭圆函数的研究，人们发现椭圆函数是双周期的亚纯函数，而在现代数学的定义中，双周期的亚纯函数都被称作椭圆函数.

注：几何上的观点是，椭圆函数可以视为复环面到复球面的映射.

---
<div style='font-family: LatinModern-Math; font-size:1.1em;'>
The form that Jacobi had given to the theory of elliptic
functions was far from perfection; its flaws are obvious.
At the base we find three fundamental functions <small>$\text{sn}$</small>, <small>$\text{cn}$</small> and <small>$\text{dn}$</small>. 
These functions do not have the same periods... <br>
&emsp; In Weierstrass’ system, instead of three fundamental functions, 
there is only one, <small>$℘(u)$</small>, and it is the simplest of all having the same periods. 
It has only one double infinity; and finally its definition is so that 
it does not change when one replaces one system of periods by another equivalent system. 
<div align="right"><i>H. Poincaré</i>, 1899</div>
</div>

---
注意到对所有的 $\omega_1,\omega_2\in\mathbb{C},\\;\Im\dfrac{\omega_1}{\omega_2}\gt0$ 时，级数 $$\displaystyle\sum_{(m,n)\neq(0,0)}\dfrac{1}{(m\omega_1+n\omega_2)^3}$$ 绝对收敛，令 $\omega=m\omega_1+n\omega_2$，因此 $$f(z)=\displaystyle\sum_{(m,n)\in\Z\times\Z}\dfrac{1}{(z-\omega)^3}$$ 也绝对收敛，且在圆 $|z|\le R$ 中除去有限个极点后一致收敛，故 $f(z)$ 是以 $\omega_1$ 和 $\omega_2$ 为周期的奇的三阶椭圆函数.

由 $f(z)$ 出发可以构造偶的二阶椭圆函数，事实上，这正是 Weierstrass 的工作，考虑函数 $$\wp(z)=\dfrac{1}{z}+\sum_{\omega\in\Lambda^\times}\left(\dfrac{1}{(z-\omega)^2}-\dfrac{1}{\omega^2}\right),\\;z\in\mathbb{C}\backslash\Lambda$$ 其中格 $\Lambda=\Z\omega_1\oplus\Z\omega_2$，注意到当 $|\omega|\to\infty$ 时，$\dfrac{1}{(z-\omega)^2}-\dfrac{1}{\omega^2}\to\mathcal{O}(\omega^{-3})$，因此 $\wp(z)$ 绝对收敛.

注：$\wp$ 读作 __Weierstrass p 函数__ 或 Weierstrass 椭圆函数.

注：定义复数 $z,z^\prime$ 关于格 $\Lambda$ 的等价关系为 $$z\sim z^\prime\iff z-z^\prime\in\Lambda$$ 由此定义 __复环面__ $\mathbb{C}/\Lambda:=\\{z+\Lambda:z\in\mathbb{C}\\}$，代数上，容易看出交换群 $(\mathbb{C},+)$ 直接诱导 $(\mathbb{C}/\Lambda,+)$ 交换，几何上，可以验证 $\mathbb{C}/\Lambda$ 是一个紧 Riemann 面，熟知紧 Riemann 面上的全纯函数一定是常数，因此，全纯的椭圆函数必为常值，或由 $\overline{\Lambda}$ 是紧集，故 $f(z)$ 在 $\mathbb{C}$ 上有界，应用 Liouville 定理亦可.

注：以 $\mathbb{CT}^1$ 表 (一维) 复环面，$\mathbb{CP}^1$ 表复球面，则椭圆函数是 $\mathbb{CT}^1\longrightarrow\mathbb{CP}^1$ 的全纯函数.

其导数 $\wp^\prime(z)=\sum_{\omega\in\Lambda^\times}(z-\omega)^{-3}$ 亦反映了 $\wp(z)$ 是以 $\Lambda$ 为周期的偶函数.

$\wp(z)$ 在 $z=0$ (的邻域) 处的 Laurent 级数展开可以表示成 $$\wp(z)=\dfrac{1}{z^2}+\sum_{n\in2\Z_{\ge1}}(n+1)G_{n+2}(\Lambda)z^n$$ 若取 $\Lambda=\Z\tau\oplus\Z$，则 $G_k(\Lambda)$ 在 $\tau\in\mathbb{H}$ (上半复平面) 时全纯，$G_{k}(\Lambda)=\sum_{\omega\in\Lambda^\times}\omega^{-k}$ 正是 __Eisenstein 级数__.

注：题外话，所谓的 (椭圆函数的) __正规化__ 是指，总可以令 $\tau=\dfrac{\omega_1}{\omega_2}\in\mathbb{H}$ 使得椭圆函数 $F(z)=f(\omega_2z)$ 以 $1$ 和 $\tau$ 为周期，自然 $f(z)=\sum_{(m,n)\in\Z^2}(z+m+n\tau)^{-3}$ 是正规化椭圆函数，可以证明右端级数绝对收敛且一致收敛.

注：恰如研究以 $2\pi$ 为周期的 $\sin x$ 常置于区间 $[0,2\pi]$ 内，(复平面上的) 椭圆函数也常在 __基本平行四边形__ 中考察，其定义为 $$\\{z\in\mathbb{C}:z=a+b\tau,a,b\in[0,1)\\}$$

注：特别地，当 $\tau\in\mathbb{Q}$ 时，$f(z)$ 退化为单周期函数，当 $\tau\in\R\backslash\mathbb{Q}$，由稠密性可证 $f(z)$ 是常数.

实际上，Eisenstein 证明了所有形如 $$f(z)=\sum_{\omega\in\Lambda}\dfrac{1}{(z+\omega)^2}-\sum_{\omega\in\Lambda^\times}\dfrac{1}{\omega^2}$$ 的椭圆函数 $f(z)$ 都满足如下形式的微分方程 
<center>$(f^\prime(z))^2=f(z)$ <small>的三次无重根多项式</small></center>

如此一来，$\wp(z)$ 与 $\wp^\prime(z)$ 的关系便彻底明了 $$(\wp^\prime(z))^2=4(\wp(z))^3-g_2\wp(z)-g_3$$ 其中 $g_2=60G_4(\Lambda),g_3=140G_6(\Lambda)$.

注：重要的一点是，每一个与 $\wp(z)$ 同周期的偶椭圆函数都能够写为 $\wp(z)$ 的有理函数，每一个与 $\wp(z)$ 同周期的 (single) 椭圆函数都可以写为 $\wp(z)$ 及其导数的有理函数.

再令 $\wp(z)=w$，上式即为 $$\dfrac{\text{d}z}{\text{d}w}=\dfrac{1}{\sqrt{4w^3-g_2w-g_3}}$$ 因此 $$z-z_0=\int^w_{w_0}\dfrac{\text{d}w}{\sqrt{4w^3-g_2w-g_3}}$$ 令 $z_0\to0$ 因而 $w_0\to\infty$ 立即得到 $$z=\int^{\wp(z)}_{\infty}\dfrac{\text{d}t}{\sqrt{4t^3-g_2t-g_3}}$$

自然地，考虑 $$(\wp(z),\wp^\prime(z))\longmapsto(x,y)$$ 给出三次曲线 $y^2=4x^3-g_2x-g_3$ 的参数化，所谓的 __椭圆曲线__ 正是来源于此.

---

下接 [椭圆曲线的群结构](/2021/09-12-group-law.html)


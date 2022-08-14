---
title: $\text{Erdős}$ 单调乘性函数定理
date: 2022-1-24
categories:
  - 数学
tag:
  - 分析
---

<script>document.title = "Erdős 单调乘性函数定理";</script>

<style>
small {
  color: grey;
}
</style>

<small>很有意思的一个结果，本文证明来自 Everett Howe.</small>

<div class="scroll" style="font-size: 0.75em; font-family: monospace;">
<br>A New Proof of Erdos's Theorem on Monotone Multiplicative Functions <br>
Author(s): Everett Howe <br>
Source: The American Mathematical Monthly, Vol.93, No.8 (Oct., 1986), pp.593-595 <br>
Published by: Mathematical Association of America <br>
Stable URL: http://www.jstor.org/stable/2322314 <br>
Accessed: 04-01-2016 18:56 UTC
</div>

**定理$\\,(\text{Erdős})$** $f$ 增 $[$increasing$]$ 且乘性 $[$multiplicative$]$，则必存在一个常数 $\alpha$ 使 $f(n)=n^\alpha,n\in\Z_{\ge1}$. &nbsp;Howe 证明了以下两个定理，从而推出此结果.

**定理** $i. $ 若 $f$ 增且完全乘性，则必存在一个常数 $\alpha$ 使 $f(n)=n^\alpha,n\in\Z_{\ge1}$.

$proof.$ 考虑使用反证法，假定这样的 $\alpha$ 不存在，由此知 $\log f(n)/\log n$ 非常值，故可取不同的 $m,n\in\Z_{\ge1}$ 使
$$x=\dfrac{\log f(m)}{\log m},\quad y=\dfrac{\log f(n)}{\log n},\quad x\gt y$$ 这样一来就有正整数 $A,B$ 使得
$$\dfrac{y}x\cdot\dfrac{B\log n}{\log m}\lt A\le\dfrac{B\log n}{\log m}$$ 事实上，取 
$$A=\left\lfloor\dfrac{B\log n}{\log m}\right\rfloor,B=\left\lfloor\dfrac{x\log m}{(x-y)\log n}\right\rfloor$$ 即可满足上述不等式 $($容易验证$)$. 但同时，由于
$$A\log m\le B\log n\quad\land\quad Ax\log m\gt By\log n$$ 这就是说 
$$m^A\le n^B\quad\land\quad f(m^A)\gt f(n^B)$$ 与 $f$ 增矛盾，证毕.

**定理** $ii$. &nbsp;所有增的乘性函数都是完全乘性.

$proof.$ 作者使用了一个巧妙的引理 $——$ 记 
$$\ell=\inf\limits_{x\\,\notin\\,p\Z_{\ge1}}\dfrac{f(x+p)}{f(x)}$$ 则有如下蕴含 
<div style="text-align: center;">
增的乘性函数 $f$, 素数 $p\;\implies \ell=1$
</div>

首先，若 $x$ 不被 $p$ 整除，显有 $f(x+p)\ge\ell f(x)$ 因此 $\forall\\;k\in\Z_{\ge0}$ 有 $f(x+kp)\ge\ell^kf(x)$，并且总可以找到 $x\gt kp$ 与 $2,p$ 互素，所以 $2x\gt x+kp$，即
$$f(2)f(x)=f(2x)\ge f(x+kp)\ge\ell^kf(x)$$ 这表明 $\ell^k\le f(2)$，因为 $k$ 是任意的，这就要求 $\ell\le1$，而 $f$ 增给出 $\ell\ge1$，证完.

证明 $ii$ 只需要证出对每一个素数 $p$ 和每一个整数 $n\ge1$ 都有 $f(p^n)=(f(p))^n$. 固定 $p$，令 $Y_n=f(p^n)$，简洁起见，记 $Y=f(p)$，下面证明 $Y_n=Y^n$，也就是
$$\dfrac{Y_{n+1}}{Y_n}=Y$$ 考虑任意不被 $p$ 整除的 $x$，有
$$(px-1)p^n\lt xp^{n+1}\lt(px+1)p^n$$ 由于 $px\pm1,x$ 均与 $p$ 互素，因此
$$f(px-1)Y_n\le f(x)Y_{n+1}\le f(px+1)Y_n$$ 这样一来就有
$$\begin{aligned}\dfrac{Y_{n+1}}{Y_n}&\le\inf\limits_{x\\,\notin\\,p\Z_{\ge1}}\dfrac{f(px+1)}{f(x)} \\\ &\le\inf\limits_{x\\,\notin\\,p\Z_{\ge1}}\dfrac{f(px+p^2)}{f(x)} \\\ &= f(p)\inf\limits_{x\\,\notin\\,p\Z_{\ge1}}\dfrac{f(x+p)}{f(x)}\\\ &=Y\ell\end{aligned}$$ 同理可得
$$\begin{aligned}\dfrac{Y_{n+1}}{Y_n}&\ge Y\sup\limits_{x\\,\notin\\,p\Z_{\ge1}\\,\land\\,x\\,\gt\\,p}\dfrac{f(x-p)}{f(x)}\\\ &=Y\sup\limits_{x\\,\notin\\,p\Z_{\ge1}}\dfrac{f(x)}{f(x+p)}\\\ &=Y\ell^{-1}\end{aligned}$$ 因此有
$$Y\ell^{-1}\le\dfrac{Y_{n+1}}{Y_n}\le Y\ell$$ 由引理知 $\ell=1$，证完.



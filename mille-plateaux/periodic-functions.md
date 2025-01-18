
---
title: 周期函数的构造
author: kokic
date: 2024-12-31
---

$\gdef\R{\mathbf{R}}$
$\gdef\Z{\mathbf{Z}}$
$\gdef\spaces#1{~ #1 ~}$

我们的目的是构造某些完备域上的非常值周期函数. 对于实数域 $\R$, [圆函数](/mille-plateaux/circular-curve) 告诉我们这当然是可行的, 不过我们的构造过程应当不依赖于对圆函数的印象. 

对于周期 $1$. 下面这个观察因为 Weierstraß 的使用而变得广为人知. 具体来说, 可以从这样一个级数出发

$$ f(x) \spaces= \sum_{n \in \Z} \frac1{(n-x)^2}, \quad x \notin \Z $$

因为 $n$ 取遍了所有整数, $f(x)$ 在映射 $n \mapsto n + k$, $k \in \Z$ 下不变. 这样一来, 如果 $x$ 被选定为任意一个整数, 总会存在 $n-x$ 为零的项使整个级数发散, 这就要求 $x \notin \Z$. 同样的, $f(x)$ 在映射 $x \mapsto x + k$, $k \in \Z$ 下不变, 这就意味着 $f(x)$ 以 $1$ 为周期. 现在我们当然知道这个 $f(x)$ 其实就是 $\pi^2\csc^2(\pi x)$. 

由于 $(n-x)^2 \ge x^2-n^2$, 这使得如下级数也是收敛的 

$$ \sum_{n \in \Z} \frac{x}{x^2-n^2} \quad (= ~ \pi\cot(\pi x)) $$


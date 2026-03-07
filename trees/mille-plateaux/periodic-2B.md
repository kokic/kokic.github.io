
---
title: Weierstraß 的灵感来源
taxon: exegesis
---

$\gdef\spaces#1{~ #1 ~}$

对于周期 $1$. 下面这个观察因为 Weierstraß 的使用而变得广为人知. 具体来说, 可以从这样一个级数出发

$$ f(x) \spaces= \sum_{n \in \Z} \frac1{(n-x)^2}, \quad x \notin \Z $$

因为 $n$ 取遍了所有整数, $f(x)$ 在映射 $n \mapsto n + k$, $k \in \Z$ 下不变. 这样一来, 如果 $x$ 被选定为任意一个整数, 总会存在 $n-x$ 为零的项使整个级数发散, 这就要求 $x \notin \Z$. 同样的, $f(x)$ 在映射 $x \mapsto x + k$, $k \in \Z$ 下不变, 这就意味着 $f(x)$ 以 $1$ 为周期. 现在我们当然知道这个 $f(x)$ 其实就是 $\pi^2\csc^2(\pi x)$. 

由于 $(n-x)^2 \ge x^2-n^2$, 这使得如下级数也是收敛的 

$$ \sum_{n \in \Z} \frac{x}{x^2-n^2} \quad (= ~ \pi\cot(\pi x)) $$


---
title: 次可乘归纳
taxon: lemma
asref: true
date: June 25, 2021
author: [kokic](/trees/kokic.md)
---

$\gdef\spaces#1{~ #1 ~}$

如果 $f$ 满足次可乘性 $\eta: f(x) f(y) \ge f(xy)$, 则成立 

$$ \eta_* \spaces: \prod_{i} f(x_i) \spaces\ge f\Big(\prod_i x_i\Big) $$

证明只需反复使用已知条件即可. 这同时意味着 $\eta, \eta_*$ 等价. 另一方面, 在 $\eta$ 中置 $x \mapsto xy^{-1}$, 就有 $f(xy^{-1}) f(y) \ge f(x)$, 也即 $\varphi: f(xy^{-1}) \ge f(x)f(y)^{-1}$. 类似的可知 

$$
\varphi_* \spaces: f(x/\prod_i f(x_i)) \spaces\ge f(x) / \prod_i f(x_i)
$$

故此 $\eta \iff \eta_* \iff \varphi_* \iff \varphi$.

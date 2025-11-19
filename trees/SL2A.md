
---
title: 次线性归纳
taxon: lemma
date: June 25, 2021
author: [kokic](/trees/kokic.md)
---

$\gdef\spaces#1{~ #1 ~}$

如果 $f$ 满足 $\eta: f(x) + f(y) \ge f(x+y)$, 则成立 

$$ \eta_* \spaces: \sum_{i} f(x_i) \spaces\ge f\Big(\sum_i x_i\Big) $$

证明只需反复使用已知条件即可. 这同时意味着 $\eta, \eta_*$ 等价. 另一方面, 在 $\eta$ 中置 $x \mapsto x-y$, 就有 $f(x-y) + f(y) \ge f(x)$, 也即 $\varphi: f(x-y) \ge f(x) - f(y)$. 类似的可知 

$$
\varphi_* \spaces: f(x - \sum_i f(x_i)) \spaces\ge f(x) - \sum_i f(x_i)
$$

故此 $\eta \iff \eta_* \iff \varphi_* \iff \varphi$.

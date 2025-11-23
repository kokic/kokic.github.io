
---
title: Aczél--Popoviciu 不等式 Engel 形式
date: June 25, 2021
taxon: theorem
author: [kokic](/trees/kokic.md)
asref: true
---

$\gdef\spaces#1{~ #1 ~}$

[titu]: /trees/CN2C.md
[aczél–popoviciu]: /trees/HP2C.md
[radon]: /trees/HP2B.md
[次线性归纳]: /trees/SL2A.md
[hölder–popoviciu]: /trees/HP2E.md

此为 [][aczél–popoviciu] 的 [Engel 形式][titu]. 在 [][aczél–popoviciu] 中实行替换 $a_k \mapsto \frac{x_k}{\sqrt[q]\ell_k}$, $b_k \mapsto \sqrt[q]\ell_k$, 两边做 $\square^p$

$$
\Big(x_1 - \sum_{k=2}^n x_k\Big)^p \spaces\ge 
\Big(\frac{x_1^p}{\ell_1^{p-1}} - \sum_{k=2}^n \frac{x_k^p}{\ell_k^{p-1}} \Big) \Big(\ell_1 - \sum_{k=2}^n \ell_k\Big)^{p-1}
$$

此命题可通过 [][次线性归纳] 与 [][radon] [等价][hölder–popoviciu]. 


---
title: 良序原理
taxon: theorem
asref: true
---

良序原理断言每一个集合都可以被良序. 

<exegesis title="良序集">

称一个集合 $X$ 可以被良序化, 如果在 $X$ 上存在一个良序关系, 即 $X$ 上的一个二元关系 $\preceq$ 满足: 

|  |  |
| -: | - |
| 自反性 | $\forall ~ x \in X, x \preceq x$ |
| 传递性 | $\forall ~ x, y, z \in X, (x \preceq y) \land (y \preceq z) \implies x \preceq z$ |
| 反对称性 | $\forall ~ x, y \in X, (x \preceq y) \land (y \preceq x) \implies x = y$ |
| 全序性 | $\forall ~ x, y \in X, (x \preceq y) \lor (y \preceq x)$ |
| 良基性 | $X$ 的每个非空子集都有一个 $\preceq$-极小元 |

</exegesis>

<example title="$\N$ 与 $\Z$">

$\N$ 上的标准序 $\leqslant_\N$ 是一个良序关系, 但 $\leqslant_\Z$ 不满足良基性, 因为 $\Z$ 没有极小元. 

</example>

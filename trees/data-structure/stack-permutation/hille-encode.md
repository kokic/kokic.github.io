
---
title: Hille 编码
date: 1982
author: Reinhold Friedrich Hille
taxon: definition
ref: [Stack permutations and an order relation for binary trees](/bib/hille1982stack.md)
---

以下三条规则给出 Hille 编码到二叉树的转换过程. 同时不难验证, 任给一个二叉树, 可以通过这三条规则得到其 Hille 编码.

- `1` 表示添加当前树节点的左子树. 例如 `111` 表示的树为 `(⋅ (⋅ (⋅)))`. 
- `01` 表示添加当前树节点的右子树. 例如 `10101` 表示的树为 `(⋅ _ (⋅ _ (⋅)))`.
- 而对于 `01` 前的 $k$ 个 `0`, 这些 `0` 用于表示将当前树节点回溯到前 $k$ 层. 例如 `11001` 表示的树为 `(⋅ (⋅) (⋅))`.

注意到每个树节点的双亲 (*parent*) 节点是唯一的, 因此回溯操作良定, 一次回溯就是将当前节点改为其双亲. 

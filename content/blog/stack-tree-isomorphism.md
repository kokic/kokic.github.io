+++
title = "栈置换-二叉树同构"
date = 2024-11-06

[taxonomies]
categories = ["Data Structure"]
tags = ["stack", "tree", "isomorphism"]

[extra]
lang = "en"
toc = true
comment = true
copy = true
math = "katex"
display_tags = true
last_updated_time = true
truncate_summary = false
featured = false
+++

## 背景

在介绍本文的目的之前, 我们首先解释一下标题栈置换-二叉树同构的含义. 

栈置换: 给定一个非空栈 $A$ 和两个空栈 $B$, $S$, 每次只允许 $(i)$ 弹出 $A$ 并压入 $S$. $(ii)$ 弹出 $S$ 并压入 $B$. 可以想见, 最终 $A$ 的元素一定会全部进入 $B$, 这样的 $B$ 就称为 $A$ 的一个栈置换.
  
{% note(header="注") %}
<ruby>栈置换<rt>stack permutation</rt></ruby> 也译作 <ruby>栈混洗<rt>stack shuffle</rt></ruby>. 
{% end %}

不难发现, $A$ 的所有栈置换其实就是 $A$ 的所有出栈可能. 熟知 $n$ 元素栈共有 $\frac1{n+1}{2n \choose n}$ 种出栈情况. 另一方面, $n$ 个节点能构成 $\frac1{n+1}{2n \choose n}$ 种二叉树. 这两者的计算都可以在 Catalan 数的相关条目中找到. 这表明两者作为集合同构. 本文正是要指出实现该同构的一种方式, 具体地写出这个双射. 

## 编码

由于我们的讨论不涉及具体元素, 不失一般性, 可以固定栈置换的入栈顺序为 $123\cdots n$. 同时这些数字也是二叉树节点的标签. 影响出栈序列的只有压入和弹出两个操作, 而构建二叉树允许的操作粗看起来要多一些. 因此首先需要通过一些技巧将二叉树构建操作的表示简化. 

在构建二叉树的过程中, 对于一个节点, 我们可以添加它的左子树或右子树. 对于一个已经有子树的节点, 也可以向子树的节点中做这样的操作. <ruby>约化<rt>reduce</rt></ruby>这些操作的技巧在于, 应该考虑栈弹出的对应物, 对树而言, 这就是回到它的<ruby>双亲<rt>parent</rt></ruby>节点. 这样一来, 每次添加节点后, 下次操作的目标节点就转移为之前新增的节点. 

我们将栈的压入和弹出分别编码为 `1` 和 `0`. 对应的, 以此刻画二叉树的构建: 
- `1` 表示添加当前树节点的左子树. 例如 `111` 表示的树为 `(1 (2 (3)))`. 
- `01` 表示添加当前树节点的右子树. 例如 `10101` 表示的树为 `(1 _ (2 _ (3)))`.
- 而对于 `01` 前的 $k$ 个 `0`, 这些 `0` 用于表示将当前树节点回溯到前 $k$ 层. 例如 `11001` 表示的树为 `(1 (2) (3))`.

{% tip(header="提示") %}
注意到每个树节点的<ruby>双亲<rt>parent</rt></ruby>节点是唯一的, 因此回溯操作良定, 一次回溯就是将当前节点改为其双亲.
{% end %}

## 例子

以下写出三节点二叉树的所有 $5$ 种情况, 以展示这些树的二进制序列如何对应到栈置换. 空栈的弹出视为恒等映射 $\text{id}$, 二进制序列对齐为 $8$ 位. 

```
    o
   /
  o          →     111000     →    321
 / 
o   

    o
   /
  o          →     110100     →    231
   \ 
    o       

o
 \ 
  o          →     101100     →    132
 /
o

o
 \ 
  o          →     101010     →    123
   \
    o

  o
 / \         →     110010     →    213
o   o       

```

相应的, 对于一个栈置换或者有效的出栈序列, 总可以写出它的二进制序列, 并以此得到对应的二叉树. 
<!-- 
这个双射构造的证明只需要注意到: 

1. 对任意一颗二叉树, 其前序遍历总是给出唯一的二进制序列. 这个序列也将唯一确定出栈序列. 
2. 固定出栈序列, 通过一遍栈置换即可得到二进制序列, 这个序列必然以 `1` 开头, 由此二叉树必然有根. 
-->

## 长度

至此, 本文的核心任务已经完成. 以下我们讨论二进制序列长度的一些估计. 利用上文讨论的对应, 二进制序列同时编码了二叉树和栈置换, 通过对栈置换的分析可以轻松得到二进制序列长度的上下界: 

- 注意到 $n$ 元素栈二进制序列最短的情况是 $n$ 个元素全部入栈且在此期间不出栈, 这个序列总是形如 `111...000`, 其中 `1` 的个数就是 $n$, `0` 的个数最少是 $n$, 因此整个序列长度最短是 $2n$. 

- $n$ 元素栈二进制序列最长的情况是每压入一个元素后立刻弹出, 这个序列总是形如 `10101...`, 除去第一个 `1`, 容易知道剩下还有 $n-1$ 个 `01`, 在此之后还需要 $n$ 个 `0` 将元素回到树顶, 故序列长度为 $3n-1$. 

- 如果希望恰好使二进制序列对应的栈弹空. 则序列长度必是 $2n$. 这就是为何之前三元素对齐时长度选择了 $6$. 

- 由于尾部连续的 `0` 不改变树的结构, 这部分连续出栈信息实际上是多余的. 换言之, 仅从存储的角度考虑, 我们不需要额外编码连续出栈至空的信息, 此时的序列长度范围是 $n \le \ell \le 2n-1$. 

## 实现

解析器 `Parser` 的部分不是本文的重点, 一言以蔽之, 上述二进制序列的解析规则定义为

<div>$$(\texttt{"1"} \mapsto \texttt{L} ~|~ \texttt{"01"} \mapsto \texttt{R} ~|~ \texttt{"0"} \mapsto \texttt{U})^*$$</div>

```linenos, hl_lines=4-8 21-22

import Lean.Data.Parsec

inductive Ins where
  | lchild
  | rchild
  | up
deriving Repr

namespace Parser

open Lean Parsec

def left := pstring "1" *> pure Ins.lchild
def right := pstring "01" *> pure Ins.rchild
def up := pstring "0" *> pure Ins.up
def tree := many <| left <|> right <|> up

end Parser

def toIns (s : String) : List Ins :=
  ((Parser.tree.run s).toOption.map (·.toList)).getD []
```

正常的二叉树 `Tree α` 带有 `α` 类型的结点数据, 
本文并不关心结点数据具体为何, 故如下 `Tree` 只会记录树的结构信息. 
这里和上文的 `Repr` 都是调试用途. `Inhabited` 则是后文顺序树 `SeqTree` 中的部分函数 `toTree` 所需, 
对于这个经典的过程, 这里省略了其终止性证明.  


```linenos, linenostart=23
                                                                  
inductive Tree where
  | nil : Tree
  | node : Tree → Tree → Tree
deriving Repr, Inhabited
```

从编码恢复树的核心策略在于使用树的顺序存储, 可以看出, 仅使用结点的相对关系难以处理连续的回溯操作 `Ins.up`. 
现在, 顺序存储使每个结点有一个绝对表示 `id`, 且可以通过 `id` 索引到结点信息, 
前文定义的二叉树 `Tree` 并不带有 `α`, 因此这些信息 `Nat × Bool ≃ Array Bool` 只描述结点是否非空. 
此处虽不关心, 但对于带有数据的结点而言这相当必要. 

<div>
$$\begin{gathered}
  &   &     0     &   &   \\
  & 1 &           & 2 &   \\
3 &   & 4 \quad 5 &   & 6 \\
  &   &   \vdots  &   &
\end{gathered}$$
</div>

对任意一个 `action : Ins` 和当前待操作的节点索引 $i$, 其的左右子节点索引分别为 $2i+1$ 与 $2i+2$. 
将相应的 `nodes[-]` 与 `currId` 更新后即可完成 `Ins.lchild` 与 `Ins.rchild` 指令的处理. 
`Ins.up` 自然不更新 `nodes`, 仅仅只是调整节点索引 $i$ 到它的双亲节点索引 $\lfloor\frac{i-1}2\rfloor$. 
对于 `i >= nodes.size` 的访问, 自然是填充 `i - nodes.size` 个 `false`, 
随后再添加 `i` 位置的 `true`. 

```linenos, hl_lines=8-11 14-18 27-30, linenostart=28

namespace SeqTree

def toRootedSTree (tails : List Ins) : Array Bool := Id.run do
  let mut nodes : Array Bool := #[true]
  let mut currId := 0
  for action in tails do
    match action with
    | .lchild => (nodes, currId) := update nodes (2 * currId + 1)
    | .rchild => (nodes, currId) := update nodes (2 * currId + 2)
    | .up => currId := (currId - 1) /2
  nodes
where
  update (nodes : Array Bool) (id : Nat) :=
    (ite (id >= nodes.size)
         (fill nodes id) (nodes.setD id true), id)
  fill (nodes : Array Bool) (i : Nat) :=
    (nodes.append (mkArray (i - nodes.size) false)).push true

def toSTree : List Ins → Array Bool
  | .lchild :: xs => toRootedSTree xs
  | _ => #[]

partial def toTree (seq : Array Bool) : Tree :=
  go seq 0
where
  go (seq : Array Bool) (i : Nat) : Tree :=
    ite (i < seq.size && seq.get! i)
        (.node (go seq (2 * i + 1)) (go seq (2 * i + 2)))
        .nil

end SeqTree
```

树的编码相当于从树的链式结构转换到线性结构, 此处 `toCode` 是标准的前序遍历. 

```linenos, hl_lines=6-8, linenostart=60

namespace Tree

def fromCode := SeqTree.toTree ∘ SeqTree.toSTree ∘ toIns

partial def toCode : Tree → String
  | .node l r => "1" ++ toCode l ++ "0" ++ toCode r
  | _ => ""

end Tree

```

最后, 可以验证 

```Lean
#eval (fromCode "1110001").toCode -- "11100010"
```

{% detail(title="完整程序") %}
![code](/figure/stack-tree-code.svg)
{% end %}

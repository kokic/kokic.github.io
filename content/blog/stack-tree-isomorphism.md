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

{% note(header="注意") %}
在处理 `0` 时, 如果当前栈已空, 则这些 `0` 会被跳过. 换言之, 空栈的弹出视为恒等映射 $\text{id}$. 我们在此处只强调栈的情况是因为 "空栈弹出" 并不直接对应于 "回到树根的前一层". 这个观察是后文讨论的关键.  
{% end %}

## 例子

以下写出三节点二叉树的所有 $5$ 种情况, 以展示这些树的二进制序列如何对应到栈置换. 二进制序列对齐为 $6$ 位. 

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

## 正合

对于一个有效的二进制序列, 也就是说它能确定一棵二叉树与其对应的栈置换, 如果在构建栈的过程中, 没有发生 "空栈的弹出" 且恰好弹空, 那么我们就称这个二进制序列 **<ruby>栈正合<rt>stack exact</rt></ruby>**. 显而易见, 二进制序列栈正合当且仅当其中的 `1` 和 `0` 的个数相等. 相应的, 没有发生 "回到根的前一层" 且恰好回到根称为 **<ruby>树正合<rt>tree exact</rt></ruby>**. 

前面我们提到, "空栈弹出" 并不直接对应于 "回到根的前一层", 我们在 [例子](#li-zi) 中展示了树结点数或者栈元素为 $3$ 时的情况, 可以验证, 其中给出的二进制序列都栈正合但并非树正合, 如 `111000` 和 `101010`, 前者是因为多余的 `0` 而后者是未能回到根节点. 除了这两者, 其他序列既是栈正合又是树正合, 以下简称为正合. 

相应的, 给定一棵二叉树, 它的树正合序列可以唯一写出, 但是却未必栈正合. 现在来构造几个树正合但不满足栈正合的例子: 

+ 从 `101010` 出发, 我们只要补上缺少的 `0` 就能得到一个例子, 即 `1010100`. 根据前文的约定, "空栈弹出" 不会对栈置换造成任何影响, 换言之, 这两个序列对应着同一个栈置换. 

+ 下一个例子需要考虑 $4$ 个节点的树, 为 `110100` 的根节点加上右节点得到 `11010001`, 这就是所需的序列. `11010001` 的栈置换为 `2314`, 但是从 `2314` 出发, 其对应的栈正合序列为 `11010010`. 可以注意到, 栈正合序列已经不再具有正确的树编码信息, 正因为在树编码到栈置换这一步忽略了对栈而言多余的 `0`. 

<div>
$$\begin{gathered} 
& & \text{tree-exact} & & \\
& \nearrow & & \searrow & \\
\text{tree} & & & & \text{stack} \\
& \nwarrow & & \swarrow & \\
& & \text{stack-exact} & & \\
\end{gathered}$$
</div>

这样一来, 只有在二进制序列正合时, $\text{tree}$ 和 $\text{stack}$ 之间的关系才能表示成 $\text{tree} \rightleftarrows \text{code} \rightleftarrows \text{stack}$, 此时 $\text{tree-exact}$ 和 $\text{stack-exact}$ 相等, 记为 $\text{code}$. 

## 修正

> Hille, Reinhold Friedrich. "Stack permutations and an order relation for binary trees." (1982).

这篇文章 [Hille, 1982] 和本文使用了一致的二进制编码规则, 但是在算法部分给出了错误的实现, 其中的 `ENCODE` 对应于本文实现处的 `toCode`, `ENCODE` 以本文使用的 Lean4 语言写出就是
```
-- Hille's ENCODE
def encode : Tree → String
  | .node l r => "1" ++ encode l ++ encode r
  | _ => "0"
``` 
但是这个标准的前序遍历过程对于树序列的计算来说是不正确的, 实际上, 它会计算出无效的树序列, 并且问题非常隐晦, 因为对于大部分二叉树, `encode` 所返回的结果几乎都正确. 第一个出错的结果位于前文提到的栈置换 `2314`, 其树正合序列为 `110100010`, 栈正合序列为 `11010010`, 对应着如下所示的 $4$ 结点二叉树

```
    o
   / \
  o   o       →     11010001     →    2314
   \                                   
    o                                 


    ∅         ←     11010010     ←    2314
``` 

但请注意, `encode` 是一个 `Tree → String`, 在语义上它计算的应该是树序列而非栈序列, 尽管存在将栈序列唯一转换为树序列的方法, 但是这些内容在 [Hille, 1982] 并未提及, 也就是说, 以该文章的视角来看, 该文章的 `ENCODE` 就应该是其开头给出的树编码, 这就是问题所在. 

我们可以手工验证 `encode` 的计算结果, 而这个 `110100100` 是无效的树编码. 对应地, 我们将给出 `Tree → String` 的正确实现, 也就是 `toCode`, 其将返回 `1101000100` 这样一个有效的树编码, 当然, 这不是树正合的序列, 但无关紧要.  

```
          o
         / \                       o 
encode( o   o )  =  "1" ++ encode(  \  ) ++ encode( o )
         \                           o               
          o      =  "1" ++ "1" ++ "0" ++ 2 × encode( o )

                 =  "110" ++ 2 × "100"

                 =  "110100100"
```


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

树的编码相当于从树的链式结构转换到线性结构, 此处 `toCode` 仍采用类似于前序遍历的过程, 但通过引入 `Tree × Ins` 类型的栈正确记录了树的信息. 

```linenos, hl_lines=6-26, linenostart=60

namespace Tree

def fromCode := SeqTree.toTree ∘ SeqTree.toSTree ∘ toIns

def toCode (t : Tree) : String := Id.run do
  let mut stack : List (Tree × Ins) := [(t, Ins.lchild)]
  let mut result : String := ""
  repeat do
    let head := stack.head?
    if h : head.isSome then
      let (tree, action) := head.get h
      stack := stack.tail!
      match tree with
      | .nil => continue
      | .node l r =>
        match action with
        | .lchild => (result, stack) := (result ++ "1", update tree l r stack)
        | .rchild => (result, stack) := (result ++ "01", update tree l r stack)
        | .up => result := result ++ "0"
    else
      break
  result
where
  update (tree l r : Tree) (stack : List (Tree × Ins)) :=
    (l, Ins.lchild) :: (r, Ins.rchild) :: (tree, Ins.up) :: stack

end Tree

```

<!-- 
{% detail(title="完整程序") %}
![code](/figure/stack-tree-code.svg)
{% end %} 
-->

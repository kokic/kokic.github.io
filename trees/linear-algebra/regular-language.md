
---
title: 正则语言集
date: May 9, 2024
author: [kokic](/trees/kokic.md)
taxon: definition
---

$\gdef\quads#1{\quad #1 \quad}$
$\gdef\eqq{\quads=}$
$\gdef\spaces#1{~ #1 ~}$

固定有限字母表 $\Sigma$, 正则语言集 $\textbf{Reg}_\Sigma$ 可定义如下 

* 空集 $\varnothing$ 是正则语言, 作为加法单位 $0_\Sigma$.
* 只包含空字符串的集合 $\{\epsilon\}$ 是正则语言, 作为乘法单位 $1_\Sigma$. 
* 对于 $a \in \Sigma$, $\{a\}$ 是正则语言.
* 对于正则语言 $A$, $B$. $A \cup B$, $A \times_\Sigma B$ 和 $A^*$ 是正则语言.
* $\Sigma$ 上不存在其它正则语言. 

这里 $A \times_\Sigma B$ 基本就是 
$A \times B = \{ (a, b) : a \in A, b \in B \}$, 但将配对 $(a, b)$ 视为字符串拼接 $a b$.
$A$ 的闭包 $A^*$ 定义为满足如下性质的最小集合. 

$\quad (i)$ 匹配空. 即 $\epsilon \in A^*$. $\quad (ii)$ 对拼接封闭. 即 $A \times_\Sigma A \times_\Sigma \cdots \times_\Sigma A \subset A^*$. 

这里的 $\square^*$ 通常被称为 Kleene 星运算, 按照数学的习惯, $A^*$ 也被称为集合 $A$ 的自由幺半群. 约定 $A^0 = \{\epsilon\}, A^1 = A, A^{i+1} = \{wv : w \in V^i, v \in V \}$, $i \ge 1$. 同样的, 如果 $A$ 是一个字母表或形式语言, $A^i$ 收集的就是所有长度为 $i$ 且字符属于 $V$ 的字符串. 于是 $A^*$ 也可以定义成如下形式

$$
A^* \eqq \bigcup_{i \ge 0} A^i
$$

从直觉上说, $A^*$ 是为了刻画 $A$ 的零次或多次重复. 如果读者熟悉正则表达式, 那么显然此处的 $\cup$ 就是 $+$ 的别名, 对应匹配器的或运算, 于是我们也用 $+_\Sigma$ 表示 $\cup$. 注意这里的 $\cup$ 有无穷多个, 从这个定义可以直接看出 $(A^*)^* = A^*$, 这样一来, $\square^*$ 就会是一个幂等运算. 

可以验证, 正则语言集 $\textbf{Reg}_\Sigma$ 连同其上的加法 $+_\Sigma$ 和乘法 $\times_\Sigma$ 构成一个半环 $(\textbf{Reg}_\Sigma, +_\Sigma, \times_\Sigma, 0_\Sigma, 1_\Sigma)$. 从匹配的角度, 我们还能明白以下两点为何是必须的. 

$\quad (i)~$ 加法单位 $0_\Sigma$ 对于乘法运算 $\times_\Sigma$ 的吸收性. \
$\quad (ii)$ 加法 $+_\Sigma$ 是幂等运算, 即 $a+a = a$. 

现在, 从半环 $(\textbf{Reg}_\Sigma, +_\Sigma, \times_\Sigma)$ 出发, 在其上定义偏序 $a \le b$ $\iff$ $a+b=b$, 等价地 $\exists ~ x$ 使得 $a+x = b$. 最后, 可以验证 $\square^*$ 与定义的偏序还满足下面的公理. 

$$
\begin{aligned}
(1) &~~ 1+aa^* \le a^* \\
(2) &~~ 1+a^*a \le a^* \\
(3) &~~ ax \le x \implies a^* x \le x \\
(4) &~~ xa \le x \implies xa^* \le x
\end{aligned}
$$

这使 $\textbf{Reg}_\Sigma$ 成为 Kleene 代数 $(\textbf{Reg}_\Sigma, +_\Sigma, \times_\Sigma, \square^*)$. 反过来, 按照公理化定义的顺序, 从正则语言集的性质 $(1)\sim(4)$ 能够直接得出 Kleene 星运算 $\square^*$ 的定义, 正则语言集本身就是 Kleene 代数的一个模型. Kleene 代数的另一个简单例子是 Boole 代数, 其中的 $a^* = 1$. 而热带半环尽管有幂等加法, 但可以验证它并非 Kleene 代数. 

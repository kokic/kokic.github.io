
---
title: Zeich in Dynastes
date: 2022-6-1
categories:
  - 计算机
tag:
  - 程序语言
---

<script src="../lib/loader.js"></script>

<script>

const sources = loadFile('/assets/codes/zeich.hs').split('\n');
const select = (s, t) => sources.slice(s - 1, t).join('\n')
</script>

首先, 假定有形式定义 `𝛅 _ _ _ = _ ? _ : _`, 即
```Haskell
𝛅 :: Bool -> a -> a -> a
𝛅 True  x _ = x
𝛅 False _ y = y
```

现在定义 `occup` 用来计算一个 `Char` 或 `String` 的占用长度 $——$ &nbsp;即半角为 $1$, 全角为 $2$. 为了滥用函数名 `occup`, 考虑使用 `class`, 对于 `String` (𝕾) 无非是 `[Char]`, 其 `occup` 由列表中的每一项贡献. 具体而言, 如下所示

<script>displayAsCode(select(11, 20), 'Haskell')</script>

明确地, 可以看见 `G . F` 作为 Pointfree 后的
$$\lambda:\\;(X,Y) \quad\xmapsto{\qquad}\quad G(Y, F(X))$$ 注意, 这里使用的是 `foldr`, 因此这里 $F$ 对应的 `occup` 作用在 $X$ 上. 这里顺带还实现了 `occupWithFence`.

下一步, 考虑实现函数 `occupBound`, 用于计算出一个 `[𝕾]` 中最大的 `occup`. 为了完整展示信息以及对齐, 需要将表格的宽度统一为占用最长的格的宽度.

<script>displayAsCode(select(22, 24), 'Haskell')</script>

---

表格边框线的绘制步骤是平凡的
<script>displayAsCode(select(36, 39), 'Haskell')</script>

这里引入了 `HorizonForm` 来确定线的样式
<script>displayAsCode(select(31, 34), 'Haskell')</script>

还可以定义 `lines𝖱` 用来处理 `[Int]`
<script>displayAsCode(select(42, 46), 'Haskell')</script>

考虑定义 `space` 来补充空格。
<script>displayAsCode(select(48, 49), 'Haskell')</script>

在此之上, 类似于 `line` 可以定义 `fence` 来完成每个表格的中间部分的绘制 
<script>displayAsCode(select(51, 54), 'Haskell')</script>

---

一般地, 为了能够在遍历的同时知道元素所在位置的索引, 可以考虑使用 `zip` 构建配对组 `(x, index)`
<script>displayAsCode(select(56, 57), 'Haskell')</script>

这种做法在数学上还被应用于无交并 $\sqcup$ 的经典构造 
$$X\sqcup Y\overset{\text{def}}{=}(X\times\\{0\\})\cup(Y\times\\{1\\})$$ 
无独有偶, 下面将实现 `fences𝖱` 和 `fences𝖱𝛘`, `ns` 用于设置数据右侧填充的空格长度
<script>displayAsCode(select(59, 67), 'Haskell')</script>

现在只要组合 `lines𝖱` & `fences𝖱` 就能得到 `rowEntire𝖱`
<script>displayAsCode(select(69, 70), 'Haskell')</script>

而对于携带额外参数 𝛘 的版本, 可以做得更精细一些, 后面更进一步的组合中将会使用 `rowCentre𝖱𝛘` 
<script>displayAsCode(select(73, 77), 'Haskell')</script>

最后, `table` 的构成将会因为之前的准备工作变得异常清晰
<script>displayAsCode(select(79, 84), 'Haskell')</script>

---

测试, 考虑最基本的 $2\times2$ 表格
```Haskell
main = putStrLn $ table 
  [ [" ", "A", "B"],  
    ["X", "AX   ゴ", "BX かか"],
    ["Y", "AY ああ", "BY   ん"] ]
```

结果如下 (`Font Family: Ubuntu Mono`)
<pre style="margin: 0 auto;font-size: 1.2em; font-family: 'UbuntuMono';">
+---+---------+---------+
|   | A       | B       |
+---+---------+---------+
| X | AX   ゴ | BX かか |
| Y | AY ああ | BY   ん |
+---+---------+---------+
</pre>



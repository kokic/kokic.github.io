---
title: 「SourceView」Quiver
date: 2022-3-3
categories:
  - 杂谈
tag:
  - 程序语言
---

<style>
small {
  color: grey;
}

</style>

<small>考虑到这个项目的名称极易产生混淆, 这里指出本文的 Quiver 意谓 [网页链接](https://q.uiver.app) $[$ quiver: a modern commutative diagram editor $]$，所读代码自然也就是网页源代码, Quiver 已在 GitHub [开源](https://github.com/varkor/quiver).</small>

## 分析

### 文件清单
- `ui.js`
- `quiver.js`
- `dom.js`
- `(*) arrow.js`
- `(*) bezier.js`
- `(*) ds.js`

---

### 动机
用 quiver 时发现其 ui 控件 `DOM.Multislider.Thumb` 仅监听鼠标事件, 导致若干功能在触摸屏上近乎失效, 于是决定稍做改造 $——$ 原计划是追加触摸监听, 然而效果不尽如人意, 触摸控制滑动条 `Slider` 在数值上难以精确控制, 遂最终考虑使用其 `Button` $——$ `new DOM.Element("button", { title })`.

简单考察, 易从文件名判断出 ui.js 与 quiver.js 为关注的重点 $[$ 顶层结构 $]$，而其余文件为底层实现 $[$ <inc>DOM</inc>, <inc>Arrow</inc>, 曲线, 计算等 $]$. 考察 quiver 暴露出的字段 `String` 信息, 于 `ui.js` 检索 `Curve` 首次定位得到如下内容
```JavaScript
// The curve slider.
create_option_slider("Curve", "curve", "k", { min: -5, max: 5 })
  .class_list.add("arrow-style");
```
初步认为其主要作用即字面意义 `create_option_slider`，后续查询无果, 遂变更查询目标为 `curve`. 简单查找可知
```JavaScript
const curve = new Map();
...
curve: -options.curve
...
```
然而我们重点关注
```JavaScript
case "curve":
  for (const curve of action.curves) {
    curve.edge.options.curve = curve[to];
    cells.add(curve.edge);
  }
  update_panel = true;
  break;
```
考察其上一级 `block` 可知 `switch (kind)`，再向上追溯到 `let kind = action.kind;` 因此确定此段内容即为 `action`.

---

### 重梳理

`Slider` 控件无效（但 `Button` 可用）$\longrightarrow$ 考虑仿照已有 `Button` 添入若干 `Button` 并修改 `curve` $\longrightarrow$ 简单尝试发现 `curve.edge.options.curve` 并无作用 $\longrightarrow$ 留意到 `Button` - `Flip` 实则是将 `Curve` 取加法逆 `-Curve`，考察此段内容

```JavaScript
case "flip":
  for (const cell of action.cells)
    if (cell.is_edge())
      cell.flip(ui, true);
  update_panel = true;
  break;
```
自然追溯到
```JavaScript
flip(ui, flip_arrow, skip_dependencies = false) {
  ...
}
```
不出所料可见
```JavaScript
if (flip_arrow) {
  this.options.offset = -this.options.offset;
  this.options.curve = -this.options.curve;
  ...
}
...
this.render(ui);
```
仿照此段内容即可, 问题到此已基本结束

---

## 实现

### 处理
`Offset` 等 `Slider` 移植为 `Button` 的过程实际上是大同小异（在忽略操作对象的意义下, 即可看出是完全相同的步骤），因此不妨统一处理
```JavaScript
case "curve increase":
...
  for (const cell of action.cells)
    if (cell.is_edge())
      cell.adjust_finite(ui, kind);
  update_panel = true;
  break;
```
略去 `curve decrease, offset increase / decrease`, 其中
```JavaScript
adjust_finite(ui, kind, range = [-5, 5]) {
  const array = kind.split(" ");
  const [min, max] = range;
  const 𝓑 = max - min + 1;
  const [𝓞, 𝓐] = [this.options, array[0]];
  𝓞[𝓐] += (array[1] === "increase" ? 1 : -1);
  𝓞[𝓐] > max && (𝓞[𝓐] -= 𝓑);
  𝓞[𝓐] < min && (𝓞[𝓐] += 𝓑);
  this.render(ui);
}
```

意义不难看出, 取 `range = [-5, 5]` 并选定 $\rarr$ 表 `increase` 则有
$$\cdots\rarr 0\rarr 1\rarr\cdots\rarr 5\rarr-5\rarr-4\rarr\cdots$$

更进一步, 箭身的数目 `level` 也可以凭此手段, 不过依 Quiver 原设，`level` 取值应当限制于 `[1,3]`，即 $\rarr$, $\rArr$ 及 $\Rrightarrow$ 型
```JavaScript
case "level increase":
case "level decrease":
  for (const cell of action.cells)
    if (cell.is_edge())
      cell.adjust_finite(ui, kind, [1, 3]);
    update_panel = true;
    break;
```

### 琐碎部分
仿照
```JavaScript
add_button("Flip arrows", "⥮ Flip", "e", () => {
  ui.history.add(ui, [{
    kind: "flip",
    cells: ui.selection,
  }], true);
});
```
即足以给出
```JavaScript
const add_button_regulator = (target) => {
  add_button(`${target} increase`, `+ ${target}`, "__", () => {
    ui.history.add(ui, [{
      kind: `${target.toLowerCase()} increase`,
      cells: ui.selection,
    }], true);
  });
  add_button(`${target} decrease`, `- ${target}`, "__", () => {
    ui.history.add(ui, [{
      kind: `${target.toLowerCase()} decrease`,
      cells: ui.selection,
    }], true);
  });
};
...
add_button_regulator("Curve");
create_option_slider("Curve", "curve", "k", { min: -5, max: 5 })
  .class_list.add("arrow-style");

add_button_regulator("Offset");
create_option_slider("Offset", "offset", "o", { min: -5, max: 5 });

add_button_regulator("Level");
const level_slider = create_option_slider("Level", "level", "m", { min: 1, max: 3 })
  .class_list.add("arrow-style");
```

结束.







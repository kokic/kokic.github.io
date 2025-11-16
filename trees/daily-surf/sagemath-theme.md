
---
title: Sagemath Jupyter 主题设置
date: February 17, 2025
author: [kokic](/trees/kokic.md)
---

如果你是一个没有定制化需求的 [Sagemath](https://www.sagemath.org) 用户或者单纯地使用 Jupyter Notebook 连接一些与 [Sagemath](https://www.sagemath.org) 无关的服务, 你遇到本文所关心问题的可能性是很低的, 这个主要有以下两个原因. 

1. Sagemath Jupyter Notebook 在 [Visual Studio Code](https://code.visualstudio.com) 上几乎不能使用. 这是因为, 所有由 [MathJax](https://www.mathjax.org) 提供渲染的公式都无法呈现, 甚至连 Cell 也不出现. 于是最稳妥的做法就变成了使用浏览器访问 Jupyter Notebook.  

2. Jupyter Notebook 的主题设计非常混乱, 常用主题位于 [jupyterthemes](https://github.com/dunovank/jupyter-themes) 包, 但是这个包的文档和使用示例并不适用于 [Sagemath](https://www.sagemath.org). 

这两点使得问题看上去不太容易. 因为一般的, 如果用户使用 [Visual Studio Code](https://code.visualstudio.com) 访问 Jupyter Notebook 就完全不需要担心主题问题, 于是相应的可能在互联网上存在的解决方案就会变少. 关于第二点, 如果尝试在 Jupyter Notebook 当中执行下面这样的程序 

```python
from jupyterthemes import get_themes, jtplot
import jupyterthemes as jt
from jupyterthemes.stylefx import set_nb_theme

set_nb_theme('monokai')
```

确实能够切换到 `monokai` 主题, 同时你还会发现当前使用的 Jupyter Notebook 的 `Header` 和 `Toolbar` 消失了 [^toolbar-display-none]. 如果你尝试检索相关信息, 你会在 [jupyterthemes](https://github.com/dunovank/jupyter-themes) 的文档中找到像是 

```sh
jt -t monokai -T -N
```

这样的做法, 这里的 `-T` 是 Toolbar Visible, `-N` 是 Name & Logo Visible. 然后遗憾地发现这不会对 Sagemath 的 Jupyter Notebook 造成任何作用. 同时, 这样的设置也是临时的, 如果希望将某个特定的主题作为默认主题, 就得另谋他法. 

最直接的方法是, 找到像下面这样的编译后的样式文件 

```
sagemath/runtime/opt/sagemath-9.3/local/lib/python3.7/site-packages/jupyterthemes/styles/compiled/monokai.css
```

然后覆盖到

```
<SAGE_HOME>/.sage/jupyter-4.1/custom/custom.css
```

这样你就得到了一个永久生效的样式设置. 随后可以通过修改 `div#maintoolbar` 和 `#header-container` 的 `display` 为 `block` 重新显示这两个组件. 修改 `.MathJax` 的 `font-size` 为 `120%` 或者更大则能够增大渲染后公式的字号. 

$\textbf{Remark.}$ 一个无关正文的冷知识: 如果你需要带完整头文件的 C / C++ 编译器, 但还没安装 GCC 或者 Clang, 那 `sagemath/runtime/bin` 目录下就有一个, 头文件位于 `sagemath/runtime/usr/include`.

[^toolbar-display-none]: 从编译后的样式文件中我们可以看到, `div#maintoolbar` 和 `#header-container` 确实被设置为了 `display: none`. 

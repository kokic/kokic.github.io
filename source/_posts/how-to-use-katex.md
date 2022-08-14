---
title: 如何使用 $\KaTeX$
date: 2021-12-22
categories:
  - 杂谈
---

<script>
document.title = "如何使用 KaTeX";
</script>

<style type="text/css">
small {
  color: grey;
}
</style>

告：<small>本文是一篇极短的文章，不谈过多专业内容，以求一般的读者也能理解.</small>

## 场景
$i.$ 需渲染数学公式之处，而其支持的数学符号有 [Supported Functions · KaTeX](https://katex.org/docs/supported.html)，于目前的版本来看，其仅能绘制方形交换图 $($一个例子可见于[此处](/2021/09-12-group-law.html)$)$，对于有更多需求的用户，单使用 $\KaTeX$ 远不能使人满意，就这一点，解决方法并非没有，但本文暂且按下不表.

$ii.$ 稍不满于 $\LaTeX$ 之繁杂，而若干在线服务或收费或体验不佳，对可自定义性要求较高的用户，不妨尝试本文的方案.

$iii.$ 希望传输方便，能于各平台通用，而又稍厌烦于环境配置，不妨尝试本文的方案.

$iv.$ 本方案缺陷明显，但读者也当有尝试的勇气.

$v.$ 读者所使用之设备上应当有一个浏览器.

## 使用
### 开始
读者应大体知道如何使用浏览器打开本地的 `.html` 文件，这几乎是唯一的门槛之所在. 官网自然已给出详尽之教程，访问 [此处](https://katex.org/docs/browser.html) 可见如下内容
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css" integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js" integrity="sha384-z1fJDqw8ZApjGO3/unPWUPsIymfsJmyrDVWC8Tv/a1HeOtGmkwNd/7xUS0Xcnvsx" crossorigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/contrib/auto-render.min.js" integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR" crossorigin="anonymous"
      onload="renderMathInElement(document.body);"></script>
  </head>
</html>
```
此处给出的是 0.15.1 版本之模板 $($目前已是最新$)$，于较新的版本有所需要的读者，访问上述官网链接照例复制即可.
### 编辑
于设备上创建一文本文件，使其后缀名为 `.html` 而前缀名全由读者意思. 先将上模板内容置入其中，而于标签 `</head>` 之后写下 `<body></body>`，再于标签之间键入形如 `$...$` 或 `$$...$$` 的 $\TeX$ 命令，两者之差异对于熟悉 $\LaTeX$ 的读者是明显的.

下面给出一例，其渲染行间之 $\text{Gaussian integral}$，即 $$\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x=\sqrt{\pi}$$
```
<body>
$$\int_{-\infty}^\infty e^{-x^{2}}\mathrm{d}x=\sqrt{\pi}$$
</body>
```
于此基本已大功告成，可见其操作相当之容易，这时读者只需用浏览器打开此文件 $($ 在连接到互联网的情况下 $)$ 即可见得显示效果.

### 细节之处理
这一步并非必要，其作用仅是调整 `body` 中的字体大小 $($为 36 像素$)$ 以期显示的更大一些.
```
<style type="text/css">
  body {
    font-size: 36px;
  }
</style>
```
自然，应置其于 `<head>` 与 `</head>` 之间.

### 离线
原理直观而朴素，将文件下载到本地并依路径加载即可，其余部分是完全一样的，具体操作交由读者自己完成，相信对于认真阅读本文之读者是全无问题的.

注：于离线使用时，`src` 所依路径可设为 `.html` 文件之相对路径.

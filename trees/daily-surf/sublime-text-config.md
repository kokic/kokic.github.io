
---
title: Sublime Text 4 高分屏设置
date: February 21, 2025
author: [kokic](/kokic.md)
---

装好 [`PackageDev`](https://github.com/SublimeText/PackageDev) [^package-resource-viewer] 包后, 修改主题文件如 `Default.sublime-theme` 即可. 

侧边栏字体大小

```json
"class": "sidebar_label",
"fg": "var(sidebar_label)",
"font.face": "var(font_face)",
"font.size": "var(font_size)"  // line 264
```

侧边栏文件树条目 `padding` 

```json
"class": "sidebar_tree",
"platforms": ["windows"],
"row_padding": [6, 5, 4, 5],  // line 226
```

文件 Tab 字体大小

```json
"class": "tab_label",
"font.face": "var(font_face)",
"font.size": "var(font_size_lg)",  // line 938
```

[^package-resource-viewer]: [`PackageResourceViewer`](https://packagecontrol.io/packages/PackageResourceViewer) 这个包也能用, 不过相对而言太旧了. 


---
title: Sublime Text 4 高分屏设置
author: kokic
!date: February 21, 2025
---

装好 [`PackageResourceViewer`](https://packagecontrol.io/packages/PackageResourceViewer) 包后, 修改主题文件如 `Default.sublime-theme` 即可. 

侧边栏字体大小

```json
"class": "sidebar_label",
"fg": "var(sidebar_label)",
"font.face": "var(font_face)",
"font.size": "var(font_size)"  // line 264
```

侧边栏文件树 

```json
"class": "sidebar_tree",
"platforms": ["windows"],
"row_padding": [6, 5, 4, 5],  // line 226
```

文件 Tab

```json
"class": "tab_label",
"font.face": "var(font_face)",
"font.size": "var(font_size_lg)",  // line 938
```

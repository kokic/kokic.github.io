
---
title: 如何使用 Hypodoxia
date: May 26, 2025
author: [kokic](/kokic.md)
---

$\textbf{Remark.}$ 这不是一篇技术性的文章, 所以它只介绍操作流程而不探讨细节. 它面向的是想要配置 [Hypodoxia](https://github.com/kokic/hypodoxia) 的网站维护者, 对于想要发送评论的用户, 请参考 [Bob 篇](/smaragdina/hypodoxia-bob.md.md).

为网站配置 [Hypodoxia](https://github.com/kokic/hypodoxia) 非常容易. 维护者只需要确定哪些页面是能被评论的即可, 这通常是对 `document.location.href` 做判断. 或者维护者能控制只有特定页面 $—$ 如全体 Blog 文章加载了以下 JavaScript 代码, 此时自然无需检查 `href`. 

```html
<script type="module">
import Hypodoxia from "https://kokic.github.io/hypodoxia/target/hypodoxia.js";

const hypodoxia = new Hypodoxia([
  {
    name: "<commenter-name>",
    link: "<comment-data-link>",
  }
]);

if (/* pages that allow comments */) {
  hypodoxia.appendToIfNotEmpty(document.querySelector('article'));
}
</script>
```

这里, `<commenter-name>` 和 `<comment-data-link>` 是由评论者提交的信息. 网站维护者应当意识到, 将评论者的信息添加到订阅列表 `[...]` 中即同意「展示」该评论者对网站的任意可评论页面所做的评论. 

目前, 维护者可以通过以下方式自行定义 Hypodoxia 的行为. 

- 订阅列表的处理: 对订阅列表 `map`. 
- 评论数据的处理: 通过处理 [`loadCommentsOnce`](https://github.com/kokic/hypodoxia/blob/main/hypodoxia.ts) 的结果并手工实现评论区渲染即可. 
- 改变评论区的结构和样式: 参考 [`toElement`](https://github.com/kokic/hypodoxia/blob/main/hypodoxia.ts). 

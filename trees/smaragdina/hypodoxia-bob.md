
---
title: 如何为使用了 Hypodoxia 的网站提交评论
date: May 25, 2025
author: [kokic](/kokic.md)
---

$\textbf{Remark.}$ 这不是一篇技术性的文章, 所以它只介绍操作流程而不探讨细节. 它面向的是想要发送评论的用户, 对于希望为网站添加 [Hypodoxia](https://github.com/kokic/hypodoxia) 支持的维护者, 请参考 [Alice 篇](/smaragdina/hypodoxia-alice.md).

[Hypodoxia](https://github.com/kokic/hypodoxia) 是一个实验性的评论系统, 它通过改变「评论」这一实体的数据归属方式 $—$ 即以另一种角度回答 "评论数据储存于何处?" 来为目标提供评论服务. 举例来说, 对用户 Bob 而言, Bob 对 Alice 的评论永远属于 Bob, Alice 只能决定 Bob 或者其他用户的评论以何种方式呈现在自己的页面上, 而不能像许多中心化平台那样真正地删除一条评论. 或者用更形象的说法, Alice 只是「订阅」了 Bob 的评论数据. 

目前, 本站和 [Kirisame Magic Shop](https://kirisamemagicshop.github.io) 目前均使用着 [Hypodoxia](https://github.com/kokic/hypodoxia), 对于希望在这两个网站上发表评论的用户 $X$, 唯一的前提是, $X$ 需要能够在公网上提供一份能够被正确响应的评论数据, 如 [comments.json](https://raw.githubusercontent.com/kokic/exhibit/refs/heads/main/comments.json). 为了做到这一点, 没有服务器的 $X$ 可以简单地创建一个 Github 公开仓库, 在其中新建 JSON 文件 [^comment-format] 并写下

```json
[
    {
        "href": "<target-href>", 
        "text": "<your-comment>" 
    }, 
]
```

这里的 `<target-href>` 确定了 $X$ 要对哪个页面作出评论, $X$ 只需要在他想评论的页面上用浏览器进入控制台并执行`document.location.href` 便能精确无误地获得 `<target-href>`, 通常这份信息也会显示在浏览器的地址栏. 

做完这一切后, $X$ 只需要向使用了 [Hypodoxia](https://github.com/kokic/hypodoxia) 的网站维护者 $A$ 提交他的评论数据链接, 如 

```
https://raw.githubusercontent.com/x/repos/refs/heads/main/comments.json
```

在 $A$ 将此链接加入订阅列表后, $X$ 的评论就能正常展示了. 显而易见, 这种提交然后等待订阅的流程只会发生一次, $X$ 日后若是想要修改或者为其他页面添加评论, 所需做的仅仅只是更新 `comment.json`. 

[^comment-format]: Hypodoxia 目前只支持 JSON. 

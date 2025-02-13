
---
title: Link rules
author: kokic
!date: January 15, 2025
zh-CN: [zh-CN](/tutorials/link-rules.md)
---

Although the Markdown files processed by Kodama are syntactically compliant with the [CommonMark](https://commonmark.org) standard, it implements many features beyond CommonMark. To distinguish these additional features syntactically, users must follow the rules below when using these extra functionalities.

First and foremost, it is important to emphasize that paths for both embedded files [^embed-link] and internal links [^local-link] should be absolute paths relative to the current workspace, starting with `/`.

[](/tutorials/embed-syntax-en-US.md#:embed)

Often, for quite simple Typst text, users will want a way to display it inline, corresponding to the inline math context in $\KaTeX$. This is where inline Typst comes in.

[](/tutorials/inline-syntax-en-US.md#:embed)

[^embed-link]: The embedded file can be either a standalone Markdown or Typst file. The embedding operation will merge the content of the linked file into the position of the link. For Markdown, it will become a child `section`.

[^local-link]: Internal links are used to link to other Markdown files within the same Kodama project. Compared to external links, internal links use a special style.

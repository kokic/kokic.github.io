
---
title: Embed Syntax
author: [kokic](/kokic.md)
!date: January 15, 2025
zh-CN: [zh-CN](/tutorials/embed-syntax.md)
---

The difference between the embed syntax and the standard link syntax `[text](url)` is that the `url` in the embed has a special suffix, and it can only be one of the following:

- `.md#:embed`, to embed Markdown.
- `.typ#:block`, to embed the compiled SVG from Typst and display it as a block-level element centered.
- `.typ#:span`, to embed the compiled SVG from Typst and display it as an inline element (less commonly used).
- `.typ#:shared`, to import the Typst file within the context of the current file, where `text` is used to provide the scope of the imported definitions, such as all definitions with `*`. This is used in conjunction with inline Typst syntax.

The reason for using these special suffixes in this syntax is that many Markdown editors [^markdown-editor] can recognize them correctly, allowing for navigation between files.

Most of the time, the `text` in the embed syntax is left empty. However, since only Markdown embeds create child `sections`, the `text` can be used to set whether the `section` is expanded by default and its state in the table of contents. These settings are made up of a series of specific characters, and their functions are independent of each other, so the order in which they are written can be arbitrary.

- `+`, indicates that the current `section` uses a counter.
- `-`, collapses the current `section` by default. Consequently, if this `section` also has a series of child `sections`, these child `sections` will not appear in the table of contents on the current page.
- `.`, hides this `section` in the table of contents on the current page.

[^markdown-editor]: Such as [Visual Studio Code](https://code.visualstudio.com).

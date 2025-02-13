
---
title: Kodama Compilation Command
author: kokic
!date: January 4, 2025
zh-CN: [zh-CN](/tutorials/compile.md)
---

The command `kodama compile` or its abbreviation `kodama c` will build HTML files based on the input Markdown workspace path. By default, these files are placed in the [`publish`](/tutorials/compile-help.md) folder within the workspace path. Even with the `--root` parameter, it is still recommended for all users to execute `kodama c` in the directory where the `index.md` file is located.

[.](/tutorials/compile-help.md#:embed)

For example, if the final deployment URL is <https://www.example.com/blog>, which is not the root directory of the domain, to ensure the correctness of the generated links, the user should specify the `--base` compilation parameter, like so: 

```sh
kodama c -b=https://www.example.com/blog
```

Note that this is only necessary if you are deploying to a specific subdirectory. 
If you are using it locally, you don't need to consider this issue.

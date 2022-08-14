
---
title: Code Exhibition
date: 2022-5-10
categories:
  - 计算机
tag:
  - 程序语言
---

<script src="../lib/loader.js"></script>

Ordinary Fibonacci sequence calculation program, but Prism. js really surprised me. I adjusted the color scheme myself, and thus I learned how to set the colors of prism's various tokens. Here, we assume that ℤ is `Integer`.

<script> displayCode('fibonacci.hs', 'Haskell') </script>

This is the most classic quick sort algorithm and there is no change in the principle. The following program emphasizes "minimal use of statements", i.e. "preferably without semicolons". Many languages allow the semicolon to be ignored and automatically filled in during the syntax analysis (parser) of the program with a reasonable semantic derivation, but Java forces you to write it, so if we want to do this, we need to use something that looks very counterintuitive.

On the other hand, the use of "if-statements" must be avoided when dealing with logical branches, but "conditional expressions" are not a complete substitute for "if-statements", which require that each branch must have the same type of value. Considering these points, we have to adopt a new strategy to deal with the logical problem, which has to be primitive enough, meaning that it will be an expression and not a statement. Most importantly, it has to allow the omission of certain branches, and these restrictions lead us to short-circuit operations.

<script> displayCode('qsort.java', 'Java') </script>



---
title: How to install Kodama
author: [kokic](/kokic.md)
!date: December 31, 2024
zh-CN: [zh-CN](/tutorials/install.md)
---

You can directly download the binary file from the [Github Release](https://github.com/kokic/kodama/releases) page based on the architecture of your target device. For use in Android environments like Termux, choose the `aarch64-unknown-linux-musl` architecture.

- Ensure that Kodama is located in an executable directory.
- Make sure Kodama has executable permissions.
- If you wish, add Kodama to your environment variables.
- Kodama does not come with [Typst](https://github.com/typst/typst) built-in, so if your content involves Typst text, you need to ensure that a Typst program is available in your environment variables.

When the [Github Release](https://github.com/kokic/kodama/releases) page does not have a file suitable for your device, you can start by building from [source code](https://github.com/kokic/kodama) yourself, which is also quite easy.

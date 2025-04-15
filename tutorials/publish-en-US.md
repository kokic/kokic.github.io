
---
title: Preview
author: [kokic](/kokic.md)
!date: December 31, 2024
zh-CN: [zh-CN](/tutorials/publish.md)
---

If you want to view the generated pages in the `publish/` directory locally, you typically need a local HTTP server. You can use any tool you are familiar with to accomplish this. Here, [miniserve](https://github.com/svenstaro/miniserve) is recommended. After installing it, you can run the following command in the root path of your Kodama project to serve the pages locally.

```sh
miniserve ./publish --index index.html --pretty-urls
```

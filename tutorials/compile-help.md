
---
title: shell
---

```
$ kodama c --help
Compile current workspace dir to HTMLs

Usage: kodama.exe compile [OPTIONS]

Options:
  -b, --base <BASE>                Base URL or publish URL (e.g. https://www.example.com/) [default: /] 
  -o, --output <OUTPUT>            Path to output dir [default: ./publish]
  -r, --root <ROOT>                Configures the project root (for absolute paths) [default: ./]       
  -d, --disable-pretty-urls        Disable pretty urls (`/page` to `/page.html`)
  -s, --short-slug                 Hide parents part in slug (e.g. `tutorials/install` to `install`)    
  -f, --footer-mode <FOOTER_MODE>  Specify the inline mode for the footer sections [default: link] [possible values: link, embed]
  -h, --help                       Print help
```
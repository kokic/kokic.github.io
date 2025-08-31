
---
title: [Bevy](https://github.com/bevyengine/bevy) 备注
page-title: Bevy 备注
author: [kokic](/kokic.md)
date: August 29, 2025
---

#### E0786

```sh
error[E0786]: found invalid metadata files for crate `serde`                               
  --> C:\Users\...\.cargo\registry\src\...\bevy_math-0.16.1\src\ray.rs:60:42
   |
60 | #[cfg_attr(feature = "serialize", derive(serde::Serialize, serde::Deserialize))]      
   |                                          ^^^^^^^^^^^^^^^^
   |
   = note: failed to mmap rmeta metadata: '\\?\D:\...\target\release\deps\libserde-f884fbba2cdca77e.rmeta'
   = note: this error originates in the derive macro `serde::Serialize` (in Nightly builds, run with -Z macro-backtrace for more info)
```

如果在 Windows 设备上 `cargo build --release` 时遇到这个错误, 那很可能是 Windows 的路径长度限制所致 [^path-length]. 管理员身份运行如下 Powershell 命令即可启用长路径支持. 

```sh
New-ItemProperty -Path "HKLM:SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```

另见 [Registry setting to enable long paths - Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=powershell#registry-setting-to-enable-long-paths). 

[^path-length]: In the Windows API (with some exceptions discussed in the following paragraphs), the maximum length for a path is MAX_PATH, which is defined as 260 characters. 


---
title: 完全用 Windows 工作
date: March 11, 2026
author: [kokic](/trees/kokic.md)
---

此文为 Windows 系统使用技巧收集, 且侧重介绍微软对普通用户隐藏的实用工具.  

<block title="资源管理器字太小" numbering>

自 Windows 8.1 起, 资源管理器乃至系统 UI 文字样式已经不能用正常手段调整. 开源软件 [No!! MeiryoUI](https://github.com/Tatsu-syo/noMeiryoUI) 重新启用了自定义 Windows 用户界面字体的功能. 

</block>

<block title="语音转文字" numbering>

都是 `Win + H` 打开工具栏. Windows 10 使用内置的离线语音识别功能, Windows 11 使用由 Azure 语音服务提供支持的在线语音识别. 

</block>

<block title="磁盘占用分析" numbering>

安装 [SpaceSniffer ](https://www.uderzo.it/main_products/space_sniffer/index.html) 或者 [WinDirStat](https://windirstat.net/). 前者 UI 上更舒适, 后者分析速度更快. 

</block>

<block title="PowerShell 开启菜单式路径补全" numbering>

用 `$PROFILE` 找到 PowerShell 的的配置文件路径, 然后向其中添加

```ps
Set-PSReadLineKeyHandler -Key Tab -Function MenuComplete
```

</block>

<block title="PowerShell 启动太慢" numbering>

换成 [Nushell]. 

安装 [Nushell] 后, 如果 Windows Terminal 新增 profile 的选项内没有, 则需要重启 Windows Terminal 并等待一定时间. 如果手动安装 [Nushell] 或其他原因导致 profile 没被自动添加, 可在 Windows Terminal 设置左下角处找到 "Open JSON file", 编辑 `profiles > list` 完成 profile 添加. 

[nushell]: https://www.nushell.sh

</block>

<block title="查看文件被哪些进程使用" numbering>

安装 [Process Explorer][procexp] 然后 `Find > Find Handle or DLL`, 点击检索出的条目定位对应进程, 然后可将进程终止. 除了 [Process Explorer][procexp], [Sysinternals](https://learn.microsoft.com/en-us/sysinternals/) 页面也包含其他 Windows 实用工具, 此处不再详细介绍. 

[procexp]: https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer

</block>

<block title="清理所有无响应程序" numbering>

在 Windows Terminal 执行如下指令. 

```ps
taskkill /F /FI "STATUS eq NOT RESPONDING"
```

</block>

<block title="目录符号链接" numbering>

```
mklink /D link target
```

当系统识别到符号链接 `link` 时, 它会跳转到符号链接所指向的目标 `target` 中去. 利用此功能可以将不能改变位置的文件夹移动到其他位置. 

</block>

<block title="完全控制面板" numbering>

新建文件夹, 名为

```ps
.{ED7BA470-8E54-465E-825C-99712043E01C}
```

然后打开即可看到属性设置列表.

</block>




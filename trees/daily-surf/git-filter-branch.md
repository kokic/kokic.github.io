
---
title: Git 过滤分支
date: February 15, 2025
author: [kokic](/trees/kokic.md)
---

一个常见的需求是对已经存在的 [git commit](https://git-scm.com/docs/git-commit) 历史作出修改. 如果目标 commits 都存在于本地分支, 那么一组 [`rebase`](https://git-scm.com/docs/git-rebase) 就能解决问题. 但若是要修改已经推送至远程仓库或托管平台 [^host-platform] 则没有一步到位的操作, 且对于真实的多人协作仓库来说, 这么做的潜在危害远高于 [修改 commits 历史](./git-filter-branch.md) 所得到的短期好处 [^alternative-approach]. 因此, 接下来的讨论都是以接受 "潜在危害" 这一点作为前提而进行的.     

这里只说方法. 即便对于已经提交的 [commit](https://git-scm.com/docs/git-commit), 其修改仍然可用 [`rebase`](https://git-scm.com/docs/git-rebase). 但此时不能直接推送, 我们需要额外做一步 [`filter-branch`](https://git-scm.com/docs/git-filter-branch).  

```
git filter-branch --force     
```

[`filter-branch`](https://git-scm.com/docs/git-filter-branch) 配合 [`replace`](https://git-scm.com/docs/git-replace) 或者 `<GIT_DIR>/info/grafts` 也能够用来快速清除某次 commit 之前的所有记录. `grafts` 文件内是 commit 的 hash 值, 可以通过 `git log` 查询. 

注意, `grafts` 目前已经被标记为 deprecated, 不过依旧可用. 

```
hint: Support for <GIT_DIR>/info/grafts is deprecated
hint: and will be removed in a future Git version.
hint:
hint: Please use "git replace --convert-graft-file"
hint: to convert the grafts into replace refs.
hint:
hint: Turn this message off by running
hint: "git config advice.graftFileDeprecated false"
```

[^host-platform]: 如 [Github](https://github.com), [GitLab](https://about.gitlab.com), [SourceHut](https://sourcehut.org), [Codeberg](https://codeberg.org) 等. 

[^alternative-approach]: 这就是为何你应该对每个任务都开新的 [分支](https://git-scm.com/docs/git-branch), 同时在每次正式 [推送](https://git-scm.com/docs/git-push) 之前都 [`rebase`](https://git-scm.com/docs/git-rebase), 来避免污染主分支的 commit 树. 

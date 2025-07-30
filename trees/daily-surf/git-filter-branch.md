
---
title: Git 过滤分支
date: February 15, 2025
author: [kokic](/kokic.md)
---

一个常见的需求是, 对已经存在的 [commit](https://git-scm.com/docs/git-commit) 历史作出修改. 如果目标 commits 都存在于本地分支, 那么一组 [`rebase`](https://git-scm.com/docs/git-rebase) 就能解决问题. 但若是要修改已经推送至远程仓库或托管平台 [^host-platform] 就没那么容易了, 而且对于真实的多人协作仓库来说, 这么做的潜在危害远高于修改 commits 历史所得到的短期好处 [^alternative-approach]. 因此我们接下来的讨论都是以接受这一点作为前提来进行.     

这里只说方法. 哪怕是对于已经提交的 [commit](https://git-scm.com/docs/git-commit), 修改 commits 还是一样的用 [`rebase`](https://git-scm.com/docs/git-rebase). 但现在肯定是不能直接推送了, 我们需要额外做一步 [`filter-branch`](https://git-scm.com/docs/git-filter-branch).  

```
git filter-branch --force     
```

[`filter-branch`](https://git-scm.com/docs/git-filter-branch) 配合 [`replace`](https://git-scm.com/docs/git-replace) 或者 `<GIT_DIR>/info/grafts` 也能够用来快速清除某次 commit 之前的所有记录. 

虽然后者目前已经被标记为 deprecated. 

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

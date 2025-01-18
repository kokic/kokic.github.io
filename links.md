---
title: 链接
author: kokic
link-1: [洛衣博客](https://www.lozumi.com)
link-2: [Colin’s Blog](https://blog.oyyko.com)
link-3: [Reinhardt的魔法小屋](https://reinhardthk.github.io)
link-4: [废紙时雨](https://blog.shigure.fun)
link-5: [徐诩绫目 | Xuxuayame](http://home.ustc.edu.cn/~xuxuayame)
link-6: [dada 的研究站](https://kono-dada.github.io)
link-7: [迷亭的日记](https://m1ting.github.io)
link-8: [徐天乐 :: 个人博客](https://blog.xtlsoft.top)
link-9: [Ashitemaru](https://ashitemaru.github.io)
link-A: [Studying Father's blog](https://studyingfather.com)
link-B: [Lambdaiae](https://tonyxty.github.io)
link-C: [Xinyu Yi](https://xinyu-yi.github.io)
link-E: [唐珑珂](https://web.math.princeton.edu/~longket)
link-F: [辜开源](https://sites.google.com/view/gubao)
link-G: [张峻铭](https://www.llddeddym.site)
---

<script>

const content = document.querySelector("details");

const appendLinksTableRow = (table, array) => {
  const row = table.appendChild(document.createElement("tr"));
  const dataText = row.appendChild(document.createElement("td"));
  const dataLink = row.appendChild(document.createElement("td"));
  const anchor = dataLink.appendChild(document.createElement("a"));
  row.style.fontSize = "1em";
  row.style.whiteSpace = "nowrap";
  dataText.style.textAlign = "right";
  dataLink.style.padding = "0 1.5em";
  [dataText.textContent, anchor.textContent, anchor.href] = array;
}

const renderLinksTable = (...rows) => {
  const tableElement = document.createElement("table");
  content.appendChild(tableElement);
  tableElement.style.margin = "0";
  tableElement.style.overflow = "scroll";
  rows.forEach(x => appendLinksTableRow(tableElement, x));
}
</script>

<script>
renderLinksTable(
    [ "Liang Xiao", "faculty.bicmr.pku.edu.cn/~lxiao", "http://faculty.bicmr.pku.edu.cn/~lxiao/index.htm" ]
  , [ "李文威的数学主页", "www.wwli.asia", "https://www.wwli.asia/index.php/zh" ]
  , [ "望月新一＠数理研", "www.kurims.kyoto-u.ac.jp/~motizuki", "https://www.kurims.kyoto-u.ac.jp/~motizuki" ]
  , [ "斎藤 毅", "www.ms.u-tokyo.ac.jp/~t-saito", "https://www.ms.u-tokyo.ac.jp/~t-saito/j-index.html" ]
  , [ "James Milne", "www.jmilne.org", "https://www.jmilne.org" ]
  , [ "Jacob Lurie", "www.math.ias.edu/~lurie", "https://www.math.ias.edu/~lurie" ]
  , [ "Borcherds", "math.berkeley.edu/people/faculty/richard-e-borcherds", "https://math.berkeley.edu/people/faculty/richard-e-borcherds" ]
  , [ "Joseph Silverman", "www.math.brown.edu/johsilve", "https://www.math.brown.edu/johsilve" ]
  , [ "Don Zagier", "people.mpim-bonn.mpg.de/zagier", "https://people.mpim-bonn.mpg.de/zagier" ]
  , [ "Oleg Kiselyov", "okmij.org/ftp", "https://okmij.org/ftp" ]

  , [ "kerodon", "kerodon.net", "https://kerodon.net" ]
  , [ "The Rising Sea", "math.stanford.edu/~vakil/216blog", "http://math.stanford.edu/~vakil/216blog" ]
  , [ "The Stacks project", "stacks.math.columbia.edu", "https://stacks.math.columbia.edu" ]
  , [ "香蕉空间", "www.bananaspace.org", "https://www.bananaspace.org/wiki/%E9%A6%96%E9%A1%B5" ]
  , [ "$n$Lab", "ncatlab.org", "https://ncatlab.org/nlab/show/HomePage" ]
  , [ "LMFDB", "www.lmfdb.org", "https://www.lmfdb.org" ]
  , [ "Math Genealogy", "www.genealogy.math.ndsu.nodak.edu", "https://www.genealogy.math.ndsu.nodak.edu/index.php" ]
)
</script>


#import "../_lib/html.typ": *

#let elem-frame(content, attrs: (:), tag: "div") = html.elem(tag, html.frame(content), attrs: attrs)

#let light-pink(content) = {
  let adhoc-color = rgb(237, 0, 140)
  if compatibled-target() != "paged" {
    show text: html.elem.with("span", attrs: ("style": "color: " + adhoc-color.to-hex() + ";"))
  }
  text(fill: adhoc-color)[#content]
}

#let clink(s) = link(s)[#text(font: "Jetbrains Mono", size: 0.9em, s)]

#let hint(content, fill: gray) = {
  if compatibled-target() != "paged" {
    show text: html.elem.with("span", attrs: ("style": "color: " + fill.to-hex() + ";"))
  }
  text(fill: fill)[#content]
}

#let kai(content) = {
  if compatibled-target() != "paged" {
    show text: html.elem.with("span", attrs: ("class": "kaiti"))
  }
  text(font: ("FandolKai"), content)
}

#show emph: it => {
  if compatibled-target() != "paged" {
    show text: html.elem.with("em")
  }
  text(style: "italic", font: ("New Computer Modern"), it.body)
}

#if compatibled-target() != "paged" {
  show: html.elem.with("html")
  show math.equation.where(block: true): elem-frame.with(tag: "span", attrs: ("style": "display: flex; justify-content: center; overflow: auto;"))
  show math.equation.where(block: false): elem-frame.with(tag: "span", attrs: ("style": "display: inline;"))
}

#let script-size = 10pt
#let normal-size = 12pt

#let text-font = ("New Computer Modern", "FandolSong")

#set text(size: normal-size, font: text-font, lang: "en")

#set par(spacing: 1em, leading: 0.65em)
#set par(first-line-indent: 2em, justify: true)

#[
  #if compatibled-target() != "paged" {
    show block: html.elem.with("div", attrs: ("style": "text-align: center; display: block;"))
  }

  #block[
    Central Committee, CPC \

    #text(script-size)[译者: Kokic Hydrangea]
  ]
]

\

#[
  #if compatibled-target() != "paged" {
    show block: html.elem.with("div", attrs: ("style": "padding: 0 46px;"))
  }

  #block[
    #text(
      script-size,
    )[
      *原文:* Central Committee, Communist Party of Canada (Marxist-Leninist), *Providing Democracy with a Modern Definition*.
      TML MONTHLY, Newspaper of the Communist Party of Canada (Marxist-Leninist). Volume 53 Number 1 - January 2023. #light-pink(clink("https://cpcml.ca/Tmlm2023/Articles/M530010.HTM")).
    ]
  ]
]

\

怀着深切的悲痛, 我们谨此告知, 著名数学家 William Lawvere 博士于 2023 年 1 月 23 日与世长辞. Lawvere 教授是加拿大共产党 (马列主义) 的好友, 一位始终秉持人类文明崇高道路的同路人, 致力于对抗并改变社会上的陈旧道德观念, 扫除阻碍进步与启蒙的障碍.

从 1970 年代初开始, 他与 CPC (M-L) #hint[[译注: 即 _Communist Party of Canada (Marxist-Leninist)_, 加拿大共产党 (马列主义)]] 的创始人和领导人 Hardial Bains 在 “变革的必然性” 与辩证法等哲学及其他项目上展开合作, Hardial Bains 本身就是一位科学家和哲学家. 从 1969 年到 1971 年, 作为 Killam 学者任职于 Halifax Dalhousie 大学, 领导一支享有国际声誉的数学家团队. 但在 1971 年, 当 Lawvere 教授抗议 Pierre Trudeau 颁布#kai[《战争措施法》]#hint[[_War Measures Act_]] 并暂停公民自由、实施种种暴行时, Dalhousie 大学拒绝续聘用他. 尽管其本人领导的数学家团队强烈抗议. 时逾千名学生齐聚 Dalhousie 大学学生会大楼大厅声援劳威尔教授, 反对校方这一专横解雇决定. 

多年来, Lawvere 教授多次在加拿大与我们一起讨论重要议题, 并以他深厚广博的学识作出卓越贡献. 1996 年 2 月, 他在温莎大学举行的主题为 “#kai[意识起源和社会变革]” #hint[[_The Origin of Consciousness and Social Change_]] 的跨学科会议上发表了演讲. 该次会议所提交的论文, 对 “独立于人类之外的意识存在” “冷战史学” “现代民主人格的兴起” 等议题提出了深刻洞见. Lawvere 教授提交的论文为#kai[《数学改革的历史和哲学》]#hint[[_The History and Philosophy of Mathematic Reform_]], 该论文剖析了当时一种限制数学科学知识传播的教学趋势, 并指出除其他关切外, 这种趋势如何有效地助长了神秘主义与对权威的盲目服从.

1997 年, 他与来自世界各地的学者一起参加了 Bains 同志的葬礼. 他还参加了 1998 年的 CPC (M-L) 第七次代表大会, 会上他对 Hardial Bains 的工作表示赞赏, 并对大会讨论的论纲作出了贡献. 2005 年, 他参加了党的 35 周年庆典, 再次表达了对党在理论和现代定义方面的工作的赞赏. 他后来写道, 35 周年纪念日 “是一个非常有意义的时刻. [...] 特别是, 这一场合使我的工作取得了进一步的进展, 特别是为纪念列宁哲学著作一百周年的项目, 详细介绍了它们如何从自然科学的角度以及从为启蒙而进行的阶级斗争的角度, 成为研究 19 世纪和 20 世纪哲学发展的有用指南. 自从 35 年前 Hardial 指出这些书的重要性以来, 它们一直是我的伴侣. [...]”


获悉 Lawvere 教授逝世的消息后, 他的长期伙伴 Eric Hoffman 在感谢 Hardial Bains 和 Bill Lawvere #hint[[译注: 即 William Lawvere]] 对他自己的生活和工作产生的深远影响时说:


“他们各自在1960年代早期所开展的开创性工作, 如今交汇出一种崭新而令人惊讶的关联, 其最强有力的证据已然显现. 这种关联是人类与自然之间复杂关系网络的一个组成部分. Bill 说, 这一复杂整体所具有的客观性, 迫使我们必须坚定不移地关注对空间与数量的研究. 

“在他博客上的一次采访中, Bill 说, ‘数学理论的核心, 在于空间中数量的变化, 以及在这种变化中质的飞跃.’ 无论考虑的是几何学、范畴、逻辑、政治形态的转变、亲属关系亦或其他领域, Bill 始终印证着对立面的统一与同一, 即辩证法的真实存在.

“Bill 的工作将作为扩大启蒙空间的贡献而经久不衰.”

在 CPC (M-L) 中央第一书记发给 Lawvere 教授家人的哀悼信中, 她写道:

“Bill 在他的一生中做出了如此多的贡献, 我们非常感激. 他对发现新事物的热情和奉献精神总是令人鼓舞. 他的方法总是充满活力、专注、在许多方面都很新鲜. 他作为教师的耐心、他的论点的智慧和连贯性、他对年轻一代和教化他们的热情, 以及他对文明崇高道路的勇敢坚持, 都非常出色.

“与 Bill 会面总是非常高兴. 我们将永远珍惜他的友谊、慷慨的精神和对我们共同事业的奉献精神, 他为此毫不畏惧地大声疾呼. 这正彰显了他非凡的品格.

为展示 Lawvere 教授作为数学教育者的风范, 其对问题直截了当的阐释方式, 以及对所有对其工作感兴趣者开放坦诚的讨论态度, 我们谨举一例: 他曾应请求就 “为何范畴论可能如此有用” 提供一个宽泛的论证. 以下是比尔的回答: 

#show quote: set pad(x: 3.5em)
#quote(
  block: true,
)[#kai[
    人类的日常活动, 如在溪流旁的山上建造房屋、铺设电话管道网络、在太阳系中航行, 都需要可行的计划. 规划任何此类工作都需要发展对空间的思考. 每个发展都涉及许多思考步骤和许多相关的空间几何结构. 由于思考空间的必要多步骤性质, 必须采取独特的数学措施来使其可靠. 只有明确的思维原则 (逻辑) 和明确的空间原则 (几何) 才能保证可靠性. Eilenberg 和 Mac Lane 60 年前发明的理论所取得的巨大进步使逻辑和几何学的原则变得明确; 他们通过发现逻辑与几何的共同形式, 使得二者之间的关系原则也变得清晰可见. 他们解决了亚里士多德在 2300 年前提出的一个问题, 即初步尝试将 “概念的范畴” 显式化. 在 21 世纪, 他们的解决方案不仅适用于平面几何和中世纪三段论, 还适用于无穷维变换空间、数据 “空间” 以及其他每日被成千上万次应用的概念工具. 范畴学家发现, 逻辑与几何原则的形式, 根植于空间之间变换以及空间内部变换的 “自然性” 之中.
  ]]

下文附上 Lawvere 教授逝世时发表的讣告 #hint[[译注: 讣告和后文的传真件等内容请前往原文查看.]]. 我们添加了 1971 年 1 月 22 日#kai[《达尔豪斯公报》]#hint[[_Dalhousie Gazette_]] 上关于他被 Dalhousie 大学开除的文章的传真件. 我们还提供了 Lawvere 博士在 1996 年 2 月 9 日至 11 日在温莎大学举行的关于意识起源和社会变革的跨学科会议上发表的题为 “#kai[数学教育改革的历史与哲学]” #hint[[_The History and Philosophy of Mathematic Reform_]] 的论文. 最后, 我们还提供一段 Lawvere 博士的访谈, 其中他亲自阐释了自己的学术工作.

我们向 Bill 的终身伴侣与合作者、他的子女、孙辈、兄弟姊妹, 以及无数朋友与同事致以最深切的哀悼. 愿他们从共同创造的美好回忆中获得慰藉. 

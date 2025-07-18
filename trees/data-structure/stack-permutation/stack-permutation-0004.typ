
#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 15.427pt, top-edge: "bounds", bottom-edge: "bounds");

#show raw: set text(font: "JetBrains Mono")

#align(center)[
#table(
  stroke: none,
  align: (left),
  column-gutter: 1em,
  row-gutter: -0.5em,
  columns: 3,
  [`<lchild>`],
  [`:=`],
  [`"1"`],
  [`<rchild>`],
  [`:=`],
  [`"01"`],
  [`<up>`],
  [`:=`],
  [`"0"`],
  [`<parser>`],
  [`:=`],
  [`(<lchild> | <rchild> | <up>)`#super[`*`]],
)
]

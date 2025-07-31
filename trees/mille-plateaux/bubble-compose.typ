
#import "@preview/fletcher:0.5.4" as fletcher: node, edge

#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 13.2pt, top-edge: "bounds", bottom-edge: "bounds");

#align(center)[
#let y = 1.5
#fletcher.diagram(
  crossing-fill: rgb(0, 0, 0, 0), 

  node((0, 0), $Z$),
  node((-1, y), $X$),
  node((1, y), $Y$),
  edge((-1, y), (0, 0), "->", $sigma_X$, bend: 15deg), 
  edge((1, y), (0, 0), "->", $sigma_Y$, bend: -15deg), 
  edge((0, 0), (1, y), "->", $sigma_Y^(-1)$, bend: -15deg), 
  edge((-1, y), (1, y), "->", $sigma$, label-side: right)
)]

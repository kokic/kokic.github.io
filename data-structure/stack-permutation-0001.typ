
#set page(width: auto, height: auto, margin: (x: 0em, y: 0.1em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 15.427pt, top-edge: "bounds", bottom-edge: "bounds");

#import "@preview/fletcher:0.5.4" as fletcher: node, edge

#show raw: set text(font: ("Jetbrains Mono", "FandolSong"))

#align(center)[
#let u = 0.4
#let gap = 3em
#let gaph = 1.5
#let cx = 1

#fletcher.diagram(
  node-inset: 0pt, 
  node-stroke: 0.8pt,
  crossing-fill: rgb(0, 0, 0, 0), 

  let y = gaph * 0, 

  node((0, y), radius: 0.4em),
  edge(), 
  node((-u, y + u), radius: 0.4em), 
  edge(), 
  node((-2*u, y + 2*u), radius: 0.4em), 

  node((cx, y + u), [$arrow$ #h(gap) `111000` #h(gap) $arrow$ #h(gap) `321`], stroke: none), 

  let y = gaph * 1, 

  node((-u, y), radius: 0.4em),
  edge(), 
  node((-2*u, y + u), radius: 0.4em), 
  edge(), 
  node((-u, y + 2*u), radius: 0.4em), 

  node((cx, y + u), [$arrow$ #h(gap) `110100` #h(gap) $arrow$ #h(gap) `231`], stroke: none), 

  let y = gaph * 2, 

  node((-u, y), radius: 0.4em),
  edge(), 
  node((0, y + u), radius: 0.4em), 
  edge(), 
  node((-u, y + 2*u), radius: 0.4em), 

  node((cx, y + u), [$arrow$ #h(gap) `101100` #h(gap) $arrow$ #h(gap) `132`], stroke: none), 

  let y = gaph * 3, 

  node((-2*u, y), radius: 0.4em),
  edge(), 
  node((-u, y + u), radius: 0.4em), 
  edge(), 
  node((0, y + 2*u), radius: 0.4em), 

  node((cx, y + u), [$arrow$ #h(gap) `101010` #h(gap) $arrow$ #h(gap) `123`], stroke: none), 

  let y = gaph * 4, 

  node((-u, y), radius: 0.4em),
  edge(), 
  node((-2*u, y + u), radius: 0.4em), 
  edge((-u, y), (0, y + u)), 
  node((0, y + u), radius: 0.4em), 

  node((cx, y + u), [$arrow$ #h(gap) `110010` #h(gap) $arrow$ #h(gap) `213`], stroke: none), 
)

]

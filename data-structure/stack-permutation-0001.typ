
#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 15.427pt, top-edge: "bounds", bottom-edge: "bounds");

#import "@preview/fletcher:0.4.1" as fletcher: node, edge

#show raw: set text(font: ("Jetbrains Mono", "FandolSong"))

#align(center)[
#let u = 0.4
#let gap = 3em
#let gaph = 1.5
#let cx = 1

#fletcher.diagram(
  node-inset: -4pt, 
  crossing-fill: rgb(0, 0, 0, 0), 

  let y = gaph * 0, 

  node((0, y), $circle$),
  edge(), 
  node((-u, y + u), $circle$), 
  edge(), 
  node((-2*u, y + 2*u), $circle$), 

  node((cx, y + u), [$arrow$ #h(gap) `111000` #h(gap) $arrow$ #h(gap) `321`]), 

  let y = gaph * 1, 

  node((-u, y), $circle$),
  edge(), 
  node((-2*u, y + u), $circle$), 
  edge(), 
  node((-u, y + 2*u), $circle$), 

  node((cx, y + u), [$arrow$ #h(gap) `110100` #h(gap) $arrow$ #h(gap) `231`]), 

  let y = gaph * 2, 

  node((-u, y), $circle$),
  edge(), 
  node((0, y + u), $circle$), 
  edge(), 
  node((-u, y + 2*u), $circle$), 

  node((cx, y + u), [$arrow$ #h(gap) `101100` #h(gap) $arrow$ #h(gap) `132`]), 

  let y = gaph * 3, 

  node((-2*u, y), $circle$),
  edge(), 
  node((-u, y + u), $circle$), 
  edge(), 
  node((0, y + 2*u), $circle$), 

  node((cx, y + u), [$arrow$ #h(gap) `101010` #h(gap) $arrow$ #h(gap) `123`]), 

  let y = gaph * 4, 

  node((-u, y), $circle$),
  edge(), 
  node((-2*u, y + u), $circle$), 
  edge((-u, y), (0, y + u)), 
  node((0, y + u), $circle$), 

  node((cx, y + u), [$arrow$ #h(gap) `110010` #h(gap) $arrow$ #h(gap) `213`]), 
)

]

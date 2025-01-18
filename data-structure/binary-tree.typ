
#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 15.427pt, top-edge: "bounds", bottom-edge: "bounds");

#import "@preview/syntree:0.2.0": syntree

#align(center)[
\
#stack(
  dir: ltr
)[
  #v(2em)
  #syntree(layer-spacing: 1.5em, "[$bullet$]")
][
  #v(2em)
  #h(3em) or #h(3em)
][
  #syntree(layer-spacing: 1.5em, "[$bullet$ 
    [$bullet$ [$bullet$] [$bullet$]] 
    [$bullet$ [$bullet$] [$dots.c$]] 
  ]")
]
]

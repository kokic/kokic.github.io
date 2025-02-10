
#set page(width: auto, height: auto, margin: (x: 0em, y: 0.1em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 15.427pt, top-edge: "bounds", bottom-edge: "bounds");

#import "@preview/fletcher:0.5.4" as fletcher: node, edge, cetz
#import "/typst/shared.typ": *

#show raw: set text(font: ("Jetbrains Mono", "FandolSong"))

#let u = 0.4
#let gap = 3em
#let cx = 1

#let tree4 = box(fletcher.diagram(
  node-inset: 0pt, 
  node-stroke: 0.8pt,
  crossing-fill: rgb(0, 0, 0, 0), 

  let y = 0, 

  node((-u, y), radius: 0.4em),
  edge(), 
  node((-2*u, y + u), radius: 0.4em), 
  edge(), 
  node((-u, y + 2*u), radius: 0.4em), 

  edge((-u, y), (0, y + u)), 
  node((0, y + u), radius: 0.4em), 
), height: 3.35em, baseline: 1.2em)


#let tree2 = box(fletcher.diagram(
  node-inset: 0pt, 
  node-stroke: 0.8pt,
  crossing-fill: rgb(0, 0, 0, 0), 

  let y = 0, 

  node((-u, y), radius: 0.4em),
  edge((-u, y), (0, y + u)), 
  node((0, y + u), radius: 0.4em), 
), height: 2em, baseline: 0.7em)

#let enc = `encode`
#let splus = spaces(`++`)

$ 
#enc\(#tree4) 
&eqq #`"1"` splus #enc\(#tree2) splus #enc\(circle) \
&eqq #`"1"` splus #`"1"` splus #`"0"` splus 2 dot #enc \(circle) \ \ \
&eqq #`"110"` splus 2 dot #`"100"` \ \ \
&eqq #`"110100100"`
$

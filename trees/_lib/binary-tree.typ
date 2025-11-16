
#import "@preview/fletcher:0.5.8" as fletcher: node, edge, cetz

#let gap = 3em
#let cx = 1

#let tree-max(u) = box(fletcher.diagram(
  node-inset: 0pt, 
  node-stroke: 0.8pt,
  crossing-fill: rgb(0, 0, 0, 0), 

  let y = 0, 

  node((-u, y), radius: 0.4em),
  edge(), 
  node((-2*u, y + u), radius: 0.4em), 
  edge(), 
  node((-u, y + 2*u), radius: 0.4em), 
  edge(), 
  node((0, y + 3*u), radius: 0.4em), 
  node((u/1.5, y + (3+1/1.5)*u), $dots.down$, stroke: none), 

  edge((-u, y), (0, y + u)), 
  node((0, y + u), radius: 0.4em), 
), height: 6.2em, baseline: 4em)

#let tree4(u) = box(fletcher.diagram(
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

#let tree3(u) = box(fletcher.diagram(
  node-inset: 0pt, 
  node-stroke: 0.8pt,
  crossing-fill: rgb(0, 0, 0, 0), 

  let y = 0, 

  node((-u, y), radius: 0.4em),
  edge(), 
  node((-2*u, y + u), radius: 0.4em), 

  edge((-u, y), (0, y + u)), 
  node((0, y + u), radius: 0.4em), 
), height: 2em, baseline: 0.7em)

#let tree2(u) = box(fletcher.diagram(
  node-inset: 0pt, 
  node-stroke: 0.8pt,
  crossing-fill: rgb(0, 0, 0, 0), 

  let y = 0, 

  node((-u, y), radius: 0.4em),
  edge((-u, y), (0, y + u)), 
  node((0, y + u), radius: 0.4em), 
), height: 2em, baseline: 0.7em)

#let tree1(u) = box(fletcher.diagram(
  node-inset: 0pt, 
  node-stroke: 0.8pt,
  crossing-fill: rgb(0, 0, 0, 0), 
  node((0, 0), radius: 0.4em),
), height: 0.8em, baseline: 0.1em)

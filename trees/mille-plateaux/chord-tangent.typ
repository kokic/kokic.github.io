
#import "@preview/cetz:0.4.2" as cetz: canvas, draw
#import "@preview/cetz-plot:0.1.3": plot

#import "../_lib/kodama.typ": html-math-font-size

#set page(width: auto, height: auto, margin: (x: 1em, y: 1em), fill: rgb(0, 0, 0, 0)); 
#set text(size: html-math-font-size, top-edge: "bounds", bottom-edge: "bounds");

#align(center)[#canvas(length: 0.8cm, {
  draw.set-style(
    stroke: (thickness: 0.6pt, cap: "round"),
  )

  let r = 3

  draw.circle((0, 0), radius: r)

  draw.circle((-r, 0), radius: 0.05, fill: black)
  draw.circle((r * 3/5, r * 4/5), radius: 0.05, fill: black)

  draw.content((-4.8, 0.2), anchor: "south", $r dot (-1, 0)$)
  draw.content((1.5, 3.5), anchor: "south", $r dot ((1-t^2)/(1+t^2), (2t)/(1+t^2))$)

  // y = t(x+r)
  // r = 1, t = 1/2
  // draw.line((-1, 0), (3/5, 4/5))
  // r = 2, t = 1/2
  // draw.line((-2, 0), (6/5, 8/5))
  draw.line((-5, -1), (4, 7/2))
})]


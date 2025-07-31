
#import "@preview/cetz:0.3.2" as cetz: canvas, draw
#import "@preview/cetz-plot:0.1.1": plot

#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 13.2pt, top-edge: "bounds", bottom-edge: "bounds");

#let plot_max_value = 10

#let point(x, y, color: black) = plot.add(domain: (x, x), x => y, samples: 2, mark: "o", mark-style: (stroke: none, fill: color))

#let point_and_tangline(px, py, inf: -5, sup: 5) = {
  point(px, py)
  plot.add(domain: (inf, sup), x => -calc.pow(px/py, 2) * (x - px) + py, style: (stroke: black))
}

#cetz.canvas(length: 1.8cm, {

  draw.content((5, 5), $x^3+y^3=9$)

  plot.plot(
    name: "plot", 
    size: (6, 6), 
    axis-style: "school-book", 
    x-tick-step: none, 
    y-tick-step: none, 
    x-min: -plot_max_value, 
    x-max: plot_max_value, 
    y-min: -plot_max_value, 
    y-max: plot_max_value,
    
    {
      let root9by3 = calc.pow(9, 1/3)
      plot.add(domain: (-6, root9by3), x => calc.pow(9 - calc.pow(x, 3), 1/3), style: (stroke: blue))
      plot.add(domain: (root9by3, 6), x => -calc.pow(calc.pow(x, 3) - 9, 1/3), style: (stroke: blue))

      point_and_tangline(1, 2)
      point_and_tangline(-17/7, 20/7)
      point_and_tangline(188479/90391, -36520/90391, inf: 1.98, sup: 2.15)
      point(1243617733990094836481/609623835676137297449, 487267171714352336560/609623835676137297449)
      
    }
  )

  draw.content((3.5, 4), text(16pt, $P(1, 2)$))
  draw.content((1.8, 3.5), text(16pt, $2P(-17/7, 20/7)$))
  draw.content((4.5, 1.8), text(16pt, $4P(188479/90391, -36520/90391)$))
  draw.content((4, 3.2), text(16pt, $8P$))
})
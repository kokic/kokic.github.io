
#import "@preview/cetz:0.4.2" as cetz: canvas, draw
#import "@preview/cetz-plot:0.1.3": plot

#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 13.2pt, top-edge: "bounds", bottom-edge: "bounds");

#let plot_max_value = 4
#let plot_size = (8, 8)
#let text-size = 1.5em

#let point(x, y, color: black) = plot.add(domain: (x, x), x => y, samples: 2, mark: "o", mark-style: (stroke: none, fill: color))

#let point_and_tangline(px, py, inf: -5, sup: 5) = {
  plot.add(domain: (inf, sup), x => -calc.pow(px / py, 2) * (x - px) + py, style: (stroke: black))
  point(px, py)
}

#cetz.canvas(length: 1.8cm, {

  plot.plot(
    name: "plot",
    size: plot_size,
    axis-style: "school-book",
    x-tick-step: none,
    y-tick-step: none,
    x-min: -plot_max_value,
    x-max: plot_max_value,
    y-min: -plot_max_value,
    y-max: plot_max_value,
    {
      let root9by3 = calc.pow(9, 1 / 3)
      
      plot.add(domain: (-6, root9by3), x => calc.pow(9 - calc.pow(x, 3), 1 / 3), style: (stroke: blue), samples: 150)

      plot.add(domain: (root9by3, 6), x => -calc.pow(calc.pow(x, 3) - 9, 1 / 3), style: (stroke: blue), samples: 100)

      point_and_tangline(1, 2)
      point_and_tangline(-17 / 7, 20 / 7)
      point_and_tangline(188479 / 90391, -36520 / 90391, inf: 1.98, sup: 2.12)
      point(
        2.0399
        /* 1243617733990094836481/609623835676137297449 */
        ,
        0.799,
        /* 487267171714352336560/609623835676137297449 */
      )
    },
  )

  draw.content((2, 2), text(text-size, $x^3+y^3=9$))

  draw.content((5, 6.5), text(text-size, $P(1, 2)$))
  draw.content((1.2, 6), text(text-size, $2P(-17/7, 20/7)$))
  draw.content((6, 2), text(text-size, $4P(188479/90391, -36520/90391)$))
  draw.content((6.8, 4.8), text(text-size, $8P$))
})

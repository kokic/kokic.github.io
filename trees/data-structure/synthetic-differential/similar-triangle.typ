
#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 13.2pt, top-edge: "bounds", bottom-edge: "bounds");

#import "@preview/cetz:0.4.2"

#cetz.canvas(length: 3cm, {
  import cetz.draw: *

  set-style(
    stroke: (thickness: 0.5pt, cap: "round"), 
  )

  let u = 0.8
  let gap = 0.1

  let one = 0.8 * u // 1
  let x = 1.4 * u // α
  let y = one - 0.1 // β
  let h = (x * y) / one // γ  

  line((0, 0), (x, 0), name: "0-a")
  line((0, 0), (0, h), name: "0-g")
  
  line((0, h), (x, 0))
  line((0, y), (one, 0))
  
  content((0, -gap), $0$)
  content((one, -gap), $1$)
  content((x, -gap), $alpha$)

  content((-gap, y), $beta$)
  content((-gap, h), $gamma$)
  
})


#import "@preview/fletcher:0.5.8" as fletcher: node, edge, cetz
#import fletcher.shapes: pill
#import fletcher.cetz: canvas, draw

#let regular(n: int) = {
cetz.canvas(length: 1cm, {
  import cetz.draw: *

  // let a = 0.5
  // let deg = 360deg
  
  let n = 6
  let i = 0

  let r = 0.5 // n / 10 * 0.5

  while i < n {
    let x = r * calc.cos(i * 360deg / n)
    let y = r * calc.sin(i * 360deg / n)
    circle((x, y), radius: .05, fill: black, name: str(i))

    if i > 0 {
      line(str(i - 1), str(i), stroke: (thickness: 0.5pt))
    }

    i += 1
  }
  line(str(i - 1), "0", stroke: (thickness: 0.5pt))

})
}

#let chroma = (
  circle: cetz.canvas(length: 1cm, {
  import cetz.draw: *

  let a = 0.5

  circle((0, 0), radius: .05)
}),

  p2: cetz.canvas(length: 1cm, {
  import cetz.draw: *
   
  let a = 0.5
   
  circle((0, 0), radius: .05, fill: black, name: "a")
  circle((a, 0), radius: .05, fill: black, name: "b")
   
  line("a", "b", stroke: (thickness: 0.5pt))
}),

p3: cetz.canvas(length: 1cm, {
  import cetz.draw: *
   
  let a = 0.5
   
  circle((0, 0), radius: .05, fill: black, name: "a")
  circle((a, 0), radius: .05, fill: black, name: "b")
  circle((a * 2, 0), radius: .05, fill: black, name: "c")
   
  line("a", "b", stroke: (thickness: 0.5pt))
  line("b", "c", stroke: (thickness: 0.5pt))
}),


  line: cetz.canvas(length: 1cm, {
  import cetz.draw: *
   
  let a = 0.5
   
  circle((0, 0), radius: .05, fill: black, name: "a")
  circle((a, 0), radius: .05, fill: black, name: "b")
  circle((a * 2, 0), radius: .05, fill: black, name: "c")
  circle((a * 3, 0), radius: .05, fill: black, name: "d")
   
  line("a", "b", stroke: (thickness: 0.5pt))
  line("b", "c", stroke: (thickness: 0.5pt))
  line("c", "d", stroke: (dash: "dotted"))
}), rect: cetz.canvas(length: 1cm, {
  import cetz.draw: *
   
  let a = 0.5
   
  circle((0, a), radius: .05, fill: black, name: "a")
  circle((a, a), radius: .05, fill: black, name: "b")
  circle((a, 0), radius: .05, fill: black, name: "c")
  circle((0, 0), radius: .05, fill: black, name: "d")
   
  line("a", "b", stroke: (thickness: 0.5pt))
  line("b", "c", stroke: (thickness: 0.5pt))
  line("c", "d", stroke: (thickness: 0.5pt))
  line("d", "a", stroke: (thickness: 0.5pt))
}), rectd1: cetz.canvas(length: 1cm, {
  import cetz.draw: *
   
  let a = 0.5
   
  circle((0, a), radius: .05, fill: black, name: "a")
  circle((a, a), radius: .05, fill: black, name: "b")
  circle((a, 0), radius: .05, fill: black, name: "c")
  circle((0, 0), radius: .05, fill: black, name: "d")
   
  line("b", "c", stroke: (thickness: 0.5pt))
  line("c", "d", stroke: (thickness: 0.5pt))
  line("d", "a", stroke: (thickness: 0.5pt))
}), triangle: cetz.canvas(length: 1cm, {
  import cetz.draw: *
   
  let a = 0.5
   
  circle((a * .5, a), radius: .05, fill: black, name: "a")
  circle((a, 0), radius: .05, fill: black, name: "c")
  circle((0, 0), radius: .05, fill: black, name: "d")
   
  line("a", "c", stroke: (thickness: 0.5pt))
  line("a", "d", stroke: (thickness: 0.5pt))
  line("c", "d", stroke: (thickness: 0.5pt))
}), 

bitriangle: cetz.canvas(length: 1cm, {
  import cetz.draw: *
   
  let a = 0.5
   
  circle((0, a), radius: .05, fill: black, name: "a")
  circle((a, a), radius: .05, fill: black, name: "b")
  circle((a, 0), radius: .05, fill: black, name: "c")
  circle((0, 0), radius: .05, fill: black, name: "d")
   
  line("a", "b", stroke: (thickness: 0.5pt))
  line("b", "c", stroke: (thickness: 0.5pt))
  line("c", "d", stroke: (thickness: 0.5pt))
  line("d", "a", stroke: (thickness: 0.5pt))
  // divide to two triangle
  line("a", "c", stroke: (thickness: 0.5pt))
}), 

polygon: cetz.canvas(length: 1cm, {
  import cetz.draw: *
   
  let a = 0.5

  circle((0,0), radius: a * 0.8, stroke: (thickness: 0.5pt), name: "polygon")

  let i = 0
  while i < 4 {
    circle((name: "polygon", anchor: i * 60deg), radius: .05, fill: black)
    i = i + 1
  }

  content((0, a * -0.45), box(fill: white, outset: 2pt, $dots$))
}), 
tree: cetz.canvas(length: 1cm, {
  import cetz.draw: *
   
  let a = 0.5
   
  circle((a * .5, a), radius: .05, fill: black, name: "a")
  circle((0, a * .5), radius: .05, fill: black, name: "b")
  circle((a, a * .5), radius: .05, fill: black, name: "c")

  circle((a * -.3, 0), radius: .05, fill: black, name: "b1")
  circle((a * .3, 0), radius: .05, fill: black, name: "b2")

  content((a, 0), $dots.c$);
  
  line("a", "b", stroke: (thickness: 0.5pt))
  line("a", "c", stroke: (thickness: 0.5pt))
  line("b", "b1", stroke: (thickness: 0.5pt))
  line("b", "b2", stroke: (thickness: 0.5pt))
}), 

)

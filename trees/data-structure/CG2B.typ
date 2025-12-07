
#import "../_lib/shared.typ": *
#import "../_lib/chroma.typ": *
#import "../_lib/kodama.typ": html-math-font-size

#set page(width: auto, height: auto, margin: (x: 0em, y: 0.1em), fill: rgb(0, 0, 0, 0)); 
#set text(size: html-math-font-size, top-edge: "bounds", bottom-edge: "bounds");

$ pi(#chroma.rect) 
  &eqq pi(chroma.rectd1) quad-quad pi(chroma.triangle) \
  &eqq pi(chroma.rectd1) quad-quad q(q-1)(q-2) \
  &eqq q(q-1)^3 - q(q-1)(q-2) \
  &eqq q(q-1)^2 em(\() q-2+(q-1)^(-1) \)
$

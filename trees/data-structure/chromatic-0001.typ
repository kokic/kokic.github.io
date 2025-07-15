
#import "../typst/shared.typ": *
#import "../typst/chroma.typ": *

#set page(width: auto, height: auto, margin: (x: 0em, y: 0.1em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 15.427pt, top-edge: "bounds", bottom-edge: "bounds");

$ pi(#chroma.rect) 
  &eqq pi(chroma.rectd1) quad-quad pi(chroma.triangle) \
  &eqq pi(chroma.rectd1) quad-quad q(q-1)(q-2) \
  &eqq q(q-1)^3 - q(q-1)(q-2) \
  &eqq q(q-1)^2 em(\() q-2+(q-1)^(-1) \)
$

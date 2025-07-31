
#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 13.2pt, top-edge: "bounds", bottom-edge: "bounds");

#import "../typst/shared.typ": *

$ 1/(n-1)! dot (n+u-1)!/(u!) 
&eqq underbracket((n+u-1) spaces(dots.c) n, u >= 1) dot 1/(n-1)! dot (n-1)!/(u!) \
&eqq ((n+u-1) spaces(dots.c) n)/(u!) $ 

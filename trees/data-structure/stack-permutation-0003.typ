
#set page(width: auto, height: auto, margin: (x: 0em, y: 0.1em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 15.427pt, top-edge: "bounds", bottom-edge: "bounds");

#import "../typst/shared.typ": *
#import "../typst/binary-tree.typ": *

#show raw: set text(font: ("Jetbrains Mono"))

#let enc = `encode`
#let splus = spaces(`++`)

$ 
#enc\(#tree4(0.4)) 
&eqq #`"1"` splus #enc\(#tree2(0.4)) splus #enc\(circle) \
&eqq #`"1"` splus #`"1"` splus #`"0"` splus 2 dot #enc \(circle) \ \ \
&eqq #`"110"` splus 2 dot #`"100"` \ \ \
&eqq #`"110100100"`
$

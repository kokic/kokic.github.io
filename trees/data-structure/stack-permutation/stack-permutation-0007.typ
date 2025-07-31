
#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 13.2pt, top-edge: "bounds", bottom-edge: "bounds");

#import "../../typst/shared.typ": *

#show raw: set text(font: ("Jetbrains Mono"))

#let splus = spaces(`++`)

$
  h(M)
    &eqq #`"110101...00001"` \
    &eqq #`"11"` splus (n-3) dot #`"01"` \
    & #h(5em) splus (n-2) dot #`"0"` splus #`"01"` \
$

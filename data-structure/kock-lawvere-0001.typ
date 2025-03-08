
#show: html.elem.with("html")
#let elem-frame(content, attrs: (:), tag: "div") = html.elem(tag, html.frame(content), attrs: attrs)
#show math.equation.where(block: true): elem-frame.with(tag: "span", attrs: ("style": "display: flex; justify-content: center; overflow: auto;"))
#show math.equation.where(block: false): elem-frame.with(tag: "span", attrs: ("style": "display: inline;"))

// #set page(width: auto, height: auto, margin: (x: 0em, y: 0.1em), fill: rgb(0, 0, 0, 0)); 

#set text(size: 15.427pt, top-edge: "bounds", bottom-edge: "bounds");

#import "../typst/shared.typ": *

$
f(a+b epsilon)
&eqq sum_(k in NN)c_k (a+b epsilon)^k \
&eqq sum_(k in NN)sum_(j in NN)c_k binom(k, j) a^(k-j)(b epsilon)^j \
&eqq underbracket(sum_(k in NN)c_k a^k, j space = space 0) #h(1em) + #h(1em) underbracket(sum_(k gt.slant 1)c_k k a^(k-1)b epsilon, j space = space 1) #h(1em) + #h(1em) underbracket(sum_ballot space dots.c space = 0, j space gt.slant space 2) \
&eqq f(a) + f'(a)b epsilon
$

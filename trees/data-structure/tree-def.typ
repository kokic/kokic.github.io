
#import "../_lib/kodama.typ": html-font-size

#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: html-font-size, top-edge: "bounds", bottom-edge: "bounds");

#align(center)[
```lean
inductive Tree α
  | leaf : Tree α
  | node : α → Tree α → Tree α → Tree α
```
]

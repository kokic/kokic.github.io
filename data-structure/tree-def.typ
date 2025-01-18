
#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 15.427pt, top-edge: "bounds", bottom-edge: "bounds");

#align(center)[
```lean
inductive Tree α
  | leaf : Tree α
  | node : α → Tree α → Tree α → Tree α
```
]

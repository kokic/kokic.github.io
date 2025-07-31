
#set page(width: auto, height: auto, margin: (x: 0em, y: 0em), fill: rgb(0, 0, 0, 0)); 
#set text(size: 13.2pt, top-edge: "bounds", bottom-edge: "bounds");

#show raw: set text(font: ("Jetbrains Mono", "FandolSong"))

```lean
def encode : Tree → String
  | .node l r => "1" ++ encode l ++ encode r
  | _ => "0"
```

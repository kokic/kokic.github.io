
#let elem-frame(content, attrs: (:), tag: "div") = html.elem(tag, html.frame(content), attrs: attrs)

#let light-pink(content) = {
  let adhoc-color = rgb(237, 0, 140)
  show text: html.elem.with("span", attrs: ("style": "color: " + adhoc-color.to-hex() + ";"))
  text(fill: adhoc-color)[#content]
}

#let clink(s) = link(s)[#text(font: "Jetbrains Mono", size: 0.9em, s)]

#let hint(content, fill: gray) = {
  show text: html.elem.with("span", attrs: ("style": "color: " + fill.to-hex() + ";"))
  text(fill: fill)[#content]
}

#let kai(content) = {
  show text: html.elem.with("span", attrs: ("class": "kaiti"))
  text(font: ("FandolKai"), content)
}

#show emph: it => {
  show text: html.elem.with("em")
  text(style: "italic", font: ("New Computer Modern"), it.body)
}

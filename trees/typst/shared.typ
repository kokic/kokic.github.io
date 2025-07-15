
#let bf(x) = $bold(upright(#x))$
#let mathcal(content) = text(font: "KaTeX_Caligraphic", content)
#let stix(content) = text(font: "STIX Two Math", content)
#let lato(content) = text(font: "Lato Math", content)
#let latobb(content) = text(font: "Lato Bbb", content)

#let varnothing = $lato(emptyset)$

#let isqrt(x) = $inline(sqrt(#x))$

#let note(content, fill: olive) = text(size: 0.9em, fill: fill)[$arrow.hook$ #content]
#let hint(content, fill: gray) = text(fill: fill)[#content]
#let hide(content, fill: gray) = hint(fill: oklch(0%, 0, 0deg, 0%), content)

#let em(content) = math.lr(size: 1em, content)
#let bigg(content) = math.lr(size: 2em, content)

#let spaces(content) = $space #content space$
#let eqq = $quad = quad$

#let cong = math.class("relation", $tilde.equiv$)

#let off(position, offsetX, offsetY) = {
  (position.at(0) + offsetX, position.at(1) + offsetY)
}


// $stix(AA ZZ SS CC""PP^1)$
// $lato(AA ZZ SS CC""PP^1)$
// $latobb(AA ZZ SS CC""PP^1 A Z S C""P )$


#let zh_numberings = ("一", "二", "三", "四", "五", "六", "七" , "八", "九", "十")

#let appendices(body) = {
  counter(heading).update(0)
  counter("appendices").update(1)

  set heading(
    numbering: (..nums) => {
      let vals = nums.pos()
      let value = zh_numberings.at(vals.at(0) - 1)
      if vals.len() == 1 {
        return "附录" + value + ": "
      }
      else {
        // value + "." + 
        return nums.pos().slice(1).map(str).join(".")
      }
    }
  );
  [#body]
}



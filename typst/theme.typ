#let theme-light = (
  background: rgb("ffffff"),
  text: rgb("000000"),
  link: rgb("1a73e8"),
  bullet: rgb("000000"),
)

#let theme-dark = (
  background: rgb("1a1a1a"),
  text: rgb("f5f5f5"),
  link: rgb("8ab4f8"),
  bullet: rgb("f5f5f5"),
)

#let get-theme(name) = if name == "dark" { theme-dark } else { theme-light }

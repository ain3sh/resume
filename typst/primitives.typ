#import "theme.typ": get-theme
#import "@preview/lucide:0.1.0": *

#let setup-styles(theme-name: "dark", render) = context {
  let t = get-theme(theme-name)

  set page(
    paper: "us-letter",
    margin: (top: 0.35in, bottom: 0.3in, left: 0.55in, right: 0.55in),
    fill: t.background,
  )

  set text(
    font: ("Inter", "Roboto", "DejaVu Sans"),
    size: 9.2pt,
    tracking: 0.012em,
    hyphenate: false,
    fill: t.text,
  )

  set par(
    leading: 0.62em,
    spacing: 0.8em,
    linebreaks: "optimized",
  )
  set block(spacing: 0.8em)

  show link: set text(fill: t.link)

  set list(
    marker: box(
      width: 5.5pt,
      height: 5.5pt,
      baseline: 1.2pt,
      circle(radius: 2.2pt, fill: t.bullet)
    ),
    body-indent: 0.6em,
    spacing: 0.8em,
  )

  render(t)
}

#let section-title(icon_name, title, theme) = {
  block(above: 1.2em, below: 0.8em)[
    #text(13pt, weight: "bold")[
      #lucide-icon(icon_name, size: 12pt) #h(0.4em) #title
    ]
  ]
}

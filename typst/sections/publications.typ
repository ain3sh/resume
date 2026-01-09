#import "../primitives.typ": section-title

#let render-publications(publications, theme) = {
  section-title("book", "Publications", theme)

  list(
    ..publications.map(pub => [
      #link(pub.url)[#emph[#pub.title]], published at #pub.venue, #pub.year
    ]),
  )
}

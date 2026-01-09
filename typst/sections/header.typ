#let render-header(personal, theme) = {
  let link-labels = (
    site: "Site",
    github: "GitHub",
    linkedin: "LinkedIn",
    other: "Link",
  )

  let email = link("mailto:" + personal.email)[#personal.email]
  let phone = link("tel:" + personal.phone)[#personal.phone]

  let location = personal.at("location", default: none)
  let clearance_value = personal.at("clearance", default: none)

  let links = personal.links.map(l => {
    let label = if l.at("label", default: none) != none and l.at("label") != "" { l.at("label") } else {
      link-labels.at(l.type, default: "Link")
    }
    link(l.url)[#label]
  })

  let link-line = if links.len() > 0 {
    links.join([ | ])
  } else { [] }

  align(center)[
    #text(24pt, weight: "bold", tracking: 0.03em)[#personal.name]
    #v(0.4em)

    #text(9pt)[
      #email | #phone
      #if location != none and location != "" { [ | #location] }
      #if clearance_value != none and clearance_value != "" { [ | #clearance_value] }
      #if link-line != [] { [ | ] }#link-line
    ]
  ]
}

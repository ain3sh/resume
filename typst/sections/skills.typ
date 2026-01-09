#import "../primitives.typ": section-title

#let render-skills(skills, theme) = {
  section-title("wrench", "Skills", theme)

  list(
    ..skills.map(group => [
      *#group.category:* #group.primary.join([, ])
      #if group.at("secondary", default: none) != none { [; Familiar: #group.at("secondary").join([, ])] }
    ]),
  )
}

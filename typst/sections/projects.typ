#import "../primitives.typ": section-title

#let render-projects(projects, theme) = {
  section-title("code", "Projects", theme)

  for project in projects {
    block(spacing: 0.4em)[
      *#project.name* #if project.isActive { [(active)] } | #project.role
    ]

    list(
      ..project.description.map(d => [#d]),
      ..project.achievements.map(a => {
        let prefix = if a.type == "award" { [*Award:* ] }
          else if a.type == "recognition" { [*Recognition:* ] }
          else { [] }
        [#prefix#a.description]
      }),
      ..(if project.at("technologies", default: none) != none {
        ( [*Technologies:* #project.at("technologies").join([, ])], )
      } else { () }),
    )
  }
}

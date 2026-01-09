#import "../primitives.typ": section-title

#let render-experience(experience, theme) = {
  section-title("briefcase", "Experience", theme)

  for exp in experience {
    block(spacing: 0.4em)[*#exp.company* | #emph[#exp.role]]
    if exp.at("department", default: none) != none {
      block(spacing: 0.4em)[#emph[#exp.at("department")]]
    }
    block(spacing: 0.4em)[#exp.duration | #exp.location]

    list(
      ..exp.achievements.map(a => {
        let metrics = a.at("metrics", default: none)
        [
          *#a.action* #a.description
          #if metrics != none and metrics != "" { [ #emph[*#metrics*] ] }
        ]
      }),
    )

  }
}

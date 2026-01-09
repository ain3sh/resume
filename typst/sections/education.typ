#import "../primitives.typ": section-title

#let render-education(education, theme) = {
  section-title("graduation-cap", "Education", theme)

  for edu in education {
    block[*#edu.institution*]
    for degree in edu.degrees {
      block[#emph[#degree]]
    }

    block[
      #edu.graduation
      #if edu.at("gpa", default: none) != none { [ | GPA: #edu.at("gpa")] }
    ]

    if edu.honors.len() > 0 {
      block[#edu.honors.join([; ])]
    }

    if edu.coursework.len() > 0 {
      list(
        ..edu.coursework.map(c => [*#c.category:* #c.courses.join([; ])]),
      )
    }
  }
}

#import "primitives.typ": setup-styles

#import "sections/header.typ": render-header
#import "sections/projects.typ": render-projects
#import "sections/skills.typ": render-skills
#import "sections/publications.typ": render-publications
#import "sections/education.typ": render-education
#import "sections/experience.typ": render-experience

#let render-resume(resume, theme-name: "dark") = {
  setup-styles(theme-name: theme-name, theme => {
    set document(
      title: resume.personalInfo.name + " Resume",
      author: resume.personalInfo.name,
    )

    render-header(resume.personalInfo, theme)
    v(1.2em)

    grid(
      columns: (0.46fr, 0.54fr),
      column-gutter: 36pt,
      align: top + left,

      [
        #render-projects(resume.projects, theme)
        #v(0.28em)
        #render-skills(resume.skills, theme)
        #v(0.28em)
        #render-publications(resume.publications, theme)
      ],

      [
        #render-experience(resume.experience, theme)
        #v(0.28em)
        #render-education(resume.education, theme)
      ],
    )
  })
}

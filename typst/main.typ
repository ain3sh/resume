#import "generated/resume_data.typ": resume
#import "resume.typ": render-resume

#let theme = sys.inputs.at("theme", default: "dark")

#render-resume(resume, theme-name: theme)

1. Fix line-overlap root cause by adjusting Typst text metrics: set `text(bottom-edge: "descender", top-edge: "ascender")` and rebalance `par(leading)` so lines never collide.
2. Re-tune density to keep a clean single-page US Letter output (minor tweaks to font size, margins, section spacing if needed).
3. Rebuild local artifacts: `pdfs/ain3sh-typst-{light,dark}-resume-local.pdf` and PNG previews, then visually compare against the React PNG.
4. Run validators: `npm test` and `npm run build`.
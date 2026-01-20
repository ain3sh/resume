### Plan to Align Typst Styling with the "Creamy, Clean" React Aesthetic

The goal is to move away from the current "cramped" Typst look and match the airy, high-contrast, yet soft elegance of the React render.

#### 1. Typography & Spacing (`typst/primitives.typ`)
*   **Increase Base Size**: Bump base text from `8.9pt` to `9.2pt` to match the "sm" (14px) look of the React version.
*   **Loosen Leading**: Increase `par(leading)` from `0.44em` to `0.65em`. This provides the "breathable" line spacing seen in browsers.
*   **Add Tracking**: Apply `text(tracking: 0.012em)` globally to give characters a more premium, professional feel.
*   **Refine Bullets**: Replace the simple `circle` with a custom `box`-based marker that ensures perfect vertical centering and a fixed `5pt` size, matching the React `6px` circles.
*   **Remove Link Underlines**: Set `show link: set text(underline: false)` for a cleaner look, relying on color for link affordance.

#### 2. Layout & Proportions (`typst/resume.typ`)
*   **Open the Grid**: Increase `column-gutter` from `12pt` to `36pt` (matching React's `gap-14`).
*   **Increase Margins**: Adjust page margins to `(top: 0.35in, bottom: 0.3in, left: 0.55in, right: 0.55in)` to reduce line length and improve the "centered" aesthetic.

#### 3. Section Styling (`typst/primitives.typ` & `sections/*.typ`)
*   **Scale Headers**:
    *   Name: Increase from `19.5pt` to `24pt`.
    *   Section Titles: Increase from `11.5pt` to `13pt`.
    *   Icons: Increase icon size from `9.6pt` to `12pt` to match React's prominent iconography.
*   **Tighten Internal Spacing**: Use slightly more `v(em)` spacing between work/project entries to clearly delineate blocks of content.

#### 4. Theming Fine-tuning (`typst/theme.typ`)
*   Validate colors against the React `themeStyles.tsx` to ensure exact parity (currently they appear to match at `#1a1a1a` for dark background).

### Key Code Snippet (Example change for `primitives.typ`)
```typst
  set text(
    font: ("Inter", "Segoe UI", "Roboto"), // Improved stack
    size: 9.2pt,
    tracking: 0.012em,
    fill: t.text,
  )

  set par(leading: 0.65em, spacing: 1.2em)

  set list(
    marker: box(
      width: 5pt, 
      height: 5pt, 
      baseline: 1.5pt, // Critical for vertical centering
      circle(radius: 2.5pt, fill: t.bullet)
    ),
    body-indent: 0.6em
  )
```

**Outcome**: A Typst render that feels like a high-end web app—clean, high-information density without feeling cluttered, and "creamy" transitions between sections.
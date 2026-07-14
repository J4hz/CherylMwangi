# Assets

These are the real images. To swap any of them later, keep the **exact same
filename** — no code changes are needed.

| File | What it is | Used on |
| --- | --- | --- |
| `maureen-portrait.jpg` | Candidate portrait, shown gold-framed | Home hero |
| `knc-logo.png` | Kenya National Congress logo (transparent PNG) | Header + footer |
| `photo-1.jpg` | Landscape portrait, 4:3 (960×720) | Home "Who is Maureen" |
| `photo-2.jpg` … `photo-5.jpg` | Studio portraits, 2:3 (800×1200) | Home photo strip |

The photo strip is a row of four 2:3 portraits, so replacements for `photo-2` …
`photo-5` should keep that shape to avoid cropping. Adding more photos means
adding a matching import in `src/pages/Home.jsx`.

Still placeholders, in the project root:

- `public/manifesto.pdf` — the real manifesto PDF (linked from the Plan page).
- `public/favicon.png` — browser-tab icon; a square crop of the KNC key mark
  would work.

`public/og-image.jpg` (1200×630 social share image) is done.

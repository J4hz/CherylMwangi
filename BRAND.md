# Brand identity — Cheryl N. Mwangi

The working reference for anyone designing or writing for this brand: the website, a slide deck, a
training handout, a social post. Every value here is the one actually in use in the code, so this
file and `tailwind.config.js` should never disagree. If you change one, change the other.

---

## 1. The person

| | |
| --- | --- |
| **Name** | Cheryl N. Mwangi |
| **Title** | Trauma-Informed Care Practitioner, Trainer & Organizational Consultant |
| **Based** | Nairobi, Kenya |
| **Email** | traumatherapistke@gmail.com |
| **Phone** | +254 726 545 617 |
| **Website** | www.cherylmwangi.com |
| **LinkedIn** | linkedin.com/in/cheryl-mwangi-331048272 |

The title is taken verbatim from her business card and is the canonical wording. Write it in full on
first use. "Counselling psychologist" is accurate and is how the press refers to her, but it
describes her training rather than her positioning — do not use it as her title.

Name form: **Cheryl N. Mwangi** in formal contexts (titles, copyright, credentials). **Cheryl
Mwangi** in body copy and speech. Never "Ms Mwangi" or "Mrs Mwangi" in her own materials.

---

## 2. The mark

An interlocking **CMC** monogram, drawn in a high-contrast serif. It is the only logo; there is no
secondary lockup and no wordmark version.

**Files** (in `public/`)

| File | Size | Use |
| --- | --- | --- |
| `cmc-logo.png` | 255×262, transparent | The mark on any light ground. Site navbar. |
| `cmc-logo-square.png` | 286×286, transparent | Square contexts: avatars, profile images. |
| `favicon-32.png` · `favicon-192.png` | cream ground | Browser tabs. |
| `apple-touch-icon.png` | 180×180, cream ground | iOS home screen. |

**Rules**

- Clear space on all sides: at least the height of the letter C in the mark.
- Minimum size: 24px tall. Below that the interlocking strokes fill in and it reads as a blob.
- Never stretch, rotate, outline, add effects to, or recolour the mark.
- Never place it on a busy photograph. Light, plain grounds only.
- On dark grounds, use a cream or white plate behind it rather than reversing the artwork out.
  That is why the favicons sit on cream: the mark is dark and would vanish against a dark tab.

**Known limitations.** The mark exists only as a **255px raster** extracted from the business card
PDF. It is sufficient for web and small print, but it will soften if enlarged, and it cannot be
recoloured cleanly or cut into vinyl, embroidery, or large-format print. The original vector from
her designer (`.ai`, `.svg`, or `.eps`) should be obtained before any print or signage work.

The artwork's own ink is **`#3C4F24`**, a dark olive, which is not the same green as the palette
below. This is a known and accepted variance, not a mistake to fix on the fly.

---

## 3. Colour

Green and white. **There is no second accent colour**, and adding one is the fastest way to make
this brand look like something else. White is the ground; green does all the work; the one saturated
element on a page is meant to read as deliberate.

### Core

| Token | Hex | Role |
| --- | --- | --- |
| `white` | `#FFFFFF` | The ground, everywhere |
| `mist` | `#F1F6F1` | Alternating section ground. Not a second background colour, a tint of the first |
| `edge` | `#DCE6DC` | The only hairline and divider value |
| `ink` | `#14201A` | Headlines and primary text |
| `ink-soft` | `#55655B` | Body copy |
| `ink-faint` | `#8A968E` | Captions, metadata, small print |

### Green ramp

Nine steps. The count is not arbitrary: the rooms band steps through six of them and still needs
room above and below for type and hairlines.

| Token | Hex | Notes |
| --- | --- | --- |
| `green-950` | `#07210F` | Footer, deepest band |
| `green-900` | `#0C2E1E` | Dark full-width bands |
| `green-800` | `#124027` | Hover state on dark |
| `green-700` | `#185332` | **Primary.** Buttons, links, numerals |
| `green-600` | `#21683F` | Eyebrows, secondary marks |
| `green-500` | `#2F8551` | Rules, accents, focus ring. Passes 4.5:1 on white |
| `green-400` | `#4CA36C` | Accents on dark grounds only |
| `green-100` | `#DCEBE0` | Selection highlight |
| `green-50` | `#F1F7F1` | Chip and hover fills |

### Contrast rules

- `green-700` or darker for green **text** on white. `green-400` fails on white — dark grounds only.
- Every tint from `green-500` down clears 4.5:1 with white text. The rooms band relies on this, so
  its gradient is a real accessible ramp rather than a decorative fade.
- Focus ring is `green-500`, 2px, with a 2px offset, on every interactive element sitewide.

---

## 4. Typography

Two faces. Both from Google Fonts, loaded in `src/index.css`.

**Fraunces** — display. Every headline, pull quote, and stat numeral. Set with its `SOFT` and `WONK`
axes engaged on `h1`–`h3`, which is the whole reason for choosing it: the headlines get a slightly
hand-cut quality a default display serif would not give. Tracking runs tight (`-0.045em`) at large
sizes.

**Karla** — everything else. Body copy, navigation, buttons, labels, captions. Its plainness is what
keeps the Fraunces headlines from tipping into decoration.

Never use Fraunces for body copy or Karla for headlines. The contrast between them is the type
system; collapsing it collapses the brand.

### Scale and treatments

| Use | Treatment |
| --- | --- |
| Page headline | Fraunces, `clamp(2.75rem, 7vw, 5rem)`, weight 600, leading 0.98, tracking tightest |
| Section heading | Fraunces, `clamp(2rem, 4.6vw, 3.25rem)`, weight 600, leading 1.04 |
| Card heading | Fraunces, 1.25–1.5rem, weight 600 |
| Pull quote | Fraunces italic, weight 400, `green-700` |
| Body | Karla, 1rem–1.125rem, leading relaxed, `ink-soft` |
| Long-form reading | Karla, 1.125rem, leading 1.78, capped at `max-w-prose` (36rem) |
| Eyebrow | Karla, 0.6875rem, bold, uppercase, letter-spacing 0.2em |
| Label / chip | Karla, 0.75rem, bold, uppercase, letter-spacing 0.12em |
| Button | Karla, 0.875rem, bold, uppercase, letter-spacing 0.14em |

**Sentence case for headlines**, not title case. Headlines end with a full stop — "Six areas, one
practice." — which is deliberate: it makes them read as statements rather than labels.

---

## 5. The signature device

**The rooms band.** Six rooms Cheryl has actually worked in — maternity ward, surgical recovery,
spinal injury unit, residential care, recovery program, schools and community — as adjoining panels
stepping from `green-500` down to `green-950`.

It is the single most recognisable element of the brand and it does the job a portrait would do
elsewhere: one glance and you have the whole shape of the practice. Two consequences follow:

- Every entry in it must be a setting she has genuinely worked in. It is a record, not decoration.
- Nothing else on a page should compete with it for visual weight.

---

## 6. Layout and space

| Token | Value | Use |
| --- | --- | --- |
| `max-w-shell` | 82rem | Outer container for every page |
| `max-w-prose` | 36rem | Any sustained reading passage |
| Section padding | `py-12 sm:py-16` | Standard vertical rhythm |
| Gutters | `px-5 sm:px-8` | Consistent at every breakpoint |

Corner radius: `rounded-full` for buttons and chips, `rounded-2xl` for cards and panels. Nothing in
between, and no sharp-cornered boxes.

Cards carry a shadow (`shadow-card`, lifting to `shadow-card-lift` on hover) or a hairline, never
both.

---

## 7. Motion

Restrained and orchestrated, never ambient. One load sequence per page, scroll reveals for content
below the fold, and the rooms band dealing itself out left to right. Easing is
`cubic-bezier(0.22, 1, 0.36, 1)` — a settle, not a bounce.

**`prefers-reduced-motion` is honoured globally.** Anything new must degrade to a visible static
state, never to hidden content.

---

## 8. Voice

The work is serious and unsentimental, and the writing should be too. She sits with people on the
worst days of their lives; the tone that suits that is plain, specific, and calm.

**Do**

- Use plain verbs and concrete nouns. "She sat with grieving mothers on maternity wards" beats
  "she supports clients through bereavement journeys."
- Be specific. Name the ward, the framework, the year.
- Write in sentence case, active voice, and the third person on the site.
- Treat empty states as invitations. "Cheryl's first post is on its way," not an apology.
- Say what something does, not how good it is.

**Don't**

- Reach for therapy-marketing language: "journey", "holistic wellness", "safe space", "unlock",
  "empower" as a verb applied to clients.
- Soften the subject matter with euphemism, or dramatise it for effect.
- Use exclamation marks, or em dashes — commas, colons, and full stops carry the same load.
- Claim outcomes for clients, or imply a guaranteed result from therapy.

**Confidentiality outranks marketing.** No client detail, quote, image, or identifying story appears
anywhere without explicit written, un-pressured consent. Colleague and partner quotes are the safer
default. When in doubt, leave it out.

---

## 9. Applying it elsewhere

For a deck, handout, or social post: white ground, Fraunces headline in `ink`, Karla body in
`ink-soft`, one green element, the CMC mark at the size the clear-space rule allows. If a layout
needs a second accent colour to work, the layout is the problem.

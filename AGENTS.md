# AGENTS.md

Notes for anyone — human or agent — working on this site.

## What this is

Shivam Mishra's portfolio. A static Next.js site exported to GitHub Pages,
structured as four acts:

| Act | Route | Contents |
| --- | --- | --- |
| I — The Turtle | `/` | Scroll-drawn enso and padma, plus who he is |
| II — The Road | `/experience` | Roles, merged upstream contributions, education |
| III — The Work | `/projects` | Public projects, gists |
| IV — Field Notes | `/writing` | Posts, in MDX |

## The one rule that governs everything

**The built site ships zero JavaScript.** Not "a little", not "only the
framework". Zero.

`scripts/strip-js.mjs` runs on `postbuild`: it removes every `<script>` tag,
deletes every JS chunk and RSC payload, then verifies nothing references a
script. **If a script survives, the build fails.** That is deliberate — the
guarantee is enforced, not remembered.

Practical consequences:

- No `"use client"`. Every component is server-rendered.
- No `useState`, `useEffect`, refs, or event handlers.
- Interaction is CSS: `:hover`, `:focus-within`, `:has()`, checkbox toggles,
  `<details>`, and scroll-driven animations.
- Anything genuinely impossible without JS is either cut or redesigned. Do not
  quietly add a script to solve a problem.

Before claiming something needs JavaScript, check. Three things were wrongly
declared impossible during this build and later done in pure CSS: live
counters, the reading percentage, and cursor-following wind.

## Commands

```bash
pnpm dev            # dev server
pnpm build          # static export to dist/, then the zero-JS strip
pnpm lint
npx serve dist -l 4180   # serve the real stripped build
```

Use **pnpm**. Never run `pnpm build` while `pnpm dev` is running: they share
`.next/` and Turbopack's cache corrupts, producing confusing failures. Stop dev
first.

## Layout of the code

```
app/
  layout.tsx            root shell, monogram defs, footer, enhance.css link
  page.tsx              Act I
  experience|projects|writing/
    layout.tsx          declares which act this section is
    page.tsx
  globals.css           nearly all styling, in one file
components/
  acts.ts               the four acts: the single source of order, and keys
  act-chrome.tsx        boot card + nav + outro + nudge for an act
  act-title.tsx         an act's kicker and page title, from acts.ts
  boot-card.tsx         the act card on a cold load, cleared by CSS
  act-nav.tsx           the SKM mark and its controls
  turtle-hero.tsx       the enso and the padma
  name-mark.tsx         the name as brush outlines (see below)
  lotus.tsx             padma geometry, shared by hero and reading mark
  skm-path.ts           the traced dragon path, single source
content/*.json          all copy that is data rather than prose
public/enhance.css      CSS too new for the bundler (see below)
scripts/strip-js.mjs    the zero-JS gate
```

Acts are declared in per-section `layout.tsx` files because a layout cannot
know the route. That is what keeps the act chrome server-rendered.

## CSS conventions

- **One stylesheet.** `app/globals.css` holds almost everything. Append new
  sections with a comment header explaining *why*, not what.
- **φ everywhere.** The golden ratio drives the lotus radii, the hero grid, and
  spacing. Fibonacci numbers (5, 8, 13, 21, 34, 55) for padding and gaps.
- **Scroll-driven animation is the default** for anything tied to reading
  position: `animation-timeline: view()` or `scroll(root)`.
- Guard motion with `@media (prefers-reduced-motion: no-preference)` and, where
  the feature is new, `@supports`.

### `public/enhance.css`

Lightning CSS (Next's minifier) cannot parse some newer syntax and hard-fails
the build. Two enhancements therefore live in a plain stylesheet linked from
`<head>`, bypassing the bundler:

1. anchor positioning — one highlight sliding between the act numerals
2. `interpolate-size` — the nav panel opens to content width

All optional. Unsupported browsers get the previous behaviour.

### The name mark

The hero name is not type. `components/name-mark.tsx` holds "Shivam Mishra"
as two SVG paths, generated once, offline, from a brush font (Sthayos, 1001
Fonts personal-use licence, which permits conversion to SVG with unchanged
glyphs). No web font ships. The real text sits in the `<h1>` as `sr-only`.
To regenerate: render the string with opentype.js at 400 units/em, run svgo
at precision 0, keep one path per line. Do not commit the font.

### Arriving on a page

Every act opens under a dark card (`BootCard`): lotus, act number, title,
blurb. It is painted with the first frame and clears itself with a CSS
animation over 2.1s, so it is simply part of the page and has no seam. The
scrollbar thumb goes transparent and the track takes the card's ink for as
long as the card is opaque, timed to the card's fade (60%), not its end.

Cross-document view transitions (`@view-transition`, shared-element titles,
an ink-band and a paper-edge page turn) were all built and removed. They
worked on desktop; on a phone the hand-off from snapshot to live page never
read as clean, and no CSS on our side can control that frame. Do not bring
them back without a phone in hand. Links are plain `<a>`, never `next/link`;
with no JavaScript shipped there is no client router for it to drive.

### The corner nav

One level of disclosure. Hovering the mark (or tapping it, via a checkbox)
opens the four acts inline as numerals; the current act carries its title, so
the row never changes width on hover. A load-time peek runs on Act I only and
any hover cancels it. Closing is delayed 160ms. On a phone the pill never
changes size: the acts drop in beneath it as their own row, animating only
opacity and a few pixels of travel (animating the box collapsed one axis and
then the other). Do not nest a second disclosure (a `<details>`, a dropdown)
inside the panel; the previous version did and could not be made to feel
solid without script.

## Editorial

The pages are meant to be short. Data lives in `content/*.json`; the long
autobiography lives in one post (`/writing/how-it-started`), not on the front
page. No stat rows, no meta-commentary about what is missing. Mono is for
kickers, numerals and code; metadata lines are set in the text face.

## Gotchas, each learned by getting it wrong

- **`animation-duration: auto` is mandatory** on every scroll-driven rule. The
  `animation` shorthand resets duration to `0s`, which collapses keyframes to
  the end of the range on engines stricter than Chrome.
- **Use `entry`-based ranges, not `cover`**, for anything that might sit near
  the end of a page. A `cover` range needs the element to travel up the
  viewport; the last element never can, so it freezes part-way.
- **Use pixel offsets, not percentages, on ranges for tall blocks.** A
  percentage of `entry` scales with the element's own height: on a phone a
  three-screen list of roles sat at 15% of its entry at the top of the page,
  a third visible, and popped when the view transition handed over to the
  live page. `entry 8px entry 144px` is the same short fade at any height.
  Percentages are fine for one-line headings.
- **A closed `<details>` does not render its children.** Hover can never reveal
  them and its links leave the accessibility tree. For hover-or-tap disclosure
  use a checkbox + label and clip the panel instead.
- **`overflow: hidden` clips popovers.** A collapsing panel will eat a dropdown
  inside it; make the dropdown `position: fixed` so it escapes.
- **A transparent scrollbar track shows the page behind it.** Any full-bleed
  dark overlay must paint the track too, or a pale strip appears beside it.
  (The boot card that taught this is gone; the lesson stands.)
- **`app/globals.css` is LF.** It shipped with mixed line endings once, which
  made exact-match edits fail silently in one region. Keep it normalised.
- **`scroll-state` must be asked of a real scroll container** — `html` here. A
  `position: fixed` element is neither scrollable nor stuck and never matches.
- **Headless Chromium uses overlay scrollbars**, which hides gutter bugs
  entirely. Test with `--disable-features=OverlayScrollbar`.
- **Scroll inertia is not a CSS feature.** It is an open CSSWG proposal
  (csswg-drafts#7059). With scroll-driven animation the easing comes from the
  input device; `linear` is correct.

## Facts and boundaries

Content is autobiographical. **Do not invent detail.** If a date, a figure or a
credit is not confirmed, ask rather than write it plausibly.

Standing constraints from the owner:
- Private repos may be named but never linked.

## Verification

`.sisyphus/` is gitignored scratch space. Playwright is a devDependency for
checking work; the useful pattern is a context with **`javaScriptEnabled:
false`**, which proves a feature really is CSS-only.

Prefer measuring computed values over eyeballing screenshots: read
`getComputedStyle`, element rects, `document.getAnimations()`. Test at several
viewports, including a short one (e.g. 1280×620) — scroll ranges break there
first.

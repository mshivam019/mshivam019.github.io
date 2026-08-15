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
  acts.ts               the four acts: the single source of order
  act-chrome.tsx        boot card + nav + outro + nudge for an act
  act-nav.tsx           the SKM mark and its controls
  turtle-hero.tsx       the enso, the padma, the terminal
  lotus.tsx             padma geometry, shared by hero, cards, reading mark
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

Lightning CSS (Next's minifier) cannot parse `@container scroll-state()` and
hard-fails the build. Three enhancements therefore live in a plain stylesheet
linked from `<head>`, bypassing the bundler:

1. `scroll-state` — folds the wordmark away while reading
2. anchor positioning — one pill sliding between acts
3. `interpolate-size` — the nav panel opens to content width

All optional. Unsupported browsers get the previous behaviour.

## Gotchas, each learned by getting it wrong

- **`animation-duration: auto` is mandatory** on every scroll-driven rule. The
  `animation` shorthand resets duration to `0s`, which collapses keyframes to
  the end of the range on engines stricter than Chrome.
- **Use `entry`-based ranges, not `cover`**, for anything that might sit near
  the end of a page. A `cover` range needs the element to travel up the
  viewport; the last element never can, so it freezes part-way.
- **A closed `<details>` does not render its children.** Hover can never reveal
  them and its links leave the accessibility tree. For hover-or-tap disclosure
  use a checkbox + label and clip the panel instead.
- **`overflow: hidden` clips popovers.** A collapsing panel will eat a dropdown
  inside it; make the dropdown `position: fixed` so it escapes.
- **A transparent scrollbar track shows the page behind it.** During the black
  act card the track must be painted, or a pale strip appears beside it.
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

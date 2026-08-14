/*
 * The site is four acts. Everything that moves between them — the scroll
 * gesture, the act cards, the arrows in the corner — reads this one list.
 */
export interface Act {
  href: string;
  act: string;
  title: string;
  blurb: string;
}

export const ACTS: Act[] = [
  { href: "/", act: "I", title: "The Turtle", blurb: "where the drawing starts" },
  { href: "/experience", act: "II", title: "The Road", blurb: "what shipping taught me" },
  { href: "/projects", act: "III", title: "The Work", blurb: "things that exist now" },
  { href: "/writing", act: "IV", title: "Field Notes", blurb: "thinking out loud" },
];

export function actIndex(pathname: string | null): number {
  if (!pathname) return -1;
  return ACTS.findIndex((a) =>
    a.href === "/" ? pathname === "/" : pathname === a.href || pathname.startsWith(`${a.href}/`)
  );
}

/* the acts wrap, so there is always a next and a previous */
export function neighbours(pathname: string | null) {
  const i = actIndex(pathname);
  if (i < 0) return { current: null, next: null, prev: null, index: -1 };
  return {
    current: ACTS[i],
    next: ACTS[(i + 1) % ACTS.length],
    prev: ACTS[(i - 1 + ACTS.length) % ACTS.length],
    index: i,
  };
}

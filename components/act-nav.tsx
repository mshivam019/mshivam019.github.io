import { ACTS, type Act } from "@/components/acts";
import Monogram from "@/components/monogram";

/*
 * The mark is the control. It opens on hover with a pointer and on tap with a
 * checkbox, so it needs no script. What opens is the whole index, inline: the
 * four acts as numerals, the current one carrying its title. One level of
 * disclosure, nothing nested, nothing positioned elsewhere on the page.
 *
 * (An earlier version put the index in a <details> inside the hover panel.
 * Two disclosures stacked cannot be made to feel solid without script: the
 * gap between them breaks the hover, and <details> has no way to close
 * itself when the pointer leaves.)
 */
export default function ActNav({ current }: { current: Act; next: Act; prev: Act }) {
  const first = current.href === "/";

  return (
    <div className="act-nav-wrap">
      <input type="checkbox" id="act-controls" className="act-nav-toggle" />

      <div className={`act-nav-shell${first ? " is-first" : ""}`}>
        {/*
          Two marks, one shown at a time. With a pointer, hover already opens the
          panel, so the mark can be a plain link home. On touch there is no hover,
          so it has to be the toggle instead, and home is one tap away in the list.
        */}
        <a
          href="/"
          className="act-nav-mark act-nav-mark-link"
          aria-label="Shivam Mishra, home"
          aria-current={first ? "page" : undefined}
        >
          <Monogram size={24} />
        </a>

        <label className="act-nav-mark act-nav-mark-toggle" htmlFor="act-controls" aria-label="Show the acts">
          <Monogram size={24} />
        </label>

        <nav className="act-nav" aria-label="Acts">
          <ul className="act-nav-list">
            {ACTS.map((a) => {
              const active = a.href === current.href;
              return (
                <li key={a.href}>
                  <a
                    href={a.href}
                    className={`act-nav-item${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                    aria-label={`Act ${a.act}, ${a.title}`}
                    title={active ? undefined : a.title}
                  >
                    <span className="act-nav-numeral">{a.act}</span>
                    {active ? <span className="act-nav-title">{a.title}</span> : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

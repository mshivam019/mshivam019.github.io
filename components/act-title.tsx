import { ACTS } from "@/components/acts";

/* An act's page title, read from the one list so the pages cannot drift. */
export default function ActTitle({ href }: { href: string }) {
  const act = ACTS.find((a) => a.href === href) ?? ACTS[0];
  return (
    <>
      <p className="act-header-kicker">Act {act.act}</p>
      <h1 className="act-header-title">{act.title}</h1>
    </>
  );
}

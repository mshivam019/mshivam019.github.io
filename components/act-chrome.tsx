import { ReactNode } from "react";
import { ACTS } from "@/components/acts";
import ActNav from "@/components/act-nav";
import ActNudge from "@/components/act-nudge";
import ActOutro from "@/components/act-outro";
import BootCard from "@/components/boot-card";

/*
 * Everything that frames an act: the card that plays on arrival, the mark in
 * the corner, the link out to the next act, and the nudge near the end. All
 * server-rendered, because the act is known when the page is built. No
 * client JavaScript anywhere.
 */
export default function ActChrome({ index, children }: { index: number; children: ReactNode }) {
  const act = ACTS[index] ?? ACTS[0];
  const next = ACTS[(index + 1 + ACTS.length) % ACTS.length];
  const prev = ACTS[(index - 1 + ACTS.length) % ACTS.length];

  return (
    <>
      <BootCard act={act} />
      <ActNav current={act} next={next} prev={prev} />
      {children}
      <ActOutro next={next} prev={prev} />
      <ActNudge next={next} />
    </>
  );
}

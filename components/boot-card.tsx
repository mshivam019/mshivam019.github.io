import { type Act } from "@/components/acts";
import { LotusMark } from "@/components/lotus";

/*
 * The act card you get on a cold load. Painted with the first frame, and it
 * clears itself with a CSS animation, so it needs no hydration and no script.
 */
export default function BootCard({ act }: { act: Act }) {
  return (
    <div className="boot-card" aria-hidden="true">
      <div className="act-card-inner boot-card-inner">
        <LotusMark size={54} />
        <p className="act-card-kicker">Act {act.act}</p>
        <p className="act-card-title">{act.title}</p>
        <span className="act-card-rule" />
        <p className="act-card-blurb">{act.blurb}</p>
      </div>
    </div>
  );
}

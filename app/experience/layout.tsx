import { ACTS } from "@/components/acts";
import ActChrome from "@/components/act-chrome";

/* Act II. The chrome lives in the layout so the current act is known at build
   time, which keeps every bit of it server-rendered. */
export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <ActChrome index={ACTS.findIndex((a) => a.href === "/experience")}>{children}</ActChrome>;
}

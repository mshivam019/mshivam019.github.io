import { ACTS } from "@/components/acts";
import ActChrome from "@/components/act-chrome";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <ActChrome index={ACTS.findIndex((a) => a.href === "/projects")}>{children}</ActChrome>;
}

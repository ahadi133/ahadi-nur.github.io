import { splitHighlight } from "@/lib/utils";

/** Title with one word painted in the violet→yellow accent gradient. */
export function ProjectTitle({ title, highlight }: { title: string; highlight: string }) {
  const { before, match, after } = splitHighlight(title, highlight);
  return (
    <>
      {before}
      {match && <span className="text-gradient-accent">{match}</span>}
      {after}
    </>
  );
}

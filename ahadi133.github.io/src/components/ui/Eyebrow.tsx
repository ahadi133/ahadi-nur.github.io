import type { IconKey } from "@/types/content";
import { IconTile } from "./Icon";

/** Icon tile, dash and spaced uppercase label above a card heading. */
export function Eyebrow({ icon, label }: { icon: IconKey; label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <IconTile icon={icon} />
      <span className="text-xs font-semibold tracking-[0.2em] text-primary-soft uppercase">
        — {label}
      </span>
    </div>
  );
}

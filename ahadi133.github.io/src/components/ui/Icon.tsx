import {
  Award,
  BarChart3,
  Briefcase,
  Database,
  GraduationCap,
  Lightbulb,
  Megaphone,
  Scale,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/types/content";

const icons: Record<IconKey, LucideIcon> = {
  chart: BarChart3,
  trend: TrendingUp,
  scale: Scale,
  megaphone: Megaphone,
  database: Database,
  graduation: GraduationCap,
  lightbulb: Lightbulb,
  wrench: Wrench,
  briefcase: Briefcase,
  award: Award,
};

export function IconTile({ icon, size = 30 }: { icon: IconKey; size?: number }) {
  const Glyph = icons[icon];
  return (
    <span
      className="icon-tile shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Glyph size={Math.round(size * 0.55)} strokeWidth={2.2} />
    </span>
  );
}

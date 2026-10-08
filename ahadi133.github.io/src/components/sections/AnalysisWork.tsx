import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagPill";
import type { AnalysisWork as AnalysisWorkItem } from "@/types/content";

export function AnalysisWork({ items }: { items: readonly AnalysisWorkItem[] }) {
  return (
    <Section
      id="analysis-work"
      title="Analysis Work"
      subtitle="Business problems I've broken down with data"
      band="light"
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal as="li" key={item.title} delay={(index % 3) * 0.08}>
            <Card interactive className="flex h-full flex-col">
              <div className="mb-4 flex items-center gap-3">
                <IconTile icon={item.icon} size={36} />
                <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {item.domain}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="mb-6 flex-1 leading-relaxed text-text-secondary">
                <span className="font-semibold text-primary-soft">Analysed:</span>{" "}
                {item.analysed}
              </p>
              <TagList tags={item.tags} label={`${item.title} skills`} />
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

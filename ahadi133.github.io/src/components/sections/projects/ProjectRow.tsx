import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { StatChips } from "@/components/ui/StatChip";
import { TagList } from "@/components/ui/TagPill";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";
import { CaseStudyBody } from "./CaseStudyBody";
import { CaseStudyModal } from "./CaseStudyModal";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectTitle } from "./ProjectTitle";

export function ProjectRow({
  project,
  reversed,
}: {
  project: Project;
  reversed: boolean;
}) {
  return (
    <Reveal as="article" className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={cn(reversed && "lg:order-2")}>
        <h3 className="text-3xl leading-tight font-bold sm:text-4xl">
          <ProjectTitle title={project.title} highlight={project.highlight} />
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          {project.summary}
        </p>
        <div className="mt-5 space-y-3">
          <TagList tags={[project.tool]} label="Tools" />
          <StatChips stats={project.stats} />
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <CaseStudyModal slug={project.slug} title={project.title} tool={project.tool}>
            <CaseStudyBody project={project} />
          </CaseStudyModal>
          <ProjectLinks links={project.links} />
        </div>
      </div>
      <div className={cn(reversed && "lg:order-1")}>
        <Lightbox
          image={project.image}
          alt={project.imageAlt}
          title={project.title}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="border border-card-border shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] transition hover:-translate-y-1"
        />
      </div>
    </Reveal>
  );
}

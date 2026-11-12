import { Section } from "@/components/ui/Section";
import type { Project } from "@/types/content";
import { ProjectRow } from "./projects/ProjectRow";
import { SeeMoreList } from "./projects/SeeMoreList";

export function Projects({ projects }: { projects: readonly Project[] }) {
  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Dashboards and decision models, with the full case study behind each one"
    >
      <SeeMoreList className="space-y-24 sm:space-y-32">
        {projects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} reversed={index % 2 === 1} />
        ))}
      </SeeMoreList>
    </Section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { StatChips } from "@/components/ui/StatChip";
import { TagList } from "@/components/ui/TagPill";
import { CaseStudyBody } from "@/components/sections/projects/CaseStudyBody";
import { ProjectLinks } from "@/components/sections/projects/ProjectLinks";
import { ProjectTitle } from "@/components/sections/projects/ProjectTitle";
import { getProject, projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="px-4 pt-[calc(var(--nav-height)+3rem)] pb-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ButtonLink href="/#projects" variant="outline" className="px-5 py-2">
          <ArrowLeft size={16} aria-hidden /> All projects
        </ButtonLink>
        <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-primary-soft uppercase">
          Case study · {project.tool}
        </p>
        <h1 className="mt-3 text-4xl leading-tight font-extrabold sm:text-5xl">
          <ProjectTitle title={project.title} highlight={project.highlight} />
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-text-secondary">
          {project.summary}
        </p>
        <div className="mt-6 space-y-3">
          <TagList tags={[project.tool]} label="Tools" />
          <StatChips stats={project.stats} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ProjectLinks links={project.links} />
        </div>
        <Image
          src={project.image}
          alt={project.imageAlt}
          priority
          placeholder="blur"
          sizes="(min-width: 768px) 768px, 100vw"
          className="mt-10 h-auto w-full rounded-2xl border border-card-border"
        />
        <div className="mt-12">
          <CaseStudyBody project={project} />
        </div>
      </div>
    </article>
  );
}

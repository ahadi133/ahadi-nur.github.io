import { getProject, projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "Case study preview";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgCard({
    eyebrow: project ? `Case study · ${project.tool}` : "Case study",
    title: project?.title ?? profile.tagline,
    footer: profile.name,
  });
}

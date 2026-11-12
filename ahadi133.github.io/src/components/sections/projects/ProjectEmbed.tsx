import type { Project } from "@/types/content";

/** Lazy-loaded dashboard viewer; renders nothing without an approved embed URL. */
export function ProjectEmbed({ project }: { project: Project }) {
  if (!project.links.embed) return null;

  return (
    <section className="mt-10" aria-label="Interactive dashboard">
      <h2 className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary-soft uppercase">
        Interactive dashboard
      </h2>
      <iframe
        src={project.links.embed}
        title={`${project.title} (interactive dashboard)`}
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-popups"
        allowFullScreen
        className="aspect-[4/3] w-full rounded-2xl border border-card-border bg-white"
      />
    </section>
  );
}

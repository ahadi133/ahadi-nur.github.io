import { ExternalLink, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/types/content";

/** Outline buttons for code, live demos and artifacts. */
export function ProjectLinks({ links }: { links: Project["links"] }) {
  return (
    <>
      {links.code && (
        <ButtonLink href={links.code} variant="outline" external>
          <SiGithub size={16} aria-hidden /> View Code
        </ButtonLink>
      )}
      {links.live && (
        <ButtonLink href={links.live} variant="outline" external>
          <ExternalLink size={16} aria-hidden /> Live Demo
        </ButtonLink>
      )}
      {links.artifacts?.map((artifact) => (
        <ButtonLink
          key={`${artifact.label}-${artifact.url}`}
          href={artifact.url}
          variant="outline"
          external
        >
          <FileText size={16} aria-hidden /> {artifact.label}
        </ButtonLink>
      ))}
    </>
  );
}

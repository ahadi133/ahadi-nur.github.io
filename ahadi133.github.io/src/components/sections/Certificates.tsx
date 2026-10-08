import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Certificate } from "@/types/content";

function CertificateVisual({ certificate }: { certificate: Certificate }) {
  if (certificate.image) {
    return (
      <Lightbox
        image={certificate.image}
        alt={`${certificate.title} certificate`}
        title={certificate.title}
        sizes="(min-width: 1024px) 280px, 80vw"
        className="rounded-none rounded-t-2xl bg-white"
      />
    );
  }
  return (
    <div
      className="flex aspect-[16/10] items-center justify-center rounded-t-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.35),transparent_60%),linear-gradient(135deg,#1b1630,#131314)]"
      aria-hidden
    >
      <Award size={56} className="text-primary-soft" strokeWidth={1.4} />
    </div>
  );
}

export function Certificates({ certificates }: { certificates: readonly Certificate[] }) {
  return (
    <Section
      id="certificates"
      title="Certificates"
      subtitle="Professional certifications and learning milestones"
      band="light"
    >
      <ul className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {certificates.map((certificate, index) => (
          <Reveal
            as="li"
            key={certificate.title}
            delay={index * 0.06}
            className="w-[78%] shrink-0 snap-start sm:w-auto"
          >
            <Card className="relative flex h-full flex-col overflow-hidden p-0 sm:p-0">
              {certificate.credentialUrl && (
                <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-bg">
                  <BadgeCheck size={13} aria-hidden /> VERIFIED
                </span>
              )}
              <CertificateVisual certificate={certificate} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg leading-snug font-bold">{certificate.title}</h3>
                {certificate.issuer && (
                  <p className="mt-2 font-medium text-primary-soft">
                    {certificate.issuer}
                  </p>
                )}
                {certificate.issued && (
                  <p className="mt-2 text-sm text-muted">Issued: {certificate.issued}</p>
                )}
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary-soft hover:text-text"
                  >
                    View credential <ExternalLink size={14} aria-hidden />
                  </a>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

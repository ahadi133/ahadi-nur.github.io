import { Download, Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { CopyEmailButton } from "@/components/forms/CopyEmailButton";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Profile } from "@/types/content";

const socialClasses =
  "border-card-border text-text-secondary hover:border-primary hover:text-primary-soft flex h-11 w-11 items-center justify-center rounded-full border transition";

export function Contact({ profile }: { profile: Profile }) {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Open to Business Analyst and Data Analyst opportunities"
    >
      <Reveal>
        <Card className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h3 className="mb-6 text-2xl font-bold uppercase">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-primary-soft" aria-hidden />
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all transition hover:text-primary-soft"
                >
                  {profile.email}
                </a>
                <CopyEmailButton email={profile.email} />
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={20} className="shrink-0 text-primary-soft" aria-hidden />
                <span>{profile.location}</span>
              </li>
            </ul>
            <ul className="mt-8 flex gap-3" aria-label="Social profiles">
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClasses}
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClasses}
                  aria-label="GitHub"
                >
                  <SiGithub size={18} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
              Have a business question that needs data behind it, or a role where analysis
              drives decisions? I&apos;d like to hear about it.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden /> Email Me
              </ButtonLink>
              <ButtonLink href={profile.linkedin} variant="outline" external>
                <FaLinkedinIn size={16} aria-hidden /> Message on LinkedIn
              </ButtonLink>
              {profile.cvUrl && (
                <ButtonLink href={profile.cvUrl} variant="outline" external>
                  <Download size={16} aria-hidden /> Download CV
                </ButtonLink>
              )}
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

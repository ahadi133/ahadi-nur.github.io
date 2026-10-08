import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import type { Experience, Profile, SkillGroup } from "@/types/content";

type AboutProps = {
  profile: Profile;
  skillsIntro: string;
  skillGroups: readonly SkillGroup[];
  experience: readonly Experience[];
};

const cardHeading = "mb-5 text-2xl font-bold uppercase";

export function About({ profile, skillsIntro, skillGroups, experience }: AboutProps) {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about my background and skills"
      band="light"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <Eyebrow icon="graduation" label="Academic Background" />
            <h3 className={cardHeading}>Education</h3>
            <ul className="space-y-5">
              {profile.education.map((entry) => (
                <li key={entry.degree}>
                  {entry.period && <p className="text-sm text-muted">{entry.period}</p>}
                  <p className="text-lg font-semibold">{entry.degree}</p>
                  {entry.institution && (
                    <p className="text-text-secondary">{entry.institution}</p>
                  )}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="h-full">
            <Eyebrow icon="lightbulb" label="Philosophy" />
            <h3 className={cardHeading}>How I Think</h3>
            <p className="leading-relaxed text-text-secondary">
              {profile.philosophy.body}
            </p>
            <blockquote className="mt-6 rounded-r-lg border-l-4 border-primary bg-[rgba(139,92,246,0.1)] px-5 py-4 text-text-secondary italic">
              “{profile.philosophy.quote}”
            </blockquote>
          </Card>
        </Reveal>

        <Reveal className="md:col-span-2">
          <Card>
            <Eyebrow icon="wrench" label="Toolkit & Approach" />
            <h3 className={cardHeading}>How I Work</h3>
            <p className="mb-8 text-text-secondary">{skillsIntro}</p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-3 text-lg font-semibold text-primary-soft">
                    {group.title}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-[15px] text-text-secondary"
                      >
                        <span className="text-primary" aria-hidden>
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal className="md:col-span-2">
          <Card>
            <Eyebrow icon="briefcase" label="Career Timeline" />
            <h3 className={cardHeading}>Work Experience</h3>
            <Timeline items={experience} />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

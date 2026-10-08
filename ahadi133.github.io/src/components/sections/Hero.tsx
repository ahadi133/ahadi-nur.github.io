import { ChevronDown, Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Profile } from "@/types/content";
import { HeroVisual } from "./HeroVisual";

const highlights = [
  { phrase: "analysis", className: "text-primary-soft font-semibold" },
  { phrase: "decision-support outputs", className: "text-highlight font-semibold" },
] as const;

function HighlightedIntro({ text }: { text: string }) {
  const pattern = new RegExp(`(${highlights.map((h) => h.phrase).join("|")})`, "g");
  return text.split(pattern).map((part, index) => {
    const match = highlights.find((h) => h.phrase === part);
    return match ? (
      <span key={index} className={match.className}>
        {part}
      </span>
    ) : (
      part
    );
  });
}

export function Hero({ profile }: { profile: Profile }) {
  const [firstWord, ...rest] = profile.role.split(" ");

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-svh items-center overflow-hidden bg-grid px-4 pt-[var(--nav-height)] sm:px-6"
    >
      <div
        className="pointer-events-none absolute top-1/3 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary-soft uppercase">
            {profile.name}
          </p>
          <h1 className="text-gradient text-5xl leading-[1.05] font-extrabold uppercase sm:text-6xl lg:text-7xl">
            {firstWord}
            <br />
            {rest.join(" ")}
          </h1>
          <p className="mt-6 text-sm font-medium tracking-[0.25em] text-text-secondary uppercase">
            Based in {profile.location}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed tracking-wide text-text-secondary">
            <HighlightedIntro text={profile.intro} />
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects">View My Work</ButtonLink>
            {profile.cvUrl && (
              <ButtonLink href={profile.cvUrl} variant="outline" external>
                <Download size={16} aria-hidden /> Download CV
              </ButtonLink>
            )}
            <ButtonLink href="#contact" variant="outline">
              Contact Me
            </ButtonLink>
          </div>
        </Reveal>

        <HeroVisual
          photo={profile.photo}
          name={profile.name}
          scene={profile.splineScene}
        />
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center text-xs text-text-secondary transition hover:text-text"
      >
        Scroll Down
        <ChevronDown size={20} className="mt-1 motion-safe:animate-bounce" aria-hidden />
      </a>
    </section>
  );
}

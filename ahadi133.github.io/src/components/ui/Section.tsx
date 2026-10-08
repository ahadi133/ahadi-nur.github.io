import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  subtitle: string;
  band?: "dark" | "light";
  children: React.ReactNode;
};

/** Full-width band with the centred gradient H2 and muted subtitle. */
export function Section({ id, title, subtitle, band = "dark", children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "px-4 py-20 sm:px-6 sm:py-28",
        band === "light" ? "bg-bg-light" : "bg-bg",
      )}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center sm:mb-16">
          <h2
            id={headingId}
            className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

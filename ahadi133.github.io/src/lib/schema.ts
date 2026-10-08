import type { StaticImageData } from "next/image";
import { z } from "zod";

export const iconKeys = [
  "chart",
  "trend",
  "scale",
  "megaphone",
  "database",
  "graduation",
  "lightbulb",
  "wrench",
  "briefcase",
  "award",
] as const;

const iconKey = z.enum(iconKeys);
const nonEmpty = z.string().trim().min(1);
const optionalUrl = z.url().optional();

const staticImage = z.custom<StaticImageData>(
  (value) =>
    typeof value === "object" &&
    value !== null &&
    "src" in value &&
    "width" in value &&
    "height" in value,
  { message: "Expected a statically imported image" },
);

export const profileSchema = z.object({
  name: nonEmpty,
  shortName: nonEmpty,
  role: nonEmpty,
  location: nonEmpty,
  tagline: nonEmpty,
  intro: nonEmpty,
  email: z.email(),
  linkedin: z.url(),
  github: z.url(),
  /** Path under /public, or undefined to hide every "Download CV" button. */
  cvUrl: z.string().startsWith("/").optional(),
  /** Public Spline scene URL; undefined shows the photo + glow fallback. */
  splineScene: optionalUrl,
  photo: staticImage,
  education: z.array(
    z.object({
      degree: nonEmpty,
      institution: nonEmpty.optional(),
      period: nonEmpty.optional(),
    }),
  ),
  philosophy: z.object({ body: nonEmpty, quote: nonEmpty }),
});

export const skillGroupSchema = z.object({
  title: nonEmpty,
  items: z.array(nonEmpty).min(1),
});

export const experienceSchema = z.object({
  role: nonEmpty,
  company: nonEmpty,
  period: nonEmpty,
  meta: nonEmpty,
  summary: nonEmpty,
});

export const analysisWorkSchema = z.object({
  icon: iconKey,
  domain: nonEmpty,
  title: nonEmpty,
  analysed: nonEmpty,
  tags: z.array(nonEmpty).min(1),
});

const payoffSchema = z.object({
  option: nonEmpty,
  sunny: z.number(),
  rainy: z.number(),
});

export const projectSchema = z
  .object({
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug must be kebab-case"),
    title: nonEmpty,
    /** Word inside `title` rendered with the violet→yellow gradient. */
    highlight: nonEmpty,
    tool: nonEmpty,
    summary: nonEmpty,
    image: staticImage,
    imageAlt: nonEmpty,
    stats: z.array(nonEmpty),
    links: z.object({ code: optionalUrl, live: optionalUrl }),
    caseStudy: z.object({
      context: nonEmpty,
      problem: nonEmpty,
      data: nonEmpty,
      approach: z.array(nonEmpty).min(1),
      insights: z.array(nonEmpty).min(1),
      implication: nonEmpty,
      limitations: nonEmpty,
    }),
    payoffs: z.array(payoffSchema).min(2).optional(),
  })
  .refine((project) => project.title.includes(project.highlight), {
    message: "highlight must be a substring of title",
    path: ["highlight"],
  });

export const certificateSchema = z.object({
  title: nonEmpty,
  issuer: nonEmpty.optional(),
  issued: nonEmpty.optional(),
  image: staticImage.optional(),
  /** Link to a public credential page; enables the VERIFIED badge. */
  credentialUrl: optionalUrl,
});

/** Validates content at module load, so bad data fails the build. */
export function parseContent<T extends z.ZodType>(
  schema: T,
  data: unknown,
  label: string,
): z.infer<T> {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(`Invalid ${label} content:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}

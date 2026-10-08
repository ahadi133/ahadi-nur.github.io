import { z } from "zod";
import { experienceSchema, parseContent } from "@/lib/schema";

/** Newest first. */
export const experience = parseContent(
  z.array(experienceSchema),
  [
    {
      role: "Marketing Intern",
      company: "Cloudly Infotech Ltd.",
      period: "Sep 2026 – Present",
      meta: "Full-time",
      summary:
        "Supporting B2B marketing through market and competitor research, prospect intelligence, lead generation, campaign support, marketing performance analysis, and content initiatives.",
    },
    {
      role: "AI Apprentice",
      company: "Intelsense.ai",
      period: "Aug 2024 – Feb 2025",
      meta: "Remote",
      summary:
        "Supported AI development workflows through data annotation and structured data preparation: organised and labelled datasets, maintained quality and consistency, and collaborated on workflow requirements.",
    },
  ],
  "experience",
);

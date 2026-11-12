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
      meta: "Internship · On-site, Dhaka",
      summary:
        "B2B market and competitor research; prospect segmentation and data management in Apollo, HubSpot, Excel and Google Sheets; auto-refreshing Looker Studio dashboards for multi-product email campaigns; outreach redesign proposals; and website content, SEO/GEO strategy and A/B content testing, in close collaboration with marketing, growth, development and business teams.",
    },
    {
      role: "Business Analytics Intern",
      company: "Codveda Technologies",
      period: "Oct 2026",
      meta: "Internship · Remote",
      summary:
        "Cleaned and standardized multi-source data, ran exploratory analysis, built Looker Studio and Power BI dashboards with drill-downs, and applied SQL, correlation, regression and A/B testing to business data. The resulting projects are in the project grid.",
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

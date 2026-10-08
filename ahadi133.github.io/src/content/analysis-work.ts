import { z } from "zod";
import { analysisWorkSchema, parseContent } from "@/lib/schema";

export const analysisWork = parseContent(
  z.array(analysisWorkSchema),
  [
    {
      icon: "chart",
      domain: "Profitability",
      title: "Profitability & Cost Analysis",
      analysed:
        "sales, COGS, expense and budget data to find where profit really comes from.",
      tags: ["KPI Design", "Budget vs Actual", "Tableau"],
    },
    {
      icon: "trend",
      domain: "Finance",
      title: "Financial Performance Monitoring",
      analysed:
        "profitability, liquidity and valuation ratios against targets across eight companies.",
      tags: ["KPI vs Goal", "Variance Analysis", "Power BI"],
    },
    {
      icon: "scale",
      domain: "Decision Support",
      title: "Decision Support Under Uncertainty",
      analysed:
        "how the best choice shifts as confidence in an uncertain factor changes.",
      tags: ["Sensitivity Analysis", "Expected Value", "Analytica"],
    },
    {
      icon: "megaphone",
      domain: "Marketing",
      title: "Marketing & Market Intelligence",
      analysed:
        "competitors, prospects and campaign performance to support B2B lead generation.",
      tags: ["Market Research", "Lead Generation", "Performance Analysis"],
    },
    {
      icon: "database",
      domain: "AI Data",
      title: "AI Data Preparation",
      analysed: "dataset quality and consistency requirements for AI training workflows.",
      tags: ["Data Annotation", "Data Quality", "Requirements"],
    },
  ],
  "analysis work",
);

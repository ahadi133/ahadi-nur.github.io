import { z } from "zod";
import { parseContent, skillGroupSchema } from "@/lib/schema";

export const skillsIntro =
  "Business analysis discipline combined with applied analytics and AI-assisted workflows.";

export const skillGroups = parseContent(
  z.array(skillGroupSchema),
  [
    {
      title: "Analysis",
      items: [
        "Requirements elicitation & traceability",
        "AS-IS / TO-BE mapping",
        "Systems & gap analysis",
        "Root-cause analysis",
        "Solution evaluation",
      ],
    },
    {
      title: "Documentation",
      items: [
        "UML & DFD",
        "Functional requirements",
        "User stories",
        "Stakeholder registers",
        "RACI matrices",
      ],
    },
    {
      title: "Data & BI",
      items: [
        "SQL & PostgreSQL",
        "Python (Pandas, NumPy)",
        "Tableau",
        "Power BI",
        "Excel",
        "IBM Cognos",
      ],
    },
    {
      title: "Methods",
      items: [
        "Agile & Scrum",
        "UAT & test support",
        "BABOK® alignment",
        "Applied statistics",
        "Decision modelling (Analytica)",
      ],
    },
  ],
  "skills",
);

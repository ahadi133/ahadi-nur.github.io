import photo from "@/assets/profile.png";
import { parseContent, profileSchema } from "@/lib/schema";

export const profile = parseContent(
  profileSchema,
  {
    name: "Mirza Anto Ahadi Nur",
    shortName: "Ahadi",
    role: "Data-Driven Business Analyst",
    location: "Dhaka, Bangladesh",
    tagline: "Business questions, answered with data.",
    intro:
      "I take raw, messy, or fragmented business data and structure it into analysis: dashboards, reports, and decision-support outputs that make it easier to make a call.",
    email: "ahadi.nur36@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahadi-nur-m8055aan/",
    github: "https://github.com/ahadi133",
    // TODO(Ahadi): add the CV to public/assets/ and set cvUrl: "/assets/Ahadi-Nur-CV.pdf"
    cvUrl: undefined,
    // TODO(Ahadi): paste a public Spline scene URL to replace the photo in the hero.
    splineScene: undefined,
    photo,
    education: [
      {
        degree: "BBA in Management Information Systems",
        // TODO(Ahadi): institution and period.
        institution: undefined,
        period: undefined,
      },
    ],
    philosophy: {
      body: "I'm interested in how information becomes useful. I start with the business question, not the tool: structure the data, analyse it, and translate the result into a decision people can actually use. A dashboard that doesn't change a decision is just decoration.",
      quote: "Business questions, answered with data.",
    },
  },
  "profile",
);

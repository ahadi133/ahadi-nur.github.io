import { z } from "zod";
import businessAnalysisImage from "@/assets/certificates/business-analysis-process-management.png";
import businessAnalyticsImage from "@/assets/certificates/business-analytics-with-power-bi.png";
import dataAnalyticsImage from "@/assets/certificates/data-analytics-in-the-ai-era.png";
import genAiImage from "@/assets/certificates/genai-prompt-engineering.png";
import { certificateSchema, parseContent } from "@/lib/schema";

// The VERIFIED badge only appears when credentialUrl is set.
export const certificates = parseContent(
  z.array(certificateSchema),
  [
    {
      title: "Data Analytics in the AI Era",
      issuer: "Grameenphone Ltd",
      issued: "Issued Oct 2026",
      image: dataAnalyticsImage,
      credentialUrl: "https://www.grameenphone.academy/cert/31e2392cf8ce",
    },
    {
      title: "Business Analysis & Process Management",
      issuer: "Coursera",
      issued: "Sep 2026",
      image: businessAnalysisImage,
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/0PN9TS5OBKJZ",
    },
    {
      title: "GenAI & Prompt Engineering",
      issuer: "Grameenphone Ltd",
      issued: "Jun 2026",
      image: genAiImage,
      credentialUrl: "https://www.grameenphone.academy/cert/012c18ac4454",
    },
    {
      title: "Business Analytics with Power BI",
      issuer: "Grameenphone Ltd",
      issued: "Aug 2025",
      image: businessAnalyticsImage,
      credentialUrl: "https://www.grameenphone.academy/cert/faf80b381811",
    },
  ],
  "certificates",
);

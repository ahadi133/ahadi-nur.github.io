import { z } from "zod";
import { certificateSchema, parseContent } from "@/lib/schema";

// TODO(Ahadi): add issuer, issue date, a certificate image (import it from
// src/assets/certificates/) and the public credential URL for each entry.
// The VERIFIED badge only appears when credentialUrl is set.
export const certificates = parseContent(
  z.array(certificateSchema),
  [
    { title: "Data Analytics", issuer: "DeepLearning.AI" },
    { title: "Business Analyst", issuer: "IBM" },
    { title: "Power BI" },
    { title: "Generative AI & Prompt Engineering" },
  ],
  "certificates",
);

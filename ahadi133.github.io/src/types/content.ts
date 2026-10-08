import type { z } from "zod";
import type {
  analysisWorkSchema,
  certificateSchema,
  experienceSchema,
  iconKeys,
  profileSchema,
  projectSchema,
  skillGroupSchema,
} from "@/lib/schema";

export type IconKey = (typeof iconKeys)[number];
export type Profile = z.infer<typeof profileSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type AnalysisWork = z.infer<typeof analysisWorkSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Payoff = NonNullable<Project["payoffs"]>[number];
export type Certificate = z.infer<typeof certificateSchema>;

import { describe, expect, it } from "vitest";
import { z } from "zod";
import { analysisWork } from "@/content/analysis-work";
import { certificates } from "@/content/certificates";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { getProject, projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { parseContent, projectSchema } from "./schema";

const image = { src: "/x.png", width: 10, height: 10 };

const validProject = {
  slug: "demo-project",
  title: "Demo Project",
  highlight: "Demo",
  tool: "Excel",
  summary: "Summary",
  image,
  imageAlt: "Alt",
  stats: [],
  links: {},
  caseStudy: {
    context: "c",
    problem: "p",
    data: "d",
    approach: ["a"],
    insights: ["i"],
    implication: "im",
    limitations: "l",
  },
};

describe("site content", () => {
  it("loads every content file without validation errors", () => {
    expect(profile.name).toBe("Mirza Anto Ahadi Nur");
    expect(skillGroups.length).toBeGreaterThan(0);
    expect(experience.length).toBeGreaterThan(0);
    expect(analysisWork.length).toBeGreaterThan(0);
    expect(certificates.length).toBeGreaterThan(0);
    expect(projects.length).toBe(3);
  });

  it("has unique project slugs", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("looks projects up by slug", () => {
    expect(getProject("party-location-decision-model")?.payoffs).toHaveLength(3);
    expect(getProject("missing")).toBeUndefined();
  });
});

describe("projectSchema", () => {
  it("accepts a valid project", () => {
    expect(projectSchema.safeParse(validProject).success).toBe(true);
  });

  it("rejects a highlight that is not in the title", () => {
    const result = projectSchema.safeParse({ ...validProject, highlight: "Nope" });
    expect(result.success).toBe(false);
  });

  it("rejects a non-kebab-case slug", () => {
    const result = projectSchema.safeParse({ ...validProject, slug: "Bad Slug" });
    expect(result.success).toBe(false);
  });

  it("rejects an image that was not statically imported", () => {
    const result = projectSchema.safeParse({ ...validProject, image: "/x.png" });
    expect(result.success).toBe(false);
  });
});

describe("parseContent", () => {
  it("throws a labelled error for invalid content", () => {
    expect(() => parseContent(z.array(projectSchema), [{}], "projects")).toThrow(
      /Invalid projects content/,
    );
  });
});

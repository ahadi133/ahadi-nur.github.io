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
    expect(projects.map((project) => project.slug)).toEqual(
      expect.arrayContaining([
        "cloudly-campaign-performance-dashboard",
        "cloudly-prospect-segmentation",
        "cloudly-outreach-process-redesign",
        "cloudly-website-content-brief",
        "cloudly-content-plan-workbook",
        "codeveda-data-cleaning",
        "codeveda-iris-exploratory-analysis",
        "codeveda-social-media-sentiment-dashboard",
        "codeveda-customer-churn-sql-analysis",
        "codeveda-customer-churn-statistical-analysis",
        "codeveda-predictive-modeling",
        "codeveda-churn-risk-analysis",
        "codeveda-prescriptive-retention-strategy",
      ]),
    );
  });

  it("orders Codveda projects before Cloudly projects and other projects", () => {
    const groups = projects.map((project) =>
      project.slug.startsWith("codeveda-")
        ? 0
        : project.slug.startsWith("cloudly-")
          ? 1
          : 2,
    );
    expect(groups).toEqual([...groups].sort());
    expect(projects[8].slug).toBe("cloudly-campaign-performance-dashboard");
    expect(projects[12].slug).toBe("cloudly-content-plan-workbook");
    expect(projects[13].slug.startsWith("codeveda-")).toBe(false);
    expect(projects[0].slug.startsWith("codeveda-")).toBe(true);
    expect(
      projects.find(
        (project) => project.slug === "cloudly-campaign-performance-dashboard",
      )?.links.live,
    ).toBe(
      "https://datastudio.google.com/reporting/cdf343d8-1f66-4eb7-9957-b3c2d36ddef3",
    );
  });

  it("orders Codveda analysis work before Cloudly and other work", () => {
    expect(analysisWork.slice(0, 8).map((item) => item.domain)).toEqual([
      "Data Preparation",
      "Exploratory Analysis",
      "Social Media",
      "Customer Churn",
      "Statistical Inference",
      "Predictive Analytics",
      "Risk Prioritization",
      "Retention Strategy",
    ]);
    expect(analysisWork[8].title).toBe("Marketing & Market Intelligence");
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

  it("accepts dashboard embeds only from approved HTTPS hosts", () => {
    expect(
      projectSchema.safeParse({
        ...validProject,
        links: { embed: "https://app.powerbi.com/view?r=example" },
      }).success,
    ).toBe(true);
    expect(
      projectSchema.safeParse({
        ...validProject,
        links: { embed: "http://app.powerbi.com/view?r=example" },
      }).success,
    ).toBe(false);
    expect(
      projectSchema.safeParse({
        ...validProject,
        links: { embed: "https://example.com/report" },
      }).success,
    ).toBe(false);
  });

  it("accepts HTTPS and local PDF artifact links but rejects traversal paths", () => {
    expect(
      projectSchema.safeParse({
        ...validProject,
        links: {
          artifacts: [
            { label: "FRD", url: "/assets/sample-frd.pdf" },
            { label: "Process map", url: "https://example.com/process-map.pdf" },
          ],
        },
      }).success,
    ).toBe(true);
    expect(
      projectSchema.safeParse({
        ...validProject,
        links: {
          artifacts: [{ label: "FRD", url: "/assets/../private.pdf" }],
        },
      }).success,
    ).toBe(false);
  });
});

describe("parseContent", () => {
  it("throws a labelled error for invalid content", () => {
    expect(() => parseContent(z.array(projectSchema), [{}], "projects")).toThrow(
      /Invalid projects content/,
    );
  });
});

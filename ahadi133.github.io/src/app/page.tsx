import { About } from "@/components/sections/About";
import { AnalysisWork } from "@/components/sections/AnalysisWork";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { analysisWork } from "@/content/analysis-work";
import { certificates } from "@/content/certificates";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { skillGroups, skillsIntro } from "@/content/skills";

export default function HomePage() {
  return (
    <>
      <Hero profile={profile} />
      <About
        profile={profile}
        skillsIntro={skillsIntro}
        skillGroups={skillGroups}
        experience={experience}
      />
      <AnalysisWork items={analysisWork} />
      <Projects projects={projects} />
      <Certificates certificates={certificates} />
      <Contact profile={profile} />
    </>
  );
}

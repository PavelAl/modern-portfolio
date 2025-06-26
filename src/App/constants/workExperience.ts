import { DeveloperSVG, PolytechLogoSVG } from "../assets";
import type { WorkExperienceData } from "../../WorkExperience";

export const workExperienceData: WorkExperienceData[] = [
  {
    title: "Earnix (Sep 2022 – Feb 2025)",
    position: "Frontend Developer",
    description:
      "At Earnix, I played a key role in building a scalable React component library that powered the company’s migration from Vue. My focus on testing, documentation, and collaboration ensured a near-zero bug rate across multiple applications.",
    emblem: DeveloperSVG,
  },
  {
    title: "GET Information Technology GmbH (Mar 2021 – Jun 2022)",
    position: "Frontend Developer",
    description:
      "At GET IT, I worked closely with cross-functional teams to improve project quality and meet delivery milestones. I modernized the codebase, introduced scalable UI components, and optimized application performance.",
    emblem: DeveloperSVG,
  },
  {
    title: "Conteq (Sep 2017 – Mar 2021)",
    position: "Junior Frontend Developer",
    description:
      "At Conteq, I developed custom modules for SharePoint (2013, 2016, Online) and improved legacy systems for better performance. This role laid the foundation for my current React development expertise.",
    emblem: PolytechLogoSVG,
  },
];

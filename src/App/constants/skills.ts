import type { SkillData } from "~/Skills/types";

import { DeveloperSVG } from "../assets";

export const skillsData: SkillData[] = [
  {
    key: "frontend-development",
    title: "Frontend Development",
    text: "Placeholder text for Frontend Development section. This will be updated with detailed content later.",
    skillsIcons: [
      { icon: ["fab", "react"], color: "#61DAFB" },
      { icon: ["fab", "js"], color: "#F7DF1E" },
      { icon: "code", color: "#3178C6" },
      { icon: ["fab", "html5"], color: "#E34F26" },
      { icon: ["fab", "css3-alt"], color: "#1572B6" },
      { icon: ["fab", "sass"], color: "#CC6699" },
    ],
    img: DeveloperSVG,
  },
  {
    key: "development-tools-practices",
    title: "Development Tools & Practices",
    text: "Placeholder text for Development Tools & Practices section. This will be updated with detailed content later.",
    skillsIcons: [
      { icon: ["fab", "git"], color: "#F05032" },
      { icon: ["fab", "npm"], color: "#CB3837" },
      { icon: "vial", color: "#10B981" },
      { icon: "cogs", color: "#6366F1" },
      { icon: "code-branch", color: "#F59E0B" },
    ],
    img: DeveloperSVG,
  },
  {
    key: "design-user-experience",
    title: "Design & User Experience",
    text: "Placeholder text for Design & User Experience section. This will be updated with detailed content later.",
    skillsIcons: [
      { icon: ["fab", "figma"], color: "#EF4444" },
      { icon: "universal-access", color: "#10B981" },
      { icon: "eye", color: "#6366F1" },
      { icon: "users", color: "#F59E0B" },
      { icon: "heart", color: "#EC4899" },
    ],
    img: DeveloperSVG,
  },
  {
    key: "backend-cloud-technologies",
    title: "Backend & Cloud Technologies",
    text: "Placeholder text for Backend & Cloud Technologies section. This will be updated with detailed content later.",
    skillsIcons: [
      { icon: ["fab", "node-js"], color: "#339933" },
      { icon: ["fab", "aws"], color: "#FF9900" },
      { icon: "server", color: "#6366F1" },
      { icon: "cloud", color: "#0EA5E9" },
      { icon: "database", color: "#10B981" },
    ],
    img: DeveloperSVG,
  },
];

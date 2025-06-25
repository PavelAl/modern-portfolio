import type { SkillData } from "~/Skills/types";

import { DeveloperSVG } from "../assets";

export const skillsData: SkillData[] = [
  {
    key: "frontend-development",
    title: "Frontend Development",
    text: "Placeholder text for Frontend Development section. This will be updated with detailed content later.",
    skillsIcons: [
      { icon: "react", title: "React" },
      { icon: "javascript", title: "JavaScript" },
      { icon: "typescript", title: "TypeScript" },
      { icon: "jest", title: "Jest" },
      { icon: "redux", title: "Redux" },
      { icon: "html", title: "HTML" },
      { icon: "css", title: "CSS" },
      { icon: "sass", title: "Sass" },
    ],
    img: DeveloperSVG,
  },
  {
    key: "development-tools-practices",
    title: "Development Tools & Practices",
    text: "Placeholder text for Development Tools & Practices section. This will be updated with detailed content later.",
    skillsIcons: [
      { icon: "git", title: "Git" },
      { icon: "npm", title: "npm" },
      { icon: "vite", title: "Vite" },
      { icon: "rollup", title: "Rollup" },
      { icon: "vscode", title: "VS Code" },
      { icon: "jenkins", title: "Jenkins" },
      { icon: "jira", title: "Jira" },
    ],
    img: DeveloperSVG,
  },
  {
    key: "design-user-experience",
    title: "Design & User Experience",
    text: "Placeholder text for Design & User Experience section. This will be updated with detailed content later.",
    skillsIcons: [
      { icon: "figma", title: "Figma" },
      { icon: "materialui", title: "Material UI" },
      { icon: "storybook", title: "Storybook" },
    ],
    img: DeveloperSVG,
  },
  {
    key: "backend-cloud-technologies",
    title: "Backend & Cloud Technologies",
    text: "Placeholder text for Backend & Cloud Technologies section. This will be updated with detailed content later.",
    skillsIcons: [
      { icon: "nodejs", title: "Node.js" },
      { icon: "aws", title: "AWS" },
    ],
    img: DeveloperSVG,
  },
];

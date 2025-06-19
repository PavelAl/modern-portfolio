import type { SkillData } from "~/Skills/types";

import { DeveloperSVG } from "../assets";

export const skillsData: Record<string, SkillData> = {
  "Frontend Development": {
    title: "Frontend Development",
    text: "I specialize in modern frontend technologies including React, TypeScript, JavaScript, and CSS. I create responsive, interactive user interfaces with clean, maintainable code and focus on performance optimization and accessibility.",
    skillsIcons: [
      { icon: ["fab", "react"], color: "#61DAFB" },
      { icon: ["fab", "js"], color: "#F7DF1E" },
      { icon: ["fab", "html5"], color: "#E34F26" },
      { icon: ["fab", "css3-alt"], color: "#1572B6" },
    ],
    img: DeveloperSVG,
  },
  "UI/UX Design": {
    title: "UI/UX Design",
    text: "I have a strong eye for design and user experience. I create intuitive interfaces that prioritize usability and aesthetics, working with design systems, wireframing, and prototyping to deliver exceptional user experiences.",
    skillsIcons: [
      { icon: "eye", color: "#6366F1" },
      { icon: "heart", color: "#EF4444" },
      { icon: "star", color: "#F59E0B" },
    ],
    img: DeveloperSVG,
  },
  "Development Tools": {
    title: "Development Tools",
    text: "I'm proficient with modern development tools and workflows including Git, VS Code, npm/yarn, Webpack, Vite, Docker, and various testing frameworks. I focus on automation, CI/CD, and maintaining efficient development environments.",
    skillsIcons: [
      { icon: ["fab", "git"], color: "#F05032" },
      { icon: ["fab", "npm"], color: "#CB3837" },
      { icon: ["fab", "docker"], color: "#2496ED" },
      { icon: "tools", color: "#10B981" },
    ],
    img: DeveloperSVG,
  },
};

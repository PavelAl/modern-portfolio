import type { SkillData } from "~/Skills/types";

export const skillsData: SkillData[] = [
  {
    key: "frontend-development",
    title: "Frontend Development",
    list: [
      "Develop highly interactive, scalable user interfaces and applications",
      "Build and maintain reusable component libraries aligned with design systems.",
      "Ensure accessibility (WCAG) and cross-browser compatibility across all UI components.",
      "Optimize performance through smart rendering patterns and bundle strategies.",
    ],
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
  },
  {
    key: "development-tools-practices",
    title: "Development Tools",
    list: [
      "Apply test-driven development (TDD) principles to ensure fast and steady application growth",
      "Thrive in Agile teams, delivering features iteratively with constant feedback loops.",
      "Write clean, maintainable, and well-documented code to support team scalability.",
      "Embrace AI-assisted tools like GitHub Copilot to accelerate development without sacrificing quality.",
    ],
    skillsIcons: [
      { icon: "git", title: "Git" },
      { icon: "npm", title: "npm" },
      { icon: "vite", title: "Vite" },
      { icon: "rollup", title: "Rollup" },
      { icon: "vscode", title: "VS Code" },
      { icon: "jenkins", title: "Jenkins" },
      { icon: "jira", title: "Jira" },
    ],
  },
  {
    key: "design-user-experience",
    title: "Design & User Experience",
    list: [
      "Convert Figma designs into clean, accessible, production-ready applications.",
      "Create pixel-perfect, intuitive UI components that align with brand and UX goals.",
      "Advocate for usability and design consistency throughout the development process.",
      "Apply accessibility best practices to ensure inclusive and compliant user experiences.",
    ],
    skillsIcons: [
      { icon: "figma", title: "Figma" },
      { icon: "materialui", title: "Material UI" },
      { icon: "storybook", title: "Storybook" },
      { icon: "accessibility", title: "Accessibility" },
      { icon: "responsiveDesign", title: "Responsive Design" },
    ],
  },
];

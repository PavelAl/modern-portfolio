import { DeveloperSVG, PolytechLogoSVG } from "../assets";
import type { WorkExperienceData } from "../../WorkExperience";

export const workExperienceData: WorkExperienceData[] = [
  {
    title: "Senior Software Engineer",
    position: "Full Stack Developer",
    description:
      "Led development of modern web applications using React, TypeScript, and Node.js. Mentored junior developers and implemented best practices for code quality and testing.",
    emblem: DeveloperSVG,
  },
  {
    title: "Software Engineer",
    position: "Frontend Developer",
    description:
      "Developed responsive user interfaces and collaborated with design teams to create intuitive user experiences. Worked with React, Redux, and modern CSS frameworks.",
    emblem: DeveloperSVG,
  },
  {
    title: "Junior Developer",
    position: "Web Developer",
    description:
      "Started career building web applications and learning modern development practices. Gained experience with JavaScript, HTML, CSS, and version control systems.",
    emblem: PolytechLogoSVG,
  },
];

import type { IntroductionData } from "~/Introduction/components/Introduction/Introduction.types";

import { DeveloperSVG } from "../assets";

import { contactMethods } from "./contactMethods";

export const introductionData: IntroductionData = {
  title: "Welcome to my portfolio",
  text: "Hi, I'm Pavel — a frontend engineer passionate about creating intuitive and maintainable web applications. I bridge the gap between design and development by building scalable Web applications that follow best practices in UX, accessibility, and testing. This portfolio showcases some of the skills and tools I use every day in my work.",
  resumeLink:
    "https://drive.google.com/file/d/11i9r6Wqb9PVxZU6_ur-U5oMdYJqet5bD/view?usp=sharing",
  contactMethods,
  image: DeveloperSVG,
};

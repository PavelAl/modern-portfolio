import { AnimatedSkills } from "~/Skills";
import { SectionHeader } from "~/Layout";

import { skillsData } from "../constants";

export const Skills = () => {
  return (
    <>
      <SectionHeader title={"What I Am Good At"} />

      <AnimatedSkills
        direction="left-right"
        {...skillsData["Frontend Development"]}
      />

      <AnimatedSkills direction="right-left" {...skillsData["UI/UX Design"]} />

      <AnimatedSkills
        direction="left-right"
        {...skillsData["Development Tools"]}
      />
    </>
  );
};

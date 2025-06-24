import { AnimatedSkills } from "~/Skills";
import { SectionHeader } from "~/Layout";

import { skillsData } from "../constants";

export const Skills = () => {
  return (
    <>
      <SectionHeader title={"What I Am Good At"} />

      {skillsData.map((skills, index) => (
        <AnimatedSkills
          key={skills.key}
          direction={index % 2 === 0 ? "left-right" : "right-left"}
          {...skillsData[index]}
        />
      ))}
    </>
  );
};

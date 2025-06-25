import type { FC } from "react";

import { AnimatedSkills } from "~/Skills";
import { SectionHeader } from "~/Layout";

import { skillsData } from "../constants";

interface SkillsProps {
  id?: string;
}

export const Skills: FC<SkillsProps> = ({ id }) => {
  return (
    <>
      <SectionHeader id={id} title={"What I Am Good At"} />

      {skillsData.map(({ key, ...skill }) => (
        <AnimatedSkills key={key} direction={"left-right"} {...skill} />
      ))}
    </>
  );
};

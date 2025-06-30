import type { FC } from "react";

import { AnimatedSkills } from "~/Skills";
import { SectionHeader } from "~/Layout";

import { skillsData } from "../../constants";

import styles from "./Skills.styles.module.scss";

interface SkillsProps {
  id?: string;
}

export const Skills: FC<SkillsProps> = ({ id }) => {
  return (
    <div id={id} className={styles.skills}>
      <SectionHeader id={id} title={"What I Am Good At"} />

      {skillsData.map(({ key, ...skill }) => (
        <AnimatedSkills key={key} direction={"left-right"} {...skill} />
      ))}
    </div>
  );
};

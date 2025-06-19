import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { ComponentType } from "react";

export interface SkillIcon {
  icon: IconProp;
  color?: string;
}

export type SkillData = {
  title: string;
  text: string;
  img: ComponentType;
  skillsIcons?: SkillIcon[];
};

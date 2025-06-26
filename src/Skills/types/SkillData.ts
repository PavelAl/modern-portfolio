import type { ComponentType } from "react";

import type { BrandIconType } from "~/Library";

export interface SkillIcon {
  icon: BrandIconType;
  title: string;
}

export type SkillData = {
  key?: string;
  title: string;
  text?: string;
  list?: string[];
  img: ComponentType;
  skillsIcons?: SkillIcon[];
};

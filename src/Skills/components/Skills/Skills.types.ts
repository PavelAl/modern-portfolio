import type { RefObject } from "react";

import type { SkillData, SkillIcon } from "../../types";

export interface SkillsClasses {
  root?: string;
  text?: string;
  image?: string;
}

export type SkillsProps = SkillData & {
  ref?: RefObject<HTMLDivElement | null>;

  classes?: SkillsClasses;
  /** Default right-left */
  direction?: "left-right" | "right-left";
};

export type { SkillIcon };

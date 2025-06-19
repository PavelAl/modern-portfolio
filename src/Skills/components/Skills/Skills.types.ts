import type { RefObject } from "react";

import type { SkillData, SkillIcon } from "../../types";

export interface SkillsClasses {
  root?: string;
  right?: string;
  left?: string;
}

export type SkillsProps = SkillData & {
  ref?: RefObject<HTMLDivElement | null>;

  classes?: SkillsClasses;

  direction: "left-right" | "right-left";
};

export type { SkillIcon };

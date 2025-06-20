import type { ComponentType } from "react";

export interface EducationClasses {
  root?: string;
  emblem?: string;
  info?: string;
}

export interface EducationProps {
  classes?: EducationClasses;
  emblem: ComponentType;
  universityTitle: string;
  degree: string;
  dates: string;
}

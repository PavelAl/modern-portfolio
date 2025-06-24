import type { ComponentType, RefObject } from "react";

export interface WorkExperienceClasses {
  root?: string;
  emblem?: string;
  marker?: string;
  description?: string;
}

export interface WorkExperienceProps {
  ref?: RefObject<HTMLDivElement | null>;
  classes?: WorkExperienceClasses;

  emblem: ComponentType;
  title: string;
  position: string;
  description: string;
}

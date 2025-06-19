import type { ComponentType } from "react";

export interface WorkExperienceClasses {
  root?: string;
  emblem?: string;
  marker?: string;
  description?: string;
}

export interface WorkExperienceProps {
  classes?: WorkExperienceClasses;

  emblem: ComponentType;
  title: string;
  position: string;
  description: string;
}

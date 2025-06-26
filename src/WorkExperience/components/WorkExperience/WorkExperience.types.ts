import type { RefObject } from "react";

export interface WorkExperienceClasses {
  root?: string;
  dates?: string;
  marker?: string;
  description?: string;
}

export interface WorkExperienceProps {
  ref?: RefObject<HTMLDivElement | null>;
  classes?: WorkExperienceClasses;

  dates: string;
  title: string;
  position: string;
  description: string;
}

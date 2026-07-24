import type { RefObject } from "react";

export interface MobileWorkExperienceClasses {
  root?: string;
  dates?: string;
  content?: string;
}

export interface MobileWorkExperienceProps {
  ref?: RefObject<HTMLDivElement | null>;
  classes?: MobileWorkExperienceClasses;

  dates: string;
  title: string;
  position: string;
  description: string;
}

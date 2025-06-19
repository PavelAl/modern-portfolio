import type { ComponentType } from "react";

export interface WorkExperienceData {
  title: string;
  position: string;
  description: string;
  emblem: ComponentType;
}

export interface WorkExperienceChartClasses {
  root?: string;
  timeline?: string;
  workExperience?: string;
}

export interface WorkExperienceChartProps {
  classes?: WorkExperienceChartClasses;
  data: WorkExperienceData[];
}

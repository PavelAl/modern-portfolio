export interface WorkExperienceData {
  title: string;
  position: string;
  description: string;
  dates: string;
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

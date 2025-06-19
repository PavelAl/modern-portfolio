import { SectionHeader } from "~/Layout";
import { WorkExperienceChart } from "~/WorkExperience";

import { workExperienceData } from "../constants";

export const WorkExperience = () => {
  return (
    <>
      <SectionHeader title="Work Experience" />

      <WorkExperienceChart data={workExperienceData} />
    </>
  );
};

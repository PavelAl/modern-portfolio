import type { FC } from "react";

import { SectionHeader } from "~/Layout";
import { WorkExperienceChart } from "~/WorkExperience";

import { workExperienceData } from "../constants";

type Props = {
  id?: string;
};

export const WorkExperience: FC<Props> = (props) => {
  const { id } = props;

  return (
    <>
      <SectionHeader id={id} title="Work Experience" />

      <WorkExperienceChart data={workExperienceData} />
    </>
  );
};

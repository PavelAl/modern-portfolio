import type { FC } from "react";

import { SectionHeader } from "~/Layout";
import { WorkExperienceChart } from "~/WorkExperience";

import { workExperienceData } from "../../constants";

import styles from "./WorkExperience.styles.module.scss";

type Props = {
  id?: string;
};

export const WorkExperience: FC<Props> = (props) => {
  const { id } = props;

  return (
    <div className={styles.workExperience}>
      <SectionHeader id={id} title="Work Experience" />

      <WorkExperienceChart data={workExperienceData} />
    </div>
  );
};

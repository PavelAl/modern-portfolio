import type { FC } from "react";
import classNames from "classnames";

import { AnimatedWorkExperience } from "../AnimatedWorkExperience";

import type { WorkExperienceChartProps } from "./WorkExperienceChart.types";

import classes from "./WorkExperienceChart.styles.module.scss";

export const WorkExperienceChart: FC<WorkExperienceChartProps> = (props) => {
  const { data, classes: propClasses } = props;

  return (
    <div className={classNames(propClasses?.root, classes.workExperienceChart)}>
      {data.map((jobData, index) => (
        <div
          key={`${jobData.title}-${index}`}
          className={propClasses?.workExperience}
        >
          <AnimatedWorkExperience
            dates={jobData.dates}
            title={jobData.title}
            position={jobData.position}
            description={jobData.description}
          />
        </div>
      ))}
    </div>
  );
};

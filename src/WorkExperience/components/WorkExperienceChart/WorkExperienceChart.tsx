import type { FC } from "react";
import classNames from "classnames";

import { useIsMobile } from "~/Library/WindowWidth";

import { AnimatedWorkExperience } from "../AnimatedWorkExperience";
import { MobileAnimatedWorkExperience } from "../MobileAnimatedWorkExperience";

import type { WorkExperienceChartProps } from "./WorkExperienceChart.types";

import classes from "./WorkExperienceChart.styles.module.scss";

export const WorkExperienceChart: FC<WorkExperienceChartProps> = (props) => {
  const { data, classes: propClasses } = props;

  const isMobile = useIsMobile();

  return (
    <div
      className={classNames(
        propClasses?.root,
        classes.workExperienceChart,
        isMobile && classes.mobile,
      )}
    >
      {data.map((jobData, index) =>
        isMobile ? (
          <MobileAnimatedWorkExperience
            key={`${jobData.title}-${index}`}
            index={index}
            dates={jobData.dates}
            title={jobData.title}
            position={jobData.position}
            description={jobData.description}
          />
        ) : (
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
        ),
      )}
    </div>
  );
};
